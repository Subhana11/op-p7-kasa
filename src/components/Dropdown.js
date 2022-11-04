import { useState } from "react";
import React from "react";
import arrow from "../img/arrow.png";

const Dropdown = ({ titre, text }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="accordeon">
      <div className="titre " onClick={() => setSelected(!selected)}>
        <h2>{titre}</h2>

        <div>
          {selected ? (
            <img className="icone" src={arrow} alt="icone" />
          ) : (
            <img src={arrow} alt="icone" />
          )}
        </div>
      </div>
      <div>{selected && <div className="show ">{text}</div>}</div>
    </div>
  );
};

export default Dropdown;