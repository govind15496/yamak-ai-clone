import React from "react";
import "./Help.css";

function Help() {
  return (
    <>
      <h1>Yamak help you to</h1>
      <div className="help">
        <div className="help__div1">
          <img src="./images/blog1.png" alt="" />
          <p>
            Outperform your competition by saving hours of copywriting in
            seconds
          </p>
        </div>
        <div className="help__div2">
          <img src="./images/www.png" alt="" />
          <p>Generate SEO-optimized and Plaigiarism-free content </p>
        </div>
        <div className="help__div3">
          <img src="./images/shopping-cart.png" alt="" />
          <p>Generate Product descriptions for ecommerce store</p>
        </div>
        <div className="help__div4">
          <img src="./images/creative.png" alt="" />
          <p> Share content among teams for better and faster campaigns</p>
        </div>
      </div>
    </>
  );
}

export default Help;
