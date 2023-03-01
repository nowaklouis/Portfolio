import React, { useState } from "react";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Typography, Card, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEffect } from "react";

const InfoProjet = [
  {
    id: 1,
    name: "Game Of Life",
    base: "HTML | CSS | JavaScript",
    date: "09/2022",
    description:
      "Le Jeu de la vie est un plan infini quadrillé, dont chaque case est, soit occupée par une cellule, soit vide. Chaque case possède huit voisines, placées tout autour d’elle, une cellule « naît » lorsque trois de ses huit voisines sont vivantes, et reste en vie aussi longtemps qu'elle possède deux ou trois voisines vivantes ; dans le cas contraire elle meurt (par isolement ou surpopulation).",
    link: `https://github.com/nowaklouis/Game-of-Life`,
    img: "/gameoflife.png",
  },
  {
    id: 2,
    name: "Wild Food Fact",
    base: "React | Mui",
    date: "11/2022",
    description:
      "Une application créer pour s'informer des scores alimentaires de plusieurs produits issues de l'API Open Food Fact. Vous avez la possibilité de scanner, recherché directement via une searchbar pour retrouver les infos produits, Eco-score, Nova-score ou encore d'autres infos complémentaires.  Permet aussi d'enregistrer vos produits sélectionner dans votre bibliothèque de favori.",
    link: `https://github.com/nowaklouis/Wild-Food-Facts`,
    img: "/Wild Food Fact.png",
  },
  {
    id: 3,
    name: "VTC Strasbourg",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "01/2023",
    description:
      "Un site pour un client réel, son besoin? Une interface intuitive, un meilleur SEO, un payement en ligne ainsi qu'un back-office, pour son site de VTC. Nous avons repondu à ça demande en utilisant Next.js pour le style intuitive et le SEO, Express.js pour son back-office, MapBox pour pouvoir créer des trajets de transport et Stripe pour le paiement en ligne.",
    link: `https://github.com/nowaklouis/VTC-Strasbourg`,
    img: "VTC.png",
  },
  {
    id: 4,
    name: "Sherlockation",
    base: "Next.js | TypeScript | SWR | DynamoDB | Mui",
    date: "01/2023",
    description:
      "Une application issue d'un hackatton de 48 heures avec en partenariat amazon(AWS), le but était de réaliser un site de location de véhicules avec leurs outils (DynamoDB ,  SWR pour fetch les données). Nous nous sommes alors scinder en équipes pour réaliser ce projet et avons decider d'utiliser TypeScript et NextAuth pour encore plus de challenge.",
    link: `https://github.com/nowaklouis/Sherlockation`,
    img: "/Sherlockation.png",
  },
  {
    id: 5,
    name: "Wild Wood",
    base: "Next.js | Express.js | Sequelize | MUI",
    date: "05/2023",
    description:
      "Un Projet en cours pour mon passage du titre professionnel de développeur web et web mobile. c'est une application complète front-end / back-end de recherche et vente de plantes.",
    link: `https://github.com/nowaklouis/WildWood`,
    img: "/WildWood.png",
  },
];

export default function Projets() {
  const [projetR, setProjetR] = useState(1);
  const [projetP, setProjetP] = useState(1);

  const handleChange = (a, p) => {
    setProjetR(p);
  };

  // const someChange = (a, p) => {
  //   setProjetP(p);
  // };

  const slideLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
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
    slideLeft(".sect3");
  }, []);

  return (
    <Box
      className="sect3"
      id="Projet"
      sx={{ paddingTop: "60px", zIndex: "10" }}
    >
      <Typography variant="h1" color="info.main" sx={{ textAlign: "center" }}>
        Projet JavaScript
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}
      >
        <Stack spacing={2}>
          {InfoProjet.filter((result) => result.id === projetR).map(
            (projet, id) => (
              <Box key={id} sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    background: "rgba(0, 0, 0, 0.1)",
                    width: { xs: "95%", md: "60%" },
                    display: { md: "flex", sx: "none" },
                  }}
                >
                  <Box>
                    <Typography variant="h2" sx={{ p: "1.5rem" }}>
                      {projet?.name}
                    </Typography>
                    <Typography>{projet?.base}</Typography>
                    <Typography>Créer: {projet?.date}</Typography>
                    <Typography sx={{ paddingTop: "10px" }}>
                      {projet?.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "2rem",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="info"
                        sx={{ width: "20rem" }}
                      >
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
      {/* <Typography
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
      </Box> */}
    </Box>
  );
}
