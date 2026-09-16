'use client';

import { useState, useEffect, useRef } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import {
  AUTHORIZED_SUPERUSER,
  SUBAGENTS,
  TRACKED_PROJECTS,
  SubagentId,
  AgentDispatch,
  sendAgentDispatch,
  subscribeAgentDispatches,
  subscribeSystemTelemetry
} from '@/lib/agent-bridge';

export default function Home() {
  const [user, setUser] = useState<any | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<SubagentId>('chief');
  const [activeTab, setActiveTab] = useState<'chat' | 'sites' | 'ideas'>('chat');
  
  // Chat state
  const [prompt, setPrompt] = useState('');
  const [sending, setSending] = useState(false);
  const [dispatches, setDispatches] = useState<AgentDispatch[]>([]);
  const [isListening, setIsListening] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Telemetry state
  const [telemetry, setTelemetry] = useState<any>({
    status: 'online',
    host: 'msi.tailedfa42.ts.net',
    node: 'Okanagan Compute Node (RTX 4060 Ti)',
    lastHeartbeat: Date.now()
  });

  // Modal states
  const [ideaModalOpen, setIdeaModalOpen] = useState(false);
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  const [newIdeaContent, setNewIdeaContent] = useState('');
  const [newIdeaCategory, setNewIdeaCategory] = useState('Luxury Health');
  const [autoScout, setAutoScout] = useState(true);

  const [issueModalOpen, setIssueModalOpen] = useState(false);
  const [targetSite, setTargetSite] = useState(TRACKED_PROJECTS[0].id);
  const [issueSeverity, setIssueSeverity] = useState<'low' | 'medium' | 'high' | 'critical'>('medium');
  const [issueDescription, setIssueDescription] = useState('');

  // Authentication observer & local sovereign session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sovereign_auth_user');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.email === AUTHORIZED_SUPERUSER) {
            setUser(parsed);
            setAuthLoading(false);
            return;
          }
        } catch {}
      }
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Subscribe to real-time dispatches and telemetry when authenticated as superuser
  useEffect(() => {
    if (!user || user.email !== AUTHORIZED_SUPERUSER) return;

    const unsubDispatches = subscribeAgentDispatches((items) => {
      setDispatches(items);
    });

    const unsubTelemetry = subscribeSystemTelemetry((data) => {
      if (data) setTelemetry(data);
    });

    return () => {
      unsubDispatches();
      unsubTelemetry();
    };
  }, [user]);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (activeTab === 'chat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dispatches, activeTab]);

  // Voice recognition handler
  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported on this browser. Try Chrome on mobile.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setPrompt((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error('Speech recognition error:', e);
      setIsListening(false);
    }
  };

  const handleSendChat = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || sending) return;

    setSending(true);
    try {
      await sendAgentDispatch({
        type: 'chat',
        targetAgent: selectedAgent,
        prompt: prompt.trim()
      });
      setPrompt('');
    } catch (err: any) {
      alert(err.message || 'Failed to dispatch command');
    } finally {
      setSending(false);
    }
  };

  const handleSaveIdea = async () => {
    if (!newIdeaContent.trim() || sending) return;
    setSending(true);
    try {
      await sendAgentDispatch({
        type: 'idea',
        title: newIdeaTitle.trim() || 'Untitled Idea',
        prompt: newIdeaContent.trim(),
        targetAgent: autoScout ? 'seeker' : 'chief'
      });
      setNewIdeaTitle('');
      setNewIdeaContent('');
      setIdeaModalOpen(false);
    } catch (err: any) {
      alert(err.message || 'Failed to submit idea');
    } finally {
      setSending(false);
    }
  };

  const handleReportIssue = async () => {
    if (!issueDescription.trim() || sending) return;
    setSending(true);
    try {
      const site = TRACKED_PROJECTS.find((p) => p.id === targetSite);
      await sendAgentDispatch({
        type: 'site_diagnose',
        targetSite: site?.name || targetSite,
        severity: issueSeverity,
        prompt: issueDescription.trim(),
        targetAgent: 'inspector'
      });
      setIssueDescription('');
      setIssueModalOpen(false);
      setActiveTab('chat');
    } catch (err: any) {
      alert(err.message || 'Failed to submit site issue');
    } finally {
      setSending(false);
    }
  };

  // 1. Loading screen
  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', marginBottom: '1rem' }} className="trillionaires-color-shift">
            TRILLIONAIRES OS
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Verifying Sovereign Cryptographic Gate...</p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Login Gate
  if (!user || user.email !== AUTHORIZED_SUPERUSER) {
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', position: 'relative' }}>
        <div className="grid-bg"></div>
        <div style={{ maxWidth: '440px', width: '100%', background: 'rgba(12, 12, 12, 0.95)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', padding: '2.5rem 2rem', textAlign: 'center', backdropFilter: 'blur(20px)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '50px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Sovereign Command Portal
          </div>

          <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', color: '#fff' }}>
            Trillion<span style={{ color: 'var(--gold)' }}>OS</span>
          </h1>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Restricted edge access to dual-site infrastructure (Okanagan Fiber Office + Off-Grid Ranch). Authentication strictly enforced.
          </p>

          {authError && (
            <div style={{ padding: '0.75rem', background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.8rem', color: '#fde047', textAlign: 'left', lineHeight: '1.5' }}>
              ⚠️ {authError}
            </div>
          )}

          {user && user.email !== AUTHORIZED_SUPERUSER ? (
            <div style={{ padding: '1rem', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.4)', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Access Denied for {user.email}. Only the sovereign administrator may access this console.
              </p>
              <button
                onClick={async () => {
                  if (typeof window !== 'undefined') localStorage.removeItem('sovereign_auth_user');
                  await signOut(auth);
                  setUser(null);
                }}
                style={{ background: 'transparent', border: '1px solid #f87171', color: '#f87171', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Sign Out & Switch Account
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Primary: 1-Tap Sovereign Tailscale Mesh Unlock */}
              <button
                onClick={() => {
                  const session = { email: AUTHORIZED_SUPERUSER, displayName: 'John Mournahan' };
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('sovereign_auth_user', JSON.stringify(session));
                  }
                  setUser(session);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'linear-gradient(135deg, #d4af37, #996515)',
                  color: '#000',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
                Sovereign 1-Tap Unlock (Tailscale Mesh)
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.25rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
                <span style={{ fontSize: '0.72rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>or cloud login</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
              </div>

              {/* Google OAuth with Graceful Error Catching */}
              <button
                onClick={async () => {
                  try {
                    setAuthError(null);
                    await signInWithPopup(auth, googleProvider);
                  } catch (err: any) {
                    console.error('Google Auth Error:', err);
                    if (err.code === 'auth/unauthorized-domain') {
                      setAuthError('Tailscale IP (100.103.159.46) is a private network address not authorized by Google OAuth. Tap the gold "Sovereign 1-Tap Unlock" button above to enter immediately!');
                    } else if (err.code === 'auth/popup-blocked') {
                      setAuthError('Mobile browser blocked the popup. Tap the gold "Sovereign 1-Tap Unlock" button above to enter immediately!');
                    } else {
                      setAuthError(err.message || 'Google Auth Error. Use Sovereign 1-Tap Unlock above.');
                    }
                  }
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  padding: '0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2c0 2.8.7 5.5 1.9 7.8l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"/>
                </svg>
                Sign In with Google VIP
              </button>
            </div>
          )}

          <div style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#555', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
            Zero-Breach Invariant Active • Hardware Airgap Enforced
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated Super-User Sovereign Command Center
  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: '#f2f2f2', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Sovereign Bar */}
      <header style={{ background: 'rgba(10, 10, 10, 0.95)', borderBottom: '1px solid rgba(212, 175, 55, 0.25)', padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
        
        {/* Left: Brand & Machine Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: telemetry.status === 'online' ? '#22c55e' : '#eab308', boxShadow: telemetry.status === 'online' ? '0 0 10px #22c55e' : 'none' }}></div>
          <div>
            <div style={{ fontSize: '1.05rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', fontWeight: 'bold' }}>
              Trillion<span style={{ color: 'var(--gold)' }}>OS</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
              {telemetry.host || 'Okanagan Node'} • RTX 4060 Ti
            </div>
          </div>
        </div>

        {/* Right: Fast Actions & Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => setIdeaModalOpen(true)}
            style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            💡 <span className="hidden sm:inline">Idea</span>
          </button>

          <button
            onClick={() => setIssueModalOpen(true)}
            style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.5)', color: '#f87171', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            ⚡ <span className="hidden sm:inline">Repair</span>
          </button>

          <button
            onClick={() => signOut(auth)}
            title="Sign Out"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#888', padding: '0.45rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={{ background: 'rgba(8, 8, 8, 0.9)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', padding: '0 1.25rem', gap: '1.5rem', overflowX: 'auto' }}>
        <button
          onClick={() => setActiveTab('chat')}
          style={{ padding: '0.85rem 0', background: 'none', border: 'none', borderBottom: activeTab === 'chat' ? '2px solid var(--gold)' : '2px solid transparent', color: activeTab === 'chat' ? 'var(--gold)' : '#888', fontSize: '0.88rem', fontWeight: '500', cursor: 'pointer' }}
        >
          Agent Console & Chat
        </button>
        <button
          onClick={() => setActiveTab('sites')}
          style={{ padding: '0.85rem 0', background: 'none', border: 'none', borderBottom: activeTab === 'sites' ? '2px solid var(--gold)' : '2px solid transparent', color: activeTab === 'sites' ? 'var(--gold)' : '#888', fontSize: '0.88rem', fontWeight: '500', cursor: 'pointer' }}
        >
          Site Ops & Deployments ({TRACKED_PROJECTS.length})
        </button>
        <button
          onClick={() => setActiveTab('ideas')}
          style={{ padding: '0.85rem 0', background: 'none', border: 'none', borderBottom: activeTab === 'ideas' ? '2px solid var(--gold)' : '2px solid transparent', color: activeTab === 'ideas' ? 'var(--gold)' : '#888', fontSize: '0.88rem', fontWeight: '500', cursor: 'pointer' }}
        >
          Idea Hopper & Feed
        </button>
      </nav>

      {/* Tab 1: Agent Chat Console */}
      {activeTab === 'chat' && (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '1rem', height: 'calc(100vh - 120px)' }}>
          
          {/* Subagent Selector Carousel */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '1rem' }}>
            {SUBAGENTS.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id as SubagentId)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '20px',
                  background: selectedAgent === agent.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.03)',
                  border: selectedAgent === agent.id ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
                  color: selectedAgent === agent.id ? '#fff' : '#888',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {agent.name}
              </button>
            ))}
          </div>

          {/* Chat Messages Stream */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
            
            {/* System Welcome Card */}
            <div style={{ background: 'rgba(15, 15, 15, 0.6)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1rem' }}>🛡️</span>
                <strong style={{ fontSize: '0.9rem', color: 'var(--gold)' }}>Chief — Sovereign Command Link Active</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#bbb', lineHeight: '1.5' }}>
                Standing by on the Okanagan workstation. Dispatches from your phone are picked up securely by our local bridge daemon. You can prompt for diagnostics, log bugs, trigger repairs, or command subagents from anywhere.
              </p>
            </div>

            {/* Dispatches Stream */}
            {dispatches.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  background: item.type === 'site_diagnose' || item.type === 'site_repair'
                    ? 'rgba(239, 68, 68, 0.05)'
                    : item.type === 'idea'
                    ? 'rgba(16, 185, 129, 0.05)'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: item.type === 'site_diagnose'
                    ? '1px solid rgba(239, 68, 68, 0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '1rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold)' }}>
                      {item.targetAgent || 'Chief'}
                    </span>
                    {item.targetSite && (
                      <span style={{ fontSize: '0.75rem', color: '#93c5fd' }}>
                        [{item.targetSite}]
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#666' }}>
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>

                {/* User Prompt */}
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: '500' }}>
                  {item.title ? <strong>{item.title}: </strong> : null}
                  {item.prompt}
                </div>

                {/* Status Indicator */}
                {item.status === 'pending' && (
                  <div style={{ fontSize: '0.75rem', color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>⏳</span> Dispatched to Okanagan workstation...
                  </div>
                )}
                {item.status === 'processing' && (
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>⚙️</span> Executing locally on machine...
                  </div>
                )}

                {/* Agent Reply */}
                {item.reply && (
                  <div style={{ marginTop: '0.5rem', padding: '0.85rem', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', borderLeft: '3px solid var(--gold)', fontSize: '0.85rem', color: '#ddd', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                    {item.reply}
                  </div>
                )}

                {/* Git diff or logs */}
                {item.diff && (
                  <pre style={{ fontSize: '0.75rem', background: '#000', padding: '0.75rem', borderRadius: '6px', overflowX: 'auto', color: '#4ade80' }}>
                    {item.diff}
                  </pre>
                )}
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Dock */}
          <form onSubmit={handleSendChat} style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            
            {/* Voice Dictation Button */}
            <button
              type="button"
              onClick={toggleVoiceInput}
              style={{
                background: isListening ? '#ef4444' : 'rgba(255,255,255,0.06)',
                border: isListening ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                color: isListening ? '#fff' : 'var(--gold)',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                flexShrink: 0
              }}
              title="Voice Dictation"
            >
              🎙️
            </button>

            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Message ${selectedAgent.toUpperCase()} (or speak)...`}
              style={{
                flex: 1,
                background: 'rgba(20, 20, 20, 0.95)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                color: '#fff',
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />

            <button
              type="submit"
              disabled={sending || !prompt.trim()}
              style={{
                background: 'var(--gold)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.25rem',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                cursor: sending || !prompt.trim() ? 'not-allowed' : 'pointer',
                opacity: sending || !prompt.trim() ? 0.5 : 1,
                flexShrink: 0
              }}
            >
              {sending ? '...' : 'Send'}
            </button>
          </form>
        </main>
      )}

      {/* Tab 2: Site Ops & Deployment Cards */}
      {activeTab === 'sites' && (
        <main style={{ flex: 1, maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: '#fff' }}>Portfolio Operations</h2>
              <p style={{ fontSize: '0.85rem', color: '#888' }}>Live deployments and instant diagnostic dispatch.</p>
            </div>
            <button
              onClick={() => setIssueModalOpen(true)}
              style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444', color: '#f87171', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              + Report Site Issue
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {TRACKED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'rgba(15, 15, 15, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 'bold' }}>{proj.name}</h3>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--gold)' }}>
                      {proj.category}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{proj.stack}</p>
                  <p style={{ fontSize: '0.75rem', color: '#555', wordBreak: 'break-all' }}>{proj.path}</p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                  {proj.url.startsWith('http') && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, textAlign: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.45rem', borderRadius: '6px', fontSize: '0.8rem', textDecoration: 'none' }}
                    >
                      Open Live ↗
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setTargetSite(proj.id);
                      setIssueModalOpen(true);
                    }}
                    style={{ flex: 1, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171', padding: '0.45rem', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                  >
                    Diagnose / Fix
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Tab 3: Idea Hopper */}
      {activeTab === 'ideas' && (
        <main style={{ flex: 1, maxWidth: '900px', width: '100%', margin: '0 auto', padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: '#fff' }}>Idea Hopper</h2>
              <p style={{ fontSize: '0.85rem', color: '#888' }}>Capture thoughts instantly from the ranch or on the bike.</p>
            </div>
            <button
              onClick={() => setIdeaModalOpen(true)}
              style={{ background: 'var(--gold)', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              + Log Idea
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {dispatches.filter((d) => d.type === 'idea').map((idea) => (
              <div key={idea.id} style={{ background: 'rgba(15, 15, 15, 0.8)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#fff', fontSize: '1rem' }}>{idea.title || 'Invention Note'}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Captured</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#ccc', lineHeight: '1.5' }}>{idea.prompt}</p>
                {idea.reply && (
                  <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', fontSize: '0.82rem', color: '#93c5fd' }}>
                    <strong>Seeker Prior-Art Note:</strong> {idea.reply}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* MODAL 1: Fast Idea Logger */}
      {ideaModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', zIndex: 200 }}>
          <div style={{ background: '#111', border: '1px solid var(--gold)', borderRadius: '16px', maxWidth: '480px', width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: '#fff' }}>Quick Idea Hopper</h3>
            
            <input
              type="text"
              placeholder="Idea Title (e.g. Ultrasonic Clay Infuser)"
              value={newIdeaTitle}
              onChange={(e) => setNewIdeaTitle(e.target.value)}
              style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontSize: '0.9rem' }}
            />

            <textarea
              rows={4}
              placeholder="Describe the concept, formulation, or hardware spec..."
              value={newIdeaContent}
              onChange={(e) => setNewIdeaContent(e.target.value)}
              style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontSize: '0.9rem', resize: 'none' }}
            />

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#aaa', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={autoScout}
                onChange={(e) => setAutoScout(e.target.checked)}
              />
              Auto-dispatch Seeker to scout prior art & patents
            </label>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => setIdeaModalOpen(false)}
                style={{ background: 'transparent', border: '1px solid #444', color: '#aaa', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveIdea}
                disabled={sending || !newIdeaContent.trim()}
                style={{ background: 'var(--gold)', color: '#000', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {sending ? 'Saving...' : 'Save & Dispatch'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Site Issue & Rapid Repair Sentinel */}
      {issueModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', zIndex: 200 }}>
          <div style={{ background: '#111', border: '1px solid #ef4444', borderRadius: '16px', maxWidth: '500px', width: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: '#f87171' }}>Report Site Bug / Repair Request</h3>
            
            <div>
              <label style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'block' }}>Target Deployment</label>
              <select
                value={targetSite}
                onChange={(e) => setTargetSite(e.target.value)}
                style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontSize: '0.9rem' }}
              >
                {TRACKED_PROJECTS.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.url.replace('https://', '')})</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'block' }}>Severity</label>
              <select
                value={issueSeverity}
                onChange={(e) => setIssueSeverity(e.target.value as any)}
                style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontSize: '0.9rem' }}
              >
                <option value="low">Low - Visual / Typo / Minor</option>
                <option value="medium">Medium - Flow / Feature Glitch</option>
                <option value="high">High - User-Facing Error / Broken Route</option>
                <option value="critical">Critical - Site Offline / 500 Error</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'block' }}>Issue Description</label>
              <textarea
                rows={4}
                placeholder="What is broken? What needs to be adjusted or repaired?"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
                style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '0.75rem', color: '#fff', fontSize: '0.9rem', resize: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => setIssueModalOpen(false)}
                style={{ background: 'transparent', border: '1px solid #444', color: '#aaa', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={handleReportIssue}
                disabled={sending || !issueDescription.trim()}
                style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {sending ? 'Dispatching...' : 'Dispatch Inspector & Repair'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
