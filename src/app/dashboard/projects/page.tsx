'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function ProjectsPipeline() {
  const [activeTab, setActiveTab] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      if (!auth.currentUser) return;
      try {
        const q = query(collection(db, 'projects'), where('ownerId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(fetched);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    
    // Listen for auth state in case it's still resolving
    const unsub = auth.onAuthStateChanged(user => {
      if (user) fetchProjects();
    });
    return () => unsub();
  }, []);

  const handleCreateProject = async () => {
    if (!auth.currentUser) return;
    const name = window.prompt("Enter new project name:");
    if (!name) return;

    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        name,
        phase: 'Ideation',
        type: 'Hardware',
        status: 'Active',
        tags: ['New'],
        ownerId: auth.currentUser.uid,
        budget: 0,
        spent: 0,
        hoursTracked: 0,
        createdAt: serverTimestamp()
      });
      setProjects(prev => [...prev, { id: docRef.id, name, phase: 'Ideation', tags: ['New'] }]);
    } catch (err) {
      console.error("Error creating project:", err);
      alert("Failed to create project");
    }
  };

  const phases = ['Ideation', 'Prototyping', 'Legal & Funding', 'Commercialization'];

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', position: 'relative' }}>
      <div className="grid-bg"></div>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '0.5rem' }}>Project Pipeline</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Track ideas from initial spark to commercial dominance.</p>
        </div>
        <button className="btn-primary" onClick={handleCreateProject} style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>+ New Project</button>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', position: 'relative', zIndex: 10 }}>
        {['All', ...phases].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === tab ? 'var(--cyan)' : 'var(--text-secondary)',
              fontSize: '1rem',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.2s',
              position: 'relative'
            }}
          >
            {tab}
            {activeTab === tab && (
              <div style={{ position: 'absolute', bottom: '-17px', left: 0, width: '100%', height: '3px', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}></div>
            )}
          </button>
        ))}
      </div>

      {/* Pipeline Board */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        position: 'relative',
        zIndex: 10
      }}>
        {phases.filter(p => activeTab === 'All' || activeTab === p).map(phase => (
          <div key={phase} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--white)', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: phase === 'Commercialization' ? 'var(--gold)' : 'var(--cyan)', boxShadow: `0 0 10px ${phase === 'Commercialization' ? 'var(--gold)' : 'var(--cyan)'}` }}></div>
              {phase}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.filter(proj => proj.phase === phase || (phase === 'Ideation' && proj.phase === 'Idea')).map(proj => (
                <div key={proj.id} onClick={() => router.push(`/dashboard/projects/${proj.id}`)} className="glass-panel hover-3d" style={{ 
                  padding: '1.5rem', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  borderLeft: `4px solid ${phase === 'Commercialization' ? 'var(--gold)' : 'var(--violet)'}`,
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--white)', fontFamily: 'var(--font-display)' }}>{proj.name}</h3>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {proj.tags && proj.tags.map((tag: string) => (
                      <span key={tag} style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.2rem 0.6rem', 
                        background: 'rgba(255,255,255,0.05)', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {projects.filter(proj => proj.phase === phase || (phase === 'Ideation' && proj.phase === 'Idea')).length === 0 && !loading && (
                <div style={{ 
                  padding: '2rem', 
                  border: '1px dashed var(--border-color)', 
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}>
                  Drop projects here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
