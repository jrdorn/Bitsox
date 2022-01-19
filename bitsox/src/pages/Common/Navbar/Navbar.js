import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

//
import AcUnitIcon from "@mui/icons-material/AcUnit";
// import SvgIcon from "@mui/material/SvgIcon";

function Navbar() {
  return (
    <div>
      <AcUnitIcon />
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
