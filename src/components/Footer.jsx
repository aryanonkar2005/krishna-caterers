import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCredit, setShowCredit] = useState(false);

  return (
    <footer 
      style={{ 
        backgroundColor: '#070A0D', 
        borderTop: '1px solid var(--border-light)',
        padding: '5rem 0 2rem 0' 
      }}
    >
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Logo & Pitch */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              color: '#FFF' 
            }}>
              KRISHNA
            </span>
            <span style={{ 
              fontSize: '0.75rem', 
              letterSpacing: '4px', 
              color: 'var(--gold-primary)', 
              textTransform: 'uppercase',
              fontWeight: 500,
              marginTop: '-1.5rem',
            }}>
              Caterers, Tents & Events
            </span>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Crafting legacy celebrations, royal spaces, and award-winning culinary moments for premium weddings, anniversaries, and high-society milestones since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#services" className="footer-link">Our services</a></li>
              <li><a href="#menu" className="footer-link">Menu</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Office Address
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
              Sector 91, Near Vinayak Hospital, Faridabad, India
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Primary Contact: +91 96679 57647
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Alternate Number: +91 93111 29646
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            paddingTop: '2rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '1rem'
          }}
        >
          <p
            onDoubleClick={() => setShowCredit(prev => !prev)}
            title="Double-click to switch"
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'default', userSelect: 'none' }}
          >
            &copy; {currentYear} Krishna Caterers, Tents & Events. All rights reserved.
          </p>
          <div style={{ position: 'relative', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {/* Owned & operated — shown by default */}
            <p
              style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                position: 'absolute',
                right: 0,
                opacity: showCredit ? 0 : 1,
                transform: showCredit ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: showCredit ? 'none' : 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              <Shield size={12} color="var(--gold-primary)" /> Owned &amp; operated by Sanjay Gupta
            </p>
            {/* Designed by — shown on double-click */}
            <p
              style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                opacity: showCredit ? 1 : 0,
                transform: showCredit ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: showCredit ? 'auto' : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <Shield size={12} color="var(--gold-primary)" /> Website designed by <a href="https://aryanonkar-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Aryan Onkar</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: var(--gold-primary);
          padding-left: 5px;
        }
        .social-btn {
          color: var(--text-primary);
          border: 1px solid var(--border-light);
          padding: 0.6rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justifyContent: center;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
