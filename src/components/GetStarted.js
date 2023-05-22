import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="getstarted">
      <div className="getstarted2">
        <h2 style={{ color: "blue" }}>Let's Try</h2>
        <h2 style={{ fontSize: "2em" }}>Ready to get started ?</h2>
        <p>
          Unlock your free trial today and start creating highly engaging
          <br /> content with a few clicks
        </p>
        <button>Start Writing for free</button>

        <h6>No Credits card required</h6>
      </div>
      <div className="getstarted1">
        <img className="getstarted1__img" src="./images/123img.png" alt="" />
      </div>
    </div>
  );
}

export default GetStarted;
