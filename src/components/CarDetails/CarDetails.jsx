import React from 'react';

const CarDetails = ({ project, onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div> {/* Fondo oscuro con menos opacidad */}
      <div className="modal-content">
        <div className="box" style={{ backgroundColor: 'black', color: 'white' }}> {/* Fondo y texto oscuro */}
          <h1 className="title" style={{ color: 'white' }}>{`Proyecto ${project.id}`}</h1>
          <figure className="image is-4by3">
            <img src={project.imageUrl} alt={`Proyecto ${project.id}`} />
          </figure>
          <p style={{ marginTop: '1rem', color: 'white' }}>
            {`Descripción breve del proyecto ${project.id}. ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed vitae nisi non justo volutpat faucibus.'}`}
          </p>
          <button className="button is-primary" onClick={onClose}>Cerrar</button> {/* Botón primario */}
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default CarDetails;
