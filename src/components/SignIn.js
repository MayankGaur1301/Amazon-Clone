import React from "react";
import "../components-css/signin.css";
import amazon_logo from "../assets/amazon-logo-transparent.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <div className="signInForm">
        <div className="signIn_amazon_logo">
          <Link to="/">
            <img src={amazon_logo} alt="amazon" className="amazon_logo_img" />
          </Link>
        </div>
        <div className="signIn_box">
          <h1 style={{marginBlock:'15px'}}>Sign-in</h1>
          <div className="input_fields_sigin">
            <p>E-mail</p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="Input_field"
              name="email"
              required
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="Input_field"
              name="password"
              required
            />
          </div>
          <button className="signin_button">Sign In</button>
          <p className="terms_conditions">
            By continuing, you agree to Amazon's{" "}
            <a href="#" className="alt">Conditions of Use</a> and <a href="#" className="alt">Privacy Notice</a>.
          </p>
          <button className="amazon_account_button"> Create Your Amazon Account </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
