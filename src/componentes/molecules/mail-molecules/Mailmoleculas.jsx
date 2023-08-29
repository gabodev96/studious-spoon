import React from "react";
import { Maillogo } from "../../atoms/atomos-navbar2/mail-atoms/Maillogo";
import { Mailparagraph } from "../../atoms/atomos-navbar2/mail-atoms/Mailparagraph";

export const Mailmoleculas = () => {
  return (
    <>
      <div className="flex mt-2.5  md:ml-8 2xl:ml-0">
        <span className="flex m-0">
          <Maillogo />
          <Mailparagraph />
        </span>
      </div>
    </>
  );
};
