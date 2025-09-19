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
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 255, 136, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #00ff88, #00d4ff)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={VocAppImage} alt="VocApp Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#00ff88', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>VocApp: Vocabulary builder</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>A vocabulary flash card deck with 3000+ common english words. Try a demo, learn and test your vocab.
Learn. Test. Repeat.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>React</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>Flask</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>PostgreSQL</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>EC2</span>
              <span style={{background: 'transparent', color: '#00ff88', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #00ff88', fontFamily: 'monospace'}}>RDS</span>
            </div>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 107, 53, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ff6b35, #ffd700)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #ff6b35', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={F1bnbImage} alt="F1bnb Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#ff6b35', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>F1bnb:
Accommodation rental platform</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Struggling to find a cheap accomodation as an F1 student ? try F1bnb to find cheap housing in the city you are travelling.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>React.js</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>FastAPI</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>DynamoDB</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>ECS</span>
              <span style={{background: 'transparent', color: '#ff6b35', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ff6b35', fontFamily: 'monospace'}}>Docker</span>
            </div>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #8a2be2, #00d4ff)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={RAGFSIImage} alt="RAG-FSI Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#8a2be2', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>RAG-Financial Statement Intelligence</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Looking to invest in a company ? Try RAG-Financial Statement Intelligence to get a quick overview of the company's financial statements and important stock metrics.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>Next.js</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>GraphQL</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>Python</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>FAISS</span>
              <span style={{background: 'transparent', color: '#8a2be2', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #8a2be2', fontFamily: 'monospace'}}>LangChain</span>
            </div>
          </div>
          
          <div style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '3rem', borderRadius: '12px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 215, 0, 0.2)', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ffd700, #ff6b35)'}}></div>
            <div style={{height: '250px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', borderRadius: '8px', marginBottom: '2rem', border: '2px solid #8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
              <img src={PaintImage} alt="Paint Clone Screenshot" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px'}} />
            </div>
            <h3 style={{color: '#ffd700', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>Paint Clone:
Desktop app</h3>
            <p style={{color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6'}}>Missing the classic old paint application ? Try a custom made paint clone inspired by classic old MS paint to draw and save stuff. Run the code and learn how a paint clone desktop app could be made.</p>
            <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Python</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Turtle</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>OpenCV</span>
              <span style={{background: 'transparent', color: '#ffd700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #ffd700', fontFamily: 'monospace'}}>Tkinter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;