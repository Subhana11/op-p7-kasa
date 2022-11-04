import React from "react";

import Etoilerouge from "../img/rouge.svg";
import Etoilegrise from "../img/grise.svg";

const Rating = ({ rating }) => {
  const etoile = Array(5).fill(0);

  return (
    <div className="avis">
      {etoile.map((_, index) =>
        rating > index ? (
          <i key={index}>
            <img src={Etoilerouge} alt="etoile rouge" />
          </i>
        ) : (
          <i key={index}>
            <img src={Etoilegrise} alt="etoile grise" />
          </i>
        )
      )}
    </div>
  );
};

export default Rating;