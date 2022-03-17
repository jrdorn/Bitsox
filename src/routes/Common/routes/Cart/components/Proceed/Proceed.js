import React from "react";

import { Link } from "react-router-dom";

import { Button, TextField } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "./Proceed.module.css";

//button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a022b5",
    },
  },
});

//Form field styles
const formStyles = {
  input: {
    color: "#e8e6e3",
  },
  textarea: {
    color: "#e8e6e3",
  },
  label: {
    color: "#a19f9c",
  },
  fieldset: {
    borderColor: "#a19f9c",
    transition: "border-color 0.5s",
  },
  "&:hover": {
    label: {
      color: "#a022b5",
    },
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#a022b5",
  },
};

function Proceed() {
  return (
    <div id={styles.Proceed}>
      <div>
        <h5>Shipping</h5>
        <div>Regular shipping</div>
        <div>$5.00 - 5 business days</div>

        <div>Express shipping</div>
        <div>$8.00 - 2 business days</div>
      </div>

      <TextField
        label="Promo code"
        variant="outlined"
        size="small"
        margin="normal"
        color="primary"
        sx={formStyles}
      />

      <div>
        <span>Subtotal: </span>
        <span>$17</span>
      </div>

      <ThemeProvider theme={theme}>
        <Button component={Link} to="/checkout">
          Checkout
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Proceed;

/**

 Subtotal
 proceed to checkout button
 */
