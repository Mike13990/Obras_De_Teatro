import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Footer = ({
  nombreTeatro,
  direccion,
  telefono,
  correo,
  anio
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-info">
            <div className="footer-logo">
              <span className="footer-logo-icon">🎭</span>
              <span className="footer-logo-text">{nombreTeatro}</span>
            </div>
            <p className="footer-slogan">
              "El arte escénico que transforma corazones"
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">📘</a>
              <a href="#" aria-label="Instagram" className="social-link">📷</a>
              <a href="#" aria-label="YouTube" className="social-link">▶️</a>
              <a href="#" aria-label="Twitter" className="social-link">🐦</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>{direccion}</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>{telefono}</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>{correo}</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Horarios</h4>
            <ul className="footer-schedule">
              <li>
                <span>Lunes - Viernes</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Sábados</span>
                <span>10:00 - 18:00</span>
              </li>
              <li>
                <span>Domingos</span>
                <span>10:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {anio} {nombreTeatro}. Todos los derechos reservados.
          </p>
          <p className="footer-credits">
            Hecho con ❤️ para los amantes del teatro
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  nombreTeatro: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
  anio: PropTypes.number,
};

Footer.defaultProps = {
  nombreTeatro: 'Teatro Nacional',
  direccion: 'Av. Principal #123, Ciudad',
  telefono: '2222-2222',
  correo: 'info@teatronacional.com',
  anio: new Date().getFullYear(),
};

export default Footer;