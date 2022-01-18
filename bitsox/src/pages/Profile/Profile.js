import React from "react";

import Searchbar from "../Common/Searchbar/Searchbar";
import Auth from "./features/Auth/Auth";
import Update from "./features/Update/Update";
import Wishlist from "./features/Wishlist/Wishlist";
import Navbar from "../Common/Navbar/Navbar";

import "./Profile.css";

function Profile() {
  return (
    <div id="Profile">
      <Searchbar />
      <Auth />
      <Update />
      <Wishlist />
      <Navbar />
    </div>
  );
}

export default Profile;
