import React from "react";
import HeavenlyLogo from "../assets/HeavenlyLogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row row__column">
            <div className="footer__list">
              <figure className="footer__logo">
                <img src={HeavenlyLogo} alt="" className="footer__logo--img" />
              </figure>
              <div className="footer__links">
                <Link to="/" className="footer__link">
                  Home
                </Link>
                <Link to="/about" className="footer__link">
                  About
                </Link>
                <Link to="/events" className="footer__link">
                  Events
                </Link>
              </div>
              <div className="footer__copyright">
                Copyright &copy; 2026 Heavenly Açaí
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
