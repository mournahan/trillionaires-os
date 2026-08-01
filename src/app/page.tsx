'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Particle canvas background
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    
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

    for (let i = 0; i < 75; i++) {
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
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas id="particle-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -3, pointerEvents: 'none' }}></canvas>
      <div className="grid-bg"></div>
      <div className="orb orb-cyan"></div>
      <div className="orb orb-violet"></div>

      <header style={{ padding: '1.5rem 4%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 100, borderBottom: '1px solid var(--border-color)', background: 'rgba(5, 6, 10, 0.7)', backdropFilter: 'blur(12px)' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', fontFamily: 'var(--font-display)' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="glitch" data-text="TRILLIONAIRESAI" style={{ 
              background: 'linear-gradient(90deg, #00f0ff 0%, #bd00ff 50%, #ff00ea 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(189, 0, 255, 0.5)',
              fontWeight: '900',
              fontSize: '1.8rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              lineHeight: 1
            }}>TRILLIONAIRESAI</span>
            <span style={{
              color: 'var(--gold)',
              fontSize: '0.65rem',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textShadow: '0 0 8px rgba(255, 183, 0, 0.6)',
              marginTop: '4px'
            }}>Inventor OS</span>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/login" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.2s' }}>Client Portal</Link>
          <Link href="/login" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'var(--cyan)', color: '#000', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>System Login</Link>
        </div>
      </header>

      <main style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '6rem 2rem 2rem 2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ padding: '0.4rem 1rem', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '20px', color: 'var(--cyan)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem', background: 'rgba(0, 240, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          SYSTEM ONLINE
        </div>
        
        <h1 className="glitch" data-text="Manage your Trillion Ideas." style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--white)' }}>
          Manage your <span style={{ 
            background: 'linear-gradient(90deg, #00f0ff 0%, #bd00ff 50%, #ff00ea 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(189, 0, 255, 0.4)'
          }}>Trillion Ideas.</span>
        </h1>
        
        <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: '#aaa', lineHeight: 1.6, marginBottom: '3rem' }}>
          The operating system for modern inventors. Manage projects, track hardware inventory, monitor patent progress, log process steps, and scale your innovations as a SaaS platform.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          width: '100%',
          textAlign: 'left'
        }}>
          <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Holdover Sentinel</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Thermal monitoring prototype in development. Awaiting ESP32 assembly.</p>
          </div>
          <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ color: 'var(--violet)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Hardware Inventory</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Log RockBLOCK modems, FLIR sensors, and calculate project COGS for tax purposes.</p>
          </div>
        </div>
      </main>
    </>
  );
}
