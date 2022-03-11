import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//style the logout modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "blue",
  border: "3px solid salmon",
  boxShadow: 24,
  p: 4,
};

function Logout() {
  //open and close logout dialog modal
  const [open, setOpen] = React.useState(false);
  const openLogout = () => setOpen(true);
  const closeLogout = () => setOpen(false);

  return (
    <div>
      <Button onClick={openLogout}>Logout</Button>
      <Modal open={open} onClick={closeLogout} aria-labelledby="logout">
        <Box sx={style}>
          <Typography id="logout">Are you sure you want to logout?</Typography>
          <Button onClick={closeLogout}>Yes</Button>
          <Button onClick={closeLogout}>No</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Logout;
