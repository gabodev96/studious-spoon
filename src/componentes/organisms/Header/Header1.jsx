import React from "react";
import { Horariomolecula } from "../../molecules/horario-molecules/Horariomolecula";
import { Socialmolecula } from "../../molecules/social-molecules/Socialmolecula";
import { Tlfmolecula } from "../../molecules/telephone-molecules/Tlfmolecula";

export const Header1 = () => {
  return (
    <div className="hidden lg:flex md:flex 2xl:flex w-full h-14  header_top  justify-evenly">
      <Tlfmolecula />
      <Socialmolecula />
      <Horariomolecula />
    </div>
  );
};
