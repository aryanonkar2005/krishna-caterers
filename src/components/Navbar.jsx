import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    // { name: 'Event Planner', href: '#planner' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: isScrolled ? 'rgba(10, 13, 16, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'clamp(0.6rem, 2vw, 1rem)',
          }}
        >
          <img src='/favicon.jpeg' style={{ borderRadius: '10%', height: 'clamp(1.75rem, 4vw, 2.25rem)', width: 'clamp(1.75rem, 4vw, 2.25rem)', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#FFF'
            }}>
              KRISHNA
            </span>
          </div>
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '4px',
            color: 'var(--gold-primary)',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginTop: '-2px',
          }}>
            Caterers, Tents & Events
          </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                  }}
                  className="nav-hover-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href="#contact"
            className="btn-outline"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.75rem',
              display: 'none',
              marginLeft: '1.5rem',
            }}
            id="desktop-cta"
          >
            <PhoneCall size={14} />
            Talk to us
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#FFF',
              display: 'block',
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} color="#D4AF37" /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-light)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'block',
                    padding: '0.5rem 0',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-gold"
            style={{ justifyContent: 'center', width: '100%', marginTop: '1rem' }}
          >
            <PhoneCall size={16} />
            Book a Call
          </a>
        </div>
      )}

      {/* Embed responsive css rules directly inside the component in a style tag */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          #desktop-cta {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        .nav-hover-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--gold-primary);
          transition: width 0.3s ease;
        }
        .nav-hover-link:hover {
          color: var(--gold-primary) !important;
        }
        .nav-hover-link:hover::after {
          width: 100%;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
