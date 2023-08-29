import React from "react";
import { consejosData } from "../../../Data/Consejos3n";

export const Consejos = () => {
  return (
    <>
      <div className=" text-6xl h-2 w-screen lg:justify-start 2xl:justify-start flex flex-col lg:ml-28 mb-20 lg:mb-20 2xl:mb-20 mt-5">
        <h1 className="font-medium font-baloo pt-15 pl-2 md:pl-2">
          Consejos 3N
        </h1>
        <span className="w-5/6 h-2 ml-0  bg-red-500 flex">
          <br />
          <br />
          <br />
          <br />
          <br />
        </span>
      </div>
      {consejosData.map((notices) => (
        <a
          href={notices.enlace}
          target="_blank"
          key={notices.id}
          className="no-underline"
        >
          <div className="flex lg:rounded-3xl border-2 border-gray-300 text-black  bg-gray-300 flex-col lg:flex-row  mt-2 md:mt-5 lg:mb-10 lg:mt-20 lg:mx-52  justify-center items-center">
            <img
              src={notices.img}
              className="lg:w-1/4 lg:rounded-tl-3xl lg:rounded-bl-3xl"
            />
            <div className="flex flex-col mx-4 md:mx-4 tracking-tighter text-center ">
              <h1 className="text-xl font-baloo font-extrabold  justify-start">
                {notices.titulo}
              </h1>
              <span className="flex justify-between md:mx-12 2xl:mx-0 2xl:pr-6">
                <span className="font-baloo font-semibold">{notices.date}</span>
              </span>
              <p className="tracking-tighter font-baloo font-thin text-justify">
                {notices.descrip}
              </p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
