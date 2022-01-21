import React from "react";

import Searchbar from "./features/Searchbar/Searchbar";
import Filters from "./features/Filters/Filters";
import Navbar from "./features/Navbar/Navbar";

import styles from "./Common.module.css";

function Common() {
  return (
    <div id={styles.Common}>
      <Searchbar />
      <Filters />

      <Navbar />
    </div>
  );
}

export default Common;
