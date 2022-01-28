import React from "react";
import styles from "./Auth.module.css";

import Button from "@mui/material/Button";

function Auth() {
  return (
    <div id={styles.Auth}>
      <Button>Register</Button>
      <Button>Login</Button>
      <Button>Logout</Button>
    </div>
  );
}

export default Auth;
