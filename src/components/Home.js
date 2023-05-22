import React from "react";
import "./Home.css";
import HomeFeatures from "./HomeFeatures";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="homeHeading">
        Get SEO driven original content <br />
        <span className="homeHeading__text">in Seconds</span> for Business
      </h1>
      <p className="home__p">
        <span className="homeP__text">Complete AI Powered copywriter</span> to
        help all Content Creators with more personalised &<br /> customised
        templates with 100x faster speed for business growth
      </p>

      <Link to="/signin">
        <button className="home__button">Get Free Trial</button>
      </Link>
      <Link to="/signin">
        <button className="home__buttonMobile">Try for Free</button>
      </Link>

      <p className="homeP__text1">*No Creadit card required</p>
      <img className="home__image" src="./images/img01.png" alt=""></img>
      <HomeFeatures />
    </div>
  );
}

export default Home;
