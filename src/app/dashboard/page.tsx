'use client';

export default function Dashboard() {
  return (
    <div style={{ padding: '3rem', position: 'relative' }}>
      <div className="grid-bg"></div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>Command Center</h1>
        <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>+ New Project</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Active Projects Widget */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--cyan)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Active Projects</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--white)' }}>Holdover Sentinel</strong>
                <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>PROTOTYPE</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Awaiting ESP32 assembly and wiring.</p>
            </div>
          </div>
        </div>

        {/* Recent Inventory Widget */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--violet)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem' }}>RockBLOCK 9603N</span>
              <span style={{ color: '#ff4444', fontSize: '0.9rem' }}>-$299.95</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem' }}>FLIR Lepton 3.5</span>
              <span style={{ color: '#ff4444', fontSize: '0.9rem' }}>-$200.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem' }}>ESP32 Dev Board x3</span>
              <span style={{ color: '#ff4444', fontSize: '0.9rem' }}>-$15.99</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
