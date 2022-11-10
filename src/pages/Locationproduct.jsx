import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Error404 from "./Error404";// page Error404.jsx

const Locationproduct = () => {
  const [data, setData] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });
  // 1er value et value updated, false-valeur de départ
  const [error, setError] = useState(false); 
  let { id } = useParams();
// déclancher une fonction quand l'état du composant change
  useEffect(
    function () {
      fetch("/liste.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              return setData(data[i]);
            }
          }
          setError(true);
        })
        .catch((error) => console.log(error));
    },
    [id]  //tableau pour stopper la boucle
  );

  if (error) {
    return <Error404 />;
  } else {
    return (
      <div>
        <div className="fiche">
          <Header />
          <Caroussel pictures={data.pictures} title={data.title} />
          <div className="info">
            <div className="infogauche">
              <div className="infotitre">
                <h1>{data.title}</h1>
                <h2>{data.location}</h2>
              </div>
              <Tag tags={data.tags} />
            </div>
            <div className="infodroite">
              <div className="host">
                <p>{data.host.name}</p>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
              <div>
                <Rating rating={data.rating} />
              </div>
            </div>
          </div>
          <div className="containerdropdown">
            <div className="description">
              <Dropdown titre="Description" text={data.description} />
            </div>
            <div className="equipements">
              <Dropdown
                titre="Equipements"
                text={data.equipments.map((equipment, index) => (
                  <div key={index}>{equipment}</div>
                ))}
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
};

export default Locationproduct;