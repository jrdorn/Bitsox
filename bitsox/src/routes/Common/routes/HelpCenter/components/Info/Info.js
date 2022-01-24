import React from "react";
import styles from "./Info.module.css";

// import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a19f9c",
    },
  },
});

//route to FAQs or Blog page on click
let handleRoute = () => {
  console.log("gn");
};

//
//

/**
 TODO
 
 invidual components for Shipping, Return, and Privacy hidden text
 
 pass components HiddenContent

 pass props to HiddenContent so the correct div is selected
 
 */

//shipping hidden text
const HiddenShipping = () => {
  return (
    <div>
      SHIPPING: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea
      dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et
      cursus nisl gravida sit amet. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas.
    </div>
  );
};

//return hidden text
const HiddenReturn = () => {
  return (
    <div>
      RETURN: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea
      dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et
      cursus nisl gravida sit amet. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas.
    </div>
  );
};

//privacy hidden text
const HiddenPrivacy = () => {
  return (
    <div>
      PRIVACY: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea
      dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et
      cursus nisl gravida sit amet. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas.
    </div>
  );
};

//content to display on button click for shipping, return, and privacy policy
let HiddenContent = (props) => {
  return (
    <div id={"unroll" + props.name} className={styles.unroll}>
      <div id={"wrap" + props.name}>{props.content}</div>
    </div>
  );
};

//display hidden text on click
let displayHidden = (name) => {
  let unroll = document.querySelector("#unroll" + name);
  if (unroll.clientHeight) {
    unroll.style.height = 0;
  } else {
    let wrapper = document.querySelector("#wrap" + name);
    unroll.style.height = wrapper.clientHeight + "px";
  }
  // document.getElementById("more-button").value =
  //   document.getElementById("more-button").value == "Read more"
  //     ? "Read less"
  //     : "Read more";
};
//
//

function Info() {
  return (
    <ul id={styles.Info}>
      <ThemeProvider theme={theme}>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={handleRoute}
          >
            FAQs
          </Button>
        </li>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={() => displayHidden("Shipping")}
          >
            Shipping Info
          </Button>

          <HiddenContent name="Shipping" content={HiddenShipping()} />
        </li>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={() => displayHidden("Return")}
          >
            Return Policy
          </Button>

          <HiddenContent name="Return" content={HiddenReturn()} />
        </li>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={() => displayHidden("Privacy")}
          >
            Privacy Policy
          </Button>

          <HiddenContent name="Privacy" content={HiddenPrivacy()} />
        </li>

        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={handleRoute}
          >
            Blog
          </Button>
        </li>
      </ThemeProvider>
    </ul>
  );
}

export default Info;
