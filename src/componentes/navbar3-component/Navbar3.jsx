import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar3 = () => {
  return (
    <div className="header_bottom hidden md:flex xl:flex top-0 sticky justify-evenly w-full h-16 z-50">
      <div>
        <ul className="flex h-16">
          <li className="h-full text-center items-center flex  no-underline">
            {" "}
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "groupx")}
              to="/"
            >
              {" "}
              <button className="text-white h-16 font-baloo font-semibold">
                INICIO
              </button>
            </NavLink>
          </li>
          <li className="h-full text-center items-center flex">
            {" "}
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "groupx")}
              to="/nosotros"
            >
              {" "}
              <button className="mx-2 text-white h-16  no-underline font-baloo font-semibold">
                NOSOTROS
              </button>
            </NavLink>
          </li>
          <li className="h-full text-center items-center flex">
            {" "}
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "groupx")}
              to="/nuestros-productos"
            >
              {" "}
              <button className="mx-2 text-white h-16  no-underline font-baloo font-semibold">
                PRODUCTOS
              </button>
            </NavLink>
          </li>

          <li className="h-full  text-center items-center flex">
            {" "}
            <NavLink
              className={({ isActive }) => (isActive ? "activado" : "groupx")}
              to="/contact"
            >
              {" "}
              <button className="mx-2 h-16 text-white no-underline font-baloo font-semibold">
                CONTACTANOS
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
