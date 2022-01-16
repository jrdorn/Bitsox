import React from "react";
// import { Counter } from "./features/counter/Counter";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* <Counter /> */}

      <h1>Home</h1>

      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
