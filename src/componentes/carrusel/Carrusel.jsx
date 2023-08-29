import React from "react";
import { Carousel } from "react-bootstrap";

export const Carrusel = () => {
  return (
    <Carousel autoPlay={true} className=" w-screen">
      <Carousel.Item interval={2000} className=" w-screen">
        <img
          className="bg-cover w-100"
          src={require("../../imagenes/imagenesbanner/banner08.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className="lg:mb-10">
          <div className="flex">
            <div className=" lg:mb-10">
              <h3 className="text-yellow-500  font-bold text-base md:text-3xl lg:text-5xl 2xl:text-6xl">
                Productos 3N
              </h3>
              <p className="textcarrusel font-extrabold text-xs  ml-0 -mb-4 md:mb-7 lg:mb-4 lg:ml-42 md:text-xl  2xl:mb-25 lg:text-3xl 2xl:text-5xl tracking-tighter">
                Comprometidos con cada Hogar de Venezuela.
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="w-screen">
        <img
          className="flex w-100"
          src={require("../../imagenes/imagenesbanner/banner05.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="flex">
            <div className=" lg:mb-10">
              <h3 className="text-yellow-500 text-base md:text-3xl lg:text-5xl 2xl:text-6xl">
                Productos 3N
              </h3>
              <p className="textcarrusel text-xs  font-extrabold ml-0 -mb-4 md:mb-7 lg:mb-8 lg:ml-42 md:text-xl  2xl:mb-25 lg:text-3xl 2xl:text-5xl tracking-tighter">
                Comprometidos con cada Hogar de Venezuela.
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="w-screen">
        <img
          className="flex w-100"
          src={require("../../imagenes/imagenesbanner/banner03.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="flex">
            <div className=" lg:mb-10">
              <h3 className="text-yellow-500 text-base md:text-3xl lg:text-5xl 2xl:text-6xl">
                Productos 3N
              </h3>
              <p className="textcarrusel text-xs  font-extrabold ml-0 -mb-4 md:mb-7 lg:mb-8 lg:ml-42 md:text-xl  2xl:mb-25 lg:text-3xl 2xl:text-5xl tracking-tighter">
                Comprometidos con cada Hogar de Venezuela.
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="w-screen">
        <img
          className="flex w-100"
          src={require("../../imagenes/imagenesbanner/banner03.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="flex">
            <div className=" lg:mb-10">
              <h3 className="text-yellow-500 text-base md:text-3xl lg:text-5xl 2xl:text-6xl">
                Productos 3N
              </h3>
              <p className="textcarrusel text-xs  font-extrabold ml-0 -mb-4 md:mb-7 lg:mb-8 lg:ml-42 md:text-xl  2xl:mb-25 lg:text-3xl 2xl:text-5xl tracking-tighter">
                Comprometidos con cada Hogar de Venezuela.
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
