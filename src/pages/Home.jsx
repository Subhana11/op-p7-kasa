import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logements from "../components/Logements";
import banniere from "../img/banniere.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        imgsrc={banniere}
        altText="banniére kasa"
        title="Chez vous, partout et ailleurs"
      />
      <Logements />
      <Footer />
    </div>
  );
};

export default Home;