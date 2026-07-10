import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

const reviews = [
  {
    name: 'Rohit & Neha Gupta',
    role: 'Bride & Groom (Wedding)',
    quote: 'Krishna Caterers did a great job at our wedding. The food was delicious, the decoration looked beautiful, and everything was managed on time. Our guests really enjoyed the event.',
    location: 'Noida',
    stars: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'Birthday Celebration',
    quote: 'We booked Krishna Caterers for my son’s birthday, and everything was perfect. The food was fresh, the setup was neat, and the staff was very polite. Everyone had a great time.',
    location: 'Gurugram',
    stars: 5,
  },
  {
    name: 'Rajesh Malhotra',
    role: 'Anniversary Celebration',
    quote: 'Our anniversary party was planned really well. The decoration, food, and service were all excellent. The team made sure everything went smoothly from start to finish.',
    location: 'South Delhi',
    stars: 5,
  },
  {
    name: 'Sunita Sharma',
    role: 'Chhath Puja',
    quote: 'Krishna Caterers arranged everything nicely for our Chhath Puja. The food was tasty, the setup was clean, and the team handled everything with care and respect.',
    location: 'Ghaziabad',
    stars: 5,
  },
  {
    name: 'Amit Bansal',
    role: 'Store Inauguration',
    quote: 'We hired Krishna Caterers for our shop inauguration. The snacks were delicious, the service was quick, and all our guests were happy with the arrangements.',
    location: 'Faridabad',
    stars: 5,
  },
];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="luxury-title">
          <span>
            What Our Clients Say About Us
          </span>
          <h2>
            Testimonials
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div 
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            position: 'relative',
          }}
        >
          {/* Card Container */}
          <div 
            className="glass-card"
            style={{
              position: 'relative',
              borderRadius: '8px',
              padding: '3.5rem 3rem',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
              animation: 'fadeTestimonial 0.5s ease',
            }}
          >
            {/* Quote Icon */}
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--bg-primary)',
                padding: '0.5rem 1rem',
                border: '1px solid var(--border-medium)',
                borderRadius: '50%',
              }}
            >
              <Quote size={28} color="var(--gold-primary)" />
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
              ))}
            </div>

            {/* Text */}
            <p 
              style={{ 
                fontSize: '1.25rem', 
                color: 'var(--text-primary)', 
                lineHeight: '1.8', 
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                marginBottom: '2rem' 
              }}
            >
              "{reviews[currentIndex].quote}"
            </p>

            {/* Author */}
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                {reviews[currentIndex].name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {reviews[currentIndex].role} — <span style={{ fontStyle: 'italic' }}>{reviews[currentIndex].location}</span>
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem', 
              marginTop: '2.5rem' 
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-medium)',
                color: '#FFF',
                padding: '0.75rem',
                cursor: 'pointer',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="ctrl-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-medium)',
                color: '#FFF',
                padding: '0.75rem',
                cursor: 'pointer',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="ctrl-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .ctrl-btn:hover {
          border-color: var(--gold-primary) !important;
          color: var(--gold-primary) !important;
          background-color: rgba(212, 175, 55, 0.05) !important;
        }
        @keyframes fadeTestimonial {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
