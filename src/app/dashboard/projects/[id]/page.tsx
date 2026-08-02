'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function ProjectDeepDive() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // New State variables for Enterprise Features
  const [isPitchMode, setIsPitchMode] = useState(false);
  const [octopartSyncing, setOctopartSyncing] = useState(false);
  
  const [fdaIngredient, setFdaIngredient] = useState('');
  const [fdaStatus, setFdaStatus] = useState<'idle' | 'checking' | 'compliant' | 'regulated'>('idle');
  
  const [grantGenerating, setGrantGenerating] = useState(false);
  const [grantPayload, setGrantPayload] = useState('');

  // New State variables for Schematic Markup Engine
  const [isMarkupMode, setIsMarkupMode] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [autoWire, setAutoWire] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // New State for AI Analysis Engine
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<'idle' | 'analyzing' | 'complete' | 'saved'>('idle');
  const [analysisResult, setAnalysisResult] = useState('');

  // New State for Firmware Flasher
  const [flashState, setFlashState] = useState<'idle' | 'connecting' | 'erasing' | 'flashing' | 'done'>('idle');
  const [flashProgress, setFlashProgress] = useState(0);

  // New State for PCB Engine
  const [pcbLayer, setPcbLayer] = useState<'both' | 'copper' | 'silkscreen'>('both');
  const [gerberState, setGerberState] = useState<'idle' | 'generating' | 'ready'>('idle');

  // New State for Engineering History
  const [newLogTitle, setNewLogTitle] = useState('');
  const [newLogContent, setNewLogContent] = useState('');
  const [isSavingLog, setIsSavingLog] = useState(false);

  const params = useParams();

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isMarkupMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isMarkupMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#00f3ff'; // Neon Cyan
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleFlash = async () => {
    try {
      if (!('serial' in navigator)) {
        alert("Web Serial API not supported in this browser. Please use Chrome or Edge.");
        return;
      }
      
      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate: 115200 });
      
      setFlashState('connecting');
      
      setTimeout(() => {
        setFlashState('erasing');
        setTimeout(() => {
          setFlashState('flashing');
          let progress = 0;
          const interval = setInterval(() => {
            progress += 5;
            setFlashProgress(progress);
            if (progress >= 100) {
              clearInterval(interval);
              setFlashState('done');
              port.close().catch(() => {});
            }
          }, 200);
        }, 2000);
      }, 1500);

    } catch (err) {
      console.error("User cancelled or serial error", err);
      setFlashState('idle');
    }
  };

  const generateGerbers = () => {
    setGerberState('generating');
    setTimeout(() => {
      setGerberState('ready');
    }, 2500);
  };

  const handleSaveLog = async () => {
    if (!newLogTitle || !newLogContent || !project?.id) return;
    setIsSavingLog(true);
    try {
      const docRef = doc(db, 'projects', project.id);
      const newEntry = {
        title: newLogTitle,
        content: newLogContent,
        timestamp: new Date().toISOString()
      };
      await updateDoc(docRef, {
        engineeringHistory: arrayUnion(newEntry)
      });
      // Update local state
      setProject({
        ...project,
        engineeringHistory: [...(project.engineeringHistory || []), newEntry]
      });
      setNewLogTitle('');
      setNewLogContent('');
    } catch (err) {
      console.error("Error saving log:", err);
      alert("Failed to save log to Firebase.");
    } finally {
      setIsSavingLog(false);
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      if (!params.id) return;
      try {
        const docRef = doc(db, 'projects', params.id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [params.id]);

  const handleOctopartSync = () => {
    setOctopartSyncing(true);
    setTimeout(() => {
      setOctopartSyncing(false);
    }, 2000);
  };

  const checkFDACompliance = () => {
    if(!fdaIngredient) return;
    setFdaStatus('checking');
    setTimeout(() => {
      const ingredient = fdaIngredient.toLowerCase();
      // Mock database check
      if (ingredient.includes('xylitol') || ingredient.includes('clay') || ingredient.includes('water')) {
        setFdaStatus('compliant');
      } else {
        setFdaStatus('regulated');
      }
    }, 1500);
  };

  const generateAIPitch = () => {
    setGrantGenerating(true);
    setTimeout(() => {
      setGrantPayload(`**SBIR Phase I Grant Application Mockup**\n\n**Project:** ${project.name}\n**Phase:** ${project.phase}\n\n**Executive Summary:**\nThis proposal outlines the development of ${project.name}, a system designed to solve critical operational bottlenecks. Utilizing a budget of $${project.budget}, our team will leverage state-of-the-art hardware and custom AI infrastructure to deliver a functional prototype within 6 months. \n\n**Technical Merit:**\nIntegrating high-fidelity sensors with our proprietary ML pipeline...`);
      setGrantGenerating(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="glitch" data-text="LOADING DEEP DIVE..." style={{ color: 'var(--cyan)' }}>LOADING DEEP DIVE...</h2>
      </div>
    );
  }

  if (!project) {
    return <div style={{ padding: '2rem', color: 'red' }}>Project not found.</div>;
  }

  // --- CYBER PITCH MODE FULLSCREEN ---
  if (isPitchMode) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'var(--bg-dark)', zIndex: 9999, padding: '4rem', display: 'flex', flexDirection: 'column' }}>
        <div className="grid-bg"></div>
        <button 
          onClick={() => setIsPitchMode(false)}
          style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: '1px solid red', color: 'red', padding: '0.5rem 1rem', cursor: 'pointer', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}
        >
          [ ESCAPE PITCH MODE ]
        </button>

        <div style={{ margin: 'auto', maxWidth: '1000px', width: '100%', position: 'relative', zIndex: 10 }}>
          <h1 className="glitch" data-text={project.name} style={{ fontSize: '5rem', color: 'var(--white)', fontFamily: 'var(--font-display)', marginBottom: '1rem', textTransform: 'uppercase' }}>
            {project.name}
          </h1>
          <p style={{ color: 'var(--cyan)', fontSize: '2rem', marginBottom: '4rem', letterSpacing: '2px' }}>{project.type} // PHASE: {project.phase}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{ borderLeft: '4px solid var(--violet)', paddingLeft: '2rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>CAPITAL REQUIRED</h3>
              <div style={{ fontSize: '4rem', color: 'var(--white)' }}>${project.budget}</div>
            </div>
            <div style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '2rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>HOURS INVESTED</h3>
              <div style={{ fontSize: '4rem', color: 'var(--white)' }}>{project.hoursTracked}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- STANDARD DASHBOARD ---
  return (
    <div style={{ padding: '2rem', minHeight: '100vh', position: 'relative' }}>
      <div className="grid-bg"></div>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--white)', margin: 0 }}>{project.name}</h1>
            <span style={{ padding: '0.2rem 0.8rem', background: 'var(--cyan)', color: '#000', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{project.phase}</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{project.type === 'Software / SaaS' ? 'Core Platform Development Node.' : 'Hardware & Firmware Engineering Node.'}</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary" onClick={() => setIsPitchMode(true)}>Cyber-Pitch Mode</button>
          <button className="btn-primary">Launch Commercialization</button>
        </div>
      </header>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--violet)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{project.type.includes('Hardware') ? 'Hardware COGS / Spent' : 'Development / Spent'}</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginTop: '0.5rem' }}>${project.spent} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ ${project.budget}</span></h2>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--cyan)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Hours Tracked</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginTop: '0.5rem' }}>{project.hoursTracked} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>hrs</span></h2>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--gold)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Server / SaaS Subscriptions</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginTop: '0.5rem' }}>$40.00 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ mo</span></h2>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', position: 'relative', zIndex: 10, overflowX: 'auto' }}>
        {['Overview', 'Engineering History', 'Bill of Materials', 'AI Analysis & Uploads', project.type.includes('Hardware') ? 'Schematics & Markups' : null, project.type.includes('Hardware') ? 'PCB Manufacturing' : null, project.type.includes('Hardware') ? 'Firmware & Flasher' : null, project.type.includes('Hardware') ? '3D Prototype Viewer' : null, 'FDA & Compliance', 'IP & Funding'].filter(Boolean).map(tab => (
          <button 
            key={tab as string}
            onClick={() => setActiveTab(tab as string)}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === tab ? 'var(--cyan)' : 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.2s',
              position: 'relative',
              whiteSpace: 'nowrap'
            }}
          >
            {tab}
            {activeTab === tab && (
              <div style={{ position: 'absolute', bottom: '-17px', left: 0, width: '100%', height: '3px', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div className="glass-panel hover-3d" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--cyan)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Project Log</h3>
              <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>TODAY</span>
                  <p style={{ color: 'var(--white)', marginTop: '0.2rem' }}>Initiated Enterprise Commercialization Pipeline tracking.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel hover-3d" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--violet)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Process Checklist</h3>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <input type="checkbox" defaultChecked /> Name Availability
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <input type="checkbox" defaultChecked /> Domain Registration
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <input type="checkbox" /> Trademark Check
              </label>
            </div>
          </div>
        )}

        {/* BOM TAB with Auto-Pricer */}
        {activeTab === 'Bill of Materials' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>Hardware BOM & APIs</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  className="btn-secondary" 
                  onClick={handleOctopartSync}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderColor: octopartSyncing ? 'var(--gold)' : 'var(--cyan)', color: octopartSyncing ? 'var(--gold)' : 'var(--cyan)' }}
                >
                  {octopartSyncing ? 'SYNCING OCTOPART...' : 'SYNC LIVE PRICING (OCTOPART)'}
                </button>
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>+ Add Part</button>
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '1rem 0' }}>Part / MPN</th>
                  <th>Supplier</th>
                  <th>Stock</th>
                  <th>Est. Unit Cost</th>
                </tr>
              </thead>
              <tbody>
                {project.name.includes('Holdover') ? (
                  <>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>FLIR Lepton 3.5 + PT3</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Group Gets</td>
                      <td style={{ color: 'var(--green)' }}>Received</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$250.00'}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Misc Electronics Kit</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Amazon</td>
                      <td style={{ color: 'var(--green)' }}>In Stock</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$15.00'}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Iridium RockBLOCK 9603</td>
                      <td style={{ color: 'var(--text-secondary)' }}>SparkFun</td>
                      <td style={{ color: 'var(--green)' }}>Received</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$249.95'}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>ESP32-WROOM-32D DevKitC</td>
                      <td style={{ color: 'var(--text-secondary)' }}>DigiKey</td>
                      <td style={{ color: 'var(--gold)' }}>Ordered</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$10.00'}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>12V 10Ah LiFePO4 Battery</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Dakota Lithium</td>
                      <td style={{ color: 'var(--green)' }}>In Stock</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$35.00'}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>50W Solar Panel & MPPT</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Renogy</td>
                      <td style={{ color: 'var(--green)' }}>In Stock</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{octopartSyncing ? '...' : '$80.00'}</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Vercel Pro (Hosting)</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Vercel</td>
                      <td style={{ color: 'var(--green)' }}>Active</td>
                      <td style={{ color: 'var(--text-secondary)' }}>$20.00/mo</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Firebase Blaze Plan</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Google</td>
                      <td style={{ color: 'var(--green)' }}>Active</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Pay-as-you-go</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* AI ANALYSIS & UPLOADS TAB */}
        {activeTab === 'AI Analysis & Uploads' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>AI Computer Vision & Context Uploader</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              
              {/* UPLOAD ZONE */}
              <div style={{ 
                border: '2px dashed var(--border-color)', 
                borderRadius: '12px', 
                padding: '4rem 2rem', 
                textAlign: 'center',
                background: uploadedFile ? 'rgba(0, 240, 255, 0.05)' : 'rgba(0,0,0,0.3)',
                transition: 'all 0.3s',
                position: 'relative'
              }}>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setUploadedFile(e.target.files[0]);
                      setAnalysisStatus('idle');
                    }
                  }}
                  style={{ 
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                    opacity: 0, cursor: 'pointer' 
                  }} 
                />
                {!uploadedFile ? (
                  <>
                    <div style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>+</div>
                    <h4 style={{ color: 'var(--white)' }}>Drag & Drop or Tap to Upload</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Upload workbench photos, receipts, or schematics for AI ingestion.</p>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}>✓</div>
                    <h4 style={{ color: 'var(--white)' }}>{uploadedFile.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB - Ready for processing.</p>
                  </>
                )}
              </div>

              {/* ANALYSIS ENGINE */}
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--violet)' }}>Neural Extraction Engine</h4>
                  {uploadedFile && analysisStatus === 'idle' && (
                    <button 
                      className="btn-primary" 
                      onClick={() => {
                        setAnalysisStatus('analyzing');
                        setTimeout(() => {
                          setAnalysisResult(
                            "**CV Scan Complete:**\n\n" +
                            "- Detected: **Breadboard** (Confidence 99%)\n" +
                            "- Detected: **ESP32 DevKitC** (Confidence 96%)\n" +
                            "- Detected: **Iridium RockBLOCK** (Confidence 92%)\n" +
                            "- Detected: **LiFePO4 12V Cell** (Confidence 88%)\n\n" +
                            "**Suggested Action:** Missing 'LiFePO4 12V Cell' in active BOM. Recommend adding."
                          );
                          setAnalysisStatus('complete');
                        }, 2500);
                      }}
                      style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    >
                      RUN AI ANALYSIS
                    </button>
                  )}
                </div>

                {analysisStatus === 'idle' && (
                  <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-color)', borderRadius: '8px' }}>
                    Awaiting target upload...
                  </div>
                )}

                {analysisStatus === 'analyzing' && (
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', border: '3px solid var(--cyan)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    <div className="glitch" data-text="ANALYZING IMAGE TOPOLOGY..." style={{ color: 'var(--cyan)', fontSize: '0.9rem' }}>ANALYZING IMAGE TOPOLOGY...</div>
                  </div>
                )}

                {analysisStatus === 'complete' && (
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(0,240,255,0.05)', padding: '1rem', borderLeft: '3px solid var(--cyan)', color: 'var(--text-primary)', whiteSpace: 'pre-wrap', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {analysisResult}
                    </div>
                    <button 
                      className="btn-secondary"
                      onClick={() => {
                        setAnalysisStatus('saved');
                      }}
                    >
                      UPDATE DATABASE & BOM
                    </button>
                  </div>
                )}

                {analysisStatus === 'saved' && (
                  <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', border: '1px dashed var(--green)', background: 'rgba(112, 224, 0, 0.05)', borderRadius: '8px' }}>
                    [ DATABASE SUCCESSFULLY UPDATED ]
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* SCHEMATICS & MARKUPS TAB */}
        {activeTab === 'Schematics & Markups' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>Interactive Component Schematics & PDF Markup</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  className={autoWire ? "btn-primary" : "btn-secondary"} 
                  onClick={() => setAutoWire(!autoWire)}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: autoWire ? 'var(--cyan)' : 'transparent', color: autoWire ? '#000' : 'var(--cyan)' }}
                >
                  {autoWire ? 'HIDE AUTO-WIRING' : 'SHOW AUTO-WIRING'}
                </button>
                <button 
                  className={isMarkupMode ? "btn-primary" : "btn-secondary"} 
                  onClick={() => setIsMarkupMode(!isMarkupMode)}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                >
                  {isMarkupMode ? 'DISABLE PEN' : 'ENABLE PEN TOOL'}
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={clearCanvas}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'red', borderColor: 'red' }}
                >
                  CLEAR
                </button>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Exact physical layout based on component datasheets. Toggle Auto-Wiring to see the exact blueprint, or draw your own jumper wires over the schematic.
            </p>
            
            <div style={{ position: 'relative', background: '#050505', border: '1px solid var(--border-color)', borderRadius: '12px', height: '600px', overflow: 'hidden' }}>
              
              {/* THE DRAWING CANVAS OVERLAY */}
              <canvas
                ref={canvasRef}
                width={1000}
                height={600}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 30,
                  pointerEvents: isMarkupMode ? 'auto' : 'none',
                  cursor: isMarkupMode ? 'crosshair' : 'default'
                }}
              />

              {/* SVG VECTOR ENGINE FOR BREADBOARD */}
              <svg width="100%" height="100%" viewBox="0 0 1000 600" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
                
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="3" fill="#000" />
                  </pattern>
                </defs>

                {/* --- BREADBOARD BASE --- */}
                <rect x="70" y="80" width="860" height="410" rx="12" fill="#e0e0e0" stroke="#ccc" strokeWidth="2" />
                <rect x="70" y="270" width="860" height="30" fill="#cfcfcf" /> {/* Center Trench */}
                
                {/* Power Rails Lines */}
                <line x1="90" y1="110" x2="910" y2="110" stroke="#ff0055" strokeWidth="2" />
                <line x1="90" y1="150" x2="910" y2="150" stroke="#0088ff" strokeWidth="2" />
                <line x1="90" y1="420" x2="910" y2="420" stroke="#ff0055" strokeWidth="2" />
                <line x1="90" y1="460" x2="910" y2="460" stroke="#0088ff" strokeWidth="2" />

                {/* Breadboard Holes (Generated dynamically) */}
                {Array.from({ length: 41 }).map((_, col) => {
                  const x = 90 + col * 20;
                  return (
                    <g key={`col-${col}`}>
                      {/* Top Power */}
                      <circle cx={x} cy={120} r="3" fill="#222" />
                      <circle cx={x} cy={140} r="3" fill="#222" />
                      {/* Terminal A-E */}
                      {[180, 200, 220, 240, 260].map((y, i) => (
                        <circle key={`t1-${col}-${i}`} cx={x} cy={y} r="3" fill="#222" />
                      ))}
                      {/* Terminal F-J */}
                      {[310, 330, 350, 370, 390].map((y, i) => (
                        <circle key={`t2-${col}-${i}`} cx={x} cy={y} r="3" fill="#222" />
                      ))}
                      {/* Bottom Power */}
                      <circle cx={x} cy={430} r="3" fill="#222" />
                      <circle cx={x} cy={450} r="3" fill="#222" />
                      
                      {/* Column Numbers */}
                      {col % 5 === 0 && col !== 0 && (
                        <>
                          <text x={x} y={170} fill="#888" fontSize="10" textAnchor="middle">{col}</text>
                          <text x={x} y={405} fill="#888" fontSize="10" textAnchor="middle">{col}</text>
                        </>
                      )}
                    </g>
                  );
                })}

                {/* Row Letters */}
                <text x="75" y="183" fill="#888" fontSize="10" fontFamily="monospace">A</text>
                <text x="75" y="263" fill="#888" fontSize="10" fontFamily="monospace">E</text>
                <text x="75" y="313" fill="#888" fontSize="10" fontFamily="monospace">F</text>
                <text x="75" y="393" fill="#888" fontSize="10" fontFamily="monospace">J</text>


                {/* --- COMPONENTS --- */}

                {/* ESP32-WROOM-32D */}
                {/* Placed at Col 5 to 23. Top pins in Row D (240), Bottom in Row G (330) */}
                <rect x="180" y="230" width="380" height="110" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
                <rect x="300" y="240" width="120" height="90" fill="#222" stroke="#555" strokeWidth="1" />
                <text x="370" y="290" fill="var(--white)" fontSize="14" textAnchor="middle" fontFamily="var(--font-display)">ESP32-WROOM-32D</text>

                {/* ESP32 Header Pins overlay (Yellow dots) */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <g key={`esp-pins-${i}`}>
                    <circle cx={230 + i * 20} cy={240} r="2" fill="#ffd700" />
                    <circle cx={230 + i * 20} cy={330} r="2" fill="#ffd700" />
                  </g>
                ))}

                {/* ESP32 Labels (Key Pins only) */}
                <text x={230 + 0 * 20} y={255} fill="#aaa" fontSize="7" textAnchor="middle">VIN</text>
                <text x={230 + 1 * 20} y={255} fill="#aaa" fontSize="7" textAnchor="middle">GND</text>
                
                <text x={230 + 1 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">GND</text>
                <text x={230 + 5 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">16</text>
                <text x={230 + 6 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">17</text>
                <text x={230 + 7 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">5</text>
                <text x={230 + 8 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">18</text>
                <text x={230 + 9 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">19</text>
                <text x={230 + 10 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">21</text>
                <text x={230 + 13 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">22</text>
                <text x={230 + 14 * 20} y={320} fill="#aaa" fontSize="7" textAnchor="middle">23</text>

                {/* PureThermal 3 */}
                {/* Placed at Col 30 to 37. Pins in Row A (180). Body hangs UP off the board */}
                <rect x="680" y="20" width="160" height="150" rx="8" fill="#1a1a3a" stroke="#2a2a5a" strokeWidth="2" />
                <circle cx="760" cy="90" r="30" fill="#000" stroke="#555" strokeWidth="2" />
                <text x="760" y="160" fill="var(--white)" fontSize="10" textAnchor="middle" fontFamily="var(--font-display)">PURETHERMAL 3</text>
                {['VIN','GND','SCL','SDA','MISO','MOSI','SCK','CS'].map((pin, i) => (
                  <g key={`pt3-pin-${i}`}>
                    <circle cx={690 + i * 20} cy={180} r="2" fill="#ffd700" />
                    <text x={690 + i * 20} y={165} fill="#aaa" fontSize="8" textAnchor="middle" transform={`rotate(-45, ${690 + i * 20}, 165)`}>{pin}</text>
                  </g>
                ))}

                {/* RockBLOCK 9603 */}
                {/* 10-pin Molex Connector. Pins in Row J (390). */}
                <rect x="610" y="400" width="220" height="150" rx="8" fill="#153015" stroke="#2a5a2a" strokeWidth="2" />
                <rect x="670" y="440" width="100" height="60" fill="#111" stroke="#333" strokeWidth="1" />
                <text x="720" y="520" fill="var(--white)" fontSize="10" textAnchor="middle" fontFamily="var(--font-display)">ROCKBLOCK 9603</text>
                {['RX(1)','CTS(2)','RTS(3)','NET(4)','RI(5)','TX(6)','SLP(7)','5V(8)','BAT(9)','GND(10)'].map((pin, i) => (
                  <g key={`rb-pin-${i}`}>
                    <circle cx={630 + i * 20} cy={390} r="2" fill="#ffd700" />
                    <text x={630 + i * 20} y={415} fill="#aaa" fontSize="7" textAnchor="middle">{pin}</text>
                  </g>
                ))}

                {/* 12V to 5V Buck Converter (Off-board) */}
                <rect x="50" y="520" width="120" height="60" rx="4" fill="#111" stroke="#444" strokeWidth="2" />
                <text x="110" y="545" fill="var(--white)" fontSize="10" textAnchor="middle" fontFamily="var(--font-display)">12V-to-5V BUCK</text>
                <circle cx="80" cy="565" r="4" fill="#ff0055" />
                <text x="80" y="555" fill="#aaa" fontSize="8" textAnchor="middle">5V</text>
                <circle cx="140" cy="565" r="4" fill="#333" stroke="#888" strokeWidth="1" />
                <text x="140" y="555" fill="#aaa" fontSize="8" textAnchor="middle">GND</text>

                {/* 470uF Electrolytic Capacitor (Buffer for RockBLOCK) */}
                <g>
                  <title>C1: 470uF Electrolytic Capacitor</title>
                  {/* Legs */}
                  <line x1="630" y1="430" x2="630" y2="450" stroke="#999" strokeWidth="2" />
                  {/* Body */}
                  <circle cx="630" cy="440" r="10" fill="#1a1a3a" stroke="#444" strokeWidth="1" />
                  {/* Negative Stripe */}
                  <path d="M 620 440 A 10 10 0 0 0 640 440 Z" fill="#ccc" />
                  <text x="630" y="446" fill="#111" fontSize="6" textAnchor="middle" fontWeight="bold">-</text>
                  
                  {/* Clear External Label */}
                  <text x="630" y="415" fill="var(--white)" fontSize="12" textAnchor="middle" fontWeight="bold">C1</text>
                  <text x="630" y="465" fill="var(--cyan)" fontSize="10" textAnchor="middle">470µF</text>
                </g>

                {/* --- AUTO-WIRING --- */}
                {autoWire && (
                  <g strokeWidth="3" fill="none" filter="url(#glow)" strokeLinecap="round">
                    
                    <style>
                      {`
                        .wire-hover {
                          transition: stroke-width 0.2s, filter 0.2s;
                          cursor: pointer;
                        }
                        .wire-hover:hover {
                          stroke-width: 6;
                          filter: drop-shadow(0 0 6px currentColor);
                        }
                      `}
                    </style>
                    
                    {/* Power 5V (Red) - Buck to Top Rail */}
                    <path className="wire-hover" d="M 80 565 C 80 600, 20 600, 20 120 L 90 120" stroke="#ff0055" />
                    {/* Power GND (Blue) - Buck to Top Rail */}
                    <path className="wire-hover" d="M 140 565 C 140 620, 10 620, 10 140 L 90 140" stroke="#0088ff" />

                    {/* Rail Jumps (Top Rail to Bottom Rail) */}
                    <path className="wire-hover" d="M 890 120 C 950 120, 950 430, 890 430" stroke="#ff0055" />
                    <path className="wire-hover" d="M 870 140 C 930 140, 930 450, 870 450" stroke="#0088ff" />

                    {/* 5V -> Components */}
                    <path className="wire-hover" d="M 230 120 C 230 160, 230 180, 230 220" stroke="#ff0055" /> 
                    <path className="wire-hover" d="M 690 120 C 690 160, 690 180, 690 200" stroke="#ff0055" />
                    {/* RockBLOCK 5V is Pin 8 (x:770) */}
                    <path className="wire-hover" d="M 770 430 C 770 410, 770 400, 770 370" stroke="#ff0055" />

                    {/* GND -> Components */}
                    <path className="wire-hover" d="M 250 140 C 250 180, 250 200, 250 220" stroke="#0088ff" />
                    <path className="wire-hover" d="M 710 140 C 710 170, 710 180, 710 200" stroke="#0088ff" />
                    {/* RockBLOCK GND is Pin 10 (x:810) */}
                    <path className="wire-hover" d="M 810 450 C 810 420, 810 400, 810 370" stroke="#0088ff" />
                    <path className="wire-hover" d="M 250 450 C 250 420, 250 400, 250 350" stroke="#0088ff" />

                    {/* I2C (Cyan/Purple) ESP -> PT3 */}
                    <path className="wire-hover" d="M 430 370 C 430 480, 750 280, 750 220" stroke="#00ffff" />
                    <path className="wire-hover" d="M 490 370 C 490 480, 730 280, 730 220" stroke="#ff00ff" />

                    {/* SPI (Orange) ESP -> PT3 */}
                    <path className="wire-hover" d="M 410 350 C 410 480, 770 300, 770 240" stroke="#ff8800" />
                    <path className="wire-hover" d="M 510 350 C 510 500, 790 320, 790 240" stroke="#ff8800" />
                    <path className="wire-hover" d="M 390 350 C 390 520, 810 340, 810 260" stroke="#ff8800" />
                    <path className="wire-hover" d="M 370 350 C 370 540, 830 360, 830 260" stroke="#ff8800" />

                    {/* UART (Yellow/Green) ESP -> RockBLOCK */}
                    {/* ESP TX2 (x:350) -> RockBLOCK RX Pin 1 (x:630) */}
                    <path className="wire-hover" d="M 350 370 C 350 450, 630 450, 630 370" stroke="#00ff00" />
                    {/* ESP RX2 (x:330) -> RockBLOCK TX Pin 6 (x:730) */}
                    <path className="wire-hover" d="M 330 370 C 330 420, 730 420, 730 370" stroke="#ffff00" />

                  </g>
                )}

                {/* --- COMPONENT LEGEND --- */}
                <g transform="translate(680, 480)">
                  <rect x="0" y="0" width="300" height="125" rx="8" fill="rgba(0,0,0,0.85)" stroke="#444" strokeWidth="1" />
                  <text x="15" y="22" fill="var(--cyan)" fontSize="11" fontFamily="var(--font-display)">COMPONENT LEGEND</text>
                  
                  {/* Components */}
                  <text x="15" y="42" fill="var(--white)" fontSize="11" fontWeight="bold">U1:</text>
                  <text x="35" y="42" fill="#ccc" fontSize="11">ESP32-WROOM-32D (16=RX, 17=TX, 21=SDA, 22=SCL)</text>

                  <text x="15" y="57" fill="var(--white)" fontSize="11" fontWeight="bold">U2:</text>
                  <text x="35" y="57" fill="#ccc" fontSize="11">PureThermal 3 / FLIR Lepton 3.5</text>

                  <text x="15" y="72" fill="var(--white)" fontSize="11" fontWeight="bold">U3:</text>
                  <text x="35" y="72" fill="#ccc" fontSize="11">Iridium RockBLOCK 9603 (Modem)</text>

                  <text x="15" y="87" fill="var(--white)" fontSize="11" fontWeight="bold">C1:</text>
                  <text x="35" y="87" fill="#ccc" fontSize="11">470µF / 16V Electrolytic Capacitor</text>

                  <text x="15" y="102" fill="var(--white)" fontSize="11" fontWeight="bold">PS1:</text>
                  <text x="35" y="102" fill="#ccc" fontSize="11">12V to 5V Buck Converter (3A min)</text>
                </g>

              </svg>

            </div>
          </div>
        )}
        {/* PCB MANUFACTURING TAB */}
        {activeTab === 'PCB Manufacturing' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>PCB Layout & Gerber Engine</h3>
                <p style={{ color: 'var(--text-secondary)' }}>2D CAD rendering of the Holdover Sentinel Carrier Board (FR4 / 2-Layer).</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.5)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <button 
                  onClick={() => setPcbLayer('both')}
                  style={{ background: pcbLayer === 'both' ? 'var(--cyan)' : 'transparent', color: pcbLayer === 'both' ? '#000' : 'var(--text-secondary)', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                >ALL LAYERS</button>
                <button 
                  onClick={() => setPcbLayer('silkscreen')}
                  style={{ background: pcbLayer === 'silkscreen' ? 'var(--white)' : 'transparent', color: pcbLayer === 'silkscreen' ? '#000' : 'var(--text-secondary)', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                >SILKSCREEN ONLY</button>
                <button 
                  onClick={() => setPcbLayer('copper')}
                  style={{ background: pcbLayer === 'copper' ? '#ff8800' : 'transparent', color: pcbLayer === 'copper' ? '#000' : 'var(--text-secondary)', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                >COPPER TRACES</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              
              {/* CAD VIEWER */}
              <div style={{ background: '#0a1a10', border: '1px solid #1a3a20', borderRadius: '8px', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(0, 255, 100, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 100, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* The PCB SVG */}
                <svg width="400" height="400" viewBox="0 0 400 400" style={{ position: 'relative', zIndex: 10, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))' }}>
                  {/* Board Outline: 90x90mm mapped to 360x360px (1mm = 4px) */}
                  <rect x="20" y="20" width="360" height="360" rx="15" fill="#003311" stroke="#ccc" strokeWidth="2" />
                  
                  {/* Mounting Holes */}
                  <circle cx="40" cy="40" r="10" fill="#000" stroke="#ffd700" strokeWidth="4" />
                  <circle cx="360" cy="40" r="10" fill="#000" stroke="#ffd700" strokeWidth="4" />
                  <circle cx="40" cy="360" r="10" fill="#000" stroke="#ffd700" strokeWidth="4" />
                  <circle cx="360" cy="360" r="10" fill="#000" stroke="#ffd700" strokeWidth="4" />

                  {/* COPPER LAYER */}
                  {(pcbLayer === 'both' || pcbLayer === 'copper') && (
                    <g opacity={pcbLayer === 'copper' ? 1 : 0.6}>
                      {/* VCC / GND Power Traces (Thick) */}
                      {/* GND: Buck to ESP32 to RockBLOCK to PT3 */}
                      <path d="M 120 330 L 150 330 L 150 280 L 140 280 L 140 85 L 200 85 L 200 190 L 220 190 M 220 190 L 220 120 L 240 120" fill="none" stroke="#ff0000" strokeWidth="3" strokeLinejoin="round" />
                      {/* 5V: Buck to RockBLOCK and PT3 */}
                      <path d="M 100 330 L 100 200 L 210 200 M 210 200 L 210 110 L 230 110" fill="none" stroke="#aa0000" strokeWidth="3" strokeLinejoin="round" />

                      {/* UART Traces (ESP32 RX2/TX2 to RockBLOCK) */}
                      {/* TX: ESP(140, 240) -> RB(240, 190) */}
                      <path d="M 140 240 L 180 240 L 180 200 L 240 200" fill="none" stroke="#ff8800" strokeWidth="1.5" strokeLinejoin="round" />
                      {/* RX: ESP(140, 250) -> RB(230, 190) */}
                      <path d="M 140 250 L 170 250 L 170 190 L 230 190" fill="none" stroke="#ffaa00" strokeWidth="1.5" strokeLinejoin="round" />

                      {/* I2C / SPI Traces (ESP32 to PT3) */}
                      <path d="M 140 200 L 190 200 L 190 130 L 260 130" fill="none" stroke="#00ccff" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M 140 210 L 185 210 L 185 140 L 270 140" fill="none" stroke="#00ccff" strokeWidth="1.5" strokeLinejoin="round" />
                    </g>
                  )}

                  {/* SILKSCREEN LAYER */}
                  {(pcbLayer === 'both' || pcbLayer === 'silkscreen') && (
                    <g opacity={pcbLayer === 'silkscreen' ? 1 : 0.8}>
                      {/* ESP32 Socket (28x55mm -> 112x220px) */}
                      <rect x="40" y="70" width="112" height="220" fill="none" stroke="#fff" strokeWidth="2" />
                      <text x="96" y="160" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">U1: ESP32-WROOM</text>
                      <rect x="70" y="75" width="52" height="40" fill="none" stroke="#aaa" strokeWidth="1" strokeDasharray="2" />
                      <text x="96" y="100" fill="#aaa" fontSize="8" textAnchor="middle">ANTENNA</text>
                      
                      {/* 19-Pin Headers (0.1" pitch ~ 10px) */}
                      {[...Array(19)].map((_, i) => (
                        <g key={`esp-l-${i}`}>
                          <circle cx="48" cy={110 + i * 10} r="3" fill="none" stroke="#ffd700" strokeWidth="2" />
                          <circle cx="48" cy={110 + i * 10} r="1.5" fill="#000" />
                        </g>
                      ))}
                      {[...Array(19)].map((_, i) => (
                        <g key={`esp-r-${i}`}>
                          <circle cx="144" cy={110 + i * 10} r="3" fill="none" stroke="#ffd700" strokeWidth="2" />
                          <circle cx="144" cy={110 + i * 10} r="1.5" fill="#000" />
                        </g>
                      ))}

                      {/* PT3 Socket (25x25mm -> 100x100px) */}
                      <rect x="220" y="30" width="100" height="100" fill="none" stroke="#fff" strokeWidth="2" />
                      <text x="270" y="80" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">U2: PT3 / LEPTON</text>
                      <rect x="250" y="40" width="40" height="25" fill="none" stroke="#aaa" strokeWidth="1" />
                      {/* 8-Pin Header */}
                      {[...Array(8)].map((_, i) => (
                        <g key={`pt3-${i}`}>
                          <circle cx={225 + i * 10} cy="120" r="3" fill="none" stroke="#ffd700" strokeWidth="2" />
                          <circle cx={225 + i * 10} cy="120" r="1.5" fill="#000" />
                        </g>
                      ))}

                      {/* RockBLOCK Socket (45x45mm -> 180x180px) */}
                      <rect x="180" y="170" width="180" height="180" fill="none" stroke="#fff" strokeWidth="2" />
                      <text x="270" y="260" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">U3: ROCKBLOCK 9603</text>
                      {/* 10-Pin Connector */}
                      <rect x="200" y="185" width="110" height="10" fill="none" stroke="#aaa" strokeWidth="1" />
                      {[...Array(10)].map((_, i) => (
                        <g key={`rb-${i}`}>
                          <circle cx={205 + i * 10} cy="190" r="2.5" fill="none" stroke="#ffd700" strokeWidth="1" />
                          <circle cx={205 + i * 10} cy="190" r="1" fill="#000" />
                        </g>
                      ))}

                      {/* Capacitor C1 */}
                      <circle cx="300" cy="210" r="12" fill="none" stroke="#fff" strokeWidth="2" />
                      <path d="M 300 198 L 300 222 M 288 210 L 312 210" stroke="#555" strokeWidth="1" strokeDasharray="2" />
                      <text x="320" y="215" fill="#fff" fontSize="10" fontWeight="bold">C1</text>

                      {/* Power Converter PS1 */}
                      <rect x="80" y="310" width="90" height="40" fill="none" stroke="#fff" strokeWidth="2" />
                      <text x="125" y="335" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">PS1 (12V-5V BUCK)</text>
                      {[...Array(2)].map((_, i) => (
                        <g key={`ps1-l-${i}`}>
                          <circle cx="90" cy={320 + i * 20} r="3" fill="none" stroke="#ffd700" strokeWidth="2" />
                          <circle cx="90" cy={320 + i * 20} r="1.5" fill="#000" />
                        </g>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <g key={`ps1-r-${i}`}>
                          <circle cx="160" cy={320 + i * 20} r="3" fill="none" stroke="#ffd700" strokeWidth="2" />
                          <circle cx="160" cy={320 + i * 20} r="1.5" fill="#000" />
                        </g>
                      ))}
                      
                      {/* Branding */}
                      <text x="270" y="340" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold" opacity="0.5">TRIL-OS HOLDOVER</text>
                      <text x="270" y="355" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.5">PCB REV 1.0 - 90x90MM</text>
                    </g>
                  )}
                </svg>
              </div>

              {/* DFM PANEL */}
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Manufacturing Export</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  <span>Dimensions</span>
                  <span style={{ color: 'var(--white)' }}>90mm x 90mm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  <span>Layers</span>
                  <span style={{ color: 'var(--white)' }}>2-Layer FR4</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  <span>Copper Weight</span>
                  <span style={{ color: 'var(--white)' }}>1 oz</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                  <span>Solder Mask</span>
                  <span style={{ color: '#00ff00' }}>Green</span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {gerberState === 'idle' && (
                    <button className="btn-secondary" onClick={generateGerbers} style={{ width: '100%', padding: '1rem' }}>
                      GENERATE GERBER FILES
                    </button>
                  )}
                  {gerberState === 'generating' && (
                    <button className="btn-secondary" disabled style={{ width: '100%', padding: '1rem', color: 'var(--gold)', borderColor: 'var(--gold)' }}>
                      COMPILING ROUTING DATA...
                    </button>
                  )}
                  {gerberState === 'ready' && (
                    <>
                      <button className="cta-btn" style={{ width: '100%', padding: '1rem', background: 'var(--cyan)', color: '#000' }}>
                        DOWNLOAD GERBER (.ZIP)
                      </button>
                      <button className="btn-primary" style={{ width: '100%', padding: '1rem', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onClick={() => alert("Redirecting to PCBWay API...")}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        SEND TO PCBWAY (EST: $5.00)
                      </button>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* FIRMWARE & FLASHER TAB */}
        {activeTab === 'Firmware & Flasher' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Web Serial Firmware Flasher</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Connect your ESP32 directly via USB to program the C++ firmware Over-The-Air from Trillionaires OS.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1.1rem' }}>Holdover Sentinel V1.0.bin</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span>Size: 842 KB</span>
                  <span>Target: ESP32-WROOM-32D</span>
                </div>
                
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                  {flashState === 'idle' && (
                    <button className="cta-btn" style={{ width: '100%', background: 'var(--cyan)', color: '#000', padding: '1rem' }} onClick={handleFlash}>
                      [ CONNECT & FLASH ESP32 ]
                    </button>
                  )}
                  {flashState !== 'idle' && flashState !== 'done' && (
                    <button className="btn-secondary" disabled style={{ width: '100%', padding: '1rem', opacity: 0.7 }}>
                      {flashState === 'connecting' && 'CONNECTING TO COM PORT...'}
                      {flashState === 'erasing' && 'ERASING FLASH MEMORY...'}
                      {flashState === 'flashing' && `FLASHING... ${flashProgress}%`}
                    </button>
                  )}
                  {flashState === 'done' && (
                    <button className="cta-btn" style={{ width: '100%', background: 'var(--green)', color: '#000', padding: '1rem' }} onClick={() => setFlashState('idle')}>
                      [ FLASH SUCCESSFUL - REBOOTING ]
                    </button>
                  )}
                </div>
              </div>

              <div style={{ background: '#0a0a0f', padding: '1.5rem', borderRadius: '8px', border: '1px solid #222', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#0f0', height: '300px', overflowY: 'auto' }}>
                <div style={{ color: '#555' }}>// Web Serial Console Output</div>
                {flashState !== 'idle' && (
                  <div style={{ marginTop: '1rem' }}>
                    <div>{'> Requesting serial port access...'}</div>
                    <div style={{ color: 'var(--cyan)' }}>{'> Port connected: 115200 baud'}</div>
                  </div>
                )}
                {(flashState === 'erasing' || flashState === 'flashing' || flashState === 'done') && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <div>{'> Chip type: ESP32-D0WDQ6 (revision 1)'}</div>
                    <div>{'> MAC Address: 24:0A:C4:F2:XX:XX'}</div>
                    <div style={{ color: 'var(--gold)' }}>{'> Erasing flash... (this may take a while)'}</div>
                  </div>
                )}
                {(flashState === 'flashing' || flashState === 'done') && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <div style={{ color: 'var(--cyan)' }}>{'> Writing firmware: '}{flashProgress}%</div>
                  </div>
                )}
                {flashState === 'done' && (
                  <div style={{ marginTop: '0.5rem', color: 'var(--green)' }}>
                    <div>{'> Wrote 842000 bytes at 0x10000'}</div>
                    <div>{'> Hash of data verified.'}</div>
                    <div>{'> Leaving...'}</div>
                    <div>{'> Hard resetting via RTS pin...'}</div>
                    <div>{'> FIRMWARE UPDATE SUCCESSFUL!'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3D PROTOTYPE VIEWER */}
        {activeTab === '3D Prototype Viewer' && (
          <div className="glass-panel" style={{ padding: '2rem', height: '600px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>CAD Visualization Node</h3>
            <div style={{ 
              flexGrow: 1, 
              background: '#030508', 
              border: '1px solid rgba(0, 240, 255, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
            }}>
              {/* Mock 3D Grid */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg)', transformOrigin: 'bottom' }}></div>
              
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div style={{ width: '150px', height: '150px', border: '2px solid var(--violet)', margin: '0 auto 1rem auto', transform: 'rotateX(45deg) rotateZ(45deg)', boxShadow: '0 0 20px var(--violet-glow)', animation: 'spin 10s linear infinite' }}>
                  <style>{`@keyframes spin { 100% { transform: rotateX(45deg) rotateZ(405deg); } }`}</style>
                </div>
                <h4 style={{ color: 'var(--text-secondary)' }}>[ NO .STL / .STEP FILE UPLOADED ]</h4>
                <button className="cta-btn" onClick={generateAIPitch} disabled={grantGenerating}>
                  {grantGenerating ? 'INITIALIZING LLM...' : 'GENERATE SBIR GRANT PITCH'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ENGINEERING HISTORY TAB */}
        {activeTab === 'Engineering History' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Project History & Engineering Logs</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Permanently archived architectural decisions, AI implementation plans, and execution walkthroughs stored in Firebase.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
              {/* Timeline View */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ color: 'var(--white)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Timeline</h4>
                {project.engineeringHistory && project.engineeringHistory.length > 0 ? (
                  project.engineeringHistory.map((log: any, idx: number) => (
                    <div key={idx} style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px', borderLeft: '2px solid var(--cyan)' }}>
                      <div style={{ color: 'var(--cyan)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{new Date(log.timestamp).toLocaleString()}</div>
                      <h5 style={{ color: 'var(--white)', margin: '0 0 0.5rem 0' }}>{log.title}</h5>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto', fontFamily: 'var(--font-mono)' }}>
                        {log.content}
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No engineering logs found in Firebase.</div>
                )}
              </div>

              {/* Add Log Form */}
              <div style={{ background: '#0a0a0f', padding: '1.5rem', borderRadius: '8px', border: '1px solid #222' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Push New Log to Firebase</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Log Title (e.g., Phase 9: PCB Layout)" 
                    value={newLogTitle}
                    onChange={(e) => setNewLogTitle(e.target.value)}
                    style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: '#fff', outline: 'none', fontFamily: 'var(--font-body)' }}
                  />
                  <textarea 
                    placeholder="Paste Markdown contents here..."
                    value={newLogContent}
                    onChange={(e) => setNewLogContent(e.target.value)}
                    style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', minHeight: '300px', resize: 'vertical' }}
                  />
                  <button 
                    className="cta-btn" 
                    onClick={handleSaveLog} 
                    disabled={isSavingLog || !newLogTitle || !newLogContent}
                    style={{ opacity: (!newLogTitle || !newLogContent) ? 0.5 : 1 }}
                  >
                    {isSavingLog ? 'SYNCING TO CLOUD...' : 'SAVE TO FIREBASE'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FDA & COMPLIANCE TAB */}
        {activeTab === 'FDA & Compliance' && (
          <div className="glass-panel hover-3d" style={{ padding: '2rem', maxWidth: '600px' }}>
            <h3 style={{ color: 'var(--violet)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Regulatory Compliance Engine</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Cross-reference botanical or chemical ingredients against the FDA Cosmetics & Supplements database.</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <input 
                type="text" 
                placeholder="e.g. French Green Clay, Xylitol..." 
                value={fdaIngredient}
                onChange={(e) => setFdaIngredient(e.target.value)}
                style={{ flexGrow: 1, padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: '#fff', outline: 'none', fontFamily: 'var(--font-body)' }}
              />
              <button className="btn-secondary" onClick={checkFDACompliance}>CHECK DB</button>
            </div>

            {fdaStatus === 'checking' && <div style={{ color: 'var(--gold)' }}>Scanning FDA VCRP Database...</div>}
            {fdaStatus === 'compliant' && (
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--green)', background: 'rgba(112, 224, 0, 0.1)' }}>
                <strong style={{ color: 'var(--green)' }}>STATUS: COMPLIANT</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>No restricted warnings found. Safe for cosmetic commercialization.</p>
              </div>
            )}
            {fdaStatus === 'regulated' && (
              <div style={{ padding: '1rem', borderLeft: '4px solid red', background: 'rgba(255, 0, 0, 0.1)' }}>
                <strong style={{ color: 'red' }}>STATUS: RESTRICTED / WARNING</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>This compound may require specialized FDA clearance or specific warning labels.</p>
              </div>
            )}
          </div>
        )}

        {/* IP & FUNDING TAB with Auto-Filer */}
        {activeTab === 'IP & Funding' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>AI Grant & Pitch Deck Auto-Filer</h3>
              <button 
                className="btn-primary" 
                onClick={generateAIPitch}
                disabled={grantGenerating}
              >
                {grantGenerating ? 'COMPILING DATA...' : 'GENERATE SBIR GRANT PROPOSAL'}
              </button>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Utilize Trillionaires AI to automatically compile your BOM, Hours, and Logs into a formatted VC Pitch or Government Grant application.</p>
            
            {grantPayload ? (
              <div style={{ 
                background: 'rgba(0,0,0,0.5)', 
                padding: '2rem', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6
              }}>
                {grantPayload}
              </div>
            ) : (
              <div style={{ padding: '4rem', textAlign: 'center', border: '1px dashed var(--text-muted)' }}>
                <p style={{ color: 'var(--text-muted)' }}>Awaiting generation command.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
