import { Typography, Box } from "@mui/material/";
import Resume from "./resume";

export default function Intro() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}>
      <Box sx={{ width: "60%", textAlign: "start" }}>
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Hey, je m'appelle
        </Typography>
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
