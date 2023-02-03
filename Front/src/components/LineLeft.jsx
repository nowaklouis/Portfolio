import { Stack, Box } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function LineLeft() {
  return (
    <Box sx={{ position: "fixed", top: "75%" }}>
      <Stack>
        <Box sx={{ position: "fixed", top: "70%", left: "0.5%" }}>
          <Link href="https://github.com/nowaklouis">
            <GitHubIcon color="info" />
          </Link>
        </Box>
        <Box sx={{ position: "fixed", top: "65%", left: "0.5%" }}>
          <Link href="https://www.linkedin.com/in/louis-nowak/">
            <LinkedInIcon color="info" />
          </Link>
        </Box>
        <img
          src="/line.png"
          alt="logo"
          style={{
            clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)",
          }}
        />
      </Stack>
    </Box>
  );
}
