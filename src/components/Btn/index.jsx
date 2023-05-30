import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Btn = ({to, buttonText, className }) => {
  return (
    <div className={`btn ${className}`}>
      <Link to={to}>{buttonText}</Link>
    </div>
  );
}

export default Btn;