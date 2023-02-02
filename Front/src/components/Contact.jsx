import { useState, useEffect } from "react";
import * as React from "react";
import { Box, CardContent, Grid, TextField } from "@mui/material/";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function OutlinedCard() {
  const [send, setSend] = useState({
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SendMessage = (e) => {
    e.preventDefault();
    console.log(send);
    setOpen(true);
  };

  const totalMessage = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}>
      <Card
        variant="outlined"
        sx={{
          background: "rgba(0, 0, 0, 0.3)",
          width: "60%",
        }}
      >
        <CardContent>
          <Typography variant="h2">Je ne mord pas</Typography>
          <form>
            <Grid container spacing={1} sx={{ paddingTop: "3rem" }}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Prénom"
                  name="firstname"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nom"
                  name="lastname"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="E-mail"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Tel"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Button
                type="submit"
                variant="Contained"
                color="info.main"
                fullWidth
                sx={{ backgroundColor: "info.main", marginTop: "1rem" }}
                onClick={SendMessage}
              >
                Envoyer
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Vôtre message m'a bien été envoyé !
                </Alert>
              </Snackbar>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
