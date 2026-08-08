'use client';

import React from 'react';

export default function IngredientCardsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@300;400;600&display=swap');

        /* Dashboard UI Wrapper */
        .print-btn-wrapper {
            margin: 20px;
            text-align: center;
        }
        
        .print-btn {
            background-color: #d4af37;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            text-transform: uppercase;
        }

        /* Cards Container */
        .cards-wrapper {
            font-family: 'Montserrat', sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            justify-content: center;
            color: #1a1a1a;
        }

        .science-card {
            width: 3.5in;
            height: 5in;
            background-color: #fff;
            border: 2px solid #d4af37;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            padding: 25px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            page-break-inside: avoid;
        }

        .science-card .logo-mark {
            text-align: center;
            color: #d4af37;
            font-size: 20px;
            margin-bottom: 5px;
        }

        .science-card h1 {
            font-family: 'Cinzel', serif;
            font-size: 16px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 15px 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            color: #000;
        }

        .science-card .science-content {
            font-size: 11px;
            line-height: 1.5;
            text-align: justify;
            flex-grow: 1;
        }

        .science-card .science-content p {
            margin-top: 0;
            margin-bottom: 10px;
            color: #000;
        }

        .science-card .science-content ul {
            padding-left: 15px;
            margin-bottom: 10px;
        }

        .science-card .science-content li {
            margin-bottom: 5px;
            color: #000;
        }

        .science-card .footer-note {
            font-size: 9px;
            text-align: center;
            color: #999;
            font-style: italic;
            border-top: 1px solid #eee;
            padding-top: 10px;
            margin-top: auto;
        }

        @media print {
            @page { size: letter; margin: 0.5in; }
            body * { visibility: hidden; }
            .cards-wrapper, .cards-wrapper * { visibility: visible; }
            .cards-wrapper { 
                position: absolute; 
                left: 0; 
                top: 0; 
                margin: 0; 
                padding: 0;
                background-color: #fff;
            }
            .science-card { 
                box-shadow: none; 
                border: 1px dashed #999; /* Dashed for cutting */
            }
        }
      `}} />

      <div className="print-btn-wrapper">
        <button className="print-btn" onClick={() => window.print()}>Print Science Cards</button>
        <p style={{color: '#888', marginTop: '10px', fontSize: '0.9rem'}}>Prints best on heavy cardstock. Cut along the dashed lines.</p>
      </div>

      <div className="cards-wrapper">
        
        {/* CARD 1: MCHA */}
        <div className="science-card">
            <div className="logo-mark">✧</div>
            <h1>Microcrystalline Hydroxyapatite</h1>
            <div className="science-content">
                <p><strong>The Enamel Blueprint</strong></p>
                <p>Your tooth enamel is not made of fluoride; it is made of Hydroxyapatite, a naturally occurring crystalline calcium phosphate mineral. Specifically, 97% of your enamel and 70% of your dentin is comprised of this exact mineral.</p>
                <p><strong>The Science of Remineralization:</strong> Every day, acidic foods and bacteria strip minerals from your enamel in a process called <em>demineralization</em>. Traditional toothpastes use fluoride to create a synthetic, acid-resistant patch over these weak spots (fluorapatite).</p>
                <p>Trillionaires Polish uses MCHA to provide the exact biomimetic building blocks your body recognizes. Because it is highly bioavailable, it binds directly to the porous, demineralized surfaces of your teeth, physically filling in the microscopic fissures and restoring the structural integrity of the enamel lattice.</p>
            </div>
            <div className="footer-note">Trillionaires Science Index - Card 01</div>
        </div>

        {/* CARD 2: COCONUT OIL & XYLITOL */}
        <div className="science-card">
            <div className="logo-mark">✧</div>
            <h1>Lauric Acid & Xylitol</h1>
            <div className="science-content">
                <p><strong>The Microbiome Balancers</strong></p>
                <p>Most toothpastes are 50% water, requiring harsh chemical preservatives (like parabens) and foaming detergents (like SLS) to prevent mold. We use a waterless base of Organic Virgin Coconut Oil.</p>
                <p><strong>Lauric Acid:</strong> Coconut oil is composed of nearly 50% Lauric Acid. In clinical studies, Lauric Acid demonstrates potent antimicrobial properties, specifically targeting <em>Streptococcus mutans</em>, the primary bacterium responsible for tooth decay.</p>
                <p><strong>Non-GMO Xylitol:</strong> Xylitol is a natural pentocarbon sugar alcohol. Because it has five carbon atoms instead of six, oral bacteria cannot metabolize it. They ingest the xylitol, expend energy trying to digest it, and ultimately starve. Furthermore, xylitol actively stimulates salivary flow, boosting your mouth's natural alkaline defense system against acid attacks.</p>
            </div>
            <div className="footer-note">Trillionaires Science Index - Card 02</div>
        </div>

        {/* CARD 3: FRENCH GREEN CLAY */}
        <div className="science-card">
            <div className="logo-mark">✧</div>
            <h1>French Green Clay</h1>
            <div className="science-content">
                <p><strong>The Ionic Purifier</strong></p>
                <p>Sourced from the Montmorillonite region of France, this clay is prized in high-end cosmetics for its unique molecular properties.</p>
                <p><strong>Ionic Exchange:</strong> French Green Clay possesses a strong negative electromagnetic charge when activated by moisture (saliva). Toxins, heavy metals, and bacterial byproducts generally carry a positive charge. The clay acts as a molecular magnet, attracting and binding to these impurities so they can be safely expelled when you spit.</p>
                <p><strong>RDA (Relative Dentin Abrasivity):</strong> Unlike the harsh silicas used in commercial whitening pastes that literally scratch the enamel away to remove stains, French Green Clay is incredibly fine. It provides a gentle, non-destructive polishing action that lifts surface stains from coffee and tea while preserving the delicate enamel barrier.</p>
            </div>
            <div className="footer-note">Trillionaires Science Index - Card 03</div>
        </div>

        {/* CARD 4: THE APOTHECARY BLEND */}
        <div className="science-card">
            <div className="logo-mark">✧</div>
            <h1>The Apothecary Blend</h1>
            <div className="science-content">
                <p><strong>Myrrh, Clove, & Trace Minerals</strong></p>
                <p>The flavor profile of Trillionaires Polish is not derived from artificial lab-created flavorings, but from pure, therapeutic-grade botanical extracts.</p>
                <ul>
                    <li><strong>Myrrh:</strong> Used since antiquity, Myrrh resin is highly astringent. In oral care, it is clinically recognized for its ability to tighten and fortify the gingival (gum) tissues, reducing inflammation and bleeding.</li>
                    <li><strong>Clove Bud:</strong> Contains <em>Eugenol</em>, a powerful natural analgesic and antiseptic. It gently soothes nerve endings in the teeth and gums while eliminating anaerobic bacteria.</li>
                    <li><strong>Himalayan Pink Salt:</strong> Provides 84 trace minerals and induces osmosis, drawing excess fluids out of inflamed gums and increasing blood circulation to the tissue to promote rapid healing.</li>
                </ul>
            </div>
            <div className="footer-note">Trillionaires Science Index - Card 04</div>
        </div>

        {/* CARD 5: THE COMPARISON */}
        <div className="science-card">
            <div className="logo-mark">✧</div>
            <h1>The Industry Comparison</h1>
            <div className="science-content" style={{fontSize: '10px'}}>
                <p><strong>Crest (Standard Commercial)</strong></p>
                <ul>
                    <li><strong>Base:</strong> Water & Glycerin (Cheap fillers)</li>
                    <li><strong>Enamel Builder:</strong> Sodium Fluoride (Synthetic patch)</li>
                    <li><strong>Abrasive:</strong> Hydrated Silica (Harsh, scratches enamel)</li>
                    <li><strong>Foaming Agent:</strong> Sodium Lauryl Sulfate (Industrial detergent)</li>
                    <li><strong>Flavor/Sweetener:</strong> Artificial dyes & Saccharin</li>
                </ul>

                <p><strong>Tom's of Maine (Mainstream "Natural")</strong></p>
                <ul>
                    <li><strong>Base:</strong> Water & Glycerin</li>
                    <li><strong>Enamel Builder:</strong> Sodium Fluoride (Still uses synthetic fluoride)</li>
                    <li><strong>Abrasive:</strong> Hydrated Silica (Still uses harsh abrasives)</li>
                    <li><strong>Foaming Agent:</strong> Sodium Lauryl Sulfate (Often still included)</li>
                    <li><strong>Flavor/Sweetener:</strong> Xylitol & Natural flavors</li>
                </ul>

                <p><strong>Trillionaires Bespoke (Luxury Holistic)</strong></p>
                <ul style={{color: '#8c7322', fontWeight: 'bold'}}>
                    <li><strong>Base:</strong> Organic Virgin Coconut Oil (Antimicrobial)</li>
                    <li><strong>Enamel Builder:</strong> MCHA (Biomimetic mineral, 97% of enamel)</li>
                    <li><strong>Abrasive:</strong> French Green Clay (Gentle, ionic detoxifier)</li>
                    <li><strong>Foaming Agent:</strong> NONE. (100% pure active ingredients)</li>
                    <li><strong>Flavor/Sweetener:</strong> Apothecary Essential Oils & Non-GMO Xylitol</li>
                </ul>
            </div>
            <div className="footer-note">Trillionaires Science Index - Card 05</div>
        </div>
      </div>
    </>
  );
}
