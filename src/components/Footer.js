import React from "react";
import logofooter from "../img/logofooter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src={logofooter} alt="logo kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved </p>
    </footer>
  );
};

export default Footer;