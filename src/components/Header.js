import React from "react";
import { NavLink } from "react-router-dom";
import './../assets/css/header.css';
import logo from './../assets/images/logo-dark.png';
import Navbar from "./Navbar";

function Header() {
  return (
    <>
    <div className="container">
        <div className="flex flex-row md:flex-column justify-between">
            <div>
                <img width="180" height="43" src={logo} alt="Habot" />
            </div>
            <Navbar />
        </div>
    </div>
    </>
  );
}

export default Header;
