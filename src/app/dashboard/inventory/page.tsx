'use client';

import { useState } from 'react';

export default function GlobalInventory() {
  const [activeTab, setActiveTab] = useState('My Workshop');

  const tabs = ['My Workshop', 'Subscriptions', 'Tool Swap Network'];

  return (
    <div style={{ padding: '3rem', position: 'relative' }}>
      <div className="grid-bg"></div>
      
      <header style={{ marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '0.5rem' }}>Global Asset Inventory</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your permanent workshop tools, SaaS subscriptions, and the Inventor Swap Network.</p>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', position: 'relative', zIndex: 10 }}>
        {tabs.map(tab => (
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

      <div style={{ position: 'relative', zIndex: 10 }}>
        {activeTab === 'My Workshop' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>Permanent Assets & Hardware Tools</h3>
              <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>+ Log Tool</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>Pinecil Smart Soldering Iron</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>V2 / RISC-V</div>
                <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(0, 255, 0, 0.1)', color: 'var(--green)', borderRadius: '12px', fontSize: '0.8rem' }}>Available</span>
              </div>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>JScan OBD2 Adapter</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Bluetooth LE</div>
                <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(0, 255, 0, 0.1)', color: 'var(--green)', borderRadius: '12px', fontSize: '0.8rem' }}>Available</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Subscriptions' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ color: 'var(--violet)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Recurring SaaS Overhead</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Monthly Overhead: <span style={{ color: 'var(--white)' }}>$40.00/mo</span></p>
              </div>
              <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>+ Add Sub</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              <div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '1rem 0' }}>Service</th>
                      <th>Category</th>
                      <th>Monthly Cost</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Gemini Advanced</td>
                      <td style={{ color: 'var(--text-secondary)' }}>AI / Compute</td>
                      <td style={{ color: 'var(--white)' }}>$20.00</td>
                      <td style={{ color: 'var(--green)' }}>Active</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Vercel Pro</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Hosting</td>
                      <td style={{ color: 'var(--white)' }}>$20.00</td>
                      <td style={{ color: 'var(--green)' }}>Active</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255, 0, 0, 0.05)' }}>
                      <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Adobe Creative Cloud</td>
                      <td style={{ color: 'var(--text-secondary)' }}>Design</td>
                      <td style={{ color: 'var(--white)' }}>$54.99</td>
                      <td style={{ color: 'red' }}>Idle (30+ Days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
                <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>AI Burn-Rate Insights</h4>
                <div style={{ padding: '1rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--gold)', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--white)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    <strong>Warning:</strong> You have not logged into Adobe Creative Cloud in over 30 days. You are currently using the AI Brand Lab for design assets.
                  </p>
                  <p style={{ color: 'var(--green)', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Potential Savings: $659.88 / yr
                  </p>
                  <button className="btn-secondary" style={{ width: '100%', borderColor: 'red', color: 'red' }}>CANCEL ADOBE SUBSCRIPTION</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Tool Swap Network' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--gold)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                🤝
              </div>
              <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1rem' }}>The Inventor's Swap Network</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Join the peer-to-peer hardware network. List your idle tools to lend to other verified inventors, or search the network to borrow specialized equipment for your next prototype instead of buying it.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', background: 'linear-gradient(90deg, var(--gold), #ffdf73)', color: '#000' }}>Enable My Public Swap Profile</button>
                <button className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderColor: 'var(--cyan)', color: 'var(--cyan)' }}>GENERATE ESCROW CONTRACT</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
