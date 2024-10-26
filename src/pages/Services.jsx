import React, { useState } from "react";
import ServiceDetails from '@/components/ServiceDetails';

const services = [
  { id: 1, name: "BRANDING", description: "Descripción del Servicio 1." },
  { id: 2, name: "DISEÑO WEB", description: "Descripción del Servicio 2." },
  { id: 3, name: "MKT DIGITAL", description: "Descripción del Servicio 3." },
  { id: 4, name: "SEÑALIZACIÓN", description: "Descripción del Servicio 4." },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div
        style={{
          padding: "12rem 2rem 2rem 2rem",
          textAlign: "center",
          fontFamily: "psf4mfq, sans-serif",
          color: "white",
          backgroundColor: "black",
          width: "100vw",
        }}
      >
        <div className="columns is-centered is-multiline">
          {services.map((service) => (
            <div className="column is-12" key={service.id}>
              <div
                className="box"
                style={{
                  cursor: "pointer",
                  padding: "3rem",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "white",
                  boxShadow: "none",
                  marginBottom: "2rem",
                }}
                onClick={() => handleServiceClick(service)}
              >
                <h2 className="subtitle" style={{ fontSize: "3rem", fontFamily: "psf4mfq, serif" }}>
                  {service.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceDetails service={selectedService} onClose={handleCloseDetails} />
      )}
    </>
  );
};

export default Services;
