import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./Order.module.css";

function Order() {
  return (
    <Button id={styles.Order} component={Link} to="/cart">
      Order
    </Button>
  );
}

export default Order;
