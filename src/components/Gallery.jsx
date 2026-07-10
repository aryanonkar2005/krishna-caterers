import React, { useState } from 'react';

// List all images from the /images folder directly
const imageFiles = [
  'birthday.jpeg',
  'catering.jpeg',
  'gala.jpeg',
  'retirement.jpeg',
  'stage.jpeg',
  'tents.jpeg',
  // 'party.jpeg'
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="luxury-title">
          <span>PORTFOLIO OF DREAMS</span>
          <h2>Our Breathtaking Setups</h2>
        </div>

        {/* Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
          className="gallery-grid"
        >
          {imageFiles.map((file, index) => (
            <div
              key={index}
              onClick={() => setLightbox(`/images/${file}`)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '6px',
                height: '300px',
                cursor: 'pointer',
                animation: `fadeUpGallery 0.4s ease ${index * 0.07}s both`,
              }}
              className="gallery-card"
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(/images/${file})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                }}
                className="gallery-img"
              />

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,13,16,0.85) 0%, rgba(212,175,55,0.08) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                }}
                className="gallery-overlay"
              >
                <span style={{
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                }}>
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightbox}
            alt=""
            style={{
              maxWidth: '90vw',
              maxHeight: '88vh',
              borderRadius: '6px',
              objectFit: 'contain',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.2s',
            }}
          >
            ✕
          </button>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @keyframes fadeUpGallery {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 576px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
