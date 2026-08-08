'use client';
import React from 'react';

export default function MasterProjectManualPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
      {/* Hide the print button when printing */}
      <div className="print-avoid-break" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Review the master manual below or save it as a PDF.</p>
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
          PRINT / SAVE PDF
        </button>
      </div>

      {/* Main Document Body */}
      <div className="eb-card" style={{ padding: '4rem', background: '#ffffff', color: '#111111', borderRadius: '8px' }}>
        
        {/* Header */}
        <div style={{ borderBottom: '2px solid #111', paddingBottom: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', color: '#111', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
            Trillionaires LLC
          </h1>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', color: '#444', margin: 0 }}>
            MASTER PROJECT MANUAL & FEASIBILITY STUDY
          </h2>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666', fontFamily: 'monospace' }}>
            PROJECT: OFF-GRID AUTOMATED MICRO-FACTORY<br/>
            LOCATION: RIVERSIDE, WA (OKANOGAN COUNTY)
          </p>
        </div>

        {/* 1. Executive Summary */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>1. EXECUTIVE SUMMARY & BRAND IDENTITY</h3>
          <p style={{ lineHeight: 1.8, color: '#333', fontSize: '1.1rem' }}>
            <strong>Trillionaires LLC</strong> is a luxury health, wellness, and bespoke toiletries brand. The inaugural product line is a premium, all-natural Tooth Polish utilizing a proprietary formulation of French Green Clay (remineralization and gentle abrasion) and Xylitol (antibacterial properties).
          </p>
          <p style={{ lineHeight: 1.8, color: '#333', fontSize: '1.1rem' }}>
            <strong>The Manufacturing Thesis:</strong> Instead of relying on expensive third-party co-packers or taking on massive commercial real-estate overhead, Trillionaires LLC will manufacture in-house using a highly advanced, 100% off-grid <strong>Automated Micro-Factory</strong> built inside a 40-foot High Cube shipping container. By utilizing high-speed automation and massive raw material margins, the brand maintains a luxury retail price point while acquiring customers at a scale competitors cannot financially match.
          </p>
        </div>

        {/* 2. Grant Strategy Callout */}
        <div className="print-avoid-break" style={{ marginBottom: '3rem', padding: '1.5rem', background: '#f8fdf8', borderLeft: '4px solid #4caf50' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#2e7d32', margin: '0 0 1rem 0' }}>GRANT FUNDING ELIGIBILITY</h3>
          <p style={{ lineHeight: 1.6, color: '#333', margin: 0 }}>
            Because this facility is located in a rural Washington county and utilizes advanced sustainable manufacturing, it is highly eligible for non-dilutive grant funding:
          </p>
          <ul style={{ marginTop: '1rem', lineHeight: 1.6, color: '#333' }}>
            <li><strong>USDA REAP (Rural Energy for America Program):</strong> Covers up to 50% of the cost of the renewable energy systems (Solar panels, inverters, batteries, and high-efficiency VFD motors).</li>
            <li><strong>USDA Value-Added Producer Grants (VAPG):</strong> Applicable if raw agricultural ingredients are grown on the homestead and processed into the retail polish.</li>
            <li><strong>Washington State Dept. of Commerce:</strong> WA State aggressively funds Rural Economic Development and sustainable manufacturing initiatives.</li>
          </ul>
        </div>

        {/* 3. Market Analysis */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>2. MARKET ANALYSIS & STRATEGIC POSITIONING</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
            <div>
              <p style={{ lineHeight: 1.6, color: '#333' }}>
                The global luxury cosmetics market is experiencing a massive shift toward natural, fluoride-free, and sustainable ingredients. Consumers willingly pay a premium ($20 - $35 per unit) for aesthetics, efficacy, and clean ingredient profiles.
              </p>
              <p style={{ lineHeight: 1.6, color: '#333' }}>
                Instead of lowering the retail price to compete with drugstore brands, Trillionaires utilizes its <strong>92.6% margin</strong> to dominate Customer Acquisition Costs (CAC). The company can afford to spend $10.00 on targeted digital advertising to acquire a single customer and still net $13.14 in profit per unit.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: '#f5f5f5', borderRadius: '4px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem 0', color: '#555' }}>Retail Price (2oz Jar)</td>
                    <td style={{ textAlign: 'right', fontWeight: 'bold' }}>$24.99</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '0.5rem 0', color: '#555' }}>COGS (Bill of Materials)</td>
                    <td style={{ textAlign: 'right', fontWeight: 'bold' }}>$1.85</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem 0', color: '#555' }}>Gross Margin</td>
                    <td style={{ textAlign: 'right', fontWeight: 'bold', color: '#4caf50' }}>92.6% ($23.14)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. Engineering Specs */}
        <div className="print-avoid-break" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>3. ENGINEERING & ARCHITECTURAL BLUEPRINT</h3>
          <p style={{ lineHeight: 1.6, color: '#333', marginBottom: '1.5rem' }}>
            The facility utilizes modular, off-the-shelf industrial equipment connected via sanitary fittings, eliminating the need for custom welding.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#111', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>System Component</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Sourcing Specification</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#333' }}>Physical Envelope</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>40' High Cube Shipping Container</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>320 sq ft modular cleanroom with epoxy floors & FRP walls.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#333' }}>Power Matrix</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>48V DC Bus / EG4 Off-Grid Inverters</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>100% solar-powered operations with LifePO4 battery storage.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#333' }}>Mixer / Extruder</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>Continuous Jacketed Mixer (100 kg/hr)</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>Homogenizes the clay/xylitol compound continuously.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#333' }}>Fluid Paths</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>316L Stainless Steel Tri-Clamps</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>FDA-compliant sanitary piping (no welding required).</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#333' }}>Automation / QMS</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>Edge PLC & Custom Smart CIP Cart</td>
                <td style={{ padding: '0.75rem', color: '#555' }}>Modbus telemetry logs conductivity/temp for FDA/SQF audits.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. Production Volume Scaling */}
        <div className="print-avoid-break" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>4. CAPACITY & REVENUE SCALING</h3>
          <p style={{ lineHeight: 1.6, color: '#333', marginBottom: '1.5rem' }}>
            The factory paces at exactly <strong>15 Jars / Minute (900 Jars / Hour)</strong>. This ergonomic speed allows a single operator to load jars, monitor the automated line, and hand-pack finished goods without physical strain (handling one 50lb bag every 26 minutes).
          </p>
          
          <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 1rem 0', fontFamily: 'var(--font-display)', color: '#333' }}>WEEKLY REVENUE POTENTIAL (1 OPERATOR)</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', color: '#333' }}>
                <span>Start-Up Phase (1,000 Jars / 1.1 Hours)</span>
                <strong>$18,150 Profit</strong>
              </div>
              <div style={{ width: '100%', background: '#ddd', height: '24px', borderRadius: '2px' }}>
                <div style={{ width: '5%', background: '#d4af37', height: '100%', borderRadius: '2px' }}></div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', color: '#333' }}>
                <span>Target Mid-Market (9,000 Jars / 10 Hours)</span>
                <strong>$163,350 Profit</strong>
              </div>
              <div style={{ width: '100%', background: '#ddd', height: '24px', borderRadius: '2px' }}>
                <div style={{ width: '25%', background: '#d4af37', height: '100%', borderRadius: '2px' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', color: '#333' }}>
                <span>Maximum Single-Shift Capacity (36,000 Jars / 40 Hours)</span>
                <strong style={{ color: '#4caf50' }}>$653,400 Profit</strong>
              </div>
              <div style={{ width: '100%', background: '#ddd', height: '24px', borderRadius: '2px' }}>
                <div style={{ width: '100%', background: '#4caf50', height: '100%', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. CapEx & ROI */}
        <div className="print-avoid-break" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', color: '#111' }}>5. LAUNCH CAPITAL & BREAK-EVEN ANALYSIS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#111', color: '#fff' }}>
                    <th style={{ padding: '0.5rem', textAlign: 'left' }}>Capital Requirement</th>
                    <th style={{ padding: '0.5rem', textAlign: 'right' }}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '0.5rem', color: '#333' }}>Container & Buildout</td><td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>$8,000</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '0.5rem', color: '#333' }}>48V Solar Matrix & Storage</td><td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>$9,500</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '0.5rem', color: '#333' }}>Mixer / Conveyor / Filler</td><td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>$16,500</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '0.5rem', color: '#333' }}>CIP Cart & PLC Hardware</td><td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>$7,500</td></tr>
                  <tr style={{ borderBottom: '2px solid #111' }}><td style={{ padding: '0.5rem', color: '#333' }}>Labeler & CIJ Printer</td><td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>$2,000</td></tr>
                  <tr style={{ background: '#f5f5f5' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#111' }}>TOTAL HARDWARE CAPEX</td>
                    <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 'bold', color: '#111' }}>$43,500</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#555' }}>+ Founders Salary Burn (16 Weeks)</td>
                    <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 'bold', color: '#555' }}>$66,600</td>
                  </tr>
                  <tr style={{ background: '#e8f5e9' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#2e7d32' }}>TOTAL LAUNCH CAPITAL REQUIRED</td>
                    <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: 'bold', color: '#2e7d32' }}>$110,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5rem', background: '#111', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', color: '#d4af37', margin: '0 0 1rem 0' }}>ROI BREAK-EVEN</h4>
              <p style={{ fontSize: '3rem', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem 0', lineHeight: 1 }}>2.66 Hours</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0, lineHeight: 1.6 }}>
                The entire $43,500 factory pays for itself after producing just 2,396 jars. Running at 900 jars an hour, the factory break-even is achieved in 2.66 hours of production.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white !important; }
          nav, aside, header { display: none !important; }
          main { margin: 0 !important; padding: 0 !important; width: 100% !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .print-avoid-break { page-break-inside: avoid; }
          .eb-card { border: none !important; box-shadow: none !important; padding: 0 !important; }
        }
      `}} />
    </div>
  );
}
