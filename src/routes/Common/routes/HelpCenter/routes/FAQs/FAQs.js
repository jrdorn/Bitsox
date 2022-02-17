import React from "react";

import FAQsList from "./components/FAQsList/FAQsList";

// import FunctionComponent from "./components/FunctionComponent/FunctionComponent";

import styles from "./FAQs.module.css";

function FAQs() {
  return (
    <div id={styles.FAQs}>
      <FAQsList />

      <div>{/* <FunctionComponent /> */}</div>
    </div>
  );
}

export default FAQs;
