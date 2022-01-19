import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

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
  return (
    <nav id={styles.Navbar}>
      {/* Home */}
      <Link to="/">
        <IconButton aria-label="home">
          <Icon className={SyncRouteWithButton("/")}>home</Icon>
        </IconButton>
      </Link>

      {/* Profile */}
      <Link className={styles.link} to="/profile">
        <IconButton aria-label="profile">
          <Icon className={SyncRouteWithButton("/profile")}>person</Icon>
        </IconButton>
      </Link>

      {/* Cart */}
      <Link className={styles.link} to="/cart">
        <IconButton aria-label="cart">
          <Icon className={SyncRouteWithButton("/cart")}>shopping_cart</Icon>
        </IconButton>
      </Link>

      {/* Hamburger */}
      <IconButton aria-label="menu">
        <Icon className={styles.icon}>menu</Icon>
      </IconButton>

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
