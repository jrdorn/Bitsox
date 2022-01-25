import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./Cancel.module.css";

function Cancel() {
  return (
    <Button id={styles.Cancel} component={Link} to="/cart">
      Cancel
    </Button>
  );
}

export default Cancel;
