import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Dashboard() {
  const projectsDir = path.join(process.cwd(), 'src/projects');
  const streamPath = path.join(process.cwd(), 'src/data/stream.json');
  
  let projects: any[] = [];
  try {
    if (fs.existsSync(projectsDir)) {
      const files = fs.readdirSync(projectsDir);
      projects = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const filePath = path.join(projectsDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data } = matter(fileContent);
          return {
            slug: file.replace('.md', ''),
            title: data.title || file.replace('.md', ''),
            status: data.status || 'Unknown',
            category: data.category || 'Uncategorized',
            lastUpdated: data.lastUpdated || ''
          };
        });
    }
  } catch (e) {
    console.error('Failed to load projects', e);
  }

  let stream: any[] = [];
  try {
    if (fs.existsSync(streamPath)) {
      const streamData = fs.readFileSync(streamPath, 'utf8');
      stream = JSON.parse(streamData);
    }
  } catch (e) {
    console.error('Failed to load stream', e);
  }

  return (
    <div style={{ padding: '3rem', position: 'relative' }}>
      <div className="grid-bg"></div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>Command Center</h1>
        <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>+ New Project</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Active Projects Widget */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--cyan)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Active Projects</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '75vh', overflowY: 'auto', paddingRight: '1rem' }}>
            {projects.length === 0 && (
              <p style={{ color: 'var(--text-secondary)' }}>No active projects found.</p>
            )}
            {projects.map((proj) => (
              <div key={proj.slug} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--cyan)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--white)' }}>{proj.title}</strong>
                  <span style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{proj.status}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{proj.category}</p>
                {proj.lastUpdated && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--cyan)', marginTop: '0.5rem' }}>Updated: {proj.lastUpdated}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Command Stream (Twitter Feed) */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--violet)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Command Stream</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '75vh', overflowY: 'auto', paddingRight: '1rem' }}>
            {stream.length === 0 && (
              <p style={{ color: 'var(--text-secondary)' }}>Feed is empty.</p>
            )}
            {stream.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>AI</div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--white)' }}>{item.author}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--cyan)' }}>{item.category}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{new Date(item.timestamp).toLocaleDateString()}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#d1d5db', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--white)">$1</strong>') }}></p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
