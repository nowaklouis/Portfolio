import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-scroll/modules";
import Button from "@mui/material/Button";

export default function BackHeader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "88%",
        left: "90%",
        display: { xs: "none", md: "block" },
        zIndex: "10",
      }}
    >
      <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>
        <Button>
          <KeyboardArrowUpIcon color="info" sx={{ fontSize: 80 }} />
        </Button>
      </Link>
    </Box>
  );
}
