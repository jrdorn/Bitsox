import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

//color Navbar icon purple if it links to the current page
let SyncRouteWithButton = (path) => {
  const location = useLocation();
  let route = location.pathname;

  if (path === route) {
    return styles.selectedIcon;
  } else {
    return styles.icon;
  }
};

function Navbar() {
  const [val, setValue] = React.useState(0);

  const changeTab = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <nav id={styles.Navbar}>
      <Tabs
        value={val}
        onChange={changeTab}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Navbar"
      >
        {/* Home */}
        <Tab
          label={
            <Link to="/">
              <IconButton aria-label="home">
                <Icon className={SyncRouteWithButton("/")}>home</Icon>
              </IconButton>
            </Link>
          }
        />

        {/* Profile */}
        <Tab
          label={
            <Link to="/profile">
              <IconButton aria-label="profile">
                <Icon className={SyncRouteWithButton("/profile")}>person</Icon>
              </IconButton>
            </Link>
          }
        />

        {/* Cart */}
        <Tab
          label={
            <Link to="/cart">
              <IconButton aria-label="cart">
                <Icon className={SyncRouteWithButton("/cart")}>
                  shopping_cart
                </Icon>
              </IconButton>
            </Link>
          }
        />

        {/* Hamburger */}
        <Tab
          label={
            <IconButton aria-label="menu">
              <Icon className={styles.icon}>menu</Icon>
            </IconButton>
          }
        />
      </Tabs>

      {/* <Link aria-label="support" to="/support">
        Support
      </Link>
      <Link aria-label="about" to="/about">
        About
      </Link>
      <Link aria-label="blog" to="/blog">
        Blog
      </Link> */}
    </nav>
  );
}

//
// function Navbar() {
//   return (
//     <ul className={styles.list}>
//       <Link className={styles.link} to="/">
//         Home
//       </Link>
//       <Link className={styles.link} to="/about">
//         About
//       </Link>
//       <Link className={styles.link} to="/blog">
//         Blog
//       </Link>
//       <Link className={styles.link} to="/cart">
//         Cart
//       </Link>
//       <Link className={styles.link} to="/checkout">
//         Checkout
//       </Link>
//       <Link className={styles.link} to="/profile">
//         Profile
//       </Link>
//       <Link className={styles.link} to="/support">
//         Support
//       </Link>
//     </ul>
//   );
// }

export default Navbar;
