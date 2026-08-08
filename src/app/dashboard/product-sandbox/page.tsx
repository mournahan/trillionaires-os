'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductSandboxHub() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#0a0a0a', 
      backgroundImage: 'radial-gradient(1200px 800px at 50% -10%, rgba(255, 255, 255, 0.035), transparent 60%), radial-gradient(1000px 700px at 85% 110%, rgba(255, 255, 255, 0.025), transparent 60%)',
      color: '#f2f2f2', 
      fontFamily: '"Jost", "Segoe UI", sans-serif',
      position: 'relative',
      paddingBottom: '4rem'
    }}>
      
      {/* Import Eternal Bliss Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&family=Marcellus&display=swap');
        
        .eb-eyebrow {
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.75rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1.4rem;
          display: flex;
          align-items: center;
        }
        .eb-eyebrow::before {
          content: "";
          display: inline-block;
          width: 2.2rem;
          height: 1px;
          background: #d4af37;
          opacity: 0.5;
          margin-right: 1rem;
        }
        
        .eb-h2 {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-weight: 400;
          font-size: clamp(2.1rem, 5vw, 3.3rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          margin: 0 0 1rem;
        }
        .eb-h2 em {
          font-style: italic;
          color: #d4af37;
        }
        
        .eb-btn {
          display: inline-block;
          font-family: "Marcellus", Georgia, serif;
          font-size: 0.8rem;
          letter-spacing: 0.32em;
          text-indent: 0.32em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #d4af37;
          border: 1px solid #d4af37;
          padding: 1.05rem 2.6rem;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.35s, color 0.35s, box-shadow 0.35s;
          margin-top: 2rem;
        }
        .eb-btn:hover {
          background: transparent;
          color: #d4af37;
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .eb-card {
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: clamp(1.8rem, 4vw, 2.6rem);
          position: relative;
          transition: border-color 0.35s;
          cursor: pointer;
          text-decoration: none;
          display: block;
        }
        .eb-card:hover {
          border-color: #d4af37;
        }
        .eb-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0.55;
        }

        @keyframes rotate-3d {
          0% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
        }
      `}} />

      {/* =========================================
          CUSTOMER FACING MOCK STOREFRONT
          ========================================= */}
      
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 4rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Subtle Rotating 3D Emblem Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'min(140vmin, 1200px)',
          height: 'min(140vmin, 1200px)',
          opacity: 0.06,
          pointerEvents: 'none',
          color: '#d4af37',
          animation: 'rotate-3d 60s linear infinite',
          transformStyle: 'preserve-3d'
        }}>
          <svg viewBox="0 0 200 200" style={{width: '100%', height: '100%'}}>
            <g fill="none" stroke="currentColor">
              {/* Outer geometric rings */}
              <circle cx="100" cy="100" r="90" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 8"/>
              
              {/* The T */}
              <path d="M 70 50 L 130 50 M 100 50 L 100 150 M 85 150 L 115 150 M 70 50 L 70 65 M 130 50 L 130 65" strokeWidth="3" strokeLinecap="square"/>
              
              {/* Falcon Wings spreading from the T */}
              <path d="M 90 90 L 20 40 L 40 90 L 15 95 L 45 110 L 95 110" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M 110 90 L 180 40 L 160 90 L 185 95 L 155 110 L 105 110" strokeWidth="1.5" strokeLinejoin="round"/>
              
              {/* Diamond center */}
              <polygon points="100,75 110,100 100,125 90,100" strokeWidth="1.5"/>
            </g>
          </svg>
        </div>

        <p className="eb-eyebrow" style={{justifyContent: 'center'}}>The Apogee of Oral Care</p>
        <h2 className="eb-h2" style={{fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', margin: '1rem 0', position: 'relative', zIndex: 1, letterSpacing: '0.05em'}}>TRILLIONAIRES</h2>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '1.8rem', color: '#a3a3a3', marginBottom: '4rem', position: 'relative', zIndex: 1 }}>Bespoke Tooth Polish</p>
        
        {/* Generated Image Mockup */}
        <div style={{ position: 'relative', zIndex: 1, marginBottom: '4rem', width: '100%', maxWidth: '800px', marginInline: 'auto' }}>
            <Image 
              src="/amber_jar_mockup.png" 
              alt="Trillionaires Bespoke Tooth Polish in a dark amber glass jar" 
              width={800} 
              height={500} 
              style={{ width: '100%', height: 'auto', borderRadius: '4px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}
            />
        </div>

        <p style={{ maxWidth: '720px', lineHeight: '1.8', color: '#f2f2f2', marginBottom: '1.5rem', fontSize: '1.15rem', position: 'relative', zIndex: 1, fontWeight: 300 }}>
          <strong style={{color: '#d4af37'}}>Your mouth is the gateway to your biological system; treating it with commercial detergents and synthetic dyes is a compromise we refuse to make.</strong> We believe oral care should be treated with profound intentionality. 
        </p>
        <p style={{ maxWidth: '720px', lineHeight: '1.8', color: '#a3a3a3', marginBottom: '3.5rem', position: 'relative', zIndex: 1, fontWeight: 300 }}>
          Trillionaires Bespoke Tooth Polish is a radical departure from the standard tube. We formulated a concentrated, waterless polish using only the highest-grade biological minerals and botanical oils on earth. Every brush is an energetic shift, rebuilding your enamel and anchoring your health at the cellular level.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <button className="eb-btn" onClick={() => alert("Checkout flow would initiate here via Stripe.")}>
            Acquire — $42
          </button>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#d4af37', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>
              ✦ Flat Rate Shipping to USA & Canada ✦
            </p>
            <p style={{ fontSize: '0.85rem', color: '#a3a3a3', margin: 0 }}>
              Registered Native American-Owned Enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Grid Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 4rem)', background: '#111' }}>
        <h2 className="eb-h2" style={{ textAlign: 'center', marginBottom: '4rem' }}>The Anatomy of a <em>Trillion-Dollar Smile</em></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', width: '100%', borderRadius: '4px', overflow: 'hidden', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
             <Image 
                src="/apothecary_ingredients.png" 
                alt="Raw botanical ingredients including pink salt, french clay, peppermint, and clove" 
                width={600} 
                height={600} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(212, 175, 55, 0.3)', pointerEvents: 'none' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            <div style={{ borderLeft: '1px solid #d4af37', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontFamily: '"Marcellus", serif', color: '#f2f2f2', fontSize: '1.1rem', letterSpacing: '0.1em', margin: '0 0 0.5rem' }}>Biological MCHA</h4>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', color: '#d4af37', fontStyle: 'italic', margin: '0 0 1rem', fontSize: '1.1rem' }}>The Enamel Builder</p>
              <p style={{ color: '#a3a3a3', fontWeight: 300, lineHeight: 1.7, fontSize: '0.95rem' }}>The exact biological mineral that makes up 97% of your tooth enamel. It acts as the gold standard for natural remineralization, physically integrating with your teeth overnight.</p>
            </div>

            <div style={{ borderLeft: '1px solid #d4af37', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontFamily: '"Marcellus", serif', color: '#f2f2f2', fontSize: '1.1rem', letterSpacing: '0.1em', margin: '0 0 0.5rem' }}>French Green Clay</h4>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', color: '#d4af37', fontStyle: 'italic', margin: '0 0 1rem', fontSize: '1.1rem' }}>The Gentle Polisher</p>
              <p style={{ color: '#a3a3a3', fontWeight: 300, lineHeight: 1.7, fontSize: '0.95rem' }}>A powerhouse of trace minerals. It acts like a magnet, drawing out impurities and gently buffing away surface stains without aggressively scratching enamel.</p>
            </div>

            <div style={{ borderLeft: '1px solid #d4af37', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontFamily: '"Marcellus", serif', color: '#f2f2f2', fontSize: '1.1rem', letterSpacing: '0.1em', margin: '0 0 0.5rem' }}>Non-GMO Xylitol</h4>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', color: '#d4af37', fontStyle: 'italic', margin: '0 0 1rem', fontSize: '1.1rem' }}>The Bacteria Starver</p>
              <p style={{ color: '#a3a3a3', fontWeight: 300, lineHeight: 1.7, fontSize: '0.95rem' }}>Provides a clean sweetness, but cavity-causing bacteria can't digest it. They eat it, starve, and die, while it naturally stimulates healthy saliva production.</p>
            </div>

            <div style={{ borderLeft: '1px solid #d4af37', paddingLeft: '1.5rem' }}>
              <h4 style={{ fontFamily: '"Marcellus", serif', color: '#f2f2f2', fontSize: '1.1rem', letterSpacing: '0.1em', margin: '0 0 0.5rem' }}>The Apothecary Blend</h4>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', color: '#d4af37', fontStyle: 'italic', margin: '0 0 1rem', fontSize: '1.1rem' }}>Tonics, Oils, & Antioxidants</p>
              <p style={{ color: '#a3a3a3', fontWeight: 300, lineHeight: 1.7, fontSize: '0.95rem' }}>A bespoke infusion of Peppermint, Myrrh, Clove, Pink Salt, Baking Soda, and pure Vitamin E (Tocopherol) to tighten gums, soothe tissue, and naturally preserve the polish.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          INTERNAL SANDBOX CONTROLS
          ========================================= */}
      
      <div style={{ padding: '4rem clamp(2rem, 5vw, 4rem)', borderTop: '1px dashed rgba(255, 255, 255, 0.2)', marginTop: '4rem', background: '#050505' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', gap: '1.5rem' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }}></div>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.85rem', letterSpacing: '0.3em', color: '#555', margin: 0 }}>INTERNAL BUSINESS CONTROLS</p>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }}></div>
        </div>

        {/* Revenue Widget */}
        <div style={{
            background: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            padding: '2rem',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', opacity: 0.55 }}></div>
            <div>
            <h3 style={{ fontFamily: '"Marcellus", serif', color: '#a3a3a3', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>PRODUCTION POTENTIAL</h3>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', margin: 0, color: '#f2f2f2' }}>750 <span style={{fontSize: '1rem', color: '#a3a3a3', fontFamily: '"Jost", sans-serif'}}>Jars / 10 hrs</span></p>
            </div>
            <div>
            <h3 style={{ fontFamily: '"Marcellus", serif', color: '#a3a3a3', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>RETAIL SRP (2oz)</h3>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', margin: 0, color: '#d4af37' }}>$42.00</p>
            </div>
            <div>
            <h3 style={{ fontFamily: '"Marcellus", serif', color: '#a3a3a3', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>COGS (INCL. LABOR)</h3>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', margin: 0, color: '#f2f2f2' }}>~$2.85</p>
            </div>
            <div>
            <h3 style={{ fontFamily: '"Marcellus", serif', color: '#a3a3a3', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>D2C GROSS MARGIN</h3>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', margin: 0, color: '#f2f2f2' }}>93.2%</p>
            </div>
        </div>

        {/* Internal Assets Hub */}
        <h2 className="eb-h2" style={{color: '#888'}}>Business & <em>Assets Hub</em></h2>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.8rem)'
        }}>
            <Link href="/dashboard/product-sandbox/business-plan" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Logistics</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Business Plan</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>Sales volume targets, wholesale strategies, and D2C margins.</p>
            </Link>

            <Link href="/dashboard/product-sandbox/sourcing" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Procurement</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Sourcing Hub</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>Raw material quotes, equipment ROI, and factory solar architecture.</p>
            </Link>

            <Link href="/dashboard/product-sandbox/sales-pamphlet" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>D2C Insert</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Sales Pamphlet</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>The FDA-compliant D2C brochure for packaging inserts.</p>
            </Link>

            <a href="/cricut-label.svg" target="_blank" rel="noopener noreferrer" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Die-Cut Template</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Cricut Label SVG</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>The continuous "Lollipop" vector template for print & cut.</p>
            </a>

            <Link href="/dashboard/product-sandbox/family-generator" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Bulk Generation</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Mail Merge Generator</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>Generate personalized "Friends & Family" brochures.</p>
            </Link>

            <Link href="/dashboard/product-sandbox/ingredient-cards" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Deep Dive</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Science Index Cards</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>Deep-dive biological science cards for the unboxing experience.</p>
            </Link>

            <Link href="/dashboard/product-sandbox/micro-factory" className="eb-card" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>Blueprint</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Micro-Factory</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>40ft container structural layout and off-grid power calculations.</p>
            </Link>

            <Link href="/dashboard/product-sandbox/investor-pitch" className="eb-card" style={{borderColor: 'rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)'}}>
            <p style={{ fontFamily: '"Marcellus", serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4af37', margin: '0 0 1.2rem' }}>B2B & Capital</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', color: '#f2f2f2', margin: '0 0 0.5rem' }}>Investor Pitch Deck</h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.95rem', margin: 0 }}>Printable memorandum outlining ROI, margins, and facility capacity.</p>
            </Link>
        </div>
      </div>

    </div>
  );
}
