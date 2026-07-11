import React from 'react';
import { ChefHat, Tent, Heart, Gem, Flower2, Palette, Cake, PartyPopper, Landmark } from 'lucide-react';

export default function Services() {
  const serviceItems = [
  {
    icon: <ChefHat size={40} color="var(--gold-primary)" />,
    title: 'Catering',
    subtitle: 'Delicious Food for Every Event',
    desc: 'Our menu can be customized to match your taste and your guests’ preferences.',
    details: [
      'Veg Menu',
      'Live Food Counters',
      'Indian and Chinese Dishes and Snacks',
      'Desserts & Beverages',
    ],
  },
  {
    icon: <Tent size={40} color="var(--gold-primary)" />,
    title: 'Tents',
    subtitle: 'Beautiful Setup & Decoration',
    desc: 'We provide stylish tents, stage decoration, lighting, flowers, and seating arrangements to make your event look amazing.',
    details: [
      'Designer Tents',
      'Stage Decoration',
      'Lighting & Sound',
      'Flower Decoration',
    ],
  },
  {
    icon: <Heart size={40} color="var(--gold-primary)" />,
    title: 'Weddings',
    subtitle: 'Making Your Big Day Special',
    desc: 'From planning to decoration and catering, we take care of everything so you can enjoy your wedding without any stress.',
    details: [
      'Complete Wedding Planning',
      'Venue Decoration',
      'Guest Management',
      'Food & Entertainment',
    ],
  },
  {
    icon: <Gem size={40} color="var(--gold-primary)" />,
    title: 'Ring Ceremony',
    subtitle: 'Celebrate Your New Beginning',
    desc: 'We create beautiful ring ceremony setups with elegant decoration, delicious food, and smooth event management.',
    details: [
      'Elegant Stage Setup',
      'Floral Decoration',
      'Catering Services',
      'Music & Entertainment',
    ],
  },
  {
    icon: <Flower2 size={40} color="var(--gold-primary)" />,
    title: 'Haldi',
    subtitle: 'Bright & Joyful Celebrations',
    desc: 'Make your Haldi ceremony colorful and fun with beautiful decor, comfortable seating, music, and delicious food.',
    details: [
      'Yellow Theme Decoration',
      'Flower Setup',
      'Traditional Seating',
      'Snacks & Refreshments',
    ],
  },
  {
    icon: <Cake size={40} color="var(--gold-primary)" />,
    title: 'Birthday Parties',
    subtitle: 'Fun Celebrations for All Ages',
    desc: 'From kids’ birthdays to milestone celebrations, we arrange everything to make your party memorable.',
    details: [
      'Theme Decoration',
      'Birthday Cake Setup',
      'Games & Entertainment',
      'Food & Catering',
    ],
  },
  {
  icon: <Cake size={40} color="var(--gold-primary)" />,
  title: 'Anniversary Celebrations',
  subtitle: 'Silver & Golden Jubilee Events',
  desc: 'Celebrate your Silver Jubilee (25th) or Golden Jubilee (50th) anniversary with elegant décor, memorable moments, and seamless event planning.',
  details: [
    'Elegant Theme Decoration',
    'Anniversary Cake Setup',
    'Live Music & Entertainment',
    'Food & Catering',
  ],
},
  {
    icon: <PartyPopper size={40} color="var(--gold-primary)" />,
    title: 'Retirement Functions',
    subtitle: 'Celebrate a Wonderful Journey',
    desc: 'Honor your loved one\'s career with a well-planned retirement party featuring elegant decoration, catering, and entertainment.',
    details: [
      'Stage Decoration',
      'Photo & Memory Corner',
      'Catering Services',
      'Music & Cultural Programs',
    ],
  },
  {
  icon: <Landmark size={40} color="var(--gold-primary)" />,
  title: 'Religious Events',
  subtitle: 'Organized with Devotion and Care',
  desc: 'Plan religious gatherings with complete arrangements, ensuring a peaceful and spiritually enriching experience for all attendees.',
  details: [
    'Chhath Puja',
    'Durga Puja & Navratri Celebrations',
    'Ganesh Chaturthi & Ganesh Visarjan',
    'Jagran, Mata Ki Chowki & Bhajan Sandhya',
    'Yagya, Havan, Pooja & Religious Processions',
  ]}];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="luxury-title">
          <span>WHAT WE DO</span>
          <h2>Our Services</h2>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem' 
          }}
        >
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                height: '100%',
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem', 
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '1.25rem'
                }}
              >
                <div 
                  style={{ 
                    background: 'rgba(212, 175, 55, 0.1)', 
                    padding: '1rem', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <span 
                    style={{ 
                      fontSize: '0.75rem', 
                      letterSpacing: '2px', 
                      color: 'var(--gold-primary)', 
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {service.subtitle}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '2px' }}>{service.title}</h3>
                </div>
              </div>

              <p style={{ marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem', lineHeight: '1.6' }}>
                {service.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}
                >
                  Signature Features:
                </span>
                <ul 
                  style={{ 
                    listStyle: 'none', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem',
                    paddingLeft: '0.25rem'
                  }}
                >
                  {service.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      style={{ 
                        fontSize: '0.85rem', 
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{ color: 'var(--gold-primary)', fontSize: '1rem' }}>✦</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
