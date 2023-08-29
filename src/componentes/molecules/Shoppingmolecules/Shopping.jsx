import React from "react";
import { Shoppingbutton } from "../../atoms/atomos-navbar2/shoppingbag-atoms/Shoppingbutton";
import { Shoppinglogo } from "../../atoms/atomos-navbar2/shoppingbag-atoms/Shoppinglogo";

export const Shopping = () => {
  return (
    <div className="mt-2.5 flex mr-36">
      <Shoppinglogo />
      <Shoppingbutton />
    </div>
  );
};
