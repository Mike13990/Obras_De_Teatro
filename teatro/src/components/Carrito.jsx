import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Carrito = ({ carrito, onEliminar, onVaciar }) => {
  // Calcular total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  // Contar cantidad de obras (cada boleto es una obra)
  const cantidadBoletos = carrito.length;

  // Agrupar obras duplicadas para mostrar cantidad
  const agruparObras = () => {
    const grupos = {};
    carrito.forEach(obra => {
      const key = obra.id;
      if (!grupos[key]) {
        grupos[key] = { ...obra, cantidad: 0 };
      }
      grupos[key].cantidad += 1;
    });
    return Object.values(grupos);
  };

  const obrasAgrupadas = agruparObras();

  if (carrito.length === 0) {
    return (
      <div className="carrito carrito-vacio">
        <div className="carrito-icon">🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p>¡Explora nuestro catálogo y compra tus boletos!</p>
      </div>
    );
  }

  return (
    <div className="carrito">
      <div className="carrito-header">
        <h3 className="carrito-titulo">
          🛒 Carrito
          <span className="carrito-badge">{cantidadBoletos}</span>
        </h3>
        {carrito.length > 0 && (
          <button
            className="btn btn-danger btn-vaciar"
            onClick={onVaciar}
            aria-label="Vaciar carrito"
          >
            Vaciar
          </button>
        )}
      </div>

      <ul className="carrito-lista">
        {obrasAgrupadas.map((obra) => (
          <li key={obra.id} className="carrito-item">
            <div className="carrito-item-info">
              <span className="carrito-item-nombre">{obra.titulo}</span>
              <div className="carrito-item-detalles">
                <span className="carrito-item-cantidad">×{obra.cantidad}</span>
                <span className="carrito-item-precio">
                  Q{obra.precio * obra.cantidad}
                </span>
              </div>
            </div>
            <button
              className="btn-eliminar"
              onClick={() => {
                // Eliminar solo una ocurrencia de la obra
                const index = carrito.findIndex(item => item.id === obra.id);
                if (index !== -1) {
                  onEliminar(index);
                }
              }}
              aria-label={`Eliminar ${obra.titulo} del carrito`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="carrito-footer">
        <div className="carrito-total">
          <span className="total-label">Total:</span>
          <span className="total-monto">Q{total}</span>
        </div>
        <button className="btn btn-primary btn-comprar-todo">
          🎭 Comprar Ahora
        </button>
      </div>
    </div>
  );
};

Carrito.propTypes = {
  carrito: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEliminar: PropTypes.func.isRequired,
  onVaciar: PropTypes.func.isRequired,
};

export default Carrito;