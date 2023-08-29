import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { prodVelas } from "../../Data/Data";

export const Galeriatentacion = () => {
  const [data, setData] = useState([]);
  let filtrados = prodVelas;

  let filtradosArray = filtrados.filter((e) => e.tentacion === true);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(filtradosArray);
      }, 500);
    });
    getData.then((res) => setData(res));
  }, []);
  return (
    <div className="pb-10">
      <div className="flex justify-center  bg-yellow-500">
        <h1 className="font-baloo text-2xl   text-white font-extrabold pt-3">
          Linea Tentación
        </h1>
      </div>
      <div className="container pt-2 ">
        <div className="flex flex-wrap justify-center lg:justify-start">
          {data.map((products) => (
            <div
              className="relative group  max-w-xs  p-1 pt-3 col-lg-2 col-sm-3"
              key={products.id}
            >
              <Link
                className=" text-black text-sm group-hover:scale-105  group-hover:rounded-none group-hover:bg-gray-400  bg-gray-300 rounded-2xl relative w-auto inline-block "
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
    </div>
  );
};
