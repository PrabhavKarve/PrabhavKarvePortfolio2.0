import React from 'react';

function Skills() {
  return (
    <section id="skills" style={{padding: '6rem 2rem', background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%)', position: 'relative', overflow: 'hidden'}}>
      {/* Subtle Grid Background */}
      <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      
      <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '1'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800', fontFamily: 'system-ui, -apple-system, sans-serif', textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
            CORE <span style={{background: 'linear-gradient(45deg, #00ff88, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>COMPETENCIES</span>
          </h2>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
          
          {/* Languages */}
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 255, 136, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #00ff88, #00d4ff)'}}></div>
            <h3 style={{color: '#00ff88', marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', fontFamily: 'monospace'}}>
              <span style={{fontSize: '1.2rem'}}>⚡</span> PROGRAMMING LANGUAGES
            </h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              {['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'GoLang'].map((skill, index) => (
                <span key={index} style={{
                  background: 'transparent', 
                  color: '#00ff88', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  border: '2px solid #00ff88',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#00ff88';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#00ff88';
                  e.target.style.boxShadow = 'none';
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 212, 255, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #00d4ff, #ff6b35)'}}></div>
            <h3 style={{color: '#00d4ff', marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', fontFamily: 'monospace'}}>
              <span style={{fontSize: '1.2rem'}}>🔥</span> DEVELOPMENT TOOLS
            </h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              {['PowerBI', 'Tableau', 'Azure Data Factory', 'Azure DevOps', 'Jenkins', 'Git', 'BitBucket'].map((skill, index) => (
                <span key={index} style={{
                  background: 'transparent', 
                  color: '#00d4ff', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  border: '2px solid #00d4ff',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#00d4ff';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#00d4ff';
                  e.target.style.boxShadow = 'none';
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Databases */}
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 107, 53, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ff6b35, #00ff88)'}}></div>
            <h3 style={{color: '#ff6b35', marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', fontFamily: 'monospace'}}>
              <span style={{fontSize: '1.2rem'}}>⚙️</span> DATABASES & STORAGE
            </h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              {['MS SQL', 'PostgreSQL', 'Snowflake', 'Teradata', 'Oracle PL/SQL', 'MongoDB'].map((skill, index) => (
                <span key={index} style={{
                  background: 'transparent', 
                  color: '#ff6b35', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  border: '2px solid #ff6b35',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ff6b35';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ff6b35';
                  e.target.style.boxShadow = 'none';
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #8a2be2, #00d4ff)'}}></div>
            <h3 style={{color: '#8a2be2', marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', fontFamily: 'monospace'}}>
              <span style={{fontSize: '1.2rem'}}>⚛️</span> FRAMEWORKS & LIBRARIES
            </h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              {['React.js', 'Node.js', 'Spring Boot', 'FastAPI', 'Numpy', 'Pandas', 'GraphQL', 'gRPC', 'REST API'].map((skill, index) => (
                <span key={index} style={{
                  background: 'transparent', 
                  color: '#8a2be2', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  border: '2px solid #8a2be2',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#8a2be2';
                  e.target.style.color = '#fff';
                  e.target.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#8a2be2';
                  e.target.style.boxShadow = 'none';
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Cloud */}
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 215, 0, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ffd700, #ff6b35)'}}></div>
            <h3 style={{color: '#ffd700', marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600', fontFamily: 'monospace'}}>
              <span style={{fontSize: '1.2rem'}}>☁️</span> CLOUD & DEVOPS
            </h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
              {['Azure Functions', 'Blob Storage', 'AWS ECS', 'EC2', 'RDS', 'S3', 'Lambda', 'QuickSight', 'Redshift'].map((skill, index) => (
                <span key={index} style={{
                  background: 'transparent', 
                  color: '#ffd700', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  border: '2px solid #ffd700',
                  fontFamily: 'monospace',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ffd700';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ffd700';
                  e.target.style.boxShadow = 'none';
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;