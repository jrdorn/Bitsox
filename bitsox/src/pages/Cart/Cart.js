import React from "react";

// import Searchbar from "../Common/Searchbar/Searchbar";
import Proceed from "./features/Proceed/Proceed";
import CartItem from "./features/CartItem/CartItem";
// import Navbar from "../Common/Navbar/Navbar";

import "./Cart.module.css";

function Cart() {
  return (
    <div id="Cart">
      {/* <Searchbar /> */}
      <Proceed />
      <CartItem />
      {/* <Navbar /> */}
    </div>
  );
}

export default Cart;
