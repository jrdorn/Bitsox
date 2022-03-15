import React from "react";
import styles from "./Navbar.module.css";

import Icon from "@mui/material/Icon";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SocksSolid } from "./socks-solid.svg";

//
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  //get current route from React Router and match to route index in Tabs array
  const location = useLocation().pathname;
  const tabRouteArray = ["/", "/profile", "/cart", "/help_center"];
  let initTab;
  //if user navigates to a nested route, display the tab for its parent route
  if (!tabRouteArray.includes(location)) {
    for (let i = 0; i < tabRouteArray.length; i++) {
      console.log(tabRouteArray[i], location);
      if (location.includes(tabRouteArray[i])) {
        initTab = i;
      }
    }
  } else {
    initTab = tabRouteArray.indexOf(location);
  }

  //match current selected tab to displayed route
  const [tab, setTab] = React.useState(initTab);
  const changeTab = (e, newTab) => {
    setTab(newTab);
  };

  return (
    <nav id={styles.Navbar}>
      <Tabs
        className={styles.allTabs}
        value={tab}
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
