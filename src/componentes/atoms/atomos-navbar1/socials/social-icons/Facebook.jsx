import React from "react";
import { FaFacebookF } from "react-icons/fa";

export const Facebook = () => {
  return (
    <li className="social_icons rounded-3xl p-1 transition ease delay-150">
      <a href="https://es-la.facebook.com/velas3n/">
        <FaFacebookF size={25} color={"#FFFFFF"} />
      </a>
    </li>
  );
};
