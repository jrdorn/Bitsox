import React from "react";

import { Outlet } from "react-router-dom";

import Searchbar from "./components/Searchbar/Searchbar";
import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar/Navbar";

import styles from "./Common.module.css";

function Common() {
  return (
    <div id={styles.Common}>
      <Searchbar />
      <Filters />

      {/* render nested routes */}
      <Outlet />

      <Navbar />
    </div>
  );
}

export default Common;
