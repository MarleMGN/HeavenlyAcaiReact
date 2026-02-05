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
            <Link to="/">
              <figure className="footer__logo">
                <img src={HeavenlyLogo} alt="" className="footer__logo--img" />
              </figure>
            </Link>
              <Link to="/" className="footer__link">
                Home
              </Link>
              <span className="footer__link no-cursor">About</span>
              <Link to="/books" className="footer__link">
                Books
              </Link>
              <Link to="/cart" className="footer__link">
                Cart
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2026 Heavenly Açaí
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
