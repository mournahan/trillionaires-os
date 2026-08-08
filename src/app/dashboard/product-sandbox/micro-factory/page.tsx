'use client';

import React from 'react';
import Image from 'next/image';

export default function MicroFactoryBlueprint() {
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
        
        .container-zone {
          border: 1px solid rgba(212,175,55,0.3);
          background: rgba(20,20,20,0.8);
          padding: 1.5rem;
          position: relative;
        }
        .container-zone h4 {
          font-family: "Marcellus", serif;
          color: #d4af37;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          margin-top: 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 0.5rem;
        }
      `}} />

      <h1 className="eb-eyebrow">Project Genesis</h1>
      <h2 className="eb-h2">The Containerized <em>Micro-Factory</em></h2>
      <p style={{ color: '#a3a3a3', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.6 }}>
        Architectural and electrical blueprint for outfitting a 40ft High Cube shipping container as an FDA-compliant, 100% off-grid cosmetic manufacturing lab.
      </p>

      {/* Hero Render */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', borderRadius: '4px', overflow: 'hidden', marginBottom: '4rem', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}>
        <Image 
          src="/micro_factory_continuous.png" 
          alt="Trillionaires 40ft Shipping Container Continuous Micro-Factory Concept" 
          width={1200} 
          height={675} 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(212, 175, 55, 0.3)', pointerEvents: 'none' }}></div>
      </div>

      {/* Interactive Floor Plan */}
      <h2 className="eb-h2" style={{fontSize: '2rem'}}>The 40x8 <em>Structural Layout</em></h2>
      <p style={{ color: '#a3a3a3', marginBottom: '2rem' }}>Linear progression design ensuring GMP compliance from raw material receiving to finished goods packing.</p>
      
      {/* 3D Container Layout */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', borderRadius: '4px', overflow: 'hidden', marginBottom: '2rem', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
        <Image 
          src="/container_3d_layout.png" 
          alt="3D Isometric Cutaway of Trillionaires Container Micro-Factory" 
          width={1200} 
          height={675} 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(212, 175, 55, 0.3)', pointerEvents: 'none' }}></div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1rem', 
        marginBottom: '4rem',
        padding: '1rem',
        border: '2px solid #333',
        background: '#0a0a0a',
        position: 'relative'
      }}>
        {/* Container Doors (Left) */}
        <div style={{ position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '100px', background: '#333' }}></div>
        
        <div className="container-zone">
          <h4>ZONE 1: RAW PROCESSING (10 FT)</h4>
          <ul style={{ color: '#f2f2f2', fontSize: '0.9rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
            <li>Bulk Storage (Coconut Oil Drums, Clay/Xylitol Bags)</li>
            <li>Motorized Hoist Lift</li>
            <li><strong>Continuous Bulk Material Hoppers</strong></li>
            <li>FRP Wall Paneling (Washable)</li>
          </ul>
        </div>

        <div className="container-zone" style={{borderLeftColor: '#f2f2f2'}}>
          <h4>ZONE 2: THE CORE LINE (20 FT)</h4>
          <ul style={{ color: '#f2f2f2', fontSize: '0.9rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
            <li><strong>Inline Jacketed Extruder / Pug Mill</strong></li>
            <li>Heating Zone (Melting) & Chilling Jacket (Setting)</li>
            <li>Servo-Driven Indexing Conveyor</li>
            <li><strong>High-Pressure CIP System (Clean-In-Place)</strong></li>
          </ul>
        </div>

        <div className="container-zone" style={{borderLeftColor: '#f2f2f2'}}>
          <h4>ZONE 3: FINISHING (10 FT)</h4>
          <ul style={{ color: '#f2f2f2', fontSize: '0.9rem', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
            <li>Direct-Drive Dispense Nozzle</li>
            <li>Inline Spindle Capper & Wrap-Around Labeler</li>
            <li>Rotary Accumulation Table</li>
            <li>Finished Pallet Staging</li>
          </ul>
        </div>
        
        {/* Container Doors (Right) */}
        <div style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '100px', background: '#333' }}></div>
      </div>

      {/* Off-Grid Power Load Matrix */}
      <h2 className="eb-h2" style={{fontSize: '2rem'}}>48V DC <em>Power Load Matrix</em></h2>
      <div className="data-card" style={{ maxWidth: '900px' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          Calculations for tying the container into the existing EG4 charge controller and bifacial solar array infrastructure. Designed for 100% off-grid autonomy.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Inline Extruder Heater</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>2,000W</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Continuous draw for the heating zone of the pug mill.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Chiller & AC</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>1,500W</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Powering the cooling jacket and ambient climate control.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Servo / Hydraulic Drives</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>1,200W</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>High-torque precision drives replacing pneumatics.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>CIP Pump System</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>1,000W</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>High-pressure sanitation loop (intermittent use).</p>
          </div>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{color: '#d4af37', fontFamily: '"Marcellus", serif', letterSpacing: '0.1em'}}>PEAK CONTINUOUS LOAD:</span>
            <span style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#f2f2f2'}}>~5,700 Watts</span>
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#a3a3a3' }}>Easily supported by a single EG4 6000EX inverter running off the 48V battery bank (CIP pump only runs when extruder is off).</p>
        </div>
      </div>

      {/* Throughput Matrix */}
      <h2 className="eb-h2" style={{marginTop: '3rem', fontSize: '2rem'}}>Continuous <em>Throughput Matrix</em></h2>
      <div className="data-card" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          Calculations based on a relaxed, continuous extrusion rate of <strong>5 jars per minute</strong> (300 jars/hour) directly into amber glass, with zero batching downtime.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Mid-Market (10 Hrs/Wk)</h4>
            <p style={{ fontSize: '1.5rem', color: '#4caf50', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>12,000 Jars / Mo</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>Yields over $217,000 in monthly B2B wholesale profit on a part-time schedule.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Max-Market (40 Hrs/Wk)</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>48,000 Jars / Mo</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>A standard single shift generates roughly $10.45M in annual wholesale profit.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>CIP Turnaround</h4>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3', margin: '0.5rem 0 0' }}>Clean-In-Place system allows for daily sanitation flushes in under 15 minutes with zero equipment teardown.</p>
          </div>
        </div>
      </div>

      {/* Physical Demand & Space Matrix */}
      <h2 className="eb-h2" style={{marginTop: '3rem', fontSize: '2rem'}}>Operator & <em>Physical Capacity</em></h2>
      <div className="data-card" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
        <p style={{ color: '#a3a3a3', lineHeight: 1.6, marginBottom: '2rem' }}>
          Calculations proving the micro-factory can be safely operated by a <strong>single person</strong> with zero physical bottlenecking while hand-packing into luxury rigid master cartons. The math reflects a standard 10-hour production run (9,000 jars).
        </p>

        <div className="eb-card" style={{borderColor: 'rgba(212,175,55,0.2)', gridColumn: '1 / -1', marginBottom: '2rem', padding: '1rem'}}>
          <h3 style={{ fontFamily: '"Marcellus", serif', fontSize: '1rem', letterSpacing: '0.2em', color: '#d4af37', marginBottom: '1rem' }}>OPERATOR PACING (1-PERSON OPERATION)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <p style={{fontSize: '0.8rem', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '0.2rem'}}>Production Pace</p>
              <p style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', color: '#4caf50', margin: 0}}>15 Jars / Min</p>
              <p style={{fontSize: '0.9rem', color: '#a3a3a3', marginTop: '0.5rem'}}>The perfect speed for a single operator to load empty jars, monitor the line, and hand-pack finished goods into premium rigid boxes without scratching the finish.</p>
            </div>
            <div>
              <p style={{fontSize: '0.8rem', color: '#a3a3a3', textTransform: 'uppercase', marginBottom: '0.2rem'}}>Material Handling</p>
              <p style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', color: '#f2f2f2', margin: 0}}>1 Bag / 26 Min</p>
              <p style={{fontSize: '0.9rem', color: '#a3a3a3', marginTop: '0.5rem'}}>Operator only needs to lift and load one 50lb sack of material into the hopper every 26 minutes. Highly maintainable for a full shift.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Material Volume In</h4>
            <p style={{ color: '#f2f2f2', fontSize: '1.2rem', fontFamily: '"Cormorant Garamond", serif' }}>1,125 lbs (22.5 Bags) / Day</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Product Volume Out</h4>
            <p style={{ color: '#f2f2f2', fontSize: '1.2rem', fontFamily: '"Cormorant Garamond", serif' }}>9,000 Jars / Day</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>Equipment Rating</h4>
            <p style={{ fontSize: '1.5rem', color: '#4caf50', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>100 Kg / Hr</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>A base-model industrial continuous mixer handles 100 kg/hr. We are only running at ~51 kg/hr (112 lbs/hr). Zero machine strain.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: '"Marcellus", serif', color: '#d4af37' }}>WIP Storage (In-Lab)</h4>
            <p style={{ fontSize: '1.5rem', color: '#f2f2f2', fontFamily: '"Cormorant Garamond", serif', margin: '0 0 0.5rem' }}>48-Hour WIP (6 Pallets)</p>
            <p style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>
              The manufacturing lab only holds 48 hours of WIP (Work In Progress). Finished goods (14.4 pallets per week) are transferred daily via pallet jack to <strong>Container 003 (The Logistics Hub)</strong>.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
