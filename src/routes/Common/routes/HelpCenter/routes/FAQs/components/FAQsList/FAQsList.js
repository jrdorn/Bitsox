import React from "react";

import styles from "./FAQsList.module.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//template for rendering questions and answers
const ListItem = (props) => {
  return (
    <li>
      {/* question */}
      <div className={styles.question} onClick={() => displayHidden(props.id)}>
        {props.q}
      </div>

      {/* answer */}
      <div id={"unroll" + props.id} className={styles.unroll}>
        <div id={"wrap" + props.id} className={styles.answer}>
          {props.a}
        </div>
      </div>
    </li>
  );
};

//unordered list to hold questions and answers
const QAList = (props) => {
  let innerList = [];
  for (let i = 0; i < props.pairs.length; i++) {
    innerList.push(
      <ListItem
        q={props.pairs[i].question}
        a={props.pairs[i].answer}
        key={props.pairs[i].id}
        id={props.pairs[i].id}
      />
    );
  }

  return (
    <div className={styles.listBox}>
      <h5>{props.title}</h5>
      <ul className={styles.innerList}>{innerList}</ul>
    </div>
  );
};

//individual question and answer pairs to pass to React components
let firstPairs = [
  {
    question: "First is this working?",
    answer:
      "Yes it is enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit",
    id: "a",
  },
  {
    question: "What is the answer to life, the universe, and everything?",
    answer:
      "The answer is 42 enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit enim Plato: Beatum, cui etiam in senectute contigerit",
    id: "b",
  },
  {
    question: "Lorep ipsum lorem ipsum?",
    answer: "The brown hair jumped over the moon",
    id: "c",
  },
];

let secondPairs = [
  {
    question: "Second is this working?",
    answer: "Yes it is",
    id: "42",
  },
  {
    question:
      "Cum audissem Antiochum, Brute, ut solebam, cum M. Quasi vero, inquit, perpetua oratio rhetorum solum?",
    answer:
      "Cum audissem Antiochum, Brute, ut solebam, cum M. Quasi vero, inquit, perpetua oratio rhetorum solum",
    id: "d",
  },
  {
    question:
      "Cum audissem Antiochum, Brute, ut solebam, cum M. Quasi vero, inquit, perpetua oratio rhetorum solum?",
    answer:
      "Cum audissem Antiochum, Brute, ut solebam, cum M. Quasi vero, inquit, perpetua oratio rhetorum solum",
    id: "e",
  },
];

let thirdPairs = [
  {
    question: "Third is this working?",
    answer: "Yes it is",
    id: "f",
  },
  {
    question:
      "Praeclare enim Plato: Beatum, cui etiam in senectute contigerit?",
    answer: "Praeclare enim Plato: Beatum, cui etiam in senectute contigerit",
    id: "g",
  },
  {
    question:
      "Praeclare enim Plato: Beatum, cui etiam in senectute contigerit?",
    answer: "Praeclare enim Plato: Beatum, cui etiam in senectute contigerit",
    id: "h",
  },
];

//button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a19f9c",
    },
  },
});

//display hidden answer on click
let displayHidden = (id) => {
  let unroll = document.querySelector("#unroll" + id);
  if (unroll.clientHeight) {
    unroll.style.height = 0;
  } else {
    let wrapper = document.querySelector("#wrap" + id);
    unroll.style.height = wrapper.clientHeight + "px";
  }
};

function FAQsList() {
  return (
    <div id={styles.FAQsList}>
      <ThemeProvider theme={theme}>
        <Button id={styles.returnButton} component={Link} to="/help_center">
          Return
        </Button>

        <h3>Frequently Asked Questions</h3>

        <QAList title="First" pairs={firstPairs} />

        <QAList title="Second" pairs={secondPairs} />

        <QAList title="Third" pairs={thirdPairs} />
      </ThemeProvider>
    </div>
  );
}

export default FAQsList;
