import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'wedding',
    guestCount: '150',
    eventDate: '',
    requirements: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handlePopulate = (e) => {
      const { eventType, guests, cateringTier, decorTier, coordination, budget } = e.detail;
      setFormData((prev) => ({
        ...prev,
        occasion: eventType,
        guestCount: guests.toString(),
        requirements: `Estimated Budget Range: ${budget}\n- Catering: ${cateringTier}\n- Decor: ${decorTier}\n- Coordination: ${coordination}\n\nLet's discuss my customized luxury setup!`,
      }));
    };
    
    window.addEventListener('populateEnquiry', handlePopulate);
    return () => window.removeEventListener('populateEnquiry', handlePopulate);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate luxury API submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        occasion: 'wedding',
        guestCount: '150',
        eventDate: '',
        requirements: '',
      });
    }, 5000);
  };

  return (
<section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
  <div className="container">
    <div className="luxury-title">
      <span>GET IN TOUCH</span>
      <h2>Tell Us What You Need</h2>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem'
      }}
      className="contact-grid"
    >
      {/* Info Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#FFF' }}>
            We're Here to Help
          </h3>
          <p style={{ lineHeight: '1.7' }}>
            Share your contact details and event requirements. Our team will call you to discuss your needs and suggest the best solution.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Call */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
              <Phone size={20} color="var(--gold-primary)" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Phone Number
              </span>
              <a href="tel:+919311129646" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                +91 93111 29646
              </a>
            </div>
          </div>

          {/* Call */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
              <Phone size={20} color="var(--gold-primary)" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Alternate Phone Number
              </span>
              <a href="tel:+919667957647" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                +91 96679 57647
              </a>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
              <Mail size={20} color="var(--gold-primary)" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Email
              </span>
              <a href="mailto:krishnaevent001@gmail.com" style={{ color: '#FFF', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                krishnaevent001@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
              <MapPin size={20} color="var(--gold-primary)" />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Office Address
              </span>
              <span style={{ color: '#FFF', fontSize: '1rem' }}>
                Sector 91, Near Vinayak Hospital, Faridabad, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="glass-card" style={{ borderRadius: '8px', position: 'relative' }}>
        {isSubmitted ? (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 0',
              animation: 'fadeIn 0.5s ease'
            }}
          >
            <CheckCircle size={64} color="var(--gold-primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.75rem', color: '#FFF', marginBottom: '0.5rem' }}>
              Thank You!
            </h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '350px', lineHeight: '1.6' }}>
              We have received your details. Our team will call you shortly to discuss your requirements.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              Request a Call Back
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="luxury-input"
                />
              </div>

              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="luxury-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <label className="form-label">Email</label>
                  <label className="form-label" style={{ opacity: 0.5 }}>
                    (Optional)
                  </label>
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="luxury-input"
                />
              </div>

              <div>
                <label className="form-label">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <label className="form-label">Event Type</label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="luxury-input"
                >
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="retirement">Retirement</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="custom">Other</option>
                </select>
              </div>

              <div>
                <label className="form-label">Number of Guests</label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Approximate number"
                  className="luxury-input"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Tell Us About Your Event</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us what you need, your budget, location, or any special requests."
                className="luxury-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              <Calendar size={16} />
              Request a Call Back
            </button>
          </form>
        )}
      </div>
    </div>
  </div>

  <style>{`
    .form-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-primary);
      margin-bottom: 0.35rem;
      display: block;
      font-weight: 500;
    }

    .luxury-input {
      width: 100%;
      background-color: var(--bg-tertiary);
      border: 1px solid var(--border-light);
      color: #FFF;
      padding: 0.75rem;
      font-family: var(--font-sans);
      font-size: 0.9rem;
      outline: none;
      transition: all 0.3s ease;
    }

    .luxury-input:focus {
      border-color: var(--gold-primary);
      box-shadow: 0 0 5px rgba(212, 175, 55, 0.2);
    }

    @media (min-width: 992px) {
      .contact-grid {
        grid-template-columns: 0.9fr 1.1fr !important;
      }
    }

    @media (max-width: 576px) {
      .form-row {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>
</section>
  );
}
