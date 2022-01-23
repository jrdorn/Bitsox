import React from "react";
import styles from "./Info.module.css";

// import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a19f9c",
    },
  },
});

function Info() {
  return (
    <ul id={styles.Info}>
      <ThemeProvider theme={theme}>
        <li>
          <Button variant="outlined">FAQs</Button>
        </li>
        <li>
          <Button variant="outlined">Blog</Button>
        </li>
        <li>
          <Button variant="outlined">Return Policy</Button>
        </li>
        <li>
          <Button variant="outlined">Privacy Policy</Button>
        </li>
        <li>
          <Button variant="outlined">Shipping Info</Button>
        </li>
      </ThemeProvider>
    </ul>
  );
}

export default Info;

// include links to the nested routes FAQs and Blog
