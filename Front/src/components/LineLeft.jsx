import { Stack, Box } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useEffect } from "react";

export default function LineLeft() {
  const slide3 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.0,
        delay: 3.5,
      }
    );
  };
  useEffect(() => {
    slide3(".line3");
  }, []);

  const Icon1 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.0,
        delay: 4.5,
      }
    );
  };
  useEffect(() => {
    Icon1(".icon1");
  }, []);

  const Icon2 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.0,
        delay: 4.8,
      }
    );
  };
  useEffect(() => {
    Icon2(".icon2");
  }, []);

  return (
    <Box sx={{ position: "fixed", top: "75%" }}>
      <Stack>
        <Box
          className="icon1"
          sx={{ position: "fixed", top: "70%", left: "0.5%" }}
        >
          <Link href="https://github.com/nowaklouis">
            <GitHubIcon color="info" />
          </Link>
        </Box>
        <Box
          className="icon2"
          sx={{ position: "fixed", top: "65%", left: "0.5%" }}
        >
          <Link href="https://www.linkedin.com/in/louis-nowak/">
            <LinkedInIcon color="info" />
          </Link>
        </Box>
        <div className="line3">
          <img
            src="/line.png"
            alt="logo"
            style={{
              clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)",
            }}
          />
        </div>
      </Stack>
    </Box>
  );
}
