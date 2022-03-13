import React from "react";
import styles from "./Deal.module.css";

function Deal(props) {
  return <div id={styles.Deal}>{props.data}</div>;
}

export default Deal;
