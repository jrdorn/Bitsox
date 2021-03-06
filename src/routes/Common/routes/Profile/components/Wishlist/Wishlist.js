import React from "react";

import styles from "./Wishlist.module.css";

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/**
 styles
 */

//button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a022b5",
    },
  },
});

//
const ListItem = (props) => {
  return (
    <li id={styles.list}>
      <h5 className={styles.name}>{props.name}</h5>
      <p className={styles.price}>{props.price}</p>
      <p className={styles.img}>{props.image}</p>
      <ThemeProvider theme={theme}>
        <span className={styles.btns}>
          <Button>
            <Icon>add_circle</Icon>
          </Button>
          <Button>
            <Icon>delete_outline</Icon>
          </Button>
        </span>
      </ThemeProvider>
    </li>
  );
};

function Wishlist() {
  return (
    <div id={styles.Wishlist}>
      <h3>Wish List</h3>

      <ul id={styles.list}>
        <ListItem
          className={styles.listItem}
          name="Sock0"
          image="1img"
          price="$3.50"
        />
        <ListItem
          className={styles.listItem}
          name="Sock1"
          image="2img"
          price="$4.50"
        />
        <ListItem
          className={styles.listItem}
          name="Sock2"
          image="3img"
          price="$5.50"
        />
        <ListItem
          className={styles.listItem}
          name="Sock3"
          image="4img"
          price="$6.50"
        />
        <ListItem
          className={styles.listItem}
          name="Sock4"
          image="5img"
          price="$7.50"
        />
      </ul>
    </div>
  );
}

export default Wishlist;
