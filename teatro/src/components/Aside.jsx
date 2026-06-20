import React from 'react';
import '../App.css';

const Aside = () => {
  return (
    <aside className="aside-promocional">
      <div className="promo-card">
        <div className="promo-badge">🔥 Promoción del Mes</div>

        <div className="promo-image">
          <img
            src="https://picsum.photos/seed/promo/600/400"
            alt="Promoción especial del teatro"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/seed/promo-default/600/400';
            }}
          />
          <div className="promo-overlay">
            <span className="promo-discount">15%</span>
            <span className="promo-discount-label">DESCUENTO</span>
          </div>
        </div>

        <div className="promo-content">
          <h3 className="promo-title">¡Compra 3 y recibe 15% OFF!</h3>
          <p className="promo-description">
            Adquiere 3 boletos para cualquier obra y obtén un 15% de descuento
            en tu próxima compra. ¡Válido por tiempo limitado!
          </p>

          <div className="promo-features">
            <div className="promo-feature">
              <span className="feature-icon">🎭</span>
              <span>Válido para todas las obras</span>
            </div>
            <div className="promo-feature">
              <span className="feature-icon">📅</span>
              <span>Hasta el 31 de diciembre</span>
            </div>
            <div className="promo-feature">
              <span className="feature-icon">🎫</span>
              <span>Canjeable en taquilla</span>
            </div>
          </div>

          <button className="btn btn-primary promo-btn">
            ¡Aprovechar Oferta!
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;