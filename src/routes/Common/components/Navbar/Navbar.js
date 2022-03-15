import React from "react";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SocksSolid } from "./socks-solid.svg";

//
import { Link } from "react-router-dom";

/**
 *
 * TODO Pass path to MUI tabs for route highlight onload
 *
 *
 *
 */

function Navbar() {
  //keep track of current selected tab
  const [val, setValue] = React.useState(0);
  const changeTab = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <nav id={styles.Navbar}>
      <Tabs
        className={styles.allTabs}
        value={val}
        onChange={changeTab}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="Navbar"
      >
        {/* Home */}
        <Tab
          aria-label="home"
          label={<SvgIcon component={SocksSolid} inheritViewBox />}
          component={Link}
          to="/"
        />

        {/* Profile */}
        <Tab
          aria-label="profile"
          label={<Icon>person</Icon>}
          component={Link}
          to="/profile"
        />

        {/* Cart */}
        <Tab
          aria-label="cart"
          label={<Icon>shopping_cart</Icon>}
          component={Link}
          to="/cart"
        />

        {/* HelpCenter */}
        <Tab
          aria-label="help_center"
          label={<Icon>help_center</Icon>}
          component={Link}
          to="/help_center"
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
// import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export default Navbar;
