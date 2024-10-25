import React from "react";

const ImageBanner = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "700px",
        overflow: "hidden",
      }}
    >
      <img
        src="https://via.placeholder.com/800x400?text=PROVOCA+MIRADAS%2C+QUE+HABLEN+DE+TI"
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

      </div>
    </div>
  );
};

export default ImageBanner;
