import React from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../../Animations/AnimatedPage";
import { CategoriasVelas } from "../../../Data/DataCategoriesVelas";
import { Categoria_productos } from "../../componente-categorias/Categoria_productos";
import { Gallery } from "../../Galeria-Productos/Gallery";

export const Productos = () => {
  return (
    <div className="">
      <AnimatedPage>
        <div className="flex justify-center bg-yellow-500">
          <h1 className="font-baloo text-2xl   drop-shadow-lg text-white font-extrabold pt-3">
            Linea de Velas
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 2xl:gap-4  bg-gray-300  py-10 2xl:py-32 ">
          {CategoriasVelas.map((categories) => (
            <Link
              to={categories.link}
              key={categories.key}
              className="no-underline"
            >
              <div className="contenedor-prod  group max-w-xs rounded-2xl overflow-hidden shadow-lg group hover:scale-105">
                <img
                  className="w-full"
                  src={categories.img}
                  alt="Sunset in the mountains"
                />

                <div className="img_description lg:group-hover:opacity-100 lg:group-hover:visible font-baloo font-extrabold"></div>
                <div className="px-6 py-8 bg-white">
                  <div className="font-bold  font-baloo text-center text-xl mb-2 text-black">
                    {categories.main_category}
                  </div>
                  <p className=" no-underline text-gray-700 font-baloo  text-justify tracking-tight">
                    {categories.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedPage>
    </div>
  );
};
