import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Typing from "../components/typing";

export default function AboutMe() {
  return (
    <Box
      sx={{ paddingTop: "20rem", display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography color="info.main" component="div" variant="h5">
              NOWAK Louis
            </Typography>

            <Typing />
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={{ paddingTop: "1.5rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum
              voluptatum amet asperiores ipsum iusto, ullam placeat magnam
              eligendi aliquid accusantium?
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, p: "10px" }}
          image="/Me.jpg"
          alt="Live from Time"
        />
      </Card>
    </Box>
  );
}
