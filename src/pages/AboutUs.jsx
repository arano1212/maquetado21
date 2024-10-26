import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "12rem 2rem",
        textAlign: "center",
        fontFamily: "psf4mfq, sans-serif",
        color: "white",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontFamily: "psf4mfq, serif",
          marginBottom: "2rem",
        }}
      >
        ACERCA DE NOSOTROS
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          maxWidth: "800px",
          lineHeight: "1.5",
        }}
      >
        Tenemos como objetivo posicionarnos como líderes en el mercado del diseño gráfico y marketing digital, ofreciendo soluciones creativas e innovadoras que satisfagan las necesidades específicas de nuestros clientes.
      </p>
      <p
        style={{
          fontSize: "1rem",
          maxWidth: "800px",
          lineHeight: "1.5",
        }}
      >
        Nuestro enfoque principal es brindar servicios de alta calidad en Diseño de Identidad Corporativa, Desarrollo Web, Diseño de Señalización y Marketing Digital.
      </p>
    </div>
  );
};

export default AboutUs;
