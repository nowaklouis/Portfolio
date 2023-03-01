import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Hard from "./Hard";
import Soft from "./soft";
import { useEffect } from "react";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const slideLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    slideLeft(".sect2");
  }, []);

  return (
    <div className="sect2">
      <Typography
        id="Experience"
        variant="h1"
        color="info.main"
        sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}
      >
        Expérience
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
          zIndex: "10",
        }}
      >
        <Box sx={{ width: { md: "60%", xs: "95%" } }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                centered
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Hard Skills" value="1" />
                <Tab label="Soft Skills" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Hard />
            </TabPanel>
            <TabPanel value="2">
              <Soft />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </div>
  );
}
