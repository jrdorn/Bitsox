import React from "react";

import Cancel from "./components/Cancel/Cancel";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Shipping from "./components/Shipping/Shipping";
import Order from "./components/Order/Order";

import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div id={styles.Checkout}>
      <Cancel />
      <PaymentMethod />
      <Shipping />
      <Order />
    </div>
  );
}

export default Checkout;
