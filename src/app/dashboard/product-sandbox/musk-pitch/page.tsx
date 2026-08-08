'use client';
import React from 'react';

export default function MuskPitchPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <div className="print-avoid-break" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 className="eb-h1" style={{marginBottom: '0.5rem'}}>Universal High Income</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, letterSpacing: '0.5px' }}>
            A FIRST PRINCIPLES PITCH TO ELON MUSK
          </p>
        </div>
        <button 
          onClick={() => window.print()}
          style={{
            background: 'var(--gold)',
            color: 'black',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '1px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            borderRadius: '4px',
            boxShadow: '0 4px 14px rgba(212,175,55,0.2)'
          }}
        >
          PRINT MEMO
        </button>
      </div>

      {/* Main Document Body */}
      <div className="eb-card" style={{ padding: '4rem', background: '#ffffff', color: '#111111', borderRadius: '8px' }}>
        
        {/* Memo Header */}
        <div style={{ borderBottom: '2px solid #111', paddingBottom: '2rem', marginBottom: '3rem' }}>
          <table style={{ width: '100%', fontFamily: 'monospace', fontSize: '1rem', color: '#333' }}>
            <tbody>
              <tr><td style={{ paddingBottom: '0.5rem', width: '150px' }}><strong>TO:</strong></td><td style={{ paddingBottom: '0.5rem' }}>ELON MUSK</td></tr>
              <tr><td style={{ paddingBottom: '0.5rem' }}><strong>FROM:</strong></td><td style={{ paddingBottom: '0.5rem' }}>TRILLIONAIRES LLC</td></tr>
              <tr><td style={{ paddingBottom: '0.5rem' }}><strong>SUBJECT:</strong></td><td style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>PROVING UNIVERSAL HIGH INCOME (UHI) VIA AI & MICRO-MANUFACTURING</td></tr>
              <tr><td><strong>ASK:</strong></td><td>$110,100 SEED FOR PROTOTYPE 001</td></tr>
            </tbody>
          </table>
        </div>

        {/* The Hook */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#111', marginBottom: '1rem' }}>THE THESIS: UNIVERSAL HIGH INCOME (UHI)</h3>
          <p style={{ lineHeight: 1.8, color: '#333', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            You have publicly stated that AI will necessitate Universal Basic Income (UBI). We believe AI enables something far better: <strong>Universal High Income (UHI)</strong>. 
          </p>
          <p style={{ lineHeight: 1.8, color: '#333', fontSize: '1.1rem' }}>
            When an AI designs a company's entire mechanical, financial, and operational architecture in 48 hours, and off-the-shelf robotics automate the heavy lifting inside a 100% off-grid solar container, the margins become so extreme that labor costs detach from standard economics. 
            We can pay blue-collar operators doctors' salaries, and the company still prints millions.
          </p>
        </div>

        {/* The Math */}
        <div className="print-avoid-break" style={{ marginBottom: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '4px', borderLeft: '4px solid #111' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#111', margin: '0 0 1.5rem 0' }}>THE FIRST PRINCIPLES MATH: $200/HR LABOR</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Operator Salary</p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: '#111', margin: '0 0 1rem 0', lineHeight: 1 }}>$200.00 / hr</p>
              <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6 }}>
                We pay a single operator $8,000 per week to load materials, monitor the automated line, and hand-pack luxury goods.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Weekly Gross Profit</p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: '#4caf50', margin: '0 0 1rem 0', lineHeight: 1 }}>$653,400</p>
              <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6 }}>
                At max single-shift capacity (36,000 jars), the 92.6% gross margin yields $653k. <strong>Labor only accounts for 1.2% of the profit.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Alignment */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>ALIGNMENT WITH MUSK INFRASTRUCTURE</h3>
          <ul style={{ lineHeight: 1.8, color: '#333', fontSize: '1.05rem', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
            <li style={{ marginBottom: '1rem' }}><strong>Tesla Energy / Off-Grid:</strong> The 40' high-cube micro-factory operates 100% off-grid via a 48V DC solar matrix and battery storage. Zero utility dependencies.</li>
            <li style={{ marginBottom: '1rem' }}><strong>xAI / Grok:</strong> The entire mechanical integration blueprint, financial modeling, QMS automation, and this very OS were generated by AI.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Optimus (Future-Proof):</strong> The production pace is intentionally gated at 15 Jars/Minute. While a human earns $200/hr today, this is the exact kinematic speed an early-stage Tesla Optimus bot could run the line tomorrow.</li>
          </ul>
        </div>

        {/* The Ask */}
        <div className="print-avoid-break" style={{ padding: '2rem', background: '#111', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#d4af37', margin: '0 0 1rem 0', fontSize: '1.5rem' }}>THE ASK: $110,100</h3>
          <p style={{ fontSize: '1.1rem', color: '#eee', margin: '0 auto 1.5rem auto', lineHeight: 1.6, maxWidth: '800px' }}>
            We do not need a massive venture round. We need <strong>$110,100</strong> to procure the off-the-shelf industrial equipment, the container, the solar matrix, and cover our 16-week salary burn to build Prototype 001.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#eee', margin: '0 auto', lineHeight: 1.6, maxWidth: '800px' }}>
            If Prototype 001 proves the UHI math works, we stamp out thousands of these modular containers across rural America, producing everything from toothpaste to candles, paying thousands of blue-collar workers $200/hour. 
          </p>
        </div>

      </div>

    </div>
  );
}
