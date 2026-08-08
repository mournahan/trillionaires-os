'use client';
import React from 'react';

export default function ProductExpansionPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <div className="print-avoid-break" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 className="eb-h1" style={{marginBottom: '0.5rem'}}>Brand Expansion Matrix</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, letterSpacing: '0.5px' }}>
            MANUFACTURING AGILITY & CHANGEOVER PROTOCOLS
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
          PRINT MARKET ANALYSIS
        </button>
      </div>

      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem', fontSize: '1.05rem' }}>
        Because the micro-factory utilizes a <strong>Continuous Jacketed Mixer</strong> and a <strong>Volumetric Piston Filler</strong>, the facility is completely agnostic to the product it produces. By running hot water through the mixer jacket, we can melt waxes and fats. By utilizing the Smart CIP Cart, we can execute a 100% sanitary flavor/scent changeover in 45 minutes with zero cross-contamination. 
        <br/><br/>
        Without purchasing any new capital equipment, the Trillionaires facility can instantly scale into the following luxury wellness markets:
      </div>

      {/* 1. Body Butters */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          01. LUXURY WHIPPED SHEA & COCOA BODY BUTTER
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The jacketed mixer melts raw organic shea butter, cocoa butter, and jojoba oil. Essential oils are infused into the liquid matrix, and the volumetric filler dispenses it hot directly into the standard 4oz amber glass jars. It cools and solidifies in the jar.
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              The clean-skincare market is experiencing a massive ancestral shift. Consumers are rejecting petrochemical lotions in favor of bio-available organic plant fats. By utilizing 100% vegetarian plant butters, we command a massive premium.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$38.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$2.60</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>93% ($35.40)</strong></div>
          </div>
        </div>
      </div>
      {/* 2. Deodorant */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          02. PROBIOTIC DEODORANT PASTE (ALUMINUM-FREE)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Cold-mixed arrowroot powder, baking soda, magnesium, and coconut oil. Dispensed at room temperature into the 2oz glass jars for finger-application (a highly popular luxury format).
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              The natural, aluminum-free deodorant market is a $2.5B industry. Brands like Routine and Aesop have proven that consumers will pay a premium for aesthetic, jar-based application methods. High repeat-purchase rate (30-day lifecycle).
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$22.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$1.60</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>92% ($20.40)</strong></div>
          </div>
        </div>
      </div>

      {/* 3. Luxury Candles */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          03. BEESWAX & OUD LUXURY CANDLES
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Melt pure beeswax and coconut wax in the jacketed mixer. Infuse with luxury fragrance oils (Oud, Sandalwood, Bergamot) via the hopper. The operator manually drops wicks into the empty jars on the conveyor, and the volumetric filler auto-dispenses the liquid wax over the wicks perfectly.
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              The luxury candle market (dominated by brands like Diptyque and Le Labo) supports extreme retail price points based purely on bespoke scent profiles and brand aesthetic. Using identical amber glass jars maintains supply-chain efficiency.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$45.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$4.10</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>90% ($40.90)</strong></div>
          </div>
        </div>
      </div>

      {/* 4. Magnesium Sleep Balm */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          04. BIOHACKER'S MAGNESIUM SLEEP BALM
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The jacketed mixer melts organic shea butter, cocoa butter, and beeswax, then emulsifies it with a highly concentrated Magnesium Chloride brine and Lavender essential oils. It is hot-filled into the amber jars and solidifies.
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Magnesium absorption through the skin bypasses the gut. This aligns perfectly with the longevity and biohacking demographic. Luxury wellness consumers gladly pay a premium for effective natural sleep aids and muscle recovery rubs.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$38.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$2.10</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>94% ($35.90)</strong></div>
          </div>
        </div>
      </div>

      {/* 5. Wet Clay Face Mask */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          05. FRENCH GREEN CLAY PURIFYING FACE MASK
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Utilizing the exact same French Green Clay sourced for the tooth polish, the mixer hydrates the dry clay with purified water, aloe vera, and green tea extract. It is mixed into a wet, luxurious mud mask and dispensed via the piston filler.
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Entering the highest-margin tier of luxury cosmetics without buying new raw materials. Brands like GlamGlow and Aesop sell 2oz mud masks for $45-$60. This utilizes existing supply chains to generate massive gross margins.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$48.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$1.20</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>97.5% ($46.80)</strong></div>
          </div>
        </div>
      </div>

      {/* 6. Men's Grooming Clay */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          06. MEN'S MATTE STYLING CLAY
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Process Integration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The jacketed mixer melts beeswax and castor oil, blending it with bentonite/kaolin clay. It is hot-filled into the amber jars and cools into a dense, premium matte hair styling paste.
            </p>
            <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Market Analysis</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              The men's luxury grooming market is exploding. Brands like Kevin Murphy or Hanz de Fuko charge massive premiums for natural, chemical-free hair clays. 
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>Retail Price</span><strong style={{color: 'var(--text-primary)'}}>$28.00</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}><span style={{color: 'var(--text-secondary)'}}>COGS</span><strong style={{color: 'var(--text-primary)'}}>$1.80</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{color: 'var(--text-primary)'}}>Gross Margin</span><strong style={{color: 'var(--gold)', fontSize: '1.2rem'}}>93.5% ($26.20)</strong></div>
          </div>
        </div>
      </div>

      {/* Changeover Protocol */}
      <div className="eb-card print-avoid-break" style={{ borderColor: 'rgba(76, 175, 80, 0.3)', background: 'rgba(76, 175, 80, 0.02)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', color: '#4caf50', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '1px' }}>
          AUTOMATED CHANGEOVER PROTOCOL (ZERO CROSS-CONTAMINATION)
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Switching from Mint Tooth Polish to Oud Candles does not require manual scrubbing or breaking down the machinery. The Trillionaires Micro-Factory utilizes an automated Clean-In-Place (CIP) loop to guarantee flavor/scent eradication in 45 minutes.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--bg-panel)', padding: '1.5rem', borderRadius: '4px', borderLeft: '2px solid #ff9800' }}>
            <h4 style={{ color: '#ff9800', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}>STEP 1: THERMAL FLUSH</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
              The Smart CIP Cart pumps 185°F water through the hopper, mixer, and filling heads at high velocity, melting away any residual waxes, clays, or fats.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-panel)', padding: '1.5rem', borderRadius: '4px', borderLeft: '2px solid #2196f3' }}>
            <h4 style={{ color: '#2196f3', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}>STEP 2: CAUSTIC WASH</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
              An alkaline solution is circulated through the stainless steel lines. This chemically breaks down and eradicates all essential oils, fragrances, and scent profiles.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-panel)', padding: '1.5rem', borderRadius: '4px', borderLeft: '2px solid #4caf50' }}>
            <h4 style={{ color: '#4caf50', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}>STEP 3: SANITIZE & LOG</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
              An acid wash neutralizes the system. The Edge PLC logs the exact conductivity, temperature, and duration to the QMS Dashboard, proving the system is 100% sanitized for the next product run.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
