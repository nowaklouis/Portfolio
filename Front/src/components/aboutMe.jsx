import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Typing from "../components/typing";

export default function AboutMe() {
  return (
    <Box
      id="Presentation"
      sx={{ paddingTop: "20rem", display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          display: { md: "flex", sx: "none" },
          justifyContent: "center",
          width: { md: "60%", sx: "90%" },
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
              Le Web, le Code, je m'en suis découvert une réel passion. J'ai
              entrepris une formation au sein de la wild Code School où j'ai pu
              en apprendre plus sur la programmation et moi-même, me développé
              graçe à une motivation et une perséverance accrus, une réel
              détermination en ce nouveau choix de carrière.
            </Typography>
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={{ paddingTop: "1.5rem" }}
            >
              Pendant cette formation j'ai appris à utiliser efficacement du
              JavaScript ainsi que ces frameWork. Gérer des API graçe à du
              node.js. En équipe, nous avons du faire l'integration de projets
              React, ce qui m'a appris efficacement le workflow avec Github.
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 500, height: 500, p: "10px" }}
          image="/intro.png"
          alt="Live from Time"
        />
      </Card>
    </Box>
  );
}
