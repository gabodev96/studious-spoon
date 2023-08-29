import React from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../Animations/AnimatedPage";

export const Categoria_productos = () => {
  return (
    <section>
      <AnimatedPage>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 2xl:gap-4 bg-gray-200  py-10 ">
          <Link to="/tentacion" className="no-underline">
            <div className="contenedor-prod max-w-xs rounded-3xl overflow-hidden shadow-lg group hover:scale-105">
              <img
                className="w-full group-hover:scale-125 group-hover:rotate-1 -z-30  "
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-8 bg-white">
                <div className="font-bold text-center text-xl mb-2 text-black">
                  Tentacion
                </div>
                <p className="text-gray-700 text-base  text-justify tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/religiosa" className="no-underline">
            <div className="contenedor-prod max-w-xs rounded-3xl overflow-hidden shadow-lg group hover:scale-105">
              <img
                className="w-full group-hover:scale-125 -z-30  "
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-8 bg-white">
                <div className="font-bold text-center text-xl mb-2 text-black">
                  Religiosa
                </div>
                <p className="text-gray-700 text-base  text-justify tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/granel" className="no-underline">
            <div className="contenedor-prod max-w-xs rounded-3xl overflow-hidden shadow-lg group hover:scale-105">
              <img
                className="w-full group-hover:scale-125 group-hover:rotate-1 -z-30  "
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-8 bg-white">
                <div className="font-bold text-center text-xl mb-2 text-black">
                  Velas a Granel
                </div>
                <p className="text-gray-700 text-base  text-justify tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </AnimatedPage>
    </section>
  );
};
