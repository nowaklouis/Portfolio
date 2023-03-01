import { Typography, Box } from "@mui/material/";
import Resume from "./resume";
import { useEffect, useRef } from "react";

export default function Intro() {
  const titleRef = useRef();
  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.3,
        }
      )
      .to(".letter", {
        margin: "0 5px",
        delay: 5.0,
        duration: 0.5,
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Box
      id="intro"
      sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}
    >
      <Box sx={{ width: "60%", textAlign: "start" }}>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Hey, je m'appelle
        </Typography>
        <Typography
          className="title"
          ref={titleRef}
          variant="h1"
          sx={{ color: "info.main" }}
        >
          <span className="letter">L</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">i</span>
          <span className="letter">s</span>
          <span className="letter"> </span>
          <span className="letter">N</span>
          <span className="letter">o</span>
          <span className="letter">w</span>
          <span className="letter">a</span>
          <span className="letter">k</span>
        </Typography>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Je développe vos idées et vos envies en code
        </Typography>
        <Typography variant="h4" sx={{ color: "primary.light" }}>
          Je suis un nouveau passionné par le web, le code, Ze life, une envie
          insatiable de créer, maintenir du code avec une bonne dose de
          réflexion sur nombres de projets qu'il ne me manque plus qu'à
          découvrir
        </Typography>
        <Resume />
      </Box>
    </Box>
  );
}
