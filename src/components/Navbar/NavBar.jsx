import React, { useState } from "react";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };

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
        <a
          className="navbar-item"
          href="#cehache"
          style={{ fontWeight: "bold", color: "white" }}
        >
          CE
          <br/>
          HACHE 
          <br/>
          ESTUDIO
        </a>
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
          <a className="navbar-item" href="#inicio" style={{ color: "white" }}>
            Inicio
          </a>
          <a
            className="navbar-item"
            href="#portafolio"
            style={{ color: "white" }}
          >
            Portafolio
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a
              className="navbar-link"
              style={{ color: "white", cursor: "pointer" }}
            >
              Servicios
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="#servicio1">
                Servicio 1
              </a>
              <a className="navbar-item" href="#servicio2">
                Servicio 2
              </a>
              <a className="navbar-item" href="#servicio3">
                Servicio 3
              </a>
            </div>
          </div>
          <a className="navbar-item" href="#acerca" style={{ color: "white" }}>
            Acerca de
          </a>
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
    </>
  )
}

export default NavBar