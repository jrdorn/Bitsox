import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.bg}>
      <input
        type="search"
        id="search"
        className={styles.search}
        name="search"
        aria-label="Search site inventory"
      ></input>
      <button>Search</button>
    </div>
  );
}

export default Searchbar;
