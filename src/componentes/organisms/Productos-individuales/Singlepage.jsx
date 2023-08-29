import React from "react";
import { useParams } from "react-router-dom";
import { prodVelas } from "../../../Data/Data";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../../Animations/AnimatedPage";

export const Singlepage = () => {
  const { productId } = useParams();
  const product = prodVelas.find((product) => product.id === productId);
  const { img, tipo, descripcion, ruta } = product;
  return (
    <AnimatedPage>
      <section>
        <div className="flex h-130 flex-col lg:flex-row justify-center mt-10">
          <img src={img} className="single" alt={tipo} />
          <div>
            <h5 className="pl-10  ">{tipo}</h5>
            <p className="tracking-tighter  mt-4 lg:mt-40 ml-5">
              {descripcion}
            </p>
            <ul className="list-disc">
              <li>1</li>
            </ul>
            <Link to={ruta} className="btn btn-danger font-baloo ml-2">
              VOLVER
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};
