import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image: '/images/catering.jpeg',
    subtitle: 'FOOD THAT EVERYONE REMEMBERS',
    title: 'Delicious Catering for Every Celebration',
    desc: 'From traditional Indian feasts to live counters and premium menus, we serve fresh, flavorful food that keeps your guests talking long after the event.',
  },
  {
    image: '/images/tents.jpeg',
    subtitle: 'TENTS • DJ • DECOR • LIGHTS & MORE',
    title: 'Everything You Need, All in One Place',
    desc: 'Need tents, DJ, stage, lighting, sound, decoration, or seating? We handle the complete setup so you don’t have to coordinate with multiple vendors.',
  },
  {
    image: '/images/gala.jpeg',
    subtitle: 'COMPLETE EVENT MANAGEMENT',
    title: 'From Small Gatherings to Grand Events',
    desc: 'Weddings, engagements, anniversaries, birthday parties, poojas, religious gatherings, corporate events, stage shows and more — we plan, manage, and execute every detail from start to finish.',
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(to bottom, rgba(10, 13, 16, 0.5), rgba(10, 13, 16, 0.9)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1.5s ease-in-out, transform 6s ease-in-out',
            zIndex: index === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Content Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '700px', animation: 'fadeInUp 1s ease' }}>
            <span 
              className="badge-gold"
              style={{
                marginBottom: '1.5rem',
                animation: 'tracking-in-expand 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
              }}
            >
              {slides[currentSlide].subtitle}
            </span>
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                color: '#FFF',
                fontFamily: 'var(--font-serif)',
              }}
            >
              {slides[currentSlide].title}
            </h1>
            <p 
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: '#E2E8F0',
                marginBottom: '2.5rem',
                lineHeight: '1.6',
                fontWeight: 300,
              }}
            >
              {slides[currentSlide].desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <a href="#contact" className="btn-gold">
                <Phone size={18} />
                Talk to us
              </a>
              <a href="#gallery" className="btn-outline">
                View our work
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(25, 32, 42, 0.4)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#FFF',
          padding: '0.75rem',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        className="nav-arrow"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(25, 32, 42, 0.4)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#FFF',
          padding: '0.75rem',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        className="nav-arrow"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: index === currentSlide ? '30px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: index === currentSlide ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.5s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-arrow:hover {
          background: var(--gold-primary) !important;
          color: #000 !important;
          border-color: var(--gold-primary) !important;
        }
        @media (max-width: 576px) {
          .nav-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
