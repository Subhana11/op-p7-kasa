import React, { useState } from "react";
import arrowback from "../img/arrowback.png";
import arrowforward from "../img/arrowforward.png";

const Caroussel = (props) => {
  const { pictures, title } = props;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current ? current - 1 : pictures.length - 1);
  };

  return (
    <section className="galerie">
      <div className="box">
        {pictures.length <= 1 ? (
          ""
        ) : (
          <div>
            <img
              onClick={() => prevSlide()}
              className="arrowback"
              src={arrowback}
              alt="fleche de gauche"
            />
            <img
              onClick={() => nextSlide()}
              className="arrowforward"
              src={arrowforward}
              alt="fleche de droite"
            />
            <span className="nbtext">
              {current + 1}/ {pictures.length}
            </span>{" "}
          </div>
        )}

        <img src={pictures[current]} alt={title} className="galerieimg" />
      </div>
    </section>
  );
};

export default Caroussel;