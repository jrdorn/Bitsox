import React from "react";

import { Outlet } from "react-router-dom";

import Searchbar from "./features/Searchbar/Searchbar";
import Filters from "./features/Filters/Filters";
import Navbar from "./features/Navbar/Navbar";

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
