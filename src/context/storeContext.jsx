import { createContext, useEffect, useState, useMemo } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addItem = (item_id) => {
    if (!cartItems[item_id]) {
      setCartItems((prev) => {
        return { ...prev, [item_id]: 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [item_id]: prev[item_id] + 1 };
      });
    }
  };

  const removeItem = (item_id) => {
    setCartItems((prev) => {
      return { ...prev, [item_id]: prev[item_id] - 1 };
    });
  };

  const deleteItem = (item_id) => {
    setCartItems((prev) => {
      const newList = { ...prev };
      newList[item_id] = 0;
      return newList;
    });
  };

  const subTotal = useMemo(() => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id]) {
        return total + item.price * cartItems[item._id];
      }
      return total;
    }, 0);
  }, [food_list, cartItems]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const storeContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addItem,
    removeItem,
    deleteItem,
    subTotal
  };

  return (
    <storeContext.Provider value={storeContextValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
