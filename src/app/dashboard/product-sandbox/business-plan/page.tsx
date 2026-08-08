'use client';

import React, { useState } from 'react';

export default function BusinessPlanPage() {
  const [shippingModel, setShippingModel] = useState<'free' | 'paid'>('paid');

  // 1oz Constants (Uline S-25204 @ $1.10/jar)
  const msrp = 22.00;
  // COGS Breakdown: $1.10 (Jar+Lid) + $0.20 (Label) + $0.15 (Spatula) + $0.40 (Ingredients) + $0.50 (Labor) = $2.35
  const cogs = 2.35;
  const domesticShippingCost = 4.50;
  
  // 1oz D2C Calculations
  const d2cShippingRevenue = shippingModel === 'paid' ? 5.00 : 0.00;
  const d2cTotalRevenue = msrp + d2cShippingRevenue;
  const d2cTotalCost = cogs + domesticShippingCost;
  const d2cProfit = d2cTotalRevenue - d2cTotalCost;
  const d2cMargin = ((d2cProfit / d2cTotalRevenue) * 100).toFixed(1);
  const unitsFor250k = Math.ceil(250000 / d2cProfit);

  // 2oz (Family Size) Constants & Calculations (Uline S-25205 @ $1.20/jar)
  const msrp2oz = 42.00;
  // COGS Breakdown: $1.20 (Jar+Lid) + $0.20 (Label) + $0.15 (Spatula) + $0.80 (Ingredients) + $0.50 (Labor) = $2.85
  const cogs2oz = 2.85; 
  const cogs2ozWithShipping = cogs2oz + domesticShippingCost;
  const d2cTotalRevenue2oz = msrp2oz + d2cShippingRevenue;
  const d2cProfit2oz = d2cTotalRevenue2oz - cogs2ozWithShipping;
  const d2cMargin2oz = ((d2cProfit2oz / d2cTotalRevenue2oz) * 100).toFixed(1);
  const unitsFor250k2oz = Math.ceil(250000 / d2cProfit2oz);

  // 1oz Wholesale Calculations (Assume 50% MSRP)
  const wholesalePrice = 11.00;
  const wholesaleProfit = wholesalePrice - cogs;
  const wholesaleMargin = ((wholesaleProfit / wholesalePrice) * 100).toFixed(1);
  const wholesaleUnitsFor250k = Math.ceil(250000 / wholesaleProfit);

  // 2oz Wholesale Calculations (Assume 50% MSRP)
  const wholesalePrice2oz = 21.00;
  const wholesaleProfit2oz = wholesalePrice2oz - cogs2oz;
  const wholesaleMargin2oz = ((wholesaleProfit2oz / wholesalePrice2oz) * 100).toFixed(1);
  const wholesaleUnitsFor250k2oz = Math.ceil(250000 / wholesaleProfit2oz);

  // CapEx & Automation Math (2oz size)
  const equipmentMixer = 3500;
  const equipmentFiller = 4500;
  const equipmentLabeler = 1500;
  const totalCapEx = equipmentMixer + equipmentFiller + equipmentLabeler;
  const capExJarsWholesale = Math.ceil(totalCapEx / wholesaleProfit2oz);
  const capExJarsD2C = Math.ceil(totalCapEx / d2cProfit2oz);

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
        }
        .data-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0.55;
        }

        .data-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .data-row:last-child {
          border-bottom: none;
        }
        .data-label {
          color: #a3a3a3;
        }
        .data-value {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.25rem;
          color: #f2f2f2;
        }
        .data-value.highlight {
          color: #d4af37;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .toggle-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #a3a3a3;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-family: "Marcellus", serif;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          transition: all 0.2s;
        }
        .toggle-btn.active {
          background: #d4af37;
          color: #0a0a0a;
          border-color: #d4af37;
        }
      `}} />

      <h1 className="eb-eyebrow">Financial Projections</h1>
      <h2 className="eb-h2">Path to <em>$250k</em> Annually</h2>
      <p style={{ color: '#a3a3a3', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.6 }}>
        Interactive logistics breakdown for Trillionaires Bespoke Tooth Polish. Compare D2C shipping models against local B2B boutique scaling across the 400-mile Pacific Northwest radius.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* D2C Margin Calculator */}
        <div className="data-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37' }}>D2C MARGINS</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className={`toggle-btn ${shippingModel === 'paid' ? 'active' : ''}`}
                onClick={() => setShippingModel('paid')}
              >
                $5 FLAT RATE
              </button>
              <button 
                className={`toggle-btn ${shippingModel === 'free' ? 'active' : ''}`}
                onClick={() => setShippingModel('free')}
              >
                FREE SHIPPING
              </button>
            </div>
          </div>

          <div className="data-row"><span className="data-label">Retail Price (MSRP)</span><span className="data-value">${msrp.toFixed(2)}</span></div>
          {shippingModel === 'paid' && <div className="data-row"><span className="data-label">Customer Paid Shipping</span><span className="data-value">+$5.00</span></div>}
          <div className="data-row"><span className="data-label">COGS (Materials + Labor)</span><span className="data-value">-${cogs.toFixed(2)}</span></div>
          <div className="data-row"><span className="data-label">USPS Ground Advantage (Avg)</span><span className="data-value">-${domesticShippingCost.toFixed(2)}</span></div>
          
          <div className="data-row" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(212, 175, 55, 0.5)' }}>
            <span className="data-label" style={{ color: '#fff' }}>Net Profit Per Jar</span>
            <span className="data-value highlight">${d2cProfit.toFixed(2)}</span>
          </div>
          <div className="data-row">
            <span className="data-label">Gross Margin</span>
            <span className="data-value" style={{ color: '#4caf50' }}>{d2cMargin}%</span>
          </div>
          
          <div style={{ marginTop: '2rem', background: 'rgba(212, 175, 55, 0.05)', padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: '#d4af37', marginBottom: '0.5rem' }}>TARGET: $250K / YR</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Requires <strong style={{color: '#fff'}}>{unitsFor250k.toLocaleString()}</strong> units sold annually.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#a3a3a3' }}>That's roughly <strong>{Math.ceil(unitsFor250k / 12).toLocaleString()} jars/month</strong>.</p>
          </div>
        </div>

        {/* 2oz D2C Margin Calculator */}
        <div className="data-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37' }}>FAMILY SIZE (2oz) MARGINS</h3>
          </div>

          <div className="data-row"><span className="data-label">Retail Price (MSRP)</span><span className="data-value">${msrp2oz.toFixed(2)}</span></div>
          {shippingModel === 'paid' && <div className="data-row"><span className="data-label">Customer Paid Shipping</span><span className="data-value">+$5.00</span></div>}
          <div className="data-row"><span className="data-label">COGS (Materials + Labor + Box)</span><span className="data-value">-${cogs2oz.toFixed(2)}</span></div>
          <div className="data-row"><span className="data-label">USPS Ground Advantage (Avg)</span><span className="data-value">-${domesticShippingCost.toFixed(2)}</span></div>
          
          <div className="data-row" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(212, 175, 55, 0.5)' }}>
            <span className="data-label" style={{ color: '#fff' }}>Net Profit Per Jar</span>
            <span className="data-value highlight">${d2cProfit2oz.toFixed(2)}</span>
          </div>
          <div className="data-row">
            <span className="data-label">Gross Margin</span>
            <span className="data-value" style={{ color: '#4caf50' }}>{d2cMargin2oz}%</span>
          </div>
          
          <div style={{ marginTop: '2rem', background: 'rgba(212, 175, 55, 0.05)', padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: '#d4af37', marginBottom: '0.5rem' }}>TARGET: $250K / YR</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Requires <strong style={{color: '#fff'}}>{unitsFor250k2oz.toLocaleString()}</strong> units sold annually.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#a3a3a3' }}>That's roughly <strong>{Math.ceil(unitsFor250k2oz / 12).toLocaleString()} jars/month</strong>.</p>
          </div>
        </div>

        {/* Wholesale Margin Calculator */}
        <div className="data-card">
          <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>B2B WHOLESALE (1oz)</h3>
          
          <div className="data-row"><span className="data-label">Wholesale Price (50% MSRP)</span><span className="data-value">${wholesalePrice.toFixed(2)}</span></div>
          <div className="data-row"><span className="data-label">Shipping (Paid by Retailer)</span><span className="data-value">$0.00</span></div>
          <div className="data-row"><span className="data-label">COGS (Materials + Labor)</span><span className="data-value">-${cogs.toFixed(2)}</span></div>
          
          <div className="data-row" style={{ marginTop: '3.75rem', paddingTop: '1rem', borderTop: '1px dashed rgba(212, 175, 55, 0.5)' }}>
            <span className="data-label" style={{ color: '#fff' }}>Net Profit Per Jar</span>
            <span className="data-value highlight">${wholesaleProfit.toFixed(2)}</span>
          </div>
          <div className="data-row">
            <span className="data-label">Gross Margin</span>
            <span className="data-value" style={{ color: '#4caf50' }}>{wholesaleMargin}%</span>
          </div>
          
          <div style={{ marginTop: '2rem', background: 'rgba(212, 175, 55, 0.05)', padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: '#d4af37', marginBottom: '0.5rem' }}>TARGET: $250K / YR</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Requires <strong style={{color: '#fff'}}>{wholesaleUnitsFor250k.toLocaleString()}</strong> units sold annually.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#a3a3a3' }}>That's roughly <strong>{Math.ceil(wholesaleUnitsFor250k / 12).toLocaleString()} jars/month</strong>.</p>
          </div>
        </div>

        {/* 2oz Wholesale Margin Calculator */}
        <div className="data-card">
          <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1.5rem' }}>B2B WHOLESALE (2oz)</h3>
          
          <div className="data-row"><span className="data-label">Wholesale Price (50% MSRP)</span><span className="data-value">${wholesalePrice2oz.toFixed(2)}</span></div>
          <div className="data-row"><span className="data-label">Shipping (Paid by Retailer)</span><span className="data-value">$0.00</span></div>
          <div className="data-row"><span className="data-label">COGS (Materials + Labor)</span><span className="data-value">-${cogs2oz.toFixed(2)}</span></div>
          
          <div className="data-row" style={{ marginTop: '3.75rem', paddingTop: '1rem', borderTop: '1px dashed rgba(212, 175, 55, 0.5)' }}>
            <span className="data-label" style={{ color: '#fff' }}>Net Profit Per Jar</span>
            <span className="data-value highlight">${wholesaleProfit2oz.toFixed(2)}</span>
          </div>
          <div className="data-row">
            <span className="data-label">Gross Margin</span>
            <span className="data-value" style={{ color: '#4caf50' }}>{wholesaleMargin2oz}%</span>
          </div>
          
          <div style={{ marginTop: '2rem', background: 'rgba(212, 175, 55, 0.05)', padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: '#d4af37', marginBottom: '0.5rem' }}>TARGET: $250K / YR</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Requires <strong style={{color: '#fff'}}>{wholesaleUnitsFor250k2oz.toLocaleString()}</strong> units sold annually.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#a3a3a3' }}>That's roughly <strong>{Math.ceil(wholesaleUnitsFor250k2oz / 12).toLocaleString()} jars/month</strong>.</p>
          </div>
        </div>
      </div>

      {/* Batch 1 Breakdown Section */}
      <h2 className="eb-h2">Batch One: <em>Prototype Run</em></h2>
      <div className="data-card" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          By carefully sourcing "small bulk" quantities, a $630 upfront investment perfectly yields exactly 100 jars (2oz Family Size) with zero wasted raw inventory sitting on the shelf.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>$630 Investment</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>$210 in raw botanicals (Clay, Xylitol, MCHA, Oils) + $420 in packaging (Jars, Boxes, Spatulas).</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>100 Jar Yield</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>18.5 lbs of paste perfectly fills exactly one hundred 2oz amber glass jars.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>$4,200 Revenue</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Gross retail value of Batch 1 at the $42 MSRP, generating $3,570 in gross profit.</p>
          </div>
        </div>
      </div>

      {/* The 400-Mile Boutique Strategy */}
      <h2 className="eb-h2">The 400-Mile <em>Boutique Strategy</em></h2>
      <div className="data-card" style={{ maxWidth: '900px' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          Omak, WA sits at a prime logistical hub. A 400-mile radius captures some of the most lucrative, health-conscious luxury markets in North America: <strong>Seattle/Bellevue, Spokane, Portland, and Vancouver/Kelowna BC.</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>50 Boutiques</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Targeting high-end salons, wellness spas, and luxury organic markets across the PNW.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>24 Jars / Month</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>A conservative estimate of less than 1 jar sold per day per location (Focusing on the 2oz Family Size).</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>$261,360 / Year</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Net profit generated solely from 50 wholesale accounts selling the 2oz jars (14,400 jars * $18.15 profit).</p>
          </div>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
          <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#fff', marginBottom: '0.5rem' }}>CANADIAN LOGISTICS & TAX ADVANTAGE</h4>
          <p style={{ fontSize: '0.9rem', color: '#a3a3a3', margin: 0 }}>
            With Dual Citizenship and Dori's Native American heritage, registering the Canadian business entity on Native land offers immense tax shields. Wholesale accounts in Vancouver and Kelowna can be serviced directly across the border, bypassing high international D2C shipping rates ($11-$14 via USPS) by utilizing bulk freight or personal delivery runs.
          </p>
        </div>
      </div>

      {/* CapEx & Automation Thresholds */}
      <h2 className="eb-h2" style={{marginTop: '3rem'}}>CapEx & <em>Automation Thresholds</em></h2>
      <div className="data-card" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          When should we transition from manual batching to automated production? This model calculates exactly how many jars must be sold to fund the equipment <strong>entirely out of retained earnings</strong> (zero debt).
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Planetary Mixer</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>${equipmentMixer.toLocaleString()}</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Commercial 20qt mixer for thick clay/coconut oil bases.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Piston Filler</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>${equipmentFiller.toLocaleString()}</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Heated pneumatic filler for precise 2oz dispensing.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Semi-Auto Labeler</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>${equipmentLabeler.toLocaleString()}</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Wraparound labeler for glass jars.</p>
          </div>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
          <h4 style={{ fontFamily: '"Marcellus", serif', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#d4af37', marginBottom: '1rem' }}>TOTAL CAPEX FUNDING MILESTONES</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{color: '#a3a3a3'}}>Total Equipment Cost:</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: '#f2f2f2'}}>${totalCapEx.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{color: '#a3a3a3'}}>Jars needed (Funded via Wholesale):</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: '#f2f2f2'}}><strong>{capExJarsWholesale.toLocaleString()}</strong> jars</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{color: '#a3a3a3'}}>Jars needed (Funded via D2C):</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: '#f2f2f2'}}><strong>{capExJarsD2C.toLocaleString()}</strong> jars</span>
          </div>
        </div>
      </div>

      {/* Market Cap & TAM */}
      <h2 className="eb-h2">Market Potential & <em>TAM</em></h2>
      <div className="data-card" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          The global Natural Toothpaste market is valued at roughly <strong>$2.0 Billion USD</strong> and growing. Trillionaires is positioned in the ultra-premium / luxury wellness niche, capturing individuals migrating away from commercial abrasives.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>0.05% Market Share</h4>
            <p style={{ fontSize: '1.5rem', color: '#4caf50', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>$1,000,000 / yr</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Capturing just one twentieth of one percent of the natural market creates a million-dollar business.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>5,000 Jars / Month</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>$1.08M+ Net Profit</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Scaling to 5k jars a month (via wholesale accounts) generates roughly $1.08M in pure wholesale profit annually.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>The Bottleneck</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3', margin: '0.5rem 0 0' }}>The limiting factor is not demand, but <strong>production capacity</strong>. Funding the $9,500 CapEx setup unlocks the volume needed to service $1M+ in orders.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
