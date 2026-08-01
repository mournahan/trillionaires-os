'use client';

import { useState } from 'react';

const promptDatabase = [
  {
    id: 1,
    category: 'Product Labels',
    title: 'Bespoke Tooth Polish Label',
    description: 'Generates a luxury cosmetic label focusing on French Green Clay and premium typography.',
    payload: 'A highly detailed, ultra-premium product label for "Trillionaires Bespoke Tooth Polish". The label is printed on matte black glass, featuring minimalist, cyber-luxury typography in metallic cyan and gold. The ingredients list highlights "French Green Clay and Xylitol". The aesthetic is high-end wellness, futuristic apothecary, studio lighting, hyper-photorealistic, 8k resolution, cinematic composition --ar 16:9 --v 6.0'
  },
  {
    id: 2,
    category: 'Product Labels',
    title: 'DIY High-End Food Kit Label',
    description: 'Generates organic, health-conscious but premium packaging for scratch-cooking kits.',
    payload: 'A luxury, eco-friendly packaging design for a "DIY High-End Food Kit". The packaging is made of raw, sustainable materials with sleek, modern, cyberpunk-inspired branding. It features deep space black and vibrant violet accents. The typography is clean, sans-serif, and highly legible. The aesthetic blends organic health-conscious eating with futuristic luxury, macro photography, soft natural lighting mixed with subtle neon edge-lighting --ar 16:9 --v 6.0'
  },
  {
    id: 3,
    category: 'Marketing Material',
    title: 'Instagram Cyber-Luxury Product Shot',
    description: 'Generates a stunning social media product showcase on a futuristic pedestal.',
    payload: 'A cinematic product photography shot of a luxury cosmetic jar sitting on a geometric, dark obsidian pedestal. The background is a moody, futuristic cyberpunk environment with soft, out-of-focus neon cyan and violet lighting (bokeh). The jar reflects the neon lights beautifully. High-end commercial photography, glossy, wet reflections, ultra-detailed, 85mm lens, sharp focus, Unreal Engine 5 render style --ar 4:5 --v 6.0'
  },
  {
    id: 4,
    category: 'Marketing Material',
    title: 'Wide Digital Banner Ad',
    description: 'Generates a wide format background for website headers or digital ads.',
    payload: 'An ultra-wide, abstract, futuristic background for a luxury tech brand. Dark, sleek metallic surfaces with glowing circuit-like pathways in cyan and gold. The composition leaves empty negative space on the left side for text overlay. High tech luxury, cyber-chic, deep shadows, high contrast, 8k resolution, photorealistic, cinematic lighting --ar 3:1 --style raw --v 6.0'
  }
];

export default function BrandLab() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const categories = ['All', 'Product Labels', 'Marketing Material'];
  
  const filteredPrompts = activeCategory === 'All' 
    ? promptDatabase 
    : promptDatabase.filter(p => p.category === activeCategory);

  const copyToClipboard = (id: number, payload: string) => {
    navigator.clipboard.writeText(payload);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div style={{ padding: '3rem', position: 'relative' }}>
      <div className="grid-bg"></div>
      
      <header style={{ marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--white)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <span className="glitch" data-text="AI BRAND LAB">AI BRAND LAB</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Master repository for Trillionaires LLC AI design instructions.</p>
      </header>

      {/* Categories */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', position: 'relative', zIndex: 10 }}>
        {filteredPrompts.map(prompt => (
          <div key={prompt.id} className="glass-panel hover-3d" style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <div style={{ color: prompt.category === 'Product Labels' ? 'var(--cyan)' : 'var(--violet)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 'bold' }}>
              {prompt.category}
            </div>
            
            <h3 style={{ fontSize: '1.3rem', color: 'var(--white)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
              {prompt.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {prompt.description}
            </p>
            
            <div style={{ 
              background: 'rgba(0,0,0,0.4)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '1rem', 
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              color: '#888',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              flexGrow: 1,
              wordBreak: 'break-word'
            }}>
              {prompt.payload}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
              <button 
                className="cta-btn"
                onClick={() => copyToClipboard(prompt.id, prompt.payload)}
                style={{ flexGrow: 1, textAlign: 'center', borderColor: copiedId === prompt.id ? 'var(--green)' : 'var(--cyan)', color: copiedId === prompt.id ? 'var(--green)' : 'var(--cyan)' }}
              >
                {copiedId === prompt.id ? 'PAYLOAD COPIED!' : 'COPY PAYLOAD'}
              </button>
              
              {prompt.category === 'Product Labels' && (
                <button className="btn-secondary" style={{ padding: '0 1rem', fontSize: '0.7rem' }}>PUSH TO SHOPIFY</button>
              )}
              {prompt.category === 'Marketing Material' && (
                <button className="btn-secondary" style={{ padding: '0 1rem', fontSize: '0.7rem', borderColor: 'var(--violet)', color: 'var(--violet)' }}>QUEUE FOR INSTAGRAM</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
