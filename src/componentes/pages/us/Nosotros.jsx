import React from "react";
import { AnimatedPage } from "../../../Animations/AnimatedPage";
import "../../../App.scss";

export const Nosotros = () => {
  return (
    <>
      <div className="flex justify-center  bg-yellow-500">
        <h1 className="font-baloo text-2xl   text-white font-extrabold pt-3">
          Nosotros
        </h1>
      </div>
      <AnimatedPage>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-200">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <div className="card">
            <div className="ico">
              <i className="fa fa-bullseye"></i>
            </div>
            <h3 className="title font-baloo ">Misión</h3>
            <p className="text-sm font-baloo tracking-tighter text-justify ">
              Satisfacer la demanda nacional e internacional en la línea de
              velas, velones, detergentes atendiendo a los estándares de
              calidad, oportunidad y precios.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="card">
            <div className="ico">
              <i className="fa fa-eye"></i>
            </div>
            <h3 className="title font-baloo">Visión</h3>
            <p className="text-sm font-baloo text-justify tracking-tight">
              Ser la Empresa líder a nivel nacional en producción,
              comercialización y distribución de Velas, Velones, Detergentes,
              ofreciendo la mejor y más oportuna Atencion al cliente
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="card">
            <div className="ico">
              <i className="fa fa-university" aria-hidden="true"></i>
            </div>
            <h3 className="title font-baloo">Historia</h3>
            <p className="text-justify font-baloo tracking-tighter  text-sm ">
              Fundada en el año 1997 y hoy 25 años transcurridos somos una
              empresa que ha venido creciendo en expansión y con miras a
              posicionarnos en el mercado industrial de fabricación de Velas,
              Velones así como productos de limpieza.
            </p>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
