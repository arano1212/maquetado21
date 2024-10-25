import React from "react";

const ImageBanner = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "650px",
        overflow: "hidden",
      }}
    >
      <img
        src="https://via.placeholder.com/1200x400?text=image"
        alt="Provoque Miradas"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        PROVOCA MIRADAS,<br /> QUE HABLEN DE TI
      </div>
      {/* Texto corto en la esquina inferior derecha */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "white",
          background: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente para legibilidad
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Lorem ipsum dolor sit amet.
      </div>
      {/* Iconos en la esquina inferior izquierda */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          display: "flex",
          gap: "10px", // Espaciado entre iconos
        }}
      >
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default ImageBanner;
