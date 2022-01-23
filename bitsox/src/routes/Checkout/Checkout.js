import React from "react";

import Cancel from "./components/Cancel/Cancel";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Shipping from "./components/Shipping/Shipping";

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
