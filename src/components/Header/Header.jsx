import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets.js";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h1>
            Order your <br /> favourite food here
          </h1>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your craving and elevate your dining
            experience, one delecious meal at a time.
          </p>
          <a href="#explore-menu"><button>View Menu</button></a>
        </div>
      </div>
    </>
  );
};

export default Header;
