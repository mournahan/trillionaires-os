'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Particle background logic for Login page to match branding
    const canvas = document.getElementById('particle-canvas-login') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 - distance / 800})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const handleUserAccess = async (user: any) => {
    const userDocRef = doc(db, 'users', user.uid);
    const userDocSnap = await getDoc(userDocRef);

    const isSuperUser = user.email === 'johnmournahan@gmail.com';

    if (userDocSnap.exists()) {
      let userData = userDocSnap.data();
      
      // Auto-upgrade Super User if not already
      if (isSuperUser && (!userData.hasInventorAccess || !userData.hasClientAccess || !userData.isSuperUser)) {
        await updateDoc(userDocRef, {
          hasInventorAccess: true,
          hasClientAccess: true,
          isSuperUser: true
        });
        userData = { ...userData, hasInventorAccess: true, hasClientAccess: true, isSuperUser: true };
      }

      if (isSuperUser) {
        router.push('/');
      } else if (userData.hasInventorAccess) {
        router.push('/launchpad');
      } else {
        setError('Your account exists, but you do not have Inventor OS access enabled yet.');
      }
    } else {
      // First time logging in from the unified pool? Create their local record
      const newUserDoc = {
        email: user.email,
        hasInventorAccess: isSuperUser,
        hasClientAccess: isSuperUser,
        isSuperUser: isSuperUser,
        createdAt: new Date().toISOString()
      };
      await setDoc(userDocRef, newUserDoc);
      
      if (isSuperUser) {
        router.push('/');
      } else {
        setError('Account synchronized. Please request Inventor OS access.');
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await handleUserAccess(userCredential.user);
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleUserAccess(result.user);
    } catch (err: any) {
      setError(err.message || 'Failed to login with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <canvas id="particle-canvas-login" style={{ position: 'fixed', top: 0, left: 0, zIndex: -3, pointerEvents: 'none' }}></canvas>
      <div className="grid-bg"></div>
      <div className="orb orb-cyan"></div>

      <div className="glass-panel" style={{
        maxWidth: '450px',
        width: '100%',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        backdropFilter: 'blur(12px)'
      }}>
        <h2 className="glitch" data-text="SYSTEM LOGIN" style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '0.5rem' }}>
          SYSTEM LOGIN
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center' }}>
          Authenticate with your Trillionaires unified account.
        </p>

        {error && (
          <div style={{
            width: '100%',
            padding: '1rem',
            background: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid rgba(255, 0, 0, 0.3)',
            color: '#ff4444',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--white)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--white)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{
              background: 'linear-gradient(90deg, var(--cyan), var(--violet))',
              color: '#fff',
              padding: '1rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginTop: '1rem'
            }}
          >
            {loading ? 'Authenticating...' : 'Access Authorized'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', padding: '0 1rem', textTransform: 'uppercase' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleLogin}
            disabled={loading}
            style={{
              background: '#fff',
              color: '#000',
              width: '100%',
              padding: '1rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
