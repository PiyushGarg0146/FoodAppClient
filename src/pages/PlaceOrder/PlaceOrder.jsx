import React from "react";
import "./PlaceOrder.css";
import Receipt from "../../components/Receipt/Receipt";

const Home = () => {
  return (
    <>
      <div className="place-order">
        <div className="del-info">
          <h1>Delivery Information</h1>
          <div className="address-grid">
            <input type="text" className="first-name ord" placeholder="First Name"  />
            <input type="text" className="last-name ord" placeholder="Second Name" />
            <input type="email" className="email-add ord" placeholder="Email Address" />
            <input type="text" className="street ord" placeholder="Street" />
            <input type="text" className="city ord" placeholder="City" />
            <input type="text" className="state ord" placeholder="State" />
            <input type="text" className="zip-code ord" placeholder="Zip Code" />
            <input type="text" className="country ord" placeholder="Country" />
            <input type="text" className="phone ord" placeholder="Phone" />
          </div>
        </div>
        <Receipt />
      </div>
    </>
  );
};

export default Home;
