import React from "react";
import PropTypes from "prop-types";

const Banner = ({ imgsrc, title, altText }) => {
  return (
    <section className="bannersection ">
      <img src={imgsrc} alt={altText} />
      <h1>{title}</h1>
    </section>
  );
};

Banner.propTypes = {
  imgsrc: PropTypes.string,
  title: PropTypes.string,
  altText: PropTypes.string,
};

export default Banner;