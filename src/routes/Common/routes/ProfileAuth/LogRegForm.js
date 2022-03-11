import * as React from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//let user login with an existing email and password, or register a new account
function LogRefForm(props) {
  //state hooks to open and close the modal
  const [open, setOpen] = React.useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <div>
      <Button onClick={openDialog}>Login or Register</Button>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            variant="standard"
          /> */}
          <TextField
            label="Full Name"
            variant="outlined"
            size="small"
            margin="normal"
            color="primary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={closeDialog}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LogRefForm;
