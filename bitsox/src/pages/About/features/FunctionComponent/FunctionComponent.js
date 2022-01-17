import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementIfEven,
  selectCount,
} from "./FunctionComponentSlice";

import styles from "./FunctionComponent.module.css";

const FunctionComponent = () => {
  // selectCount => name from slice reducer => data from store
  const fCount = useSelector(selectCount); //get data from Redux state
  const dispatch = useDispatch(); //dispatch function from Redux store
  //

  //declare state variable
  const [banana, setBananas] = useState("🍌"); //hook that keeps local state in a function component
  //array destructuring, getter and setter

  const [grapes, setGrapes] = useState("🍇");
  //updating a state variable always *replaces* it instead of merging it

  return (
    <div>
      <p>{fCount}</p>
      <button
        className={styles.buttonStyles}
        onClick={() => dispatch(increment(fCount))}
      >
        Increment
      </button>
      <button
        className={styles.buttonStyles}
        onClick={() => dispatch(decrement(fCount))}
      >
        Decrement
      </button>
      <button
        className={styles.buttonStyles}
        onClick={() => dispatch(incrementIfEven(fCount))}
      >
        Double if even
      </button>

      <p>{banana}</p>
      <button
        className={styles.buttonStyles}
        onClick={() => setBananas(banana + "🍌")}
      >
        More bananas
      </button>
      <button className={styles.buttonStyles} onClick={() => setBananas("")}>
        No bananas
      </button>

      <p>{grapes}</p>
      <button
        className={styles.buttonStyles}
        onClick={() => setGrapes(grapes + "🍇")}
      >
        More grapes
      </button>
      <button className={styles.buttonStyles} onClick={() => setGrapes("")}>
        No grapes
      </button>
    </div>
  );
};

export default FunctionComponent;
