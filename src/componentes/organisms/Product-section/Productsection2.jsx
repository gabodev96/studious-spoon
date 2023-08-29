import React from "react";
import { Gallery } from "../../Galeria-Productos/Gallery";

export const Productsection2 = () => {
  return (
    <section>
      <div className="flex justify-center bg-yellow-500">
        <h1 className="font-baloo text-2xl   drop-shadow-lg text-white font-extrabold pt-3">
          Nuestos Productos
        </h1>
      </div>
      <div className="h-131 lg:h-128 md:h-128 w-screen bg-white mt-10">
        <div className=" text-6xl h-2 w-screen ">
          <div className="flex w-screen justify-center ">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};
