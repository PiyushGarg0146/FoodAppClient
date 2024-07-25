import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} className="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              error eius dolores dolorum! Quod cupiditate architecto cum facilis
              repellat amet numquam voluptatibus maiores! Odio corrupti,
              similique sequi odit voluptates quae!
            </p>
            <img src={assets.facebook_icon} className="share-img" />
            <img src={assets.twitter_icon} className="share-img" />
            <img src={assets.linkedin_icon} className="share-img" />
          </div>
          <div className="footer-content-center">
            <h6>COMPANY</h6>
            <ul className="center">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h6>GET IN TOUCH</h6>
            <li>+1-212-4560-7890</li>
            <li>pgarg0146@gmail.com</li>
          </div>
        </div>
        <p className="copyright">
          Copyright 2024 @ Tomato.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
