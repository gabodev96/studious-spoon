import React from "react";
import { Logomoleculas } from "../../molecules/logo3n-molecules/Logomoleculas";
import { Mailmoleculas } from "../../molecules/mail-molecules/Mailmoleculas";
import { Shopping } from "../../molecules/Shoppingmolecules/Shopping";

export const Header2 = () => {
  return (
    <div className="lg:flex 2xl:flex md:flex hidden  w-screen h-16  bg-gray-100  justify-evenly">
      <Mailmoleculas />
      <Logomoleculas />
      <Shopping />
    </div>
  );
};
