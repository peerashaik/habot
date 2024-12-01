import React from "react";
import { NavLink } from "react-router-dom";
import './../assets/css/footer.css';
import logo from './../assets/images/logo-white.png';

const Footer = (props) => {
  return (
    <>
    <footer className="footer py-10">
      <div className="container border-y">
        <div className="py-8">
        <div className="block md:flex flex-row md:flex-column justify-between px-10 md:p-0">
          <div className="block md:flex text-center md:text-left items-center align-middle">
            <div>
              <NavLink to="/" className="nav-link p-0">
                <img className="m-auto" width="200" src={logo} alt="Habot" />
              </NavLink>
              <div className="block md:flex mt-4 text-sm text-white">
                © R Singhania.
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-y-8 md:w-6/12 my-10 md:m-0">
            <div>
              <h4 className="font-bold text-white">Company</h4>
              <ul className="nav block">
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">About</NavLink></li>
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">FAQ</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white">Terms</h4>
              <ul className="nav block">
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">Data Privacy</NavLink></li>
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">Terms</NavLink></li>
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">Accessibility</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white">Related</h4>
              <ul className="nav block">
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">Find Buyer</NavLink></li>
                <li className="nav-item my-2"><NavLink to="/" className="nav-link">Feedback</NavLink></li>
              </ul>
            </div>        
          </div>
          <div className="block md:flex items-center align-middle">
            <ul className="nav social flex justify-center items-center">
              <li className="mx-2">
                <a href="#" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              </li>
              <li className="mx-2">
                <a href="#" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="mx-2">
                <a href="#" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;