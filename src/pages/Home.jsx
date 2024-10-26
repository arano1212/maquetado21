import React from 'react';
import ImageBanner from '@/components/ImageBanner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <ImageBanner />
    
      <div
        style={{
          maxWidth: '100vw',
          margin: '0 auto',
          padding: '0 20px',
          backgroundColor: 'black',  // Fondo negro
          color: 'white',  // Texto blanco
          fontFamily: 'psf4mfq, sans-serif', // Fuente
          paddingTop: '12rem',  // Espaciado superior
          paddingBottom: '2rem', // Espaciado inferior
          boxSizing: 'border-box',
          overflow: 'hidden', // Asegurarse que no haya scrollbars
        }}
      >
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: 'auto',
            border: 'none',
            boxShadow: 'none',
            fontFamily: 'psf4mfq, sans-serif',
          }}
        >
          <p className="subtitle is-5" style={{ fontSize: '1.2rem' }}>
            Somos líderes en el mercado del diseño<br />
            gráfico y marketing digital.<br />
            Utilizamos tecnología de vanguardia.
          </p>
          <h2
            className="title is-3"
            style={{
              fontFamily: 'psf4mfq, serif',
              fontSize: '2.5rem',
            }}
          >
            Descubre la belleza de lo simple y<br />
            la esencia de lo extraordinario.
          </h2>
          <p className="subtitle is-5">
            Ofrecemos soluciones creativas e innovadoras que<br />
            satisfagan las necesidades específicas de nuestros clientes.
          </p>
        </div>
        <br/><br/><br/>
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: 'auto',
            marginRight: '10%',
            textAlign: 'justify',
            fontFamily: 'psf4mfq, sans-serif',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <h2
            className="has-text-left title is-3"
            style={{
              fontFamily: 'psf4mfq, serif',
              fontSize: '2.8rem',
            }}
          >
            Más que palabras, una experiencia.
          </h2>
          <p className="subtitle is-5">
            Nos dirigimos a empresas de diversos sectores<br />
            que buscan destacar en el mercado a través de una<br />
            sólida presencia visual y estrategias.
          </p>
        </div>
        <br/><br/><br/>
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: '10%',
            textAlign: 'justify',
            fontFamily: 'psf4mfq, sans-serif',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <h2 className="title is-3">
            Reflexiones sobre la vida.
          </h2>
          <p className="has-text-left subtitle is-5">
            Ofrecemos soluciones creativas que<br />
            satisfagan las necesidades específicas de nuestros clientes.
          </p>
        </div>
        <br/><br/><br/>
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: 'auto',
            marginRight: '10%',
            textAlign: 'justify',
            fontFamily: 'psf4mfq, sans-serif',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <h2 className="title is-3">
            La búsqueda del conocimiento.
          </h2>
          <p className="has-text-right subtitle is-5">
            Somos líderes en el mercado del diseño gráfico<br />
            y marketing digital, utilizando tecnología de vanguardia.
          </p>
        </div>
        <br/><br/><br/>
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: '10%',
            textAlign: 'justify',
            fontFamily: 'psf4mfq, sans-serif',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <h2 className="title is-3">
            El arte de la perseverancia.
          </h2>
          <p className="has-text-left subtitle is-5">
            Ofrecemos soluciones creativas que<br />
            satisfagan las necesidades específicas de nuestros clientes.
          </p>
        </div>
        <br/><br/><br/>
        <div
          className="has-text-centered"
          style={{
            marginBottom: '80px',
            marginLeft: 'auto',
            marginRight: '10%',
            textAlign: 'justify',
            fontFamily: 'psf4mfq, sans-serif',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <h2 className="title is-3">
            La conexión con la naturaleza.
          </h2>
          <p className="has-text-right subtitle is-5">
            Nos dirigimos a empresas de diversos sectores<br />
            que buscan destacar en el mercado a través<br />
            de una sólida presencia visual y estrategias.
          </p>
        </div>
      </div>
    
      <footer
        className="footer has-text-centered"
        style={{
          background: 'linear-gradient(180deg, #003366, #66b2ff)',
          padding: '1.5rem 0',
          color: 'white',
          width: '100%',
          border: 'none',
          boxShadow: 'none',
          fontFamily: 'psf4mfq, sans-serif',
        }}
      >
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4">
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'psf4mfq, serif', color: '#fff' }}>
                <br />
                DESCUBRE EL VALOR<br />
                DE TU NEGOCIO
              </h2>
              <br/><br/><br/>
            </div>
            <div className="column is-4">
              <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Inicio</Link>
              <Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Portafolio</Link>
              <Link to="/services" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Servicios</Link>
              <Link to="/aboutus" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Acerca de</Link>
            </div>
            <div className="column is-4" style={{ textAlign: 'right' }}>
              <button className="button is-primary">Comencemos</button>
              <p style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'psf4mfq, serif' }}>
                <br /><br />
                CE <br />
                HACHE<br />
                ESTUDIO
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12" style={{ textAlign: 'center', fontSize: '0.8rem', color: '#fff' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Políticas de privacidad</a><br />
              <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Términos y condiciones</a><br />
              <p>Derechos Reservados CE HACHE ESTUDIO 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
