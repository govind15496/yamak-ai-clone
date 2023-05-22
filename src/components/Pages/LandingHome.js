import React from "react";
import "./LandingHome.css";
import { Link } from "react-router-dom";

function LandingHome() {
  return (
    <div className="landinghome">
      <h1 className="landinghome__head">Get Started Now, Pick a Plan</h1>
      <p className="landinghome__p">
        Try our basic now and get access to our exclusive products
      </p>
      <Link to="/signin">
        <button className="landinghome__button">Start Writing for free</button>
      </Link>
      <p className="landinghome__footer">No credit card required</p>
    </div>
  );
}

export default LandingHome;
