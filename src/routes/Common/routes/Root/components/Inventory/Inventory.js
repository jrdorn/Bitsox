import React from "react";
import styles from "./Inventory.module.css";

// component containing JSON and image for individual Shop item
//  /api/shop/:item
function Item(props) {
  let imgSrc = "https://bitsox-server.herokuapp.com/api/shop/sock" + props.num;

  return (
    <span className={styles.item}>
      <img alt="sock" src={imgSrc}></img>
    </span>
  );
}

// display unsold items in shop inventory
function Inventory() {
  //
  //test HTTP request from React app to Node Express server
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://bitsox-server.herokuapp.com/api/shop/sock3")
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
  /* <Item data={!data ? "Loading..." : data} /> */

  let items = [];

  for (let i = 1; i < 10; i++) {
    items.push(<Item num={i} />);
  }

  return <div id={styles.Inventory}>{items}</div>;
}

export default Inventory;
