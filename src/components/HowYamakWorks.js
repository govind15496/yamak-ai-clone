import React from "react";
import "./HowYamakWorks.css";
import { Link } from "react-router-dom";

function WorkingOfYamak() {
  return (
    <>
      <h2 className="howyamakworks__heading">How Yamak Works</h2>
      <div className="howyamakworks">
        <div className="howyamakworks__div1"></div>
        <div className="howyamakworks__div2">
          <img
            className="howyamakworks__img1"
            src="./images/image1.png"
            alt=""
          />
          <h4> Step 1</h4>
          <p>Select a Template</p>
        </div>
        <div className="howyamakworks__div3"></div>
      </div>
      <Link to="/signin">
        <button className="howyamakworks__button">Try for free</button>
      </Link>
      <img
        className="howyamakworksinmobile__img1"
        src="./images/image1.png"
        alt=""
      />
    </>
  );
}

export default WorkingOfYamak;
