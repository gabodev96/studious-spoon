import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Mobilenav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="md:hidden lg:hidden">
      <img src={require("../../../imagenes/imagenesheader/logo.png")} />
      <nav ref={navRef} className="z-50">
        <a href="/" className="font-baloo">
          Inicio
        </a>
        <a href="/nosotros" className="font-baloo">
          Nosotros
        </a>
        <a href="/nuestros-productos" className="font-baloo">
          Productos
        </a>
        <a href="/contact" className="font-baloo">
          Contactanos
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
