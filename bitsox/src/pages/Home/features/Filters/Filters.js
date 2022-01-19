import React from "react";
import styles from "./Filters.module.css";

function Filters() {
  return (
    <ul id={styles.Filters}>
      <li className={styles.afilter}>
        <a href="#cotton">Cotton</a>
      </li>
      <li className={styles.afilter}>
        <a href="#wool">Wool</a>
      </li>
      <li className={styles.afilter}>
        <a href="#sale">Sale</a>
      </li>
      <li className={styles.afilter}>
        <a href="#featured">Featured</a>
      </li>
    </ul>
  );
}

export default Filters;
