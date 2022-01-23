import React from "react";

import Proceed from "./components/Proceed/Proceed";
import CartItem from "./components/CartItem/CartItem";

import "./Cart.module.css";

function Cart() {
  return (
    <div id="Cart">
      <Proceed />
      <CartItem />
    </div>
  );
}

export default Cart;
