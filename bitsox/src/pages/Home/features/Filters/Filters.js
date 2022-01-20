import React from "react";
import styles from "./Filters.module.css";

function Filters() {
  return (
    <ul id={styles.Filters}>
      <li className={styles.afilter}>
        <a href="#featured">Featured</a>
      </li>
      <li className={styles.afilter}>
        <a href="#novelty">Novelty</a>
      </li>
      <li className={styles.afilter}>
        <a href="#athletic">Athletic</a>
      </li>
      <li className={styles.afilter}>
        <a href="#sale">Sale</a>
      </li>
    </ul>
  );
}

export default Filters;
