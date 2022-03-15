import React from "react";

import { Button } from "@mui/material";

import styles from "./CartItem.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

//button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a022b5",
    },
  },
});

function CartItem(props) {
  return (
    <div id={styles.CartItem}>
      <div className={styles.itemImg}>{props.image}</div>
      <div className={styles.propsGroup}>
        <div className={styles.itemName}>{props.name}</div>
        <div className={styles.itemDescr}>{props.descr}</div>
        <div className={styles.itemPrice}>{props.price}</div>
      </div>
      <ThemeProvider theme={theme}>
        <Button>Remove</Button>
      </ThemeProvider>
    </div>
  );
}

export default CartItem;

/**
 Item
 IMG     DESCR
 remove   wishlist
 
 */
