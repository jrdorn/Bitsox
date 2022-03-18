import React from "react";
import styles from "./Update.module.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function Update() {
  return (
    <form id={styles.Update}>
      <ThemeProvider theme={theme}>
        <h3>Update</h3>

        {/* Profile Pic */}
        <div>Profile Pic</div>

        {/* Full Name */}
        <TextField
          className={styles.formField}
          label="Full Name"
          variant="outlined"
          size="small"
          margin="normal"
          color="primary"
          sx={formStyles}
        />

        {/* Username */}
        <TextField
          className={styles.formField}
          label="Username"
          variant="outlined"
          size="small"
          margin="normal"
          color="primary"
          sx={formStyles}
        />

        {/* Password *must enter to change anyting* */}
        <TextField
          className={styles.formField}
          label="Password"
          variant="outlined"
          size="small"
          margin="normal"
          color="primary"
          sx={formStyles}
        />
        {/* Re-enter Password */}
        <TextField
          className={styles.formField}
          label="Re-enter Password"
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
          color="primary"
          sx={formStyles}
        />

        {/* Shipping Address */}
        <TextField
          className={styles.formField}
          label="Shipping Address"
          variant="outlined"
          size="small"
          margin="normal"
          color="primary"
          sx={formStyles}
        />

        {/* 2FA */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#e8e6e3",
                }}
                defaultChecked
              />
            }
            label="2FA"
          />
        </FormGroup>

        {/* Newsletter */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#e8e6e3",
                }}
                defaultChecked
              />
            }
            label="Receive email newsletter"
          />
        </FormGroup>

        {/* Payment */}
        {/* <div>Payment</div> */}

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

export default Update;
