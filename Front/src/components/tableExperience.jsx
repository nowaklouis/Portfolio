import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Hard from "./Hard";
import Soft from "./soft";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="Experience"
      sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}
    >
      <Box sx={{ width: "50%" }}>
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
  );
}
