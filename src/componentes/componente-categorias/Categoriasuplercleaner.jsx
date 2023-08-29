import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../Animations/AnimatedPage";
import { Categorias } from "../../Data/DataCategories";
import { motion } from "framer-motion";

export const Categoriasuplercleaner = () => {
  const slashMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <section>
      <AnimatedPage>
        <div className="flex justify-center bg-yellow-500">
          <h1 className="font-baloo text-2xl   drop-shadow-lg text-white font-extrabold pt-3">
            Linea Super Cleaner
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 2xl:gap-4 bg-gray-200  py-10 2xl:py-32 ">
          {Categorias.map((categories) => (
            <div
              key={categories.key}
              className="contenedor-prod  group max-w-xs rounded-2xl overflow-hidden shadow-lg group hover:scale-105"
            >
              <img
                className="w-full"
                src={categories.img}
                alt="Sunset in the mountains"
              />

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="img_description lg:group-hover:opacity-100 lg:group-hover:visible font-baloo font-extrabold"
              >
                <motion.div
                  variants={slashMotion}
                  className="flex justify-center gap-4  "
                >
                  <Link
                    to={categories.link}
                    className="no-underline text-white"
                  >
                    <button className="bg-red-600 p-3 rounded hover:bg-red-700">
                      {categories.type}
                    </button>
                  </Link>
                  {categories.sinboton === "false" ? (
                    <Link
                      to={categories.link2}
                      className="no-underline text-white {}"
                    >
                      <button className="bg-red-600 p-3 rounded hover:bg-red-700">
                        {categories.type2}
                      </button>
                    </Link>
                  ) : null}
                </motion.div>
              </motion.div>
              <div className="px-6 py-8 bg-white">
                <div className="font-bold  font-baloo text-center text-xl mb-2 text-black">
                  {categories.main_category}
                </div>
                <p className="text-gray-700 font-baloo text-base  text-justify tracking-tight">
                  {categories.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedPage>
    </section>
  );
};
