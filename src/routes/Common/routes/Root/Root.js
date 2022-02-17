import React, { useState, useEffect } from "react";

import Deal from "./components/Deal/Deal";
import Inventory from "./components/Inventory/Inventory";

// import { Counter } from "./components/counter/Counter";
import styles from "./Root.module.css";

import axios from "axios";

function Root() {
  //
  //test HTTP request from React app to Node Express server
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  //
  //

  //
  //
  /*
    state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  } */
  //
  // useEffect(() => {
  //   axios.get('/users.json').then((res => {

  //   }))
  // });
  //
  //

  return (
    <div id={styles.Root} className="Page">
      <Deal data={!data ? "Loading..." : data} />
      <Inventory />
    </div>
  );
}

export default Root;

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

//{
/* <Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true },
  }}
/>; */
//}
