import React from "react";
import styles from "./Contact.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/**
 *
 * implement form controls
 */

//submit button theme
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

function Contact() {
  return (
    <form id={styles.Contact}>
      <ThemeProvider theme={theme}>
        <h3 id={styles.title}>Contact Us</h3>

        {/* Name */}
        <TextField
          className={styles.formField}
          label="Name"
          variant="outlined"
          size="small"
          margin="normal"
          color="primary"
          sx={formStyles}
        />

        {/* Email */}
        <TextField
          className={styles.formField}
          label="Email"
          variant="outlined"
          size="small"
          margin="normal"
          sx={formStyles}
        />

        {/* Message */}
        <TextField
          className={styles.formField}
          label="Message"
          variant="outlined"
          margin="dense"
          sx={formStyles}
          minRows="9"
          maxRows="9"
          multiline
        />

        {/* Submit button */}
        <Button
          id={styles.submitButton}
          type="submit"
          variant="outlined"
          size="large"
        >
          Submit
        </Button>
      </ThemeProvider>
    </form>
  );
}

export default Contact;
