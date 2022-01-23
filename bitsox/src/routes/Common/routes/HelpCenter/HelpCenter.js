import React from "react";

import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";

import "./HelpCenter.module.css";

function HelpCenter() {
  return (
    <div id="HelpCenter">
      <Info />
      <Contact />
    </div>
  );
}

export default HelpCenter;

// About, Blog links in Info
