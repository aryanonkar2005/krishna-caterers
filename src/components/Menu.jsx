import React, { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'live', name: 'Live Counters' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Paneer Tikka',
        desc: 'Soft paneer cubes marinated with yogurt and Indian spices, grilled in a tandoor.',
        badge: 'Popular',
        type: 'Veg',
      },
      {
        name: 'Veg Spring Rolls',
        desc: 'Crispy rolls filled with fresh vegetables and served with sweet chili sauce.',
        badge: 'Crispy',
        type: 'Veg',
      },
      {
        name: 'Chicken Tikka',
        desc: 'Juicy chicken pieces marinated with Indian spices and grilled.',
        badge: 'Best Seller',
        type: 'Non-Veg',
      },
      {
        name: 'Fish Fry',
        desc: 'Fresh fish coated with spices and fried until crispy.',
        badge: 'Chef Special',
        type: 'Non-Veg',
      },
    ],

    mains: [
      {
        name: 'Veg Biryani',
        desc: 'Fragrant basmati rice cooked with vegetables and traditional spices.',
        badge: 'Favorite',
        type: 'Veg',
      },
      {
        name: 'Shahi Paneer',
        desc: 'Paneer cooked in a rich tomato and cream gravy.',
        badge: 'House Special',
        type: 'Veg',
      },
      {
        name: 'Butter Chicken',
        desc: 'Tender chicken cooked in a creamy tomato gravy.',
        badge: 'Best Seller',
        type: 'Non-Veg',
      },
      {
        name: 'Mutton Curry',
        desc: 'Slow-cooked mutton prepared with traditional Indian spices.',
        badge: 'Traditional',
        type: 'Non-Veg',
      },
    ],

    live: [
      {
        name: 'Chaat Counter',
        desc: 'Fresh pani puri, papdi chaat, dahi bhalla, and bhel prepared live.',
        badge: 'Live',
        type: 'Veg',
      },
      {
        name: 'Roti & Naan Counter',
        desc: 'Hot tandoori roti, butter naan, garlic naan, and kulcha made fresh.',
        badge: 'Fresh',
        type: 'Veg',
      },
      {
        name: 'Dosa Counter',
        desc: 'Plain, masala, and cheese dosa served with chutney and sambar.',
        badge: 'South Indian',
        type: 'Veg',
      },
    ],

    desserts: [
      {
        name: 'Gulab Jamun',
        desc: 'Soft milk dumplings served warm with sugar syrup.',
        badge: 'Classic',
        type: 'Veg',
      },
      {
        name: 'Rasmalai',
        desc: 'Soft cottage cheese patties served in sweet saffron milk.',
        badge: 'Popular',
        type: 'Veg',
      },
      {
        name: 'Ice Cream',
        desc: 'Vanilla, chocolate, and mango ice cream with toppings.',
        badge: 'Kids Favorite',
        type: 'Veg',
      },
    ],
  };

  return (
    <section
      id="menu"
      className="section"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <div className="luxury-title">
          <span>OUR MENU</span>
          <h2>Delicious Food for Every Occasion</h2>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background:
                  activeCategory === cat.id
                    ? 'var(--gold-primary)'
                    : 'transparent',
                color:
                  activeCategory === cat.id
                    ? '#000'
                    : 'var(--text-primary)',
                border:
                  activeCategory === cat.id
                    ? '1px solid var(--gold-primary)'
                    : '1px solid var(--border-light)',
                padding: '0.8rem 1.75rem',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="menu-tab-btn"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div
          className="menu-items-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px dashed var(--border-medium)',
                paddingBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                animation: 'fadeUpMenu 0.5s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontFamily: 'var(--font-serif)',
                      color: '#fff',
                    }}
                  >
                    {item.name}
                  </h3>

                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.45rem',
                      border:
                        item.type === 'Veg'
                          ? '1px solid #48BB78'
                          : item.type === 'Non-Veg'
                          ? '1px solid #F56565'
                          : '1px solid var(--gold-primary)',
                      color:
                        item.type === 'Veg'
                          ? '#48BB78'
                          : item.type === 'Non-Veg'
                          ? '#F56565'
                          : 'var(--gold-primary)',
                      textTransform: 'uppercase',
                      borderRadius: '2px',
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    border: '1px solid rgba(212,175,55,0.2)',
                    padding: '0.2rem 0.6rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p
            style={{
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
            }}
          >
            Want a custom menu? We can prepare dishes based on your event and
            preferences.
          </p>

          <a href="#contact" className="btn-outline">
            <UtensilsCrossed size={16} />
            Request Custom Menu
          </a>
        </div>
      </div>

      <style>{`
        .menu-tab-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: var(--gold-primary);
        }

        @keyframes fadeUpMenu {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 576px) {
          .menu-items-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}