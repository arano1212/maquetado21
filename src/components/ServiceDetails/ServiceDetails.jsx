import React from 'react';

const ServiceDetails = ({ service, onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h1 className="title">{service.name}</h1>
          <p>{service.description}</p>
          <button className="button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default ServiceDetails;
