import React, { useState, useEffect } from 'react';
import { Calculator, Send, Sparkles } from 'lucide-react';

export default function EventPlanner() {
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(150);
  const [cateringTier, setCateringTier] = useState('gold');
  const [decorTier, setDecorTier] = useState('grand');
  const [needCoordination, setNeedCoordination] = useState(true);
  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 });

  const eventRates = {
    wedding: { base: 1.2 },
    birthday: { base: 0.95 },
    retirement: { base: 0.9 },
    corporate: { base: 1.1 },
    custom: { base: 1.0 },
  };

  const cateringRates = {
    silver: { perGuest: 1500, label: 'Silver Tier (Premium Buffet)' },
    gold: { perGuest: 2500, label: 'Gold Tier (Signature Fusion)' },
    royal: { perGuest: 4500, label: 'Royal Imperial (Fine Dining & Live Cabinets)' },
  };

  const decorRates = {
    standard: { cost: 150000, label: 'Standard Luxe (Chic Florals)' },
    grand: { cost: 350000, label: 'Grand Premium (Thematic & Light Grid)' },
    maharaja: { cost: 750000, label: 'Royal Maharaja (Full Palace Setup)' },
  };

  const coordinationRate = 100000; // flat fee

  const calculateCost = () => {
    const baseMultiplier = eventRates[eventType].base;
    const cateringCost = cateringRates[cateringTier].perGuest * guests;
    const decorCost = decorRates[decorTier].cost;
    const coordinationCost = needCoordination ? coordinationRate : 0;

    const subtotal = (cateringCost + decorCost + coordinationCost) * baseMultiplier;
    
    // Provide a premium margin (range of +/- 10%)
    const min = Math.round(subtotal * 0.9);
    const max = Math.round(subtotal * 1.15);

    setEstimatedCost({ min, max });
  };

  useEffect(() => {
    calculateCost();
  }, [eventType, guests, cateringTier, decorTier, needCoordination]);

  const handleSendToForm = () => {
    // Dispatch custom event to auto-fill the contact form
    const details = {
      eventType,
      guests,
      cateringTier: cateringRates[cateringTier].label,
      decorTier: decorRates[decorTier].label,
      coordination: needCoordination ? 'Yes' : 'No',
      budget: `₹${estimatedCost.min.toLocaleString('en-IN')} - ₹${estimatedCost.max.toLocaleString('en-IN')}`,
    };
    
    const event = new CustomEvent('populateEnquiry', { detail: details });
    window.dispatchEvent(event);

    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planner" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="luxury-title">
          <span>EVENT STUDIO</span>
          <h2>Interactive Event Planner</h2>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '3rem', 
            alignItems: 'start' 
          }}
          className="planner-grid"
        >
          {/* Controls Form */}
          <div 
            className="glass-card" 
            style={{ 
              borderRadius: '8px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
              Select Event Customizations
            </h3>

            {/* Event Type */}
            <div>
              <label className="input-label">Event Occasion</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
                {Object.keys(eventRates).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    style={{
                      background: eventType === type ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                      color: eventType === type ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      border: eventType === type ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                      padding: '0.6rem 0.5rem',
                      textTransform: 'capitalize',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      fontWeight: eventType === type ? 600 : 400,
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label className="input-label">Guest Count</label>
                <span style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  height: '6px',
                  background: 'var(--bg-tertiary)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                <span>50 Guests</span>
                <span>500 Guests</span>
                <span>1000+ Guests</span>
              </div>
            </div>

            {/* Catering Tier */}
            <div>
              <label className="input-label">Catering & Culinary Tier</label>
              <select
                value={cateringTier}
                onChange={(e) => setCateringTier(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-light)',
                  color: '#FFF',
                  padding: '0.8rem',
                  marginTop: '0.5rem',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                }}
              >
                <option value="silver">Silver Tier (₹1,500/guest - Premium Buffets)</option>
                <option value="gold">Gold Tier (₹2,500/guest - Fine Dining & Live stations)</option>
                <option value="royal">Royal Imperial Tier (₹4,500/guest - Saffron Cured Meats & Live Caviar counters)</option>
              </select>
            </div>

            {/* Decor Tier */}
            <div>
              <label className="input-label">Royal Tents & Floral Decor Tier</label>
              <select
                value={decorTier}
                onChange={(e) => setDecorTier(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-light)',
                  color: '#FFF',
                  padding: '0.8rem',
                  marginTop: '0.5rem',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                }}
              >
                <option value="standard">Standard Luxe (₹1,50,000 - Sleek Contemporary Drapery)</option>
                <option value="grand">Grand Premium (₹3,50,000 - Saffron Florals & German Glass Tents)</option>
                <option value="maharaja">Royal Maharaja (₹7,50,000 - Palatial Tenting, Light show & Custom Seating)</option>
              </select>
            </div>

            {/* Event Coordination */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', color: '#FFF' }}>Full-Scale Event Planning</h4>
                <p style={{ fontSize: '0.8rem' }}>Dedicated planner for scheduling, vendor coordination, and rehearsal direction (+₹1,00,000)</p>
              </div>
              <input
                type="checkbox"
                checked={needCoordination}
                onChange={(e) => setNeedCoordination(e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Cost Output Panel */}
          <div 
            className="glass-card" 
            style={{ 
              borderRadius: '8px',
              padding: '2.5rem',
              border: '1px solid var(--gold-primary)',
              background: 'linear-gradient(135deg, rgba(18, 23, 30, 0.9) 0%, rgba(26, 32, 42, 0.95) 100%)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              boxShadow: 'var(--shadow-gold-hover)'
            }}
          >
            <div 
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                padding: '1.25rem',
                borderRadius: '50%',
                marginBottom: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Calculator size={36} color="var(--gold-primary)" />
            </div>

            <span style={{ fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
              Estimated Investment Range
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', margin: '1rem 0', color: '#FFF' }}>
              ₹{estimatedCost.min.toLocaleString('en-IN')} - ₹{estimatedCost.max.toLocaleString('en-IN')}
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
              This range represents a luxury standard estimation including premium food ingredients, high-grade fabric canopies, and flawless coordination crew rates. Taxes and venue booking charges extra.
            </p>

            <button 
              onClick={handleSendToForm}
              className="btn-gold" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={16} />
              Lock in Estimate & Book Consultation
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-primary);
          font-weight: 500;
        }
        @media (min-width: 992px) {
          .planner-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
