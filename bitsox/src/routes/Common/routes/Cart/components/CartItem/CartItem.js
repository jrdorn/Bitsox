import React from "react";

import { Button } from "@mui/material";

import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <div id={styles.CartItem}>
      <div className={styles.itemImg}>{props.image}</div>
      <div className={styles.propsGroup}>
        <div className={styles.itemName}>{props.name}</div>
        <div className={styles.itemDescr}>{props.descr}</div>
        <div className={styles.itemPrice}>{props.price}</div>
      </div>
      <Button>Remove</Button>
    </div>
  );
}

export default CartItem;

/**
 Item
 IMG     DESCR
 remove   wishlist
 
 */
