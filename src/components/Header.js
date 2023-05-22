import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <p className="headerLogo__text">
              <span className="headerLogoFirst__text">yamak.</span>
              <span className="headerLogoSecond__text">ai</span>
            </p>
          </Link>
          <img className="burger" src="./images/Burger.png" alt="" />
        </div>
        <div className="header__links">
          <ul className="headerLinks__list">
            <li className="linkList">
              <Link to="/">Home</Link>
            </li>
            <li className="linkList">
              <Link to="/features">Features</Link>
            </li>
            <li className="linkList">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="header__button">
          <Link to="/signin">
            <button className="button">Get Started</button>
          </Link>
        </div>
        <div className="headerMobile"></div>
      </div>
    </>
  );
}

export default Header;
