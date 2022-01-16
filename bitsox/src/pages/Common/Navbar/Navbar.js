import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/support">Support</Link>
    </ul>
  );
}

export default Navbar;
