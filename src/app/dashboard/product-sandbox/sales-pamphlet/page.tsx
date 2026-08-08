'use client';

import React, { useEffect } from 'react';

export default function SalesPamphletPage() {
  
  useEffect(() => {
    // Add a quick print shortcut via keyboard or a floating button could be added here
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@300;400;600&display=swap');

        /* Dashboard UI Wrapper - hide when printing */
        .print-btn-wrapper {
            margin: 20px;
            text-align: right;
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
        }

        /* Pamphlet Styles */
        .pamphlet-body {
            font-family: 'Montserrat', sans-serif;
            line-height: 1.4;
            color: #1a1a1a;
            background-color: #ffffff;
            margin: 0 auto;
            padding: 0.25in;
            width: 8.5in;
            height: 11in;
            box-sizing: border-box;
            box-shadow: 0 0 10px rgba(0,0,0,0.5); /* shadow for screen preview */
        }

        .pamphlet-container {
            border: 2px solid #d4af37;
            padding: 15px 25px;
            height: 100%;
            box-sizing: border-box;
            position: relative;
        }

        .pamphlet-body .logo-mark { text-align: center; color: #d4af37; font-size: 24px; margin-bottom: 5px; }
        .pamphlet-body h1 { font-family: 'Cinzel', serif; font-size: 32px; color: #000; text-align: center; margin: 0; letter-spacing: 2px; }
        .pamphlet-body .subtitle { text-align: center; font-style: italic; color: #555; font-size: 14px; margin-bottom: 10px; }
        .pamphlet-body .intro { font-size: 13px; text-align: justify; margin-bottom: 10px; font-weight: 300; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        .pamphlet-body h2 { font-family: 'Cinzel', serif; font-size: 18px; color: #000; text-align: center; margin-bottom: 10px; letter-spacing: 1px; }
        
        .pamphlet-body .ingredients-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .pamphlet-body .ingredient { margin-bottom: 4px; font-size: 12px; }
        .pamphlet-body .ingredient strong { color: #000; font-weight: 600; text-transform: uppercase; font-size: 11.5px; letter-spacing: 0.5px; display: block; }
        .pamphlet-body .ingredient span.role { color: #d4af37; font-style: italic; display: block; margin-bottom: 2px; }
        
        .pamphlet-body .usage-section { background-color: #f9f9f9; border-left: 3px solid #d4af37; padding: 8px 12px; margin-top: 8px; font-size: 12px; page-break-inside: avoid; }
        .pamphlet-body .usage-section h3 { font-family: 'Cinzel', serif; font-size: 15px; margin-top: 0; margin-bottom: 5px; color: #000; }
        .pamphlet-body .usage-section ul { margin: 0; padding-left: 20px; }
        .pamphlet-body .usage-section li { margin-bottom: 4px; color: #000; }
        
        .pamphlet-body .footer { position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; font-size: 11px; color: #777; font-style: italic; padding: 0 30px; }
        .pamphlet-body .qr-section { text-align: center; margin-top: 5px; padding-top: 5px; border-top: 1px dashed #d4af37; page-break-inside: avoid; }
        .pamphlet-body .qr-section img { width: 60px; height: 60px; border: 2px solid #d4af37; padding: 4px; border-radius: 4px; }
        .pamphlet-body .qr-section p { font-size: 11px; font-weight: 600; color: #000; margin-top: 5px; margin-bottom: 0; text-transform: uppercase; letter-spacing: 1px; }

        @media print {
            @page { size: letter; margin: 0; }
            body * { visibility: hidden; }
            .pamphlet-body, .pamphlet-body * { visibility: visible; }
            .pamphlet-body { position: absolute; left: 0; top: 0; margin: 0; box-shadow: none; }
        }
      `}} />

      <div className="print-btn-wrapper">
        <button className="print-btn" onClick={() => window.print()}>Print Pamphlet</button>
      </div>

      <div className="pamphlet-body">
        <div className="pamphlet-container">
          <div className="logo-mark">✧</div>
          <h1>TRILLIONAIRES</h1>
          <div className="subtitle">BESPOKE TOOTH POLISH</div>

          <div className="intro">
              Welcome to the apex of oral care. Trillionaires Bespoke Tooth Polish is a radical departure from commercial toothpastes. We rejected the harsh detergents, synthetic dyes, and water-filled tubes of standard brands. Instead, we formulated a concentrated, waterless polish using only the highest-grade biological minerals and botanical oils on earth. You aren't just brushing your teeth anymore—you are investing in them.
          </div>

          <h2>The Anatomy of a Trillion-Dollar Smile</h2>
          
          <div className="ingredients-grid">
              <div className="ingredient">
                  <strong>Microcrystalline Hydroxyapatite (MCHA)</strong>
                  <span className="role">The Enamel Mineral</span>
                  MCHA is the exact biological mineral that makes up 97% of your tooth enamel. It supports the natural remineralization process of your teeth.
              </div>
              <div className="ingredient">
                  <strong>Organic Virgin Coconut Oil</strong>
                  <span className="role">The Botanical Base</span>
                  A concentrated, waterless base rich in natural Lauric Acid, designed to support a clean, balanced oral microbiome.
              </div>
              <div className="ingredient">
                  <strong>French Green Clay</strong>
                  <span className="role">The Gentle Polisher</span>
                  A powerhouse of trace minerals. It gently buffs away surface stains, drawing out impurities without aggressively scratching enamel.
              </div>
              <div className="ingredient">
                  <strong>Non-GMO Xylitol</strong>
                  <span className="role">The Botanical Sweetener</span>
                  A natural extract that provides a clean sweetness while supporting healthy saliva production—your mouth's built-in defense system.
              </div>
              <div className="ingredient" style={{gridColumn: 'span 2'}}>
                  <strong>The Apothecary Blend</strong>
                  <span className="role">Myrrh, Clove, Peppermint, Pink Salt, Baking Soda, & Vitamin E</span>
                  Peppermint provides crisp freshness. Myrrh is revered for supporting healthy gum tissue. Clove Bud gently soothes. Baking soda naturally whitens, mineral-rich pink salt provides essential trace elements, and pure Vitamin E (Tocopherol) acts as a potent botanical antioxidant to naturally preserve freshness.
              </div>
          </div>

          <div className="usage-section">
              <h3>The Trillionaire Protocol</h3>
              <ul>
                  <li><strong>Maintain Purity:</strong> Use the provided bespoke applicator to scoop a pea-sized amount. Do not introduce water into the jar to preserve the botanical ingredients.</li>
                  <li><strong>The Brush:</strong> Use a high-quality ultrasonic brush if available. The polish will not foam with artificial lather, but will leave your teeth feeling exceptionally polished.</li>
                  <li><strong>Spit, Don't Rinse:</strong> This step is critical. After brushing for two minutes, spit out the excess and rinse your brush, but DO NOT rinse your mouth with water. Leaving a microscopic film allows the MCHA mineral to physically integrate with your enamel overnight.</li>
              </ul>
          </div>

          <div className="usage-section" style={{marginTop: '5px', borderLeftColor: '#000'}}>
              <h3 style={{fontSize: '13px'}}>The Industry Comparison</h3>
              <ul style={{fontSize: '10px'}}>
                  <li><strong>Standard Paste (Crest):</strong> Synthetic Fluoride, Harsh Silica, Chemical Detergents, Artificial Dyes, Water Base.</li>
                  <li><strong>"Natural" Paste (Tom's):</strong> Synthetic Fluoride, Harsh Silica, Occasional Detergents, Water Base.</li>
                  <li><strong>Trillionaires:</strong> Biological MCHA, Gentle Green Clay, Zero Detergents, Organic Coconut Oil Base.</li>
              </ul>
          </div>

          <div style={{marginTop: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 600, borderTop: '1px solid #eee', paddingTop: '8px'}}>
              <span>✦ Best By: 12 Months ✦</span>
              <span style={{marginLeft: '15px', color: '#777'}}>Safe To Use: 24 Months</span>
          </div>

          <div className="qr-section">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://os.trillionairesai.com/" alt="QR Code" />
              <p>Scan to explore the Trillionaires Collection</p>
          </div>

          <div className="footer">
              Manufactured exclusively by Trillionaires LLC. 
          </div>
        </div>
      </div>
    </>
  );
}
