import React from "react";
import "./HomeFeatures.css";

function HomeFeatures() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          padding: "3em",
        }}
      >
        Yamak is Perfect for
      </h2>
      <div className="homefeatures">
        <div className="blog">
          <img src="./images/blog1.png" alt="" />
          <p>Blog Writer</p>
        </div>
        <div className="social">
          <img src="./images/social-media1.png" alt="" />
          <p>Social Media Specialists</p>
        </div>
        <div className="creative">
          <img src="./images/creative.png" alt="" />
          <p>Content Creators</p>
        </div>
        <div className="store">
          <img src="./images/store1.png" alt="" />
          <p>SMB's</p>
        </div>
        <div className="www">
          <img src="./images/www.png" alt="" />
          <p>SEO's Professionals</p>
        </div>
        <div className="digital">
          <img src="./images/digital-marketing.png" alt="" />
          <p>Digital Marketers/Agencies</p>
        </div>
      </div>
    </>
  );
}

export default HomeFeatures;
