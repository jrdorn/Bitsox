import React from "react";
import Searchbar from "../Common/Searchbar/Searchbar";
import Filters from "./features/Filters/Filters";
import Deal from "./features/Deal/Deal";
import Inventory from "./features/Inventory/Inventory";
import Navbar from "../Common/Navbar/Navbar";
// import { Counter } from "./features/counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div id="Home">
      <Searchbar />
      <Filters />
      <Deal />
      <Inventory />
      <Navbar />
      {/* <h1>Home</h1>

      <h1>h1 Bitsox</h1>
      <h2>h2 I'm a header</h2>
      <h3>h3 I'm a subheader</h3>
      <h4>I'm a second subheader</h4>
      <h5>I'm another subheader</h5>
      <p>I'm regular text and here I go through the hills and over the sea</p>
      <Navbar />
      <div>
        <Counter />
      </div> */}
    </div>
  );
}

export default Home;
