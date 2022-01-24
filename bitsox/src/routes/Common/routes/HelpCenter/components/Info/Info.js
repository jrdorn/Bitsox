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

//display hidden text on click
let displayHidden = () => {
  console.log("gm");
};

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
            onClick={displayHidden}
          >
            Shipping Info
          </Button>
        </li>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={displayHidden}
          >
            Return Policy
          </Button>
        </li>
        <li>
          <Button
            className={styles.infoButtons}
            variant="outlined"
            onClick={displayHidden}
          >
            Privacy Policy
          </Button>
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
