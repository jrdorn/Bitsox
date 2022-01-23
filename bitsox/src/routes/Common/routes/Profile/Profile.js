import React from "react";

import Auth from "./components/Auth/Auth";
import Update from "./components/Update/Update";
import Wishlist from "./components/Wishlist/Wishlist";

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
