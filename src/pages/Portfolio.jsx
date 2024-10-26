import React, { useState } from 'react';
import CarDetails from '@/components/CarDetails';

const projects = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  imageUrl: `https://via.placeholder.com/300x200?text=image+${index + 1}`,
}));

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div
        style={{
          padding: "2rem",
          marginTop: "5rem",
          textAlign: "center",
          fontFamily: "psf4mfq, sans-serif",
        }}
      >
        <br />
        <br />

        <div className="columns is-multiline is-centered" style={{ marginTop: "2rem" }}>
          {projects.map((project) => (
            <div className="column is-4" key={project.id}>
              <div className="card" onClick={() => handleCardClick(project)}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={project.imageUrl} alt={`Proyecto ${project.id}`} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <CarDetails project={selectedProject} onClose={handleCloseDetails} />}

      <footer
        className="footer has-text-centered"
        style={{
          backgroundColor: 'transparent',
          padding: '2rem 0',
          color: 'white',
          width: '100%',
          border: 'none',
          boxShadow: 'none',
          fontFamily: 'psf4mfq, sans-serif',
        }}
      >
        <div className="container">
          <div className="columns is-vcentered" style={{ justifyContent: 'space-between' }}>
            <div className="column is-4" style={{ textAlign: 'left' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>
                Políticas de privacidad
              </a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>
                Términos y condiciones
              </a>
              <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
                Derechos Reservados CE HACHE ESTUDIO 2024
              </p>
            </div>

            <div className="column is-4" style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" style={{ color: '#fff', fontSize: '2rem' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
