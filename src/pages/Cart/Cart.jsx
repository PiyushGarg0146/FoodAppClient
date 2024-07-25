import React, { useContext, useEffect, useMemo } from "react";
import "./Cart.css";
import { storeContext } from "../../context/storeContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { food_list, cartItems, subTotal, deleteItem } =
    useContext(storeContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="heading">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="items-list">
            {food_list.map((item, index) => {
              if (cartItems[item._id]) {
                return (
                  <div key={item._id}>
                    <div className="item">
                      <img src={item.image} alt="" className="item-image" />
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">${item.price}</p>
                      <p className="item-quantity">{cartItems[item._id]}</p>
                      <p className="totel-price">
                        ${item.price * cartItems[item._id]}
                      </p>
                      <img
                        onClick={() => deleteItem(item._id)}
                        src={assets.cross_icon}
                        alt=""
                        className="remove-icon"
                      />
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="amount">
          <div className="total">
            <h3>Cart Totals</h3>
            <div className="info">
              <div className="subtotal info-part">
                <h6>Subtotal</h6>
                <p>${subTotal}</p>
              </div>
              <hr />
              <div className="delivery info-part">
                <h6>Delivery Fee</h6>
                <p>${subTotal / 10}</p>
              </div>
              <hr />
              <div className=" info-part">
                <h6>Total</h6>
                <p>${subTotal + subTotal / 10}</p>
              </div>

              <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="promo-code">
            <p>If you have a promo code, Enter it here</p>
            <div className="buttons">
              <input type="text" className="code" placeholder="promo code" />
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
