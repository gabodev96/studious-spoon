import React from "react";
import { Phonetag } from "../../atoms/atomos-navbar1/telefono/etiqueta-telefono/Phonetag";
import { Logophone } from "../../atoms/atomos-navbar1/telefono/logo-telefono/Logophone";

export const Tlfmolecula = () => {
  return (
    <>
      <div className="flex mt-2">
        <span className="flex">
          <Logophone />
          <Phonetag />
        </span>
      </div>
    </>
  );
};
