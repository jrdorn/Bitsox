import React from "react";
import styles from "./Filters.module.css";

//briefly flash violet on clicking a Filter
let highlight = (name) => {
  let Filter = document.getElementById(name);
  Filter.style.color = "#a022b5";
  setTimeout(() => {
    Filter.style.color = "#a19f9c";
  }, 500);
};

//individual filters
let Filter = (props) => {
  return (
    <li onClick={() => highlight(props.name)} className={styles.afilter}>
      <a id={props.name} href={"#" + props.name}>
        {props.name}
      </a>
    </li>
  );
};

function Filters() {
  return (
    <ul id={styles.Filters}>
      <Filter name="Featured" />
      <Filter name="Novelty" />
      <Filter name="Athletic" />
      <Filter name="Sale" />
    </ul>
  );
}

export default Filters;
