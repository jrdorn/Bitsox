import React from "react";

import Proceed from "./components/Proceed/Proceed";
import CartItem from "./components/CartItem/CartItem";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div id={styles.Cart}>
      <h3>Cart</h3>
      <Proceed />
      <CartItem
        image="1img"
        name="Possum Sock"
        descr="Color: grey"
        price="$5.00"
      />
      <CartItem
        image="2img"
        name="Marmoset Sock"
        descr="Color: navy"
        price="$7.00"
      />
    </div>
  );
}

export default Cart;
