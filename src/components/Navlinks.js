import React from "react";
import "./Navlinks.css";
import { Link } from "react-router-dom";

function Navlinks() {
  return (
    <div className="navlinks">
      <p>0</p>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/features">
          <li>Features</li>
        </Link>
        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navlinks;
