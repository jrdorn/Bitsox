import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

//
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// function Navbar() {
//   return (
//     <div>
//       <HomeRoundedIcon fontSize="large" color="primary" />
//       <PersonRoundedIcon fontSize="large" />
//       <ShoppingCartOutlinedIcon fontSize="large" />
//       <MenuRoundedIcon fontSize="large" />
//     </div>
//   );
// }

import Icon from "@mui/material/Icon";

function Navbar() {
  return (
    <div>
      <Icon>home</Icon>
      <Icon>person</Icon>
      <Icon>shopping_cart</Icon>
      <Icon>menu</Icon>
    </div>
  );
}

//

// function Navbar() {
//   return (
//     <ul id={styles.list}>
//       <Link className={styles.link} to="/">
//         {/* Home */}
//         <span className="material-icons-round">home</span>
//       </Link>
//       <Link className={styles.link} to="/profile">
//         {/* Profile */}
//         <span className="material-icons-round">person</span>
//       </Link>
//       <Link className={styles.link} to="/cart">
//         {/* Cart */}
//         <span className="material-icons-outlined">shopping_cart</span>
//       </Link>

//       <div>
//         {/* Hamburger menu */}{" "}
//         <span className="material-icons-round">menu</span>
//       </div>
//       <Link className={styles.link} to="/support">
//         Support
//       </Link>
//       <Link className={styles.link} to="/about">
//         About
//       </Link>
//       <Link className={styles.link} to="/blog">
//         Blog
//       </Link>
//     </ul>
//   );
// }

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
