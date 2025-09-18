import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "df6edc4a-47a3-4d88-b08a-390ab7ef87a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent successfully to Prabhav Karve");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Subtle Grid Background */}
      <div className="contact-grid-bg"></div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            LET'S <span className="contact-title-highlight">COLLABORATE</span>
          </h2>
          <p className="contact-subtitle">
            Ready to build or architect your next blast? Let's talk.
          </p>
        </div>
        
        {/* Professional Contact Form */}
        <div className="contact-form-container">
          <div className="contact-form-top-border"></div>
          
          <div className="contact-email-info">
            <div className="contact-email-address">
              <strong>karve.prabhav@gmail.com</strong>
            </div>
            <p className="contact-email-note">Or send me a message directly below</p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            {/* 👇 names MUST match template variables in EmailJS */}
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required 
              className="contact-input" 
            />
            <input 
              type="email" 
              name="reply_to" 
              placeholder="Your Email" 
              required
              className="contact-input" 
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
              className="contact-input" 
            />
            <textarea 
              name="message" 
              placeholder="Your Message (Include your email for response)" 
              rows="5" 
              required 
              className="contact-textarea"
            ></textarea>
            
            {result && (
              <div className="contact-result">
                {result}
              </div>
            )}
            
            <div className="contact-button-container">
              
              <button type="submit" className="contact-submit-btn">
                🔥 SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
