import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import { Counter } from "./features/counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div id="Home">
      <h1>Home</h1>

      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <p>p</p>
      <Navbar />
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default Home;
