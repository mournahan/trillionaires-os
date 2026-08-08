'use client';

import React from 'react';

export default function QMSDashboard() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className="eb-eyebrow">QUALITY MANAGEMENT SYSTEM</h1>
      <h2 className="eb-h2">Compliance & <em>Traceability</em></h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '800px' }}>
        Paperless digital infrastructure designed for FDA cGMP compliance, USDA Organic certification, SQF Level 3, and AIB International accreditations.
      </p>

      {/* Accreditations Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
        <div style={{ padding: '1.5rem', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>SQF Level 3</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Safe Quality Food Inst.</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>AIB International</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Food Safety Standards</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>USDA Organic</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Raw Material Verified</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>FDA cGMP</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>21 CFR Part 211 Compliant</p>
        </div>
      </div>

      {/* Raw Material Intake Log */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.5rem' }}>Raw Material Intake Ledger</h3>
          <button className="hero-btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}>+ LOG INTAKE</button>
        </div>
        
        <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(212, 175, 55, 0.05)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>DATE REC'D</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>INGREDIENT</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>SUPPLIER LOT #</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>COA STATUS</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>ORGANIC CERT</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2026-07-31</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Biological MCHA</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>MCH-26-8801</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: '3px', fontSize: '0.75rem' }}>VERIFIED</span></td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>N/A (Bovine Origin)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2026-07-28</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>French Green Clay</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>FGC-402-A</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: '3px', fontSize: '0.75rem' }}>VERIFIED</span></td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--gold)' }}>Ecocert Approved</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2026-07-25</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Peppermint Essential Oil</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>PEP-ORG-992</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: '3px', fontSize: '0.75rem' }}>VERIFIED</span></td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--gold)' }}>USDA Organic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CIP Sanitation Log */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>CIP (Clean-In-Place) Log</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Automated Telemetry via Edge PLC (Modbus TCP)</p>
          </div>
          <button className="hero-btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}>FORCE CIP CYCLE</button>
        </div>
        
        <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(212, 175, 55, 0.05)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>TIMESTAMP</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>CYCLE TYPE</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>TEMP (MAX)</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>CONDUCTIVITY / DOSING</th>
                <th style={{ padding: '1rem', fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.85rem' }}>SYSTEM STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2026-07-30 18:45:12</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>End-of-Day Full Flush</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>185.4°F @ 62 PSI</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>2.1% NaOH (14.2 mS/cm)</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: '3px', fontSize: '0.75rem' }}>AUTO-PASS</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2026-07-29 18:30:44</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>End-of-Day Full Flush</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>184.9°F @ 61 PSI</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>2.0% NaOH (13.9 mS/cm)</td>
                <td style={{ padding: '1rem' }}><span style={{ padding: '0.2rem 0.5rem', background: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', borderRadius: '3px', fontSize: '0.75rem' }}>AUTO-PASS</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
