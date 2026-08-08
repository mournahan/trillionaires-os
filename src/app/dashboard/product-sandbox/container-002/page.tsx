'use client';
import React from 'react';

export default function Container002Page() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <div className="print-avoid-break" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 className="eb-h1" style={{marginBottom: '0.5rem'}}>Container 002: Solid Bars</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, letterSpacing: '0.5px' }}>
            AUTOMATED COLD-PROCESS SOAP MICRO-FACTORY
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
          PRINT BLUEPRINT
        </button>
      </div>

      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem', fontSize: '1.05rem' }}>
        Container 002 is designed to sit directly adjacent to Container 001. Powered by the same 48V EG4 off-grid solar matrix, it shares a centralized Smart CIP Cart via an umbilical connection. This facility exclusively manufactures the Trillionaires <strong>Solid Bar Matrix</strong> (Soap, Shampoo, Face, Shave, and Massage bars), allowing the brand to capture the entire luxury bathroom ecosystem without a single plastic bottle.
      </div>

      {/* Engineering Blueprint */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.6rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          I. THE ENGINEERING BLUEPRINT
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Unlike the hot-fill piston process of Container 001, Cold Process Saponification requires strict thermal management and extended curing. The 40' high-cube is structurally divided into a "Wet Lab" (front 25 feet) and a "Curing Chamber" (back 15 feet).
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', color: '#fff' }}>
          <thead>
            <tr style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--gold)' }}>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--gold)' }}>System Component</th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--gold)' }}>Specification & Function</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold' }}>Tank A: The Caustic Tank</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                A stainless steel, <strong>water-jacketed cooling tank</strong>. Mixing Sodium Hydroxide (Lye) and water is a highly exothermic reaction (generates extreme heat). The cooling jacket stabilizes the lye solution safely.
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold' }}>Tank B: The Fat Tank</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                A <strong>jacketed heating tank</strong> used to gently melt raw Organic Shea Butter, Cocoa Butter, and Coconut Oils to the exact required temperature for saponification.
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold' }}>Inline Homogenizer</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                A high-shear inline mixer pump that pulls from Tank A and Tank B simultaneously. It forces the Lye and Fats together under intense mechanical pressure, reaching "trace" (emulsion) in seconds.
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold' }}>Extrusion / Mold Conveyor</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                The "trace" liquid soap is dispensed automatically into long, continuous silicone block-molds moving down a servo-driven conveyor belt.
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold', color: '#4caf50' }}>The Curing Chamber</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                The rear 15 feet of the container is insulated and climate-controlled (heavy dehumidification). Molds are racked here for 48 hours to complete saponification and harden.
              </td>
            </tr>
            <tr>
              <td style={{ padding: '1.2rem 1rem', fontWeight: 'bold' }}>Pneumatic Guillotine</td>
              <td style={{ padding: '1.2rem 1rem', color: '#aaa', lineHeight: 1.5 }}>
                An automated wire-cutter slices the 48-hour cured blocks into perfectly uniform 5oz retail bars.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Product Lineup */}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        II. THE SOLID BAR MATRIX
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
        By standardizing the bar shape across the entire product line (e.g., a perfect 5oz square block), we eliminate packaging bottlenecks. A single die-cut paper box fits every product in the facility. 
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Body Bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', borderTop: '4px solid #fff' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>01. The Body Bar</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#aaa', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <strong>Raw Shea Butter, Olive Oil & Activated Charcoal.</strong> The hero daily driver. Unmatched lather and skin nourishment due to the high shea butter content. Striking aesthetic (pitch black bar with white packaging).
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <span style={{color: '#888'}}>Retail: $18.00</span>
            <strong style={{color: 'var(--gold)'}}>Margin: 95% ($17.10)</strong>
          </div>
        </div>

        {/* Face Bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', borderTop: '4px solid #4caf50' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>02. The Face Bar</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#aaa', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <strong>French Green Clay & Tea Tree.</strong> A hyper-gentle facial cleanser. The clay draws out toxins while the tea tree combats acne naturally without stripping the moisture barrier.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <span style={{color: '#888'}}>Retail: $22.00</span>
            <strong style={{color: 'var(--gold)'}}>Margin: 96% ($21.15)</strong>
          </div>
        </div>

        {/* Shampoo Bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', borderTop: '4px solid #2196f3' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>03. The Shampoo Bar</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#aaa', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <strong>Castor Oil & Rosemary.</strong> High castor oil content creates massive, fluffy lather for hair. Rosemary oil stimulates follicle growth. Replaces the plastic shampoo bottle completely.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <span style={{color: '#888'}}>Retail: $24.00</span>
            <strong style={{color: 'var(--gold)'}}>Margin: 95% ($22.90)</strong>
          </div>
        </div>

        {/* Shaving Bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', borderTop: '4px solid #9e9e9e' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>04. The Shaving Bar</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#aaa', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <strong>Bentonite Clay & Cedarwood.</strong> Formulated for intense "slip." The bentonite clay allows a razor to glide flawlessly over the skin, eliminating razor burn.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <span style={{color: '#888'}}>Retail: $20.00</span>
            <strong style={{color: 'var(--gold)'}}>Margin: 94% ($18.80)</strong>
          </div>
        </div>

        {/* Massage Bar */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', borderTop: '4px solid #673ab7' }}>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 0 1rem 0' }}>05. The Massage Bar</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#aaa', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <strong>Zero Lye. Pure Shea & Lavender.</strong> A solid lotion bar. It remains solid at room temperature but instantly melts upon skin contact during a massage.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <span style={{color: '#888'}}>Retail: $28.00</span>
            <strong style={{color: 'var(--gold)'}}>Margin: 96% ($26.90)</strong>
          </div>
        </div>

      </div>

      {/* Labor & Capacity Integration */}
      <div className="eb-card print-avoid-break" style={{ borderColor: 'rgba(212, 175, 55, 0.3)', background: 'rgba(212, 175, 55, 0.02)', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          UNIVERSAL HIGH INCOME (UHI) INTEGRATION
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          Just like Container 001, the automation (inline high-shear homogenization and pneumatic guillotine cutting) completely removes the manual labor of stirring lye and hand-cutting soap blocks. <strong>One operator</strong> manages the raw material loading and final boxing, earning the identical <strong>$200/hr UHI salary</strong>. Because a 5oz bar costs approximately $0.95 in organic raw materials (Shea/Cocoa/Lye/Fragrance) and retails for $15-$28, the margins easily absorb the $200/hr labor model.
        </p>
      </div>

      {/* 10-Hour Shift Breakdown */}
      <div className="eb-card print-avoid-break" style={{ borderColor: 'rgba(33, 150, 243, 0.3)', background: 'rgba(33, 150, 243, 0.02)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#2196f3', fontSize: '1.3rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          CAPACITY & THE 10-HOUR SHIFT
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          To match the exact ergonomic pacing of Container 001, the inline homogenizer is governed to dispense at exactly <strong>15 Bars / Minute (900 Bars / Hour)</strong>. The system can be stopped and started instantly, making it perfect for a standard shift model. 
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>THE 10-HOUR SHIFT</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.2rem', margin: 0 }}>
              <li><strong>Hour 1 (Startup):</strong> Melt fats in Tank B, prepare Caustic in Tank A.</li>
              <li><strong>Hours 2-9 (Production):</strong> 8 hours of continuous inline extrusion into molds. The operator simultaneously runs 48-hour cured blocks from two days prior through the guillotine and boxes them.</li>
              <li><strong>Hour 10 (Sanitation):</strong> Connect the Smart CIP Cart to flush the homogenizer and lines (stopping production completely for the night).</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '4px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ color: '#2196f3', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>DAILY YIELD (1 OPERATOR)</h4>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0', lineHeight: 1 }}>7,200 Bars</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              (8 hours active production × 900 bars/hr). At a $20 average retail price, a single operator generates <strong>$144,000 in gross revenue per shift.</strong>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
