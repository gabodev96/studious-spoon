import React from "react";
import { prodVelas } from "../../Data/Data";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Gallery = () => {
  const textMotion = {
    rest: {
      color: "grey",
      x: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "blue",
      x: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

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
    <div className=" pt-5  flex flex-col lg:flex-row gap-4 lg:p-4 ">
      <Link to="/limpieza" className="no-underline">
        <div className="contenedor-prod  group  rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={require("../../imagenes/Super-cleaner.png")}
            alt="Sunset in the mountains"
          />
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="img_description lg:group-hover:visible lg:group-hover:opacity-100 font-baloo font-extrabold"
          >
            Productos de Limpieza
            <motion.div
              variants={slashMotion}
              className="flex justify-center  flex-col"
            >
              <span className="relative text-3xl text-white">
                Los mejores del pais buscanos!
              </span>
              <button className="relative mx-64 hover:scale-105 hover:shadow-lg  rounded-lg p-2 text-3xl  bg-red-500">
                ver mas
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Link>
      <Link to="/velas" className="no-underline">
        <div className="contenedor-prod  group  rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={require("../../imagenes/Super-cleaner.png")}
            alt="Sunset in the mountains"
          />
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="img_description lg:group-hover:visible lg:group-hover:opacity-100 font-baloo font-extrabold"
          >
            Velas
            <motion.div
              variants={slashMotion}
              className="flex justify-center  flex-col"
            >
              <span className="relative text-3xl text-white">
                La luz de la calidad!
              </span>
              <button className="relative mx-64 hover:scale-105 hover:shadow-lg  rounded-lg p-2 text-3xl  bg-red-500">
                ver mas
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};
