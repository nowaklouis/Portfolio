import { Stack, Box } from "@mui/material/";

export default function LineRight() {
  return (
    <>
      <Box
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
        sx={{
          position: "fixed",
          top: "0%",
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
    </>
  );
}
