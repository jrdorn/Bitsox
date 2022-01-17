import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import { Counter } from "./features/counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div id="Home">
      <h1>Home</h1>
      <Navbar />
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default Home;
