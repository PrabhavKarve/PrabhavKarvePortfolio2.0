import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import './About.css';
import ProfileImage from '../Images/Profile.jpg';
import RRHLogo from '../Images/RRH.jpg';
import RITLogo from '../Images/RIT.svg';
import I2ITLogo from '../Images/I2IT.png';
import AccentureLogo from '../Images/AccentureLogo.png';

const About = () => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Software Engineer Co-op',
      organization: 'Rochester Regional Health',
      period: 'June 2025 - Present',
      description: 'Leading software engineer building migration pipelines in Azure, Python and Snowflake.',
      icon: FaBriefcase,
      logo: RRHLogo
    },
    {
      id: 2,
      type: 'education',
      title: 'Master of Science in Computer Science',
      organization: 'Rochester Institute of Technology',
      period: '2023 - 2026 (Expected)',
      description: 'GPA: 3.8/4.0',
      icon: FaGraduationCap,
      logo: RITLogo
    },
    {
      id: 3,
      type: 'work',
      title: 'Associate Software Engineer',
      organization: 'Accenture',
      period: 'July 2021 - March 2023',
      description: "Software Engineer responsible for building business intelligence platform for Ireland's biggest financial service provider.",
      icon: FaAward,
      logo: AccentureLogo
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      organization: 'International Institute of Information Technology, Pune',
      period: 'August 2017 - July 2021',
      description: 'GPA : 3.5/4.0',
      icon: FaGraduationCap,
      logo: I2ITLogo
    },
    {
      id: 5,
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'PS IT Solutions',
      period: 'August 2019 - August 2020',
      description: 'Launched a payment-invoice management application for a logistics warehouse.',
      icon: FaBriefcase
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return '#3498db';
      case 'work': return '#e74c3c';
      case 'achievement': return '#f39c12';
      default: return '#2c3e50';
    }
  };

  return (
    <section id="about" style={{padding: '6rem 2rem', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)', position: 'relative', overflow: 'hidden'}}>
      {/* Tech Grid Background */}
      <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
      
      <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '1'}}>
        <motion.div
          style={{textAlign: 'center', marginBottom: '4rem'}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800', fontFamily: 'system-ui, -apple-system, sans-serif', textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>
            ABOUT <span style={{background: 'linear-gradient(45deg, #00d4ff, #ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>ME</span>
          </h2>
        </motion.div>

        <motion.div
          style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start', marginBottom: '4rem'}}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0, 255, 136, 0.2)', position: 'relative', overflow: 'hidden', height: '400px'}}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #00ff88, #00d4ff)'}}></div>
            <h3 style={{color: '#00ff88', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'monospace', fontWeight: '600'}}>⚡ SUMMARY</h3>
            <p style={{color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1.5rem'}}>
              Just an Engineer at heart navigating around the laws of the world. Born in 1999, last batch of humans who arrived in 20th century. Glad to exist.
            </p>
            <p style={{color: '#e2e8f0', lineHeight: '1.6'}}>
              With 2+ years of experience as a Software Engineer, 
              I have honed my skills in full-stack development, software/data Engineering, AI-backend architecture by building
              cool stuff for not just startups and enterprises, but also for my own endeavors.
            </p>
          </motion.div>

          <motion.div
            style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255, 107, 53, 0.2)', position: 'relative', overflow: 'hidden', height: '400px'}}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #ff6b35, #ffd700)'}}></div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
              <img 
                src={ProfileImage} 
                alt="Profile" 
                style={{
                  height: '100%',
                  borderRadius: '20px'
                }}
              />
            </div>
          </motion.div>
        </motion.div>

          <motion.div
            style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative', overflow: 'hidden'}}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(90deg, #8a2be2, #00d4ff)'}}></div>
            <h3 style={{color: '#8a2be2', fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace', fontWeight: '600'}}>⚙️ CAREER TIMELINE</h3>
            
            {/* Debug: Show timeline data count */}
            <div style={{color: '#00ff88', marginBottom: '1rem', fontFamily: 'monospace'}}>
              Timeline Items: {timelineData.length}
            </div>
            
            {/* Timeline Container */}
            <div style={{position: 'relative', paddingLeft: '4rem'}}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: '30px',
                top: '20px',
                bottom: '20px',
                width: '4px',
                background: 'linear-gradient(180deg, #8a2be2, #00d4ff, #ff6b35, #ffd700, #00ff88)',
                borderRadius: '2px'
              }}></div>
              
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                const colors = {
                  'education': '#00ff88',
                  'work': '#ff6b35', 
                  'achievement': '#ffd700'
                };
                console.log('Rendering timeline item:', item.title); // Debug log
                return (
                  <motion.div
                    key={item.id}
                    style={{
                      position: 'relative',
                      marginBottom: '3rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '2rem'
                    }}
                    variants={itemVariants}
                  >
                    {/* Timeline Node */}
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: colors[item.type] || '#8a2be2',
                      border: '4px solid #1a1a1a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <IconComponent style={{ fontSize: '14px', color: '#000' }} />
                    </div>
                    
                    {/* Content Card */}
                    <div style={{
                      background: 'rgba(0,0,0,0.8)',
                      borderRadius: '12px',
                      border: `2px solid ${colors[item.type] || '#8a2be2'}`,
                      padding: '2rem',
                      flex: 1,
                      position: 'relative',
                      boxShadow: `0 8px 25px ${colors[item.type] || '#8a2be2'}30`,
                      backdropFilter: 'blur(10px)'
                    }}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                        <h3 style={{color: colors[item.type] || '#8a2be2', fontSize: '1.4rem', margin: '0', fontFamily: 'monospace', fontWeight: '600'}}>{item.title}</h3>
                        <span style={{color: '#ffd700', fontSize: '0.9rem', fontFamily: 'monospace', background: 'rgba(255,215,0,0.2)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid rgba(255,215,0,0.3)'}}>{item.period}</span>
                      </div>
                      
                      <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: 'white',
                          border: '2px solid rgba(0, 212, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden'
                        }}>
                          {item.logo ? (
                            <img 
                              src={item.logo} 
                              alt={`${item.organization} logo`} 
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                              }}
                            />
                          ) : (
                            <div style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #00d4ff, #ff6b35)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              fontFamily: 'monospace'
                            }}>
                              PS
                            </div>
                          )}
                        </div>
                        <h4 style={{color: '#00d4ff', fontSize: '1.1rem', margin: '0', fontFamily: 'monospace', fontWeight: '500'}}>{item.organization}</h4>
                      </div>
                      <p style={{color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.6', margin: '0'}}>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default About;
