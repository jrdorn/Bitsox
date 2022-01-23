import React from "react";

import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";

// import { Link } from "react-router-dom";

import "./HelpCenter.module.css";

function HelpCenter() {
  return (
    <div id="HelpCenter">
      <Info />
      <Contact />
      {/* <Link to="/">Link</Link> */}
    </div>
  );
}

export default HelpCenter;

// About, Blog links in Info
