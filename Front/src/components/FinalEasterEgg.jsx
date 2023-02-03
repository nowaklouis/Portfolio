import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FinalEasterEgg() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          height: "50px",
          width: "200px",
          display: { xs: "none", sm: "block", md: "none" },
        }}
        onClick={handleOpen}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="secondary"
            component="h2"
          >
            5 Mois ca passi si vite
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: "80%", p: "10px" }}
            image="/Final.jpg"
            alt="Live from Time"
          />
        </Box>
      </Modal>
    </div>
  );
}
