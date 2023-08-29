import React from "react";
import { Facebook } from "../../atoms/atomos-navbar1/socials/social-icons/Facebook";
import { Instagram } from "../../atoms/atomos-navbar1/socials/social-icons/Instagram";
import { Twitter } from "../../atoms/atomos-navbar1/socials/social-icons/Twitter";

export const Socialmolecula = () => {
  return (
    <div className="social-contenedor">
      <ul className="flex mt-1 justify-center">
        <Facebook />
        <Instagram />
        <Twitter />
      </ul>
    </div>
  );
};
