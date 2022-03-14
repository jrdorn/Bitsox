import React, { useState, useEffect } from "react";

// import Deal from "./components/Deal/Deal";
import Inventory from "./components/Inventory/Inventory";

// import { Counter } from "./components/counter/Counter";
import styles from "./Shop.module.css";

// import axios from "axios";

function Shop() {
  //
  //test HTTP request from React app to Node Express server
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://bitsox-server.herokuapp.com/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  //
  //

  // --max_old_space_size=4096

  //
  //

  //   state = {
  //   users: [],
  // };
  // componentDidMount() {
  //   axios.get("/users.json").then((response) => {
  //     this.setState({ users: response.data });
  //   });
  // }

  // useEffect(() => {
  //   axios.get('/users.json').then((res => {

  //   }))
  // });
  //
  //

  return (
    <div id={styles.Shop} className="Page">
      {/* <Deal data={!data ? "Loading..." : data} /> */}
      <Inventory />
    </div>
  );
}

export default Shop;

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
