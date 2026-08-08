'use client';

import React from 'react';
import Image from 'next/image';

export default function InvestorPitch() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f9f9f9', // Light theme for printable investor pitch
      color: '#111', 
      fontFamily: '"Jost", "Segoe UI", sans-serif',
      padding: 'clamp(2rem, 5vw, 4rem)',
      position: 'relative'
    }}>
      {/* Import Eternal Bliss Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&family=Marcellus&display=swap');
        
        .pitch-container {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 4rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          border: 1px solid #eaeaea;
        }

        .eb-eyebrow {
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1rem;
        }
        
        .eb-h2 {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-weight: 400;
          font-size: 3.5rem;
          line-height: 1.1;
          color: #111;
          margin: 0 0 1rem;
        }
        .eb-h2 em {
          font-style: italic;
          color: #d4af37;
        }

        .pitch-divider {
          height: 1px;
          background: linear-gradient(90deg, #d4af37, transparent);
          margin: 3rem 0;
          opacity: 0.4;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .metric-box {
          background: #fafafa;
          padding: 1.5rem;
          border-left: 3px solid #d4af37;
        }
        .metric-title {
          font-family: "Marcellus", serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: #666;
          margin: 0 0 0.5rem;
        }
        .metric-value {
          font-family: "Cormorant Garamond", serif;
          font-size: 2rem;
          color: #111;
          margin: 0;
        }

        @media print {
          body { background: #fff; }
          .pitch-container { box-shadow: none; border: none; padding: 0; }
        }
      `}} />

      <div className="pitch-container">
        <h1 className="eb-eyebrow">Investment Memorandum</h1>
        <h2 className="eb-h2">The Trillionaires <em>Micro-Factory</em></h2>
        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.7, marginBottom: '3rem' }}>
          An executive summary of the off-grid, continuous-flow manufacturing architecture powering the Trillionaires oral care revolution.
        </p>

        {/* The Product */}
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1.2rem', color: '#111', marginTop: '3rem' }}>THE PRODUCT: BESPOKE TOOTH POLISH</h3>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
          A highly concentrated, waterless oral care formulation substituting chemical detergents for biological MCHA (Microcrystalline Hydroxyapatite), Xylitol, and French Green Clay. Packaged in a premium 2oz amber glass jar to eliminate microplastics and preserve active botanical oils.
        </p>

        <div className="data-grid">
          <div className="metric-box">
            <h4 className="metric-title">RETAIL (SRP)</h4>
            <p className="metric-value">$42.00</p>
          </div>
          <div className="metric-box">
            <h4 className="metric-title">COGS (LOADED)</h4>
            <p className="metric-value">~$2.85</p>
          </div>
          <div className="metric-box">
            <h4 className="metric-title">GROSS MARGIN</h4>
            <p className="metric-value">93.2%</p>
          </div>
        </div>

        <div className="pitch-divider"></div>

        {/* The Infrastructure */}
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1.2rem', color: '#111' }}>THE INFRASTRUCTURE: CONTINUOUS EXTRUSION</h3>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
          Traditional cosmetic manufacturing relies on massive, stationary batching vats. We have engineered a 100% off-grid, continuous-flow facility inside a 40' High Cube shipping container. Utilizing an inline jacketed pug mill, servo drives, and a high-pressure Clean-In-Place (CIP) skid, the factory outputs product continuously with zero batching downtime.
        </p>

        <div className="data-grid">
          <div className="metric-box">
            <h4 className="metric-title">CAPITAL EXPENDITURE</h4>
            <p className="metric-value">~$43,500</p>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0' }}>Fully loaded container & equipment cost.</p>
          </div>
          <div className="metric-box">
            <h4 className="metric-title">ROI BREAK-EVEN</h4>
            <p className="metric-value">2,396 Jars</p>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0' }}>Paid off in under 2.66 hours of production.</p>
          </div>
          <div className="metric-box">
            <h4 className="metric-title">POWER DEMAND</h4>
            <p className="metric-value">5.7 kW</p>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0' }}>Powered entirely by a 6.4kW roof solar array.</p>
          </div>
        </div>

        <div className="pitch-divider"></div>

        {/* The Yield */}
        <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1.2rem', color: '#111' }}>PRODUCTION YIELD & SCALABILITY</h3>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
          The line is engineered to run at a relaxed pace of 5 jars per minute (300 jars/hour), ensuring zero wear-and-tear on the 50 kg/hr capacity extruder. This enables a single human operator to comfortably manage the entire end-to-end process.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #111' }}>
              <th style={{ textAlign: 'left', padding: '1rem 0', fontFamily: '"Marcellus", serif', fontSize: '0.8rem', color: '#666' }}>OPERATING HOURS</th>
              <th style={{ textAlign: 'left', padding: '1rem 0', fontFamily: '"Marcellus", serif', fontSize: '0.8rem', color: '#666' }}>MONTHLY VOLUME</th>
              <th style={{ textAlign: 'right', padding: '1rem 0', fontFamily: '"Marcellus", serif', fontSize: '0.8rem', color: '#666' }}>EST. WHOLESALE PROFIT</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eaeaea' }}>
              <td style={{ padding: '1.5rem 0', fontFamily: '"Jost", sans-serif', fontWeight: 500 }}>Part-Time (10 Hrs/Week)</td>
              <td style={{ padding: '1.5rem 0', color: '#555' }}>12,000 Jars</td>
              <td style={{ padding: '1.5rem 0', textAlign: 'right', fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', color: '#d4af37' }}>$217,800</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eaeaea' }}>
              <td style={{ padding: '1.5rem 0', fontFamily: '"Jost", sans-serif', fontWeight: 500 }}>Single Shift (40 Hrs/Week)</td>
              <td style={{ padding: '1.5rem 0', color: '#555' }}>48,000 Jars</td>
              <td style={{ padding: '1.5rem 0', textAlign: 'right', fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', color: '#d4af37' }}>$871,200</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eaeaea' }}>
              <td style={{ padding: '1.5rem 0', fontFamily: '"Jost", sans-serif', fontWeight: 500 }}>Double Shift (80 Hrs/Week)</td>
              <td style={{ padding: '1.5rem 0', color: '#555' }}>96,000 Jars</td>
              <td style={{ padding: '1.5rem 0', textAlign: 'right', fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', color: '#d4af37' }}>$1,742,400</td>
            </tr>
          </tbody>
        </table>

        <p style={{ textAlign: 'center', marginTop: '4rem', fontFamily: '"Marcellus", serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#999' }}>
          CONFIDENTIAL — TRILLIONAIRES LLC
        </p>
      </div>

    </div>
  );
}
