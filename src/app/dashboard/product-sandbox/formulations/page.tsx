'use client';
import React from 'react';

export default function FormulationLabPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <div className="print-avoid-break" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h1 className="eb-h1" style={{marginBottom: '0.5rem'}}>Formulation Lab</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0, letterSpacing: '0.5px' }}>
            DEEP-DIVE PRODUCT PROFILES & BRAND ARCHITECTURE
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
          PRINT PROFILES
        </button>
      </div>

      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem', fontSize: '1.05rem' }}>
        The Trillionaires product architecture is divided into two distinct psychological categories: <strong>Multi-Variant Lines</strong> (daily-use items where scent/flavor drives the purchasing decision and encourages multi-pack bundling) and <strong>Single Hero Items</strong> (hyper-functional, biohacking products where offering choices dilutes the authority of the formulation).
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        PART I: MULTI-VARIANT LINES
      </h2>

      {/* Tooth Polish */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.6rem', marginBottom: '1rem' }}>
          01. Remineralizing Tooth Polish
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          <strong>The Hook:</strong> A fluoride-free, glycerin-free alternative to traditional toothpaste. Uses French Green Clay to remineralize enamel and Xylitol to starve decay-causing bacteria.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid var(--gold)' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant A: Mint Cacao</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>The flagship luxury flavor. Rich, earthy cacao balanced with crisp peppermint. Extremely unique flavor profile.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #555' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant B: Activated Charcoal & Mint</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>The high-contrast aesthetic variant. Charcoal acts as an intense visual abrasive for whitening appeal.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #ff9800' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant C: Sweet Orange & Clove</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>A warm, highly antibacterial blend. Clove is naturally numbing and soothing for sensitive gums.</p>
          </div>
        </div>
      </div>

      {/* Body Butter */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.6rem', marginBottom: '1rem' }}>
          02. Whipped Shea & Cocoa Body Butter
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          <strong>The Hook:</strong> Rejecting petrochemical lotions in favor of bio-available, organic plant fats. The blend of Shea and Cocoa butter offers unmatched cellular absorption and hydration. 100% Vegetarian.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #ddd' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant A: Pure Organic (Unscented)</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>For purists, infants, or hyper-sensitive skin. Just raw organic Shea Butter, Cocoa Butter, and Jojoba oil.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #d4af37' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant B: Vanilla Bean & Sandalwood</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>The luxury cosmetic feel. A warm, complex scent profile that elevates the raw plant fats into high-end skincare.</p>
          </div>
        </div>
      </div>

      {/* Deodorant */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.6rem', marginBottom: '1rem' }}>
          03. Probiotic Deodorant Paste
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          <strong>The Hook:</strong> An aluminum-free, jar-based paste. Baking soda and arrowroot neutralize odor, while coconut oil nourishes the skin microbiome. Finger-application feels like a luxury ritual.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #8bc34a' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant A: Bergamot & Lime</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>Bright, fresh, and citrus-forward. The classic "clean" scent profile.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #795548' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant B: Cedarwood & Juniper</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>Earthy, grounded, and slightly masculine/unisex. Highly popular in the outdoor-wellness demographic.</p>
          </div>
        </div>
      </div>

      {/* Candles */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--gold)', fontSize: '1.6rem', marginBottom: '1rem' }}>
          04. Beeswax Luxury Candles
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          <strong>The Hook:</strong> 100% natural beeswax and coconut wax blend that cleanses the air as it burns (emitting negative ions), unlike toxic paraffin alternatives.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #212121' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant A: Oud & Bergamot</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>Heavy, dark, and exceptionally expensive-smelling. The signature scent of a high-end boutique.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '4px', borderLeft: '2px solid #aed581' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Variant B: Palo Santo & Sage</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>Designed for the yoga/wellness demographic. Smells like a spiritual cleanse.</p>
          </div>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        PART II: SINGLE HERO ITEMS
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
        These products solve a specific physiological or aesthetic problem. By offering only one version, we project absolute confidence that this is the scientifically perfect formulation.
      </p>

      {/* Magnesium Balm */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem', borderTop: '4px solid #673ab7' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--text-primary)', fontSize: '1.6rem', margin: '0 0 0.5rem 0' }}>
          05. Biohacker's Magnesium Sleep Balm
        </h3>
        <p style={{ color: '#673ab7', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 'bold' }}>HERO ITEM (No Variants)</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          <strong>The Formulation:</strong> Magnesium Chloride Brine, Beeswax, Organic Shea Butter, Lavender Oil, Cedarwood Oil.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          <strong>The Pitch:</strong> "We don't make an 'energizing' magnesium. This balm is explicitly engineered to bypass the gut, absorb transdermally, and aggressively down-regulate the central nervous system for deep REM sleep. Apply to the soles of the feet 20 minutes before bed."
        </p>
      </div>

      {/* Mud Mask */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem', borderTop: '4px solid #4caf50' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--text-primary)', fontSize: '1.6rem', margin: '0 0 0.5rem 0' }}>
          06. French Green Mud Mask
        </h3>
        <p style={{ color: '#4caf50', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 'bold' }}>HERO ITEM (No Variants)</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          <strong>The Formulation:</strong> Hydrated French Green Clay, Organic Aloe Vera Leaf Juice, Green Tea Extract.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          <strong>The Pitch:</strong> "The ultimate purifying skin reset. French Green Clay acts as a bio-magnet, drawing heavy metals and toxins out of the pores, while the Aloe Vera immediately re-hydrates the skin barrier. Perfection requires no alternatives."
        </p>
      </div>

      {/* Styling Clay */}
      <div className="eb-card print-avoid-break" style={{ marginBottom: '2rem', borderTop: '4px solid #9e9e9e' }}>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'var(--text-primary)', fontSize: '1.6rem', margin: '0 0 0.5rem 0' }}>
          07. Men's Matte Styling Clay
        </h3>
        <p style={{ color: '#9e9e9e', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 'bold' }}>HERO ITEM (No Variants)</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          <strong>The Formulation:</strong> Bentonite Clay, Beeswax, Castor Oil, subtle Oud fragrance.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          <strong>The Pitch:</strong> "High-hold, zero-shine, and completely free of the petrochemicals found in drugstore pomades. It utilizes Bentonite clay to add volume and texture without degrading hair health."
        </p>
      </div>

    </div>
  );
}
