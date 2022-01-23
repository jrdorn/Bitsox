import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cancel.module.css";

function Cancel() {
  return (
    <div className={styles.bg}>
      {" "}
      <Link className={styles.link} to="/cart">
        Cancel
      </Link>
    </div>
  );
}

export default Cancel;
