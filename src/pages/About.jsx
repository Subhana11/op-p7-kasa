import React from "react";
import Header from "../components/Header";
import banniereabout from "../img/banniereabout.png";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
const data = [
  {
    titre: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    titre: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    titre: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    titre: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div>
      <Header />

      <div className="bannersection aboutbanner">
        <img src={banniereabout} alt="banniére montagne" />
      </div>

      <div className="accordeonabout ">
        {data.map(({ titre, text }) => (
          <Dropdown key={text} titre={titre} text={text} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;