import React from 'react';

const CarDetails = ({ project, onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h1 className="title">{`Proyecto ${project.id}`}</h1>
          <figure className="image is-4by3">
            <img src={project.imageUrl} alt={`Proyecto ${project.id}`} />
          </figure>
          <p style={{ marginTop: '1rem' }}>
            {`Descripción breve del proyecto ${project.id}. ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed vitae nisi non justo volutpat faucibus.'}`}
          </p>
          <button className="button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default CarDetails;
