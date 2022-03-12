import React from "react";
import styles from "./Auth.module.css";

import LogRegForm from "./LogRegForm";
import Logout from "./Logout";

// import { useGetAuthQuery } from "../../../../store/bitsoxAPI";

//if user is logged in, display logout button
//if user is not logged in, render button to register or login
function ProfileAuth() {
  //state hooks to open and close auth modals

  return (
    <div id={styles.Auth}>
      <LogRegForm />
      <Logout />
    </div>
  );
}

export default ProfileAuth;
