import { Stack, Box, Typography } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function LineRight() {
  return (
    <Box sx={{ position: "fixed", top: "75%", right: "1.5%" }}>
      <Stack>
        <Box sx={{ position: "fixed", top: "60%", right: "-4.4%" }}>
          <Typography color="info.main" sx={{ transform: "rotate(90deg)" }}>
            Nowak.Louis@gmail.com
          </Typography>
        </Box>
        <img
          src="/line.png"
          alt="logo"
          style={{
            clipPath: "polygon(99% 0, 100% 0, 100% 100%, 99% 100%)",
          }}
        />
      </Stack>
    </Box>
  );
}
