import React from "react";

import styles from "./Err.module.css";

function Err() {
  return (
    <div id={styles.Err}>
      <h1 id={styles.errno}>404</h1>
      <h2 id={styles.msg}>Page not found</h2>
    </div>
  );
}

export default Err;
