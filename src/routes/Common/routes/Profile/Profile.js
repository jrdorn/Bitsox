import React from "react";

// import Auth from "./components/Auth/Auth";
import Update from "./components/Update/Update";
import Wishlist from "./components/Wishlist/Wishlist";

import styles from "./Profile.module.css";

//
import { useGetPrivateQuery } from "../../../../store/bitsoxAPI";

function Profile() {
  return (
    <div id={styles.Profile}>
      {/* <Auth /> */}
      <Update />
      {/* Order History / Track Orders */}
      <Wishlist />
    </div>
  );
}

export default Profile;
