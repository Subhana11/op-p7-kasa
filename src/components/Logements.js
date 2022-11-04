import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Logements = () => {
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch("/liste.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="logements">
      {data.map((logements, index) => (
        <NavLink to={`/annonce/${logements.id}`} key={logements.id}>
          <div className="card" key={index}>
            <img src={logements.cover} alt="logements" />
            <h3>{logements.title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Logements;