import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

function Content(props) {
  const { img, title, para } = props;
  return (
    <div className="content">
      <img className="content__image" src={img} alt="" />
      <h3 className="content__title">{title}</h3>
      <p className="content__description">{para}</p>
      <Link to="/signin">
        <button className="content__button">Try for Free</button>
      </Link>
    </div>
  );
}

export default Content;
