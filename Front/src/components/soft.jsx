import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Soft() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked name="Communication" />}
              label="Communication"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Autonomie" />}
              label="Autonomie"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Flexibilité" />}
              label="Flexibilité"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Respect" />}
              label="Respect"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Organisé" />}
              label="Organisé"
              sx={{ color: "primary.light" }}
            />
          </FormGroup>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked name="Collaboration" />}
              label="Collaboration"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Auto-Formation" />}
              label="Formation"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Adaptabilité" />}
              label="Adaptabilité"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Ecoute" />}
              label="Ecoute"
              sx={{ color: "primary.light" }}
            />
            <FormControlLabel
              control={<Checkbox checked name="Persévérant" />}
              label="Persévérant"
              sx={{ color: "primary.light" }}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}
