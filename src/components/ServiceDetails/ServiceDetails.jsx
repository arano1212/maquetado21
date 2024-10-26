import React from 'react';

const ServiceDetails = ({ service, onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div> {/* Fondo oscuro con menos opacidad */}
      <div className="modal-content">
        <div className="box" style={{ backgroundColor: 'black', color: 'white' }}> {/* Fondo y texto oscuro */}
          <h1 className="title" style={{ color: 'white' }}>{service.name}</h1>
          <p style={{ color: 'white' }}>{service.description}</p>
          <button className="button is-primary" onClick={onClose}>
            Cerrar
          </button> {/* Botón primario */}
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default ServiceDetails;
