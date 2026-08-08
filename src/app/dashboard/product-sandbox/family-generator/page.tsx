'use client';

import React, { useState } from 'react';

export default function FamilyGeneratorPage() {
  const [namesText, setNamesText] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isPrinting, setIsPrinting] = useState(false);

  const generateAndPrint = () => {
    if (!namesText.trim()) {
      alert("Please enter at least one name.");
      return;
    }
    const names = namesText.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    setGeneratedNames(names);
    setIsPrinting(true);

    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 500);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--font-body)', color: 'var(--white)', minHeight: '100vh', background: 'var(--background)' }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@300;400;600&display=swap');

        @media print {
            body * { visibility: hidden; }
            #print-area, #print-area * { visibility: visible; }
            #print-area { position: absolute; left: 0; top: 0; margin: 0; width: 100%; }
            
            /* FORCE BACKGROUND PRINTING IN WEBKIT */
            * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            @page { margin: 0; }
            html, body {
                background: #ffffff !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            
            .pamphlet-page {
                page-break-after: always;
                font-family: 'Montserrat', sans-serif;
                line-height: 1.4;
                color: #222222;
                background-color: #ffffff;
                margin: 0;
                padding: 0.25in;
                width: 8.5in;
                height: 11in;
                box-sizing: border-box;
                overflow: hidden;
            }

            .container {
                border: 2px solid #d4af37;
                padding: 10px 20px;
                height: 10.4in;
                box-sizing: border-box;
                position: relative;
                display: flex;
                flex-direction: column;
            }

            .logo-mark { text-align: center; color: #d4af37; font-size: 20px; margin-bottom: 2px; }
            h1.pamphlet-title { font-family: 'Cinzel', serif; font-size: 26px; color: #111111; text-align: center; margin: 0; letter-spacing: 2px; font-weight: 700; }
            .subtitle { text-align: center; font-style: italic; color: #666666; font-size: 12px; margin-bottom: 6px; }
            
            .intro { font-size: 11px; text-align: justify; margin-bottom: 6px; font-weight: 400; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 6px; color: #333333; }
            .intro strong { color: #d4af37; font-weight: 600; font-size: 12px; }
            
            .product-shot { text-align: center; margin: 4px 0; }
            .product-shot img { max-height: 100px; border-radius: 4px; border: 1px solid rgba(212, 175, 55, 0.3); }

            h2.pamphlet-h2 { font-family: 'Cinzel', serif; font-size: 16px; color: #111111; text-align: center; margin-bottom: 6px; letter-spacing: 1px; margin-top: 6px; font-weight: 700; }
            
            .ingredients-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 8px; color: #222222;}
            .ingredient { margin-bottom: 2px; font-size: 10px; }
            .ingredient strong { color: #111111; font-weight: 700; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; display: block; }
            .ingredient span.role { color: #d4af37; font-style: italic; display: block; margin-bottom: 1px; }
            
            .usage-section { background-color: #f9f9f9; border-left: 3px solid #d4af37; padding: 6px 10px; margin-top: 6px; font-size: 10px; color: #222222;}
            .usage-section h3 { font-family: 'Cinzel', serif; font-size: 12px; margin-top: 0; margin-bottom: 3px; color: #111111; font-weight: 700; }
            .usage-section ul { margin: 0; padding-left: 20px; }
            .usage-section li { margin-bottom: 3px; color: #222222; }
            
            .footer { text-align: center; font-size: 10px; color: #666666; font-style: italic; padding: 5px 20px 0 20px; margin-top: auto; }
            .qr-section { text-align: center; margin-top: 8px; padding-top: 8px; border-top: 1px dashed #d4af37; color: #111111;}
            .qr-section img { width: 85px; height: 85px; border: 1px solid #d4af37; padding: 4px; border-radius: 4px; background: #fff; }
            .qr-section p { font-size: 10px; font-weight: 700; color: #111111; margin-top: 5px; margin-bottom: 0; text-transform: uppercase; letter-spacing: 1px; }
        }
      `}} />

      {!isPrinting && (
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#222', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--cyan)' }}>Bespoke Pamphlet Generator</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Enter a list of names (one per line). The system will generate a customized Trillionaires pamphlet for each person and open the print dialog.
          </p>
          <textarea 
            value={namesText}
            onChange={(e) => setNamesText(e.target.value)}
            placeholder="Mike&#10;Courtney&#10;Kaden&#10;Gabriella"
            style={{
              width: '100%',
              height: '150px',
              padding: '1rem',
              fontFamily: 'var(--font-body)',
              background: '#111',
              color: '#fff',
              border: '1px solid #444',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}
          />
          <button 
            onClick={generateAndPrint}
            style={{
              width: '100%',
              background: '#d4af37',
              color: '#000',
              padding: '1rem',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-display)',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Generate & Print
          </button>
        </div>
      )}

      {/* Hidden Print Area */}
      <div id="print-area" style={{ display: isPrinting ? 'block' : 'none' }}>
        {generatedNames.map((name, index) => (
          <div key={index} className="pamphlet-page">
            <div className="container">
                <div className="logo-mark">✧</div>
                <h1 className="pamphlet-title">TRILLIONAIRES</h1>
                <div className="subtitle">BESPOKE TOOTH POLISH</div>
        
                <div className="intro">
                    <strong>{name}, you have been exclusively selected</strong> to beta-test the future of oral care. 
                    We believe oral care should be treated with profound intentionality. 
                    We threw out the corporate rulebook and built this tooth polish from scratch in our secret lab (aka the kitchen). You're holding our very first beta-test batch! You aren't just brushing your teeth anymore. You are investing in them.
                </div>
        
                <h2 className="pamphlet-h2">The Anatomy of a Trillion-Dollar Smile</h2>
                
                <div className="ingredients-grid">
                    <div className="ingredient">
                        <strong>Microcrystalline Hydroxyapatite (MCHA)</strong>
                        <span className="role">The Magic Enamel Builder</span>
                        We didn't just add calcium. MCHA is the exact biological mineral that makes up 97% of your tooth enamel. It is the gold standard for natural remineralization.
                    </div>
                    <div className="ingredient">
                        <strong>Organic Virgin Coconut Oil</strong>
                        <span className="role">The Antimicrobial Binder</span>
                        The base isn't water; it’s pure, organic coconut oil loaded with Lauric Acid, which actively hunts down and destroys the pesky bacteria that causes cavities.
                    </div>
                    <div className="ingredient">
                        <strong>French Green Clay</strong>
                        <span className="role">The Gentle Polisher</span>
                        A powerhouse of trace minerals. It gently buffs away surface stains and acts like a magnet, drawing out impurities without aggressively scratching enamel.
                    </div>
                    <div className="ingredient">
                        <strong>Non-GMO Xylitol</strong>
                        <span className="role">The Bacteria Starver</span>
                        It tastes like sugar, but cavity-causing bacteria can't digest it. They eat it, starve, and die. It also naturally stimulates saliva production.
                    </div>
                    <div className="ingredient" style={{gridColumn: 'span 2'}}>
                        <strong>The Apothecary Blend (Peppermint, Myrrh, Clove, Pink Salt, Baking Soda, Vitamin E)</strong>
                        <span className="role">The Tonics & Oils</span>
                        Peppermint provides crisp freshness. Myrrh tightens gum tissue. Clove Bud gently soothes. Baking soda gently whitens, mineral-rich pink salt stimulates blood flow, and pure Vitamin E acts as a natural antioxidant.
                    </div>
                </div>
        
                <div className="usage-section">
                    <h3>How to Use Your Polish</h3>
                    <ul>
                        <li><strong>Do Not Double Dip!</strong> We made you a fancy little holster and a wooden spatula. Use it! Keep water out of the jar so we don't accidentally grow a science experiment.</li>
                        <li><strong>The Scoop:</strong> Use the wooden spatula to scoop a pea-sized amount onto your toothbrush. A little goes a long way, so don't be greedy.</li>
                        <li><strong>Brush:</strong> Use an ultrasonic brush if you have one. It won't foam up like a rabid dog, but it will leave your teeth feeling like they just went to a spa.</li>
                        <li><strong>Spit, Don't Rinse!</strong> This feels weird, we know. But it's critical. Spit out the excess and rinse your brush, but DO NOT rinse your mouth with water. Leaving that microscopic film lets the magic MCHA rebuild your enamel while you sleep. Trust the process.</li>
                    </ul>
                </div>

                <div className="usage-section" style={{marginTop: '5px', borderLeftColor: '#111111', backgroundColor: '#f0f0f0'}}>
                    <h3 style={{fontSize: '13px', color: '#111111'}}>The Industry Comparison</h3>
                    <ul style={{fontSize: '10px'}}>
                        <li><strong style={{color: '#111111'}}>Standard Paste:</strong> Synthetic Fluoride, Harsh Silica, Chemical Detergents, Artificial Dyes, Water Base.</li>
                        <li><strong style={{color: '#111111'}}>"Natural" Paste:</strong> Synthetic Fluoride, Harsh Silica, Occasional Detergents, Water Base.</li>
                        <li><strong style={{color: '#111111'}}>Trillionaires:</strong> Biological MCHA, Gentle Green Clay, Zero Detergents, Organic Coconut Oil Base.</li>
                    </ul>
                </div>
                
                <div style={{marginTop: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 700, borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '8px', color: '#111111'}}>
                    <span>✦ Best By: 12 Months ✦</span>
                    <span style={{marginLeft: '15px', color: '#666666'}}>Safe To Use: 24 Months</span>
                </div>
        
                <div className="qr-section">
                    <img src="https://quickchart.io/qr?text=https://os.trillionairesai.com/review/tooth-polish&size=150" alt="QR Code to Review" />
                    <p>Scan here to leave your review<br/>and help us perfect the formula!</p>
                </div>
        
                <div className="footer">
                    Thank you for being our guinea pigs—er, we mean, our exclusive Trillionaires test group, {name}. We can't wait to hear what you (and your dentist) think!
                </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
