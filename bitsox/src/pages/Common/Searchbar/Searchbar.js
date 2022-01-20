import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <form id={styles.Searchbar} role="search" action="/search">
      <a id={styles.logo} href="/">
        <img alt="Bitsox" id={styles.logo} src={require("./logo.png")} />
      </a>
      <a href="/">
        <h2 id={styles.title}>Bitsox</h2>
      </a>
      <input
        type="search"
        id={styles.search}
        name="search"
        aria-label="Search inventory"
        placeholder="Search inventory"
        autoComplete="off"
      ></input>
      <svg
        className={styles.magGlass}
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
      </svg>
    </form>
  );
}

export default Searchbar;
