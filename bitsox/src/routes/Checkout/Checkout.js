import React from "react";

import Cancel from "./features/Cancel/Cancel";
import PaymentMethod from "./features/PaymentMethod/PaymentMethod";
import Shipping from "./features/Shipping/Shipping";

import "./Checkout.css";

function Checkout() {
  return (
    <div id="Checkout">
      <Cancel />
      <PaymentMethod />
      <Shipping />
    </div>
  );
}

export default Checkout;
