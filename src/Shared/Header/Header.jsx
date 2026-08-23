import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/* =====================================================
   NAVIGATION MENU
===================================================== */

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Services",
    path: "/",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
  {
    name: "News",
    path: "",
  },
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "FAQ",
    path: "/",
  },
];

/* =====================================================
   HEADER STYLES
===================================================== */

const HeaderWrapper = styled(Box)`
  .header {
    background: transparent !important;
    box-shadow: none !important;

    padding-bottom: 20px !important;
    padding-top: 20px !important;

    @media (min-width: 768px) {
      padding-bottom: 40px !important;
      padding-top: 30px !important;
    }

    /* ================= CONTAINER ================= */

    .headerContainer {
      max-width: 1180px !important;
      margin: 0 auto;
      padding: 0 20px !important;
    }

    /* ================= TOOLBAR ================= */

    .toolbar {
      min-height: 70px !important;

      display: flex;

      justify-content: space-between;

      align-items: center;

      padding: 0 !important;
    }

    /* ================= LOGO ================= */

    .logoImg {
      display: block;
      object-fit: contain;
    }

    /* ================= NAVIGATION ================= */

    .navMenu {
      display: flex;

      flex-direction: row;

      align-items: center;

      padding: 0;

      gap: 8px;

      font-family: "Inter";

      font-style: normal;

      font-weight: 500;

      font-size: 16px;

      line-height: 19px;

      color: #061418;
    }

    /* ================= NAV BUTTON ================= */

    .navBtn {
      color: #061418 !important;

      font-size: 15px !important;

      font-weight: 500 !important;

      text-transform: none !important;

      white-space: nowrap;

      min-width: auto !important;

      padding: 6px 8px !important;

      border-radius: 8px !important;

      text-decoration: none !important;

      &:hover {
        color: #20c65a !important;

        background: transparent !important;
      }
    }

    /* ================= RIGHT SIDE ================= */

    .rightSide {
      display: flex;

      align-items: center;

      gap: 14px;
    }

    /* ================= LANGUAGE + LOGIN ================= */

    .language,
    .login {
      height: 44px;

      padding: 0 18px !important;

      border: 1px solid #d9d9d9 !important;

      border-radius: 30px !important;

      color: #111 !important;

      font-size: 14px !important;

      font-weight: 500 !important;

      text-transform: none !important;

      white-space: nowrap;
    }

    .language:hover,
    .login:hover {
      background: #20c65a !important;

      border-color: #20c65a !important;

      color: #fff !important;
    }

    /* ================= MOBILE MENU BUTTON ================= */

    .menuButton {
      display: none !important;

      color: #061418 !important;
    }
  }

  /* =====================================================
      TABLET + MOBILE
  ===================================================== */

  @media (max-width: 1100px) {
    .header {
      .navMenu {
        display: none;
      }

      .toolbar {
        justify-content: space-between;
      }

      .menuButton {
        display: inline-flex !important;
      }

      .login {
        display: none !important;
      }
    }
  }

  /* =====================================================
      MOBILE DRAWER
  ===================================================== */

  .mobileDrawer {
    width: 280px;

    padding: 20px;

    .drawerHeader {
      display: flex;

      justify-content: flex-end;

      margin-bottom: 20px;
    }

    .MuiListItemText-primary {
      font-family: "Inter";

      font-weight: 500;

      color: #061418;

      font-size: 16px;
    }

    .MuiListItemButton-root {
      border-radius: 8px;

      margin-bottom: 4px;

      &:hover {
        background: rgba(32, 198, 90, 0.08);
      }
    }
  }
`;

/* =====================================================
   HEADER COMPONENT
===================================================== */

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* LOGIN DROPDOWN STATE */
  const [anchorEl, setAnchorEl] = useState(null);
  const openLoginMenu = Boolean(anchorEl);

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setAnchorEl(null);
  };

  /* ================= DRAWER TOGGLE ================= */

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <AppBar
        position="absolute"
        elevation={0}
        className="header"
      >
        <Container
          maxWidth={false}
          className="headerContainer"
        >
          <Toolbar className="toolbar">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Company Logo"
                className="logoImg"
                sx={{
                  width: {
                    xs: 120,
                    sm: 150,
                  },

                  height: "auto",

                  cursor: "pointer",
                }}
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <Box className="navMenu">
              {menu.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.path}
                  className="navBtn"
                >
                  {item.name}

                  {item.name === "Our Services" && (
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 18,
                        marginLeft: "2px",
                      }}
                    />
                  )}
                </Button>
              ))}
            </Box>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <Box className="rightSide">

              {/* ================= LANGUAGE ================= */}

              <Button className="language">
                English

                <img
                  src="https://flagcdn.com/w40/gb.png"
                  alt="UK Flag"
                  style={{
                    width: 18,
                    height: 12,
                    borderRadius: 2,
                    marginLeft: 6,
                    objectFit: "cover",
                  }}
                />

                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 20,
                    marginLeft: "2px",
                  }}
                />
              </Button>

              {/* ================= LOGIN WITH DROPDOWN ================= */}

              <Button
                onClick={handleLoginClick}
                className="login"
              >
                Login / Sign Up
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 20,
                    marginLeft: "4px",
                  }}
                />
              </Button>

              {/* DROPDOWN MENU */}
              <Menu
                anchorEl={anchorEl}
                open={openLoginMenu}
                onClose={handleLoginClose}
                AnchorProps={{
                  style: { marginTop: "8px" },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/login"
                  onClick={handleLoginClose}
                >
                  Login
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/signup"
                  onClick={handleLoginClose}
                >
                  Sign Up
                </MenuItem>
              </Menu>

              {/* ================= MOBILE MENU ================= */}

              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="menuButton"
              >
                <MenuIcon />
              </IconButton>

            </Box>
          </Toolbar>
        </Container>

        {/* =================================================
            MOBILE DRAWER
        ================================================= */}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            className: "mobileDrawer",
          }}
        >

          {/* ================= CLOSE BUTTON ================= */}

          <Box className="drawerHeader">
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="close drawer"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* ================= MOBILE MENU ================= */}

          <List>
            {menu.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary={item.name}
                  />

                  {item.name === "Our Services" && (
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 20,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
            
            {/* MOBILE DRAWER LOGIN/SIGNUP OPTIONS */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/login"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/signup"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </List>

        </Drawer>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;