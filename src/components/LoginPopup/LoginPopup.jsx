import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  
  return (
    <>
      <div className="login-signup">
        <div className="login-container">
          <div className="title">
            <h6>{currState}</h6>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="input">
            {currState === "Sign Up" ? (
              <input type="text" placeholder="Your Name" required />
            ) : null}
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="submit">
            <button>
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
          </div>
          <div className="change">
            {currState === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrState("Login")}>Login here</span>
              </p>
            ) : (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrState("Sign Up")}>Click here</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
