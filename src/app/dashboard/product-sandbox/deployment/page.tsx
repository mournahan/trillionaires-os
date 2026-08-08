import React from 'react';
import Link from 'next/link';

export default function DeploymentTimelinePage() {
  return (
    <div style={{ maxWidth: '1200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 className="eb-h1" style={{marginBottom: '0.5rem'}}>4-Month Deployment</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, letterSpacing: '0.5px' }}>
            INTEGRATION, FABRICATION, & LAUNCH SCHEDULE
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '1px', fontSize: '0.8rem'}}>TARGET LAUNCH</span>
          <p style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0}}>Month 4</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
        {/* Timeline visualization */}
        <div className="eb-card">
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '2rem', letterSpacing: '1px' }}>BUILD TIMELINE</h2>
          
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(212, 175, 55, 0.2)' }}></div>
            
            {/* Month 1 */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2rem', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-panel)', border: '2px solid var(--gold)', zIndex: 2 }}></div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Month 1: Procurement & Legal</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Forming the LLC, setting up accounts, and purchasing the used industrial equipment (allowing for 3-4 week heavy freight lead times). Taking delivery of the 40' container.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a3a3a3' }}>LLC Formation</span>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a3a3a3' }}>Equipment Freight</span>
              </div>
            </div>

            {/* Month 2 */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2rem', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-panel)', border: '2px solid var(--gold)', zIndex: 2 }}></div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Month 2: Container Prep & Solar</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                While waiting for freight, you epoxy the container floors, install lighting, mount the EG4 inverters, and wire the 48V battery bank and bifacial solar array.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#a3a3a3' }}>Solar Matrix Install</span>
              </div>
            </div>

            {/* Month 3 */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2rem', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-panel)', border: '2px solid var(--cyan)', zIndex: 2 }}></div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Month 3: Physical Integration</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Equipment arrives. Bolting machinery to the container floor. Running 316L SS Tri-Clamp sanitary fluid paths. Pulling 24V control wires to the main PLC panel.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(0, 255, 255, 0.05)', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '4px', color: 'var(--cyan)' }}>Tri-Clamp Assembly (No Welding)</span>
              </div>
            </div>

            {/* Month 4 */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2rem', top: '5px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-panel)', border: '2px solid #4caf50', zIndex: 2 }}></div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Month 4: PLC Programming & Wet Testing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Writing the Edge PLC logic. Running a full "Water Test" (hot water CIP cycle) to verify Modbus telemetry and pass health inspection. 
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(76, 175, 80, 0.05)', border: '1px solid rgba(76, 175, 80, 0.2)', borderRadius: '4px', color: '#4caf50' }}>FDA / SQF Audit Prep</span>
              </div>
            </div>
          </div>
        </div>

        {/* Burn Rate / Overhead */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="eb-card" style={{ borderColor: 'rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.02)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '1px' }}>4-MONTH SALARY BURN</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Founders Overhead</p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: 'var(--text-primary)', margin: 0 }}>$66,600</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Based on a $200k/yr combined run-rate for the aggressive 16-week sprint.</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CapEx (Hardware)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>$43,500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Total Launch Capital</span>
                <span style={{ fontSize: '1rem', color: 'var(--white)', fontFamily: '"Cormorant Garamond", serif' }}>$110,100</span>
              </div>
            </div>
          </div>

          <div className="eb-card">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '1px' }}>THE INTEGRATION STRATEGY</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              You do not need to hire an engineering firm. As Operations and Inventory Managers, you act as the <strong>Integrators</strong>.
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
              <li><strong>No Custom Welding:</strong> All fluid paths use snap-together 316L SS Tri-Clamp sanitary fittings.</li>
              <li><strong>Modular Equipment:</strong> The VFD-driven conveyor and servo-filler are standalone units that just require 24V I/O ties to the master PLC.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
