import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <ul className={styles.list}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/blog">
        Blog
      </Link>
      <Link className={styles.link} to="/cart">
        Cart
      </Link>
      <Link className={styles.link} to="/checkout">
        Checkout
      </Link>
      <Link className={styles.link} to="/profile">
        Profile
      </Link>
      <Link className={styles.link} to="/support">
        Support
      </Link>
    </ul>
  );
}

export default Navbar;
