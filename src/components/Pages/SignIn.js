import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__cred">
        <h3>Welcome Back</h3>
        <h5 style={{ fontSize: "1em" }}>
          Welcome back! Please enter your Admin details
        </h5>
        <p className="signEmail">Email</p>
        <input className="inputEmail"></input>
        <p className="signPassword">Password</p>
        <input className="inputPassword"></input>
        <p className="signForgotPassword">Forgot Password</p>
        <button className="signButton">Sign In</button>
        <p>
          Don't have account ?
          <span style={{ fontWeight: "bold" }}> Sign Up</span>
        </p>
      </div>
      <div className="signin__img">
        <img src="./images/signin.png" alt="" />
        <h4 className="signinimg__test1">
          Jump start your Content creation Journey{" "}
        </h4>
        <p className="signinimg__test2">
          Yamak.ai is the easiest place to fulfill content creation need.
          <br /> Sign up and get started now.
        </p>
      </div>
    </div>
  );
}

export default SignIn;
