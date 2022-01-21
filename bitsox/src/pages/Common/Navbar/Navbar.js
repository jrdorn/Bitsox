import React from "react";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

//
//
//
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SocksSolid } from "./socks-solid.svg";
//
//
//

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
        <LinkTab
          aria-label="home"
          label={<SvgIcon component={SocksSolid} inheritViewBox />}
          href="/"
        />

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

export default Navbar;
