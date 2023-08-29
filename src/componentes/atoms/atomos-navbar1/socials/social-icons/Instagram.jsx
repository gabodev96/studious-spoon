import React from "react";
import { FaInstagram } from "react-icons/fa";

export const Instagram = () => {
  return (
    <li className="social_icons rounded-3xl p-1 mx-2  transition ease delay-150">
      <a href="https://www.instagram.com/productos3n/?hl=es">
        <FaInstagram size={25} color={"#FFFFFF"} />
      </a>
    </li>
  );
};
