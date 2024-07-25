import React, { useContext, useState } from "react";
import { storeContext } from "../../context/storeContext";
import "./FoodDisplay.css";
import { assets } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);

  return (
    <>
      <div className="food-display" id="food-display">
        <h5>Top dishes for you</h5>
        <div className="food-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return <FoodItem item={item} key={index} id={item._id} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

const FoodItem = ({ item }) => {
  const [itemCount, setItemCOunt] = useState(0);

  const {cartItems, setCartItems, addItem, removeItem} = useContext(storeContext);

  return (
    <>
      <div className="food-item">
        <div className="image">
          <img src={item.image} className="food-image" />
          <div className="counter-icons">
            {!cartItems[item._id] ? (
              <img
                onClick={() => addItem(item._id)}
                src={assets.add_icon_white}
                className="white-icon"
              />
            ) : (
              <div className="red-green-icon">
                <img
                  onClick={() => removeItem(item._id)}
                  src={assets.remove_icon_red}
                  alt=""
                  className="red-icon"
                />
                {cartItems[item._id]}
                <img
                  onClick={() => addItem(item._id)}
                  src={assets.add_icon_green}
                  alt=""
                  className="green-icon"
                />
              </div>
            )}
          </div>
        </div>
        <div className="name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="descrip">{item.description}</p>
        <p className="rate">${item.price}</p>
      </div>
    </>
  );
};

export default FoodDisplay;
