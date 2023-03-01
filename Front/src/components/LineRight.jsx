import { Stack, Box } from "@mui/material/";
import { useEffect } from "react";

export default function LineRight() {
  const slide1 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -400,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
        duration: 2.0,
        delay: 1.5,
      }
    );
  };

  const slide2 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -400,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 2.0,
      }
    );
  };

  useEffect(() => {
    slide1(".line1");
  }, []);

  useEffect(() => {
    slide2(".line2");
  }, []);

  return (
    <>
      <Box
        className="line1"
        sx={{
          position: "fixed",
          top: "45%",
          right: "1.5%",
          height: "90 rem",
          display: { xs: "none", md: "block" },
        }}
      >
        <Stack>
          <img
            src="/line.png"
            alt="logo"
            style={{
              clipPath: "polygon(99% 0, 100% 0, 100% 100%, 99% 100%)",
            }}
          />
        </Stack>
      </Box>
      <Box
        className="line2"
        sx={{
          position: "fixed",
          top: "0%",
          right: "1.5%",
          height: "90 rem",
          display: { xs: "none", md: "block" },
          zIndex: "1",
        }}
      >
        <Stack>
          <img
            src="/line.png"
            alt="logo"
            style={{
              clipPath: "polygon(99% 0, 100% 0, 100% 100%, 99% 100%)",
            }}
          />
        </Stack>
      </Box>
    </>
  );
}
