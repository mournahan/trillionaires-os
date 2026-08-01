'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) {
        router.push('/login');
        return;
      }
      
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (userDoc.exists() && userDoc.data().hasInventorAccess) {
        setUser({ ...currentUser, ...userDoc.data() });
      } else {
        router.push('/login'); // Not authorized
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', animation: 'pulse 1.5s infinite' }}>
          INITIALIZING OS...
        </h2>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Pipeline', path: '/dashboard/projects' },
    { name: 'Inventory & Swap', path: '/dashboard/inventory' },
    { name: 'CRM & Clients', path: '/dashboard/crm' },
    { name: 'AI Brand Lab', path: '/dashboard/brand-lab' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
    }}>
      {/* Global Sidebar */}
      <aside style={{
        width: '280px',
        background: 'rgba(12, 16, 24, 0.95)',
        borderRight: '1px solid var(--border-color)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        position: 'relative',
        zIndex: 50
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
          <span className="gradient-text">TRILLIONAIRESAI</span><br/>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>INVENTOR OS</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navItems.map(item => {
            const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/dashboard');
            return (
              <Link 
                href={item.path} 
                key={item.path}
                style={{ 
                  color: isActive ? 'var(--cyan)' : 'var(--text-secondary)', 
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>AUTHORIZED AS</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--white)', wordBreak: 'break-all' }}>{user?.email}</p>
          <button 
            onClick={() => auth.signOut()}
            style={{
              background: 'transparent',
              color: '#ff4444',
              border: '1px solid rgba(255,0,0,0.3)',
              padding: '0.5rem',
              borderRadius: '4px',
              width: '100%',
              marginTop: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            DISCONNECT
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, position: 'relative', overflowY: 'auto', maxHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
