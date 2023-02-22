import React, { useState } from "react";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Typography, Card, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const InfoProjet = [
  {
    id: 1,
    name: "Game Of Life",
    base: "HTML | CSS | JavaScript",
    date: "09/2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum voluptatum amet asperiores ipsum iusto, ullam placeat magnam eligendi aliquid accusantium",
    link: `https://github.com/nowaklouis/Game-of-Life`,
    Team: "True",
    img: "/gameoflife.png",
  },
  {
    id: 2,
    name: "Wild Food Fact",
    base: "React | Mui",
    date: "11/2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum voluptatum amet asperiores ipsum iusto, ullam placeat magnam eligendi aliquid accusantium",
    link: `https://github.com/nowaklouis/Wild-Food-Facts`,
    Team: "True",
    img: "/Wild Food Fact.png",
  },
  {
    id: 3,
    name: "VTC Strasbourg",
    base: "HTML | CSS | JavaScript",
    date: "09/2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum voluptatum amet asperiores ipsum iusto, ullam placeat magnam eligendi aliquid accusantium",
    link: `https://github.com/nowaklouis/Game-of-Life`,
    Team: "True",
    img: "VTC.png",
  },
  {
    id: 4,
    name: "Wild Wood",
    base: "React | Mui",
    date: "11/2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis veritatis nemo obcaecati excepturi rem nulla nisi a earum voluptatum amet asperiores ipsum iusto, ullam placeat magnam eligendi aliquid accusantium",
    link: `https://github.com/nowaklouis/Wild-Food-Facts`,
    Team: "false",
    img: "/WildWood.png",
  },
];

export default function Projets() {
  const [projetR, setProjetR] = useState(1);
  const [projetP, setProjetP] = useState(1);

  const handleChange = (a, p) => {
    setProjetR(p);
  };

  const someChange = (a, p) => {
    setProjetP(p);
  };

  return (
    <Box id="Projet">
      <Typography variant="h1" color="info.main" sx={{ textAlign: "center" }}>
        Projet JavaScript
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}
      >
        <Stack spacing={2}>
          {InfoProjet.filter((result) => result.id === projetR).map(
            (projet) => (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    background: "rgba(0, 0, 0, 0.1)",
                    width: "60%",
                    display: { md: "flex", sx: "none" },
                  }}
                >
                  <Box>
                    <Typography variant="h2" sx={{ p: "1.5rem" }}>
                      {projet?.name}
                    </Typography>
                    <Typography>{projet?.base}</Typography>
                    <Typography>Créer: {projet?.date}</Typography>
                    <Typography>{projet?.description}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        paddingTop: "2rem",
                      }}
                    >
                      <Button variant="contained" color="info">
                        <Link href={projet?.link}> Un Apercu ?</Link>
                      </Button>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 300, p: "10px" }}
                    image={projet?.img}
                    alt="projets"
                  />
                </Card>
              </Box>
            )
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={5}
              shape="rounded"
              color="info"
              onChange={handleChange}
            />
          </Box>
        </Stack>
      </Box>
      <Typography
        variant="h1"
        color="info.main"
        sx={{ textAlign: "center", paddingTop: "5rem" }}
      >
        Projet PHP
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}
      >
        <Stack spacing={2}>
          <Typography>A Venir..</Typography>
          <Pagination
            count={5}
            shape="rounded"
            color="info"
            onChange={someChange}
          />
        </Stack>
      </Box>
    </Box>
  );
}
