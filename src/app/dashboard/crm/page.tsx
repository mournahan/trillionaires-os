'use client';

import { useState } from 'react';

export default function CRMDashboard() {
  const [activeTab, setActiveTab] = useState('Leads & Investors');

  const tabs = ['Leads & Investors', 'Licensing Deals', 'Manufacturing Contacts'];

  return (
    <div style={{ padding: '3rem', position: 'relative' }}>
      <div className="grid-bg"></div>
      
      <header style={{ marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '0.5rem' }}>Global CRM & Contacts</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your leads, investor pitches, and manufacturing supply chains across all projects.</p>
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
        {activeTab === 'Leads & Investors' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>Active Pipeline</h3>
              <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>+ Add Lead</button>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '1rem 0' }}>Contact Name</th>
                  <th>Organization</th>
                  <th>Linked Project</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Chief Mike</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Okanogan County Fire Dist. 3</td>
                  <td style={{ color: 'var(--gold)' }}>Holdover Sentinel</td>
                  <td style={{ color: 'var(--cyan)' }}>Pitching</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Dr. Sarah Jenkins</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Smile Boutique NYC</td>
                  <td style={{ color: 'var(--gold)' }}>Bespoke Tooth Polish</td>
                  <td style={{ color: 'var(--green)' }}>Pre-Order</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Courtney Mournahan</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Eternal Bliss Tattoo</td>
                  <td style={{ color: 'var(--cyan)' }}>AI Infrastructure & Hosting</td>
                  <td style={{ color: 'var(--cyan)' }}>Active Client</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Management Team</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Elite Electric</td>
                  <td style={{ color: 'var(--cyan)' }}>Enterprise GIS Map</td>
                  <td style={{ color: 'var(--cyan)' }}>Active Client</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0', color: 'var(--white)' }}>Event Directors</td>
                  <td style={{ color: 'var(--text-secondary)' }}>Omak Stampede</td>
                  <td style={{ color: 'var(--violet)' }}>Buckaroo Chat Bot</td>
                  <td style={{ color: 'var(--cyan)' }}>Active Client</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Manufacturing Contacts' && (
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--violet)', fontFamily: 'var(--font-display)' }}>Supply Chain</h3>
              <button className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>+ Add Supplier</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>GroupGets</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Supplier for FLIR Lepton 3.5 & PureThermal</div>
                <a href="#" style={{ color: 'var(--cyan)', fontSize: '0.8rem', textDecoration: 'none' }}>View Purchase Orders &rarr;</a>
              </div>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>Ground Control</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Iridium RockBLOCK 9603N Distributor</div>
                <a href="#" style={{ color: 'var(--cyan)', fontSize: '0.8rem', textDecoration: 'none' }}>View Purchase Orders &rarr;</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
