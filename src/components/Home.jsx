import React, { useEffect, useRef } from 'react';

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const chars = Array.from("I am probably coding or playing pool rn...");
    const timeouts = [];

    const start = () => {
      el.textContent = '';
      let i = 0;

      const tick = () => {
        if (!typingRef.current) return; // safety on unmount

        if (i < chars.length) {
          el.textContent += chars[i++];
          timeouts.push(setTimeout(tick, 100)); // typing speed
        } else {
          // restart after pause
          timeouts.push(
            setTimeout(() => {
              start();
            }, 3000)
          );
        }
      };

      timeouts.push(setTimeout(tick, 500)); // initial delay
    };

    start();

    return () => {
      for (const t of timeouts) clearTimeout(t);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background:
          'linear-gradient(135deg, #1a1a1a 0%, #2d3748 50%, #1a202c 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Grid Background */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: '1',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: 'white',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Prabhav. G. Karve
            </span>
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '3rem',
              opacity: '0.8',
              color: '#e2e8f0',
              fontWeight: '300',
              minHeight: '2.4rem',
            }}
          >
            <span ref={typingRef} id="typing-text"></span>
            <span
              style={{ animation: 'blink 1s infinite', color: '#00ff88' }}
            >
              |
            </span>
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
            href="https://www.linkedin.com/in/prabhav-karve-11300a145/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }} // removes underline
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                border: '2px solid #00ff88',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#00ff88',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '180px',
                justifyContent: 'center',
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#00ff88';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#00ff88';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.05 2.06-3.05 4.2V24h-4V8z"/>
            </svg> LinkedIn
            </button>
          </a>

          <a
            href="https://github.com/prabhavkarve" // <-- replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                border: '2px solid #8a2be2',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'transparent',
                color: '#8a2be2',
                transition: 'all 0.3s ease',
                fontFamily: 'monospace',
                width: '180px',
                justifyContent: 'center',
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#8a2be2';
                e.target.style.color = '#1a1a1a';
                e.target.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#8a2be2';
                e.target.style.boxShadow = 'none';
              }}
            >
              {/* GitHub SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </a>

            <a
              href="https://leetcode.com/u/Prabhav724/" // <-- put your LeetCode profile link here
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem 2.5rem',
                  border: '2px solid #00d4ff',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: 'transparent',
                  color: '#00d4ff',
                  transition: 'all 0.3s ease',
                  fontFamily: 'monospace',
                  width: '180px',
                  justifyContent: 'center',
                  justifyContent: 'center',
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#00d4ff';
                  e.target.style.color = '#1a1a1a';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#00d4ff';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {/* LeetCode Official Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l2.396 2.392c.54.54 1.414.54 1.955 0a1.378 1.378 0 0 0 0-1.955l-2.396-2.392A5.83 5.83 0 0 0 13.483 0zm-2.603 12.651c-.28 0-.508.228-.508.508s.228.508.508.508.508-.228.508-.508-.228-.508-.508-.508zm-1.27-1.27c-.28 0-.508.228-.508.508s.228.508.508.508.508-.228.508-.508-.228-.508-.508-.508zm-1.27-1.27c-.28 0-.508.228-.508.508s.228.508.508.508.508-.228.508-.508-.228-.508-.508-.508z"/>
                </svg>
                LeetCode
              </button>
            </a>


            <a
              href="https://link.springer.com/chapter/10.1007/978-981-16-8862-1_55" // <-- replace with your research link
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem 2.5rem',
                  border: '2px solid #ff6b35',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: 'transparent',
                  color: '#ff6b35',
                  transition: 'all 0.3s ease',
                  fontFamily: 'monospace',
                  width: '180px',
                  justifyContent: 'center',
                  justifyContent: 'center',
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ff6b35';
                  e.target.style.color = '#1a1a1a';
                  e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ff6b35';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {/* Springer Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Research
              </button>
            </a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '3px',
                background:
                  'linear-gradient(90deg, #00ff88, #00d4ff, #ff6b35)',
              }}
            ></div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                color: '#e2e8f0',
                position: 'relative',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  marginBottom: '1rem',
                  color: '#00ff88',
                  fontSize: '0.8rem',
                }}
              >
                [user@system ~]$ whotfAmI
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#ffd700' }}>{'{'}</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"user"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#00ff88' }}>"Phoenix"</span>
                <span style={{ color: '#e2e8f0' }}>,</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"education"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#ff6b35' }}>"M.S in Computer Science, Rochester Institute of Technology"</span>
                <span style={{ color: '#e2e8f0' }}>,</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"location"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#00ff88' }}>"SF Bay Area, CA 🔁 Rochester, NY"</span>
                <span style={{ color: '#e2e8f0' }}>,</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"profession"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#e2e8f0' }}>"Full Stack Developer | Data Engineer | AI - Backend Architect"</span>
                <span style={{ color: '#e2e8f0' }}>,</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"leetcode"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#ff6b35' }}>"500+"</span>
                <span style={{ color: '#e2e8f0' }}>,</span>
              </div>
              <div style={{ marginBottom: '0.8rem', marginLeft: '1rem' }}>
                <span style={{ color: '#00ff88' }}>"yoe"</span>
                <span style={{ color: '#e2e8f0' }}>: </span>
                <span style={{ color: '#ff6b35' }}>"2+"</span>
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#ffd700' }}>{'}'}</span>
              </div>
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '0.8rem',
                  background: 'rgba(0, 255, 136, 0.1)',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{ color: '#00ff88', fontSize: '0.8rem'}}
                >
                  ${' '}
                </span>
                <span style={{ color: '#e2e8f0'}}>
                  Ready to build something amazing?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
