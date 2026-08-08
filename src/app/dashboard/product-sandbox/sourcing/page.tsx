'use client';

import React from 'react';

export default function SourcingDashboard() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#0a0a0a', 
      backgroundImage: 'radial-gradient(1200px 800px at 50% -10%, rgba(255, 255, 255, 0.035), transparent 60%), radial-gradient(1000px 700px at 85% 110%, rgba(255, 255, 255, 0.025), transparent 60%)',
      color: '#f2f2f2', 
      fontFamily: '"Jost", "Segoe UI", sans-serif',
      padding: 'clamp(2rem, 5vw, 4rem)',
      position: 'relative'
    }}>
      
      {/* Import Eternal Bliss Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400&family=Marcellus&display=swap');
        
        .eb-eyebrow {
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.75rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1.4rem;
        }
        .eb-eyebrow::before {
          content: "";
          display: inline-block;
          width: 2.2rem;
          height: 1px;
          background: #d4af37;
          opacity: 0.5;
          vertical-align: middle;
          margin-right: 1rem;
        }
        
        .eb-h2 {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-weight: 400;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          margin: 0 0 1rem;
        }
        .eb-h2 em {
          font-style: italic;
          color: #d4af37;
        }

        .data-card {
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 2rem;
          position: relative;
          margin-bottom: 2rem;
        }
        .data-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0.55;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .data-table th {
          font-family: "Marcellus", serif;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: #a3a3a3;
          padding: 1rem 0;
          border-bottom: 1px dashed rgba(212, 175, 55, 0.3);
        }
        .data-table td {
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .data-table tr:last-child td {
          border-bottom: none;
        }
        .item-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.25rem;
          color: #f2f2f2;
        }
        .item-highlight {
          color: #d4af37;
          font-weight: bold;
        }
      `}} />

      <h1 className="eb-eyebrow">Supply Chain Reference</h1>
      <h2 className="eb-h2">Global <em>Wholesale Sourcing</em></h2>
      <p style={{ color: '#a3a3a3', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.6 }}>
        Interactive logistics and pricing database for Trillionaires Bespoke Tooth Polish. Data reflects real-world bulk manufacturing quotes and commodity pricing for raw materials at scale.
      </p>

      {/* Raw Ingredients Table */}
      <div className="data-card">
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>RAW BOTANICALS & MINERALS</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>INGREDIENT</th>
              <th>SOURCE / QUALITY</th>
              <th>BULK VOLUME</th>
              <th>PRICE ESTIMATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.bipacnutraceutical.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>Biological MCHA ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Bovine, BSE-Free (Bi-Pac Nutraceutical)</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>25 kg / ~55 lbs</td>
              <td><span className="item-highlight">~$18.00 / lb</span></td>
            </tr>
            <tr>
              <td><a href="https://www.bulkapothecary.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>Non-GMO Xylitol ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Corn-Derived (Food Grade)</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>55 lb Sack</td>
              <td><span className="item-highlight">~$5.50 / lb</span></td>
            </tr>
            <tr>
              <td><a href="https://www.bulkapothecary.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>French Green Clay ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Cosmetic Grade</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>25 lbs</td>
              <td><span className="item-highlight">~$0.65 / lb</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Pink Himalayan Salt</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Extra Fine Grind</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>50 lbs</td>
              <td><span className="item-highlight">~$0.50 / lb</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Peppermint Essential Oil</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Pure Extraction</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Per Lb</td>
              <td><span className="item-highlight">~$40.00 / lb</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Myrrh Essential Oil</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Pure Extraction</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Per Lb</td>
              <td><span className="item-highlight">~$120.00 / lb</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Clove Essential Oil</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Pure Extraction</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Per Lb</td>
              <td><span className="item-highlight">~$30.00 / lb</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Packaging & Hardware Table */}
      <div className="data-card">
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>PACKAGING & HARDWARE</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PLATFORM / SUPPLIER</th>
              <th>BULK VOLUME</th>
              <th>PRICE ESTIMATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.uline.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>2oz Amber Glass Jars + Lids ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Uline (Model S-25205)</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>24 per Case</td>
              <td><span className="item-highlight">$1.10 - $1.20 / unit</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Custom Printed Cosmetic Boxes</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Noissue / Packlane</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>5,000 units</td>
              <td><span className="item-highlight">~$0.80 - $1.10 / unit</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Custom Roll Labels (Foil/BOPP)</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>UPrinting</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>5,000 units</td>
              <td><span className="item-highlight">~$0.15 - $0.20 / unit</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Wooden Cosmetic Spatulas</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Qosmedix / Wholesale</td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>1,000 units</td>
              <td><span className="item-highlight">~$0.08 - $0.12 / unit</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Industrial Micro-Factory Equipment */}
      <div className="data-card">
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>MICRO-FACTORY EQUIPMENT (CAPEX)</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>SYSTEM / HARDWARE</th>
              <th>PURPOSE</th>
              <th>ESTIMATED COST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.boxhub.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>Used 40' High Cube Container ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>The structural shell (320 sqft).</td>
              <td><span className="item-highlight">~$3,500</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Lab Buildout Materials</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>FRP wall panels, epoxy flooring, insulation.</td>
              <td><span className="item-highlight">~$2,500</span></td>
            </tr>
            <tr>
              <td><a href="https://www.machinio.com/" target="_blank" className="item-name" style={{textDecoration: 'underline', textUnderlineOffset: '4px', color: '#f2f2f2'}}>Inline Jacketed Extruder / Pug Mill ↗</a></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Continuous heating, mixing, and chilling of the paste.</td>
              <td><span className="item-highlight">~$8,500</span></td>
            </tr>
            <tr>
              <td><span className="item-name">Servo Drives & PLCs</span></td>
              <td style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Precision high-torque motors and control boards.</td>
              <td><span className="item-highlight">~$4,000</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem', color: 'var(--text-primary)' }}><a href="#" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Custom Smart CIP Cart (PLC Driven)</a></td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Automated dosing, Modbus/MQTT telemetry</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>$12,500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem', color: 'var(--text-primary)' }}><a href="#" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>EG4 Off-Grid Solar System</a></td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>6000W Inverter, 14.3kWh Battery, Bifacial Array</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>$8,500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem', color: 'var(--text-primary)' }}><a href="#" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Inline Indexing Conveyor</a></td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>VFD Driven, Stainless Steel</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>$2,500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem', color: 'var(--text-primary)' }}><a href="#" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Labeler & TIJ Date Coder</a></td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Print & Apply Expiration / Lot Codes</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>$4,500</td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ padding: '1.5rem', background: 'rgba(212,175,55,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '1px'}}>TOTAL ESTIMATED CAPEX</span>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0}}>Complete continuous manufacturing line.</p>
          </div>
          <div>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#f2f2f2'}}>$43,500</span>
          </div>
        </div>
      </div>

      {/* ROI & Solar Architecture */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* ROI Matrix */}
        <div className="data-card" style={{ marginBottom: 0 }}>
          <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>FACTORY ROI (RETURN ON INVESTMENT)</h3>
          <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
            At a wholesale net profit of <strong>$18.15 per jar</strong>, how long does it take to pay off a $43,500 fully automated continuous manufacturing facility?
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span style={{color: '#a3a3a3'}}>Jars needed to break even:</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#f2f2f2'}}>~2,396 Jars</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span style={{color: '#a3a3a3'}}>Production time required (at 900 jars/hr):</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#4caf50'}}>2.66 Hours</span>
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#a3a3a3' }}>
            <em>The entire factory pays for itself in less than a single day of continuous production.</em>
          </p>
        </div>

        {/* Solar Architecture */}
        <div className="data-card" style={{ marginBottom: 0 }}>
          <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>OFF-GRID SOLAR ARCHITECTURE</h3>
          <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
            <strong>Shore power is entirely unnecessary.</strong> A 40ft container roof provides ~320 sqft of surface area, allowing for direct mounting of bifacial solar panels.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span style={{color: '#a3a3a3'}}>Roof Array (16x 400W Panels):</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#f2f2f2'}}>6,400 Watts</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span style={{color: '#a3a3a3'}}>Peak Factory Load:</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#f2f2f2'}}>~5,700 Watts</span>
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#a3a3a3' }}>
            <em>Factory runs 100% off solar during peak sun, while excess generation charges the 48V EG4 battery bank for overcast days.</em>
          </p>
        </div>

      </div>

    </div>
  );
}
