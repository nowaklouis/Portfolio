import * as React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Hard() {
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
            control={<Checkbox checked name="Html" />}
            label="HTML5"
            sx={{ color: "primary.light" }}
          />
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
