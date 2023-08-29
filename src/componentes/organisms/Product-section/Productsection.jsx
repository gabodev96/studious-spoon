import React from "react";
import { Gallery } from "../../Galeria-Productos/Gallery";

export const Productsection = () => {
  return (
    <section>
      <div className="h-131 lg:h-128 md:h-128 w-screen bg-white mt-10">
        <div className=" text-6xl h-2 w-screen ">
          <div className=" md:ml-5 lg:ml-28 2xl:ml-28">
            <h1 className="font-baloo font-bold pt-15  ">Nuestros Productos</h1>
            <span className="w-5/6 h-2 ml-0  bg-red-500 flex">
              <br />
            </span>
          </div>
          <div className="flex w-screen justify-center ">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};
