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
let formStyles = {
  input: {
    color: "#e8e6e3",
    width: "15em",
  },
  label: {
    color: "#a19f9c",
  },
  fieldset: {
    borderColor: "#a19f9c",
    transition: "border-color 0.5s",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#EDEAE6",
  },
};

function Contact() {
  return (
    <form id={styles.Contact}>
      <ThemeProvider theme={theme}>
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
          id={styles.messageField}
          label="Message"
          variant="outlined"
          margin="dense"
          sx={formStyles}
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
