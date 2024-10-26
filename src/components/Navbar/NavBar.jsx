import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceDetails from '@/components/ServiceDetails';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null); 
  };

  const services = [
    { id: 1, name: "BRANDING", description: "Descripción del Servicio 1." },
    { id: 2, name: "DISEÑO WEB", description: "Descripción del Servicio 2." },
    { id: 3, name: "MKT DIGITAL", description: "Descripción del Servicio 3." },
    { id: 4, name: "SEÑALIZACIÓN", description: "Descripción del Servicio 4." },
  ];

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        style={{
          backgroundColor: "transparent",
          padding: "1rem",
        }}
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to="/"
            style={{ fontWeight: "bold", color: "white" }}
          >
            CE
            <br />
            HACHE
            <br />
            ESTUDIO
          </Link>
          <div
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
            style={{ color: "white" }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div
            className="navbar-start"
            style={{
              width: "100%",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Link className="navbar-item" to="/" style={{ color: "white" }}>
              Inicio
            </Link>
            <Link
              className="navbar-item"
              to="/portfolio"
              style={{ color: "white" }}
            >
              Portafolio
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                className="navbar-link"
                to="/services"
                style={{ color: "white", cursor: "pointer" }}
              >
                Servicios
              </Link>
              <div className="navbar-dropdown">
                {services.map((service) => (
                  <a
                    key={service.id}
                    className="navbar-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <Link className="navbar-item" to="/aboutus" style={{ color: "white" }}>
              Acerca de
            </Link>
          </div>

          <div className="navbar-end" style={{ alignItems: "center" }}>
            <div className="navbar-item">
              <button
                className="button is-rounded is-primary"
                style={{
                  backgroundColor: "#00d1b2",
                  border: "none",
                  color: "white",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#00b89c")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00d1b2")
                }
              >
                Contacta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {selectedService && (
        <ServiceDetails service={selectedService} onClose={handleCloseDetails} />
      )}
    </>
  );
};

export default NavBar;
