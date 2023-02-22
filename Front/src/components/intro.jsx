import { Typography, Box, Button, CardMedia } from "@mui/material/";
import Resume from "./resume";

export default function Intro() {
  return (
    <Box
      id="intro"
      sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}
    >
      <Box sx={{ width: "60%", textAlign: "start" }}>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Hey, je m'appelle
        </Typography>
        <Typography variant="h1" sx={{ color: "info.main" }}>
          Louis Nowak
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
