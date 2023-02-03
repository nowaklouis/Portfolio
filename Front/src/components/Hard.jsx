import * as React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Modal from "@mui/material/Modal";

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

export default function Hard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: { md: "flex", sx: "none" }, justifyContent: "center" }}>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked name="react" />}
            label="React"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="Node.js" />}
            label="Node.js"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="Mysql" />}
            label="MySQL"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={
              <Checkbox defaultChecked name="Html" onClick={handleOpen} />
            }
            label="HTML5"
            sx={{ color: "primary.light" }}
          />
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
                Un Easter Egg? c'est gars la ont pas l'air frais.
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: 300, p: "10px" }}
                image="/eclatax.jpg"
                alt="Live from Time"
              />
            </Box>
          </Modal>
          <FormControlLabel
            control={<Checkbox checked name="GitHub" />}
            label="GitHub"
            sx={{ color: "primary.light" }}
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked name="next" />}
            label="Next.js"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="Express.js" />}
            label="Express.js"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="Sequelize" />}
            label="Sequelize"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="CSS" />}
            label="CSS / MUI"
            sx={{ color: "primary.light" }}
          />
          <FormControlLabel
            control={<Checkbox checked name="agile" />}
            label="Methode Agile"
            sx={{ color: "primary.light" }}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
