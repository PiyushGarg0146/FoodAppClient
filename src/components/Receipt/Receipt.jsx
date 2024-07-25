import React, { useCallback, useContext } from "react";
import "./Receipt.css";
import { storeContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

const Receipt = () => {
  const navigate = useNavigate();
  const { subTotal } = useContext(storeContext);
  return (
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

        <button onClick={() => navigate("/myorders")}>PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Receipt;
