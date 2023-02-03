import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Typing from "../components/typing";
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

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      id="Presentation"
      sx={{ paddingTop: "20rem", display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          display: { md: "flex", sx: "none" },
          justifyContent: "center",
          width: "60%",
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography color="info.main" component="div" variant="h5">
              NOWAK Louis
            </Typography>

            <Typing />
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={{ paddingTop: "1.5rem" }}
            >
              <Button onClick={handleOpen} sx={{ fontSize: "20px" }}>
                Lorem{" "}
              </Button>
              ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum
              voluptatum amet asperiores ipsum iusto, ullam placeat magnam
              eligendi aliquid accusantium?
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
                  Un Easter Egg du grand sage Yaourt.
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 300, p: "10px" }}
                  image="/yavuzhappy.jpg"
                  alt="Live from Time"
                />
              </Box>
            </Modal>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, p: "10px" }}
          image="/mePro.jpg"
          alt="Live from Time"
        />
      </Card>
    </Box>
  );
}
