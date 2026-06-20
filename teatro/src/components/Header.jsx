import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// Ícono SVG para el logo (alternativa a imagen)
const LogoIcon = () => (
  <svg viewBox="0 0 100 100" className="logo-icon" fill="currentColor">
    <path d="M50 10 L20 30 L20 70 L50 90 L80 70 L80 30 Z" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <path d="M35 40 L50 30 L65 40 L65 60 L50 70 L35 60 Z" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Header = ({ nombreTeatro, mensajeBienvenida }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <div className="logo-wrapper">
            <LogoIcon />
          </div>
          <div className="header-title">
            <h1>{nombreTeatro}</h1>
            <span className="header-subtitle">🎭 Arte que emociona</span>
          </div>
        </div>

        <div className="header-welcome">
          <span className="welcome-icon">🎪</span>
          <p className="welcome-text">{mensajeBienvenida}</p>
        </div>
      </div>

      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>
        <div className="decoration-line"></div>
      </div>
    </header>
  );
};

Header.propTypes = {
  nombreTeatro: PropTypes.string.isRequired,
  mensajeBienvenida: PropTypes.string.isRequired,
};

Header.defaultProps = {
  nombreTeatro: 'Teatro Nacional',
  mensajeBienvenida: '¡Bienvenidos al mundo del arte escénico!',
};

export default Header;