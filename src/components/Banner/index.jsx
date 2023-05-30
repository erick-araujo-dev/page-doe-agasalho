import React from "react";
import './style.css';

const Banner = ({ className, title }) => {
  return (
    <div className={`banner ${className}`}>
      <div className="banner-container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
