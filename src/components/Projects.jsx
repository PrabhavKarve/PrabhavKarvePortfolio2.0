import React from 'react';
import VocAppImage from '../Images/VocApp-Flashcards.PNG';
import F1bnbImage from '../Images/F1bnb.PNG';
import RAGFSIImage from '../Images/RAG-FSI.png';
import PaintImage from '../Images/Paint.PNG';

function Projects() {
  return (
    <section id="projects" style={{padding: '6rem 2rem', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)', position: 'relative', overflow: 'hidden'}}>
      {/* Subtle Grid Background */}
      <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      
      <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '1'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800', fontFamily: 'system-ui, -apple-system, sans-serif', textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
            PROJECT <span style={{background: 'linear-gradient(45deg, #00d4ff, #ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>ARCHIVE</span>
          </h2>
          <p style={{fontSize: '1.1rem', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300'}}>
            Some of the stuff I created.
          </p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 255, 136, 0.2)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #00ff88, #00d4ff)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={VocAppImage} alt="VocApp Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#00ff88', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>VocApp: Vocabulary builder</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>A vocabulary flash card deck with 3000+ common english words. Try a demo, learn and test your vocab.
Learn. Test. Repeat.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>React</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>Flask</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>PostgreSQL</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>EC2</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>RDS</span>
            </div>
            <a href="https://voc-app-steel.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginTop: 'auto'}}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                border: '2px solid #00ff88',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#00ff88',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#00ff88';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#00ff88';
                e.target.style.boxShadow = 'none';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Live Project
              </button>
            </a>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 107, 53, 0.2)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ff6b35, #ffd700)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #ff6b35', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={F1bnbImage} alt="F1bnb Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#ff6b35', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>F1bnb:
Accommodation rental platform</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Struggling to find a cheap accomodation as an F1 student ? try F1bnb to find cheap housing in the city you are travelling.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>React.js</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>FastAPI</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>DynamoDB</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>ECS</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>Docker</span>
            </div>
            <a href="https://f1bnb-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginTop: 'auto'}}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                border: '2px solid #ff6b35',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#ff6b35',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ff6b35';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ff6b35';
                e.target.style.boxShadow = 'none';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Live Project
              </button>
            </a>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #8a2be2, #00d4ff)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={RAGFSIImage} alt="RAG-FSI Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#8a2be2', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>RAG-Financial Statement Intelligence</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Looking to invest in a company ? Try RAG-Financial Statement Intelligence to get a quick overview of the company's financial statements and important stock metrics.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>Next.js</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>GraphQL</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>Python</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>FAISS</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>LangChain</span>
            </div>
            <a href="https://rag-fsi-client-2-0.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginTop: 'auto'}}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                border: '2px solid #8a2be2',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#8a2be2',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#8a2be2';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#8a2be2';
                e.target.style.boxShadow = 'none';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Live Project
              </button>
            </a>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 215, 0, 0.2)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ffd700, #ff6b35)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={PaintImage} alt="Paint Clone Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#ffd700', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>Paint Clone:
Desktop app</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Missing the classic old paint application ? Try a custom made paint clone inspired by classic old MS paint to draw and save stuff. Run the code and learn how a paint clone desktop app could be made.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Python</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Turtle</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>OpenCV</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Tkinter</span>
            </div>
            <a href="https://github.com/PrabhavKarve/Paint-by-python" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', marginTop: 'auto'}}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                border: '2px solid #ffd700',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#ffd700',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffd700';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffd700';
                e.target.style.boxShadow = 'none';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;