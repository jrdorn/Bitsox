import React from "react";

import AboutBitsox from "./components/AboutBitsox/AboutBitsox";

// import FunctionComponent from "./components/FunctionComponent/FunctionComponent";

import "./About.module.css";

function About() {
  return (
    <div id="About">
      <AboutBitsox />

      <div>{/* <FunctionComponent /> */}</div>
    </div>
  );
}

export default About;
