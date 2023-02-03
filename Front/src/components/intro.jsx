import { Typography, Box, Button, CardMedia } from "@mui/material/";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Resume from "./resume";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Intro() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}>
      <Box sx={{ width: "60%", textAlign: "start" }}>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Hey, je m'appelle<Button onClick={handleOpen}></Button>
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Un Easter Egg? bien joué, plus que 4.
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 300, p: "10px" }}
              image="/Me.jpg"
              alt="Live from Time"
            />
          </Box>
        </Modal>
        <Typography variant="h1" sx={{ color: "info.main" }}>
          Louis Nowak
        </Typography>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Je rends vos idées et vos envies vivantes
        </Typography>
        <Typography variant="h4" sx={{ color: "primary.light" }}>
          Je suis un repenti par le web, le code, Ze life, une envie inssasiable
          de créer, maintenir du code avec une bonne dose de réflexion sur
          nombre de projet qu'il ne me manque plus qu'à découvrir
        </Typography>
        <Resume />
      </Box>
    </Box>
  );
}
