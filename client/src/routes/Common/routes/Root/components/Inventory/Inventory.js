import React from "react";
import styles from "./Inventory.module.css";

function Inventory() {
  return (
    <div id={styles.Inventory}>
      <span className={styles.item}>one</span>
      <span className={styles.item}>two</span>

      <span className={styles.item}>three</span>

      <span className={styles.item}>four</span>
      <span className={styles.item}>five</span>
      <span className={styles.item}>six</span>

      <span className={styles.item}>seven</span>
      <span className={styles.item}>eight</span>
      <span className={styles.item}>nine</span>
    </div>
  );
}

export default Inventory;
