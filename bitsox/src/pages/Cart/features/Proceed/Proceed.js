import React from "react";
import { Link } from "react-router-dom";
import styles from "./Proceed.module.css";

function Proceed() {
  return (
    <div className={styles.bg}>
      <p>Subtotal</p>
      <Link to="/checkout">Proceed to checkout</Link>
    </div>
  );
}

export default Proceed;
