import React from "react";
// import { useLocation } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";
// import IconButton from "@mui/material/IconButton";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

//color Navbar icon purple if it links to the current page
// let SyncRouteWithButton = (path) => {
//   const location = useLocation();
//   let route = location.pathname;

//   if (path === route) {
//     return styles.selectedIcon;
//   } else {
//     return styles.icon;
//   }
// };

//handle tab routing
let LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(e) => {
        e.preventDefault();
      }}
      {...props}
    />
  );
};

function Navbar() {
  //keep track of current selected tab
  const [val, setValue] = React.useState(0);
  const changeTab = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <nav id={styles.Navbar}>
      <Tabs
        id="HereIam"
        className={styles.allTabs}
        value={val}
        onChange={changeTab}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="Navbar"
      >
        {/* Home */}
        <LinkTab aria-label="home" label={<Icon>home</Icon>} href="/" />

        {/* Profile */}
        <LinkTab
          aria-label="profile"
          label={<Icon>person</Icon>}
          href="/profile"
        />

        {/* Cart */}
        <LinkTab
          aria-label="cart"
          label={<Icon>shopping_cart</Icon>}
          href="/cart"
        />
        {/* <Tab
          label={
            <Link to="/cart">
              <IconButton aria-label="cart">
                <Icon className={SyncRouteWithButton("/cart")}>
                  shopping_cart
                </Icon>
              </IconButton>
            </Link>
          }
        /> */}

        {/* Hamburger */}
        <LinkTab aria-label="menu" label={<Icon>menu</Icon>} href="/menu" />
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
