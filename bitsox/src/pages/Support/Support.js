import React from "react";

// import Searchbar from "../Common/Searchbar/Searchbar";
import Info from "./features/Info/Info";
import Contact from "./features/Contact/Contact";
// import Navbar from "../Common/Navbar/Navbar";

import "./Support.module.css";

function Support() {
  return (
    <div id="Support">
      {/* <Searchbar /> */}
      <Info />
      <Contact />
      {/* <Navbar /> */}
    </div>
  );
}

export default Support;
