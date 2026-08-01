'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';

export default function Launchpad() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
          
          // Seed "Trillionaires OS" project into the user's database if they are an inventor
          if (userDocSnap.data().hasInventorAccess) {
            seedProject(user.uid);
          }
        } else {
          router.push('/login');
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    // Give Firebase Auth a moment to initialize
    const timeout = setTimeout(() => {
      checkUser();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [router]);

  const seedProject = async (uid: string) => {
    setSeeding(true);
    try {
      const projectsToSeed = [
        { name: 'Trillionaires OS', phase: 'Prototyping', type: 'Software / SaaS', budget: 5000, spent: 0, hoursTracked: 40 },
        { name: 'Antimatter Mobile App', phase: 'Ideation', type: 'Software / Mobile', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Mrs. Trillionaires Stories Migration', phase: 'Ideation', type: 'Content / Digital Product', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Eternal Bliss Spam Filter', phase: 'Ideation', type: 'IT / Maintenance', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Geometric Tattoo Designer', phase: 'Ideation', type: 'Software', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Tattoo Camera Rig', phase: 'Ideation', type: 'Hardware', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Holdover Sentinel (Fire Device)', phase: 'Ideation', type: 'Hardware / IoT', budget: 0, spent: 0, hoursTracked: 0 },
        { name: 'Biohacking / Acoustic Therapy Platform', phase: 'Ideation', type: 'Software / Biohacking', budget: 0, spent: 0, hoursTracked: 0 }
      ];

      for (const proj of projectsToSeed) {
        const q = query(collection(db, 'projects'), where('ownerId', '==', uid), where('name', '==', proj.name));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          const newProjectRef = doc(collection(db, 'projects'));
          await setDoc(newProjectRef, {
            ...proj,
            ownerId: uid,
            createdAt: new Date().toISOString()
          });
          console.log(`Seeded project: ${proj.name}`);
        }
      }
    } catch (err) {
      console.error("Failed to seed projects:", err);
    } finally {
      setSeeding(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="glitch" data-text="INITIALIZING UPLINK..." style={{ color: 'var(--cyan)' }}>INITIALIZING UPLINK...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '4rem 2rem', minHeight: '100vh', position: 'relative' }}>
      <div className="grid-bg"></div>
      <div className="orb orb-cyan"></div>
      <div className="orb orb-violet"></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="glitch" data-text="GLOBAL MATRIX LAUNCHPAD" style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
            GLOBAL MATRIX LAUNCHPAD
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Select your operational vector.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Trillionaires OS (Local App) */}
          <div 
            onClick={() => { if(userData?.hasInventorAccess) router.push('/dashboard') }}
            className={`glass-panel hover-3d ${!userData?.hasInventorAccess ? 'locked' : ''}`} 
            style={{ 
              padding: '2.5rem', 
              cursor: userData?.hasInventorAccess ? 'pointer' : 'not-allowed',
              opacity: userData?.hasInventorAccess ? 1 : 0.5,
              borderTop: '3px solid var(--cyan)'
            }}
          >
            <div style={{ color: 'var(--cyan)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textShadow: '0 0 5px var(--cyan-glow)' }}>
              {userData?.hasInventorAccess ? 'AUTHORIZED ACCESS' : 'ACCESS DENIED'}
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Trillionaires OS</h3>
            <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>Inventor Command Center. Track prototypes, hardware BOMs, and manage the peer-to-peer Tool Swap Network.</p>
          </div>

          {/* Mrs Trillionaires */}
          <a href={userData?.hasClientAccess ? "https://mrstrillionaire.com" : "#"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div 
              className={`glass-panel hover-3d ${!userData?.hasClientAccess ? 'locked' : ''}`} 
              style={{ 
                padding: '2.5rem', 
                cursor: userData?.hasClientAccess ? 'pointer' : 'not-allowed',
                opacity: userData?.hasClientAccess ? 1 : 0.5,
                borderTop: '3px solid var(--violet)',
                height: '100%'
              }}
            >
              <div style={{ color: 'var(--violet)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textShadow: '0 0 5px var(--violet-glow)' }}>
                {userData?.hasClientAccess ? 'AUTHORIZED ACCESS' : 'ACCESS DENIED'}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Mrs Trillionaires</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>Digital Publishing platform. Dynamic reading themes, immersive audio TTS, and analytics.</p>
            </div>
          </a>

          {/* EB Tattoo */}
          <a href={userData?.hasClientAccess ? "https://eternalblisstattoo.com" : "#"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div 
              className={`glass-panel hover-3d ${!userData?.hasClientAccess ? 'locked' : ''}`} 
              style={{ 
                padding: '2.5rem', 
                cursor: userData?.hasClientAccess ? 'pointer' : 'not-allowed',
                opacity: userData?.hasClientAccess ? 1 : 0.5,
                borderTop: '3px solid var(--cyan)',
                height: '100%'
              }}
            >
              <div style={{ color: 'var(--cyan)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textShadow: '0 0 5px var(--cyan-glow)' }}>
                {userData?.hasClientAccess ? 'AUTHORIZED ACCESS' : 'ACCESS DENIED'}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Eternal Bliss Tattoo</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>Boutique Commerce. High-fidelity canvas visualization and UV blacklight simulator.</p>
            </div>
          </a>

          {/* Elite Electric */}
          <a href={userData?.hasClientAccess ? "#" : "#"} style={{ textDecoration: 'none' }}>
            <div 
              className={`glass-panel hover-3d ${!userData?.hasClientAccess ? 'locked' : ''}`} 
              style={{ 
                padding: '2.5rem', 
                cursor: userData?.hasClientAccess ? 'pointer' : 'not-allowed',
                opacity: userData?.hasClientAccess ? 1 : 0.5,
                borderTop: '3px solid var(--gold)',
                height: '100%'
              }}
            >
              <div style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', textShadow: '0 0 5px rgba(255,183,0,0.6)' }}>
                {userData?.hasClientAccess ? 'AUTHORIZED ACCESS' : 'ACCESS DENIED'}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>Elite Electric</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>Commercial Enterprise. Interactive GIS coverage map and automated pipeline routing.</p>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}
