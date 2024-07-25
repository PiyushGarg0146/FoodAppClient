import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [curr, setCurr] = useState("home");

  const {subTotal} = useContext(storeContext);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setCurr("home")}
            className={curr === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setCurr("menu")}
            className={curr === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#mobile-app"
            onClick={() => setCurr("mobile-app")}
            className={curr === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setCurr("contact")}
            className={curr === "contact" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} className="search_icon" />
          <div className="basket">
            <Link to="/cart">
              <img src={assets.basket_icon} className="basket_icon" />
            </Link>
            <div className={subTotal===0?"" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
