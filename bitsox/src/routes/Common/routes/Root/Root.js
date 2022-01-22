import React from "react";

import Deal from "./features/Deal/Deal";
import Inventory from "./features/Inventory/Inventory";

// import { Counter } from "./features/counter/Counter";
import styles from "./Socks.module.css";

function Socks() {
  return (
    <div id={styles.Socks} className="Page">
      <Deal />
      <Inventory />
    </div>
  );
}

export default Socks;

/* <h1>Home</h1>

<h1>h1 Bitsox</h1>
<h2>h2 I'm a header</h2>
<h3>h3 I'm a subheader</h3>
<h4>I'm a second subheader</h4>
<h5>I'm another subheader</h5>
<p>I'm regular text and here I go through the hills and over the sea</p>
<Navbar />
<div>
  <Counter />
*/
