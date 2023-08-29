import React from "react";
import { AnimatedPage } from "../../../Animations/AnimatedPage";
import { Divider } from "../../divisor-seccion/Divider";
import { Dividerbot } from "../../divisor-seccion/Dividerbot";
import { Bannersection } from "../../organisms/Banner-solo/Bannersection";

import { Consejos } from "../../organisms/Consejos/Consejos";

import { Header3 } from "../../organisms/Header/Header3";
import { Productsection } from "../../organisms/Product-section/Productsection";

export const Home = () => {
  return (
    <>
      <AnimatedPage>
        <Header3 />
        <Divider />
        <Productsection />
        <Dividerbot />
        <Bannersection />
        <Divider />
        <Consejos />
      </AnimatedPage>
    </>
  );
};
