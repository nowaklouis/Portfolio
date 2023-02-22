import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { Link } from "react-scroll/modules";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#013328" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#013328" }}>
        <Toolbar disableGutters sx={{ paddingLeft: "10px" }}>
          <Box
            component="img"
            src="/favicon.png"
            sx={{ width: "5rem", height: "auto", marginRight: "2rem" }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "end",
              color: "#CC8B65",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem sx={{ color: "#CC8B65" }}>
                <Stack>
                  <Link
                    onClick={handleCloseNavMenu}
                    to="Presentation"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Présentation
                  </Link>
                  <Link
                    onClick={handleCloseNavMenu}
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Expérience
                  </Link>
                  <Link
                    onClick={handleCloseNavMenu}
                    to="Projet"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Projet
                  </Link>
                  <Link
                    onClick={handleCloseNavMenu}
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </Stack>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "#CC8B65",
                display: "block",
              }}
            >
              <Link
                to="Presentation"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Présentation
              </Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#CC8B65",
                display: "block",
              }}
            >
              <Link
                to="Experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Expérience
              </Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#CC8B65",
                display: "block",
              }}
            >
              <Link
                to="Projet"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projet
              </Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#CC8B65",
                display: "block",
              }}
            >
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
