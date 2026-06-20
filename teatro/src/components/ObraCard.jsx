import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ObraCard = ({ obra, onComprar }) => {
  const { titulo, publico, descripcion, precio, imagen } = obra;

  const descripcionCorta = descripcion.length > 100 
    ? descripcion.substring(0, 100) + '...' 
    : descripcion;

  return (
    <article className="obra-card">
      <div className="obra-card-image">
        <img 
          src={imagen} 
          alt={`Cartel de la obra: ${titulo}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://picsum.photos/seed/default/400/300';
          }}
        />
        <span className="obra-card-badge">{publico}</span>
      </div>

      <div className="obra-card-body">
        <h3 className="obra-card-title">{titulo}</h3>
        <p className="obra-card-description">{descripcionCorta}</p>

        <div className="obra-card-footer">
          <span className="obra-card-price">
            <span className="price-symbol">Q</span>
            {precio}
          </span>
          <button
            className="btn btn-primary btn-comprar"
            onClick={() => onComprar(obra)}
            aria-label={`Comprar boleto para ${titulo}`}
          >
            🎫 Comprar
          </button>
        </div>
      </div>
    </article>
  );
};

ObraCard.propTypes = {
  obra: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    publico: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
  }).isRequired,
  onComprar: PropTypes.func.isRequired,
};

export default ObraCard;