import React from "react";
import HeavenlyLogo from "../assets/HeavenlyLogo.jpg";
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to="">
            <img src={HeavenlyLogo} alt="" className="nav__icon" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/About" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/Events" className="nav__link">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
