import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../Animations/AnimatedPage";
import { prodVelas } from "../../Data/Data";
import { FaArrowLeft } from "react-icons/fa";

export const Galeriadetergente_polvo = () => {
  const [data, setData] = useState([]);
  let filtrados = prodVelas;

  let filtradosArray = filtrados.filter((e) => e.d_polvo === true);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(filtradosArray);
      });
    });
    getData.then((res) => setData(res));
  }, []);
  return (
    <div className="pb-10 lg:pb-36">
      <div className="flex justify-center  bg-yellow-500">
        <h1 className="font-baloo text-2xl   text-white font-extrabold pt-3">
          Detergente En Polvo
        </h1>
      </div>
      <Link
        to="/limpieza"
        className="float flex fixed opacity-60 justify-center items-center hover:bg-red-400"
      >
        <FaArrowLeft
          size="30px"
          onMouseOver={({ target }) => (target.style.color = "white")}
        />
      </Link>
      <AnimatedPage>
        <div className="container pt-2 ">
          <div className="flex flex-wrap gap-1 lg:after:w-1/2 justify-center  lg:justify-center">
            {data.map((products) => (
              <div
                className="relative group   pt-4 col-lg-2 col-sm-3"
                key={products.id}
              >
                <Link
                  className=" text-black text-sm group-hover:scale-105   group-hover:rounded-none group-hover:bg-gray-400  bg-gray-300 rounded-2xl relative w-auto inline-block "
                  to={`/products/${products.id}`}
                >
                  <img
                    src={products.img}
                    className="eden    group-hover:scale-105  mt-10  hover:cursor-pointer"
                  />

                  <div className="textol  top-50  mt-28 p-1 font-bold font-baloo">
                    {products.tipo}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};
