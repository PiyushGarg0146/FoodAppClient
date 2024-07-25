import React from "react";
import { assets } from "../../assets/assets";
import "./MobileApp.css";

const MobileApp = () => {
  return (
    <>
      <div className="mobile" id='mobile-app'>
        <div className="text">
          <h1>
            For Better Experience Download <br /> Tomato App
          </h1>
        </div>
        <div className="images">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  );
};

export default MobileApp;
