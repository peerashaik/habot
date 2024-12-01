import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ btnlink, btnstyle, label }) => {
  return (
    <>
	   <NavLink to={`${btnlink}`} className={`btn ${btnstyle}`}>{label}</NavLink>
    </>
  );
}

export default Button;