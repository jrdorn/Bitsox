import React from "react";

import Auth from "./features/Auth/Auth";
import Update from "./features/Update/Update";
import Wishlist from "./features/Wishlist/Wishlist";

import "./Profile.module.css";

function Profile() {
  return (
    <div id="Profile">
      <Auth />
      <Update />
      <Wishlist />
    </div>
  );
}

export default Profile;
