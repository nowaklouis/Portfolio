import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Typing from "../components/typing";
import { useEffect } from "react";

export default function AboutMe() {
  const slideLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    slideLeft(".sect1");
  }, []);

  return (
    <Box
      id="Presentation"
      sx={{
        marginTop: { xs: "50px", md: "20rem" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="sect1"
        sx={{
          display: { md: "flex" },
          justifyContent: "center",
          width: { md: "60%", xs: "95%" },
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
