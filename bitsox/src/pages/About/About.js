import React from "react";
import Navbar from "../Common/Navbar/Navbar";

import FunctionComponent from "./features/FunctionComponent/FunctionComponent";

import "./About.css";

function About() {
  return (
    <div id="About">
      <h1>About</h1>

      <Navbar />

      <div>
        <FunctionComponent />
      </div>
    </div>
  );
}

export default About;
