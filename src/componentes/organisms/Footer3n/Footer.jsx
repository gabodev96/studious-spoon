import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <span>
            <FaMapMarkerAlt />
          </span>
          <span>
            Calle Las Flores de Agua Salada, Galpon N° 1, Cdad. Bolívar 8001,
            Bolívar
          </span>
        </section>
        <section>
          <span>
            <FaPhone />
          </span>
          <span>0285-6318130</span>
        </section>
        <section>
          <span>
            <FaEnvelope />
          </span>
          <span>contact@productos3n.com</span>
        </section>
      </div>
      <span className="border-shape"></span>
      <div className="bottom_content">
        <section>
          <a href="https://www.facebook.com/velas3n/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/productos3n/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/velas3nca">
            <FaTwitter />
          </a>
        </section>
      </div>
      <div className="copyright font-baloo">
        Copyright © 2023 Velas3N, CA - Todos los Derechos Reservados
      </div>
    </footer>
  );
};
