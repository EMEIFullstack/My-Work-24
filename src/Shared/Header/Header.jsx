import { useState } from "react";

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
  styled,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menu = ["Home", "Our Services", "About Us", "News", "Contact Us", "FAQ"];

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
  }

  .headerContainer {
    max-width: 1180px !important;
    margin: 0 auto;
    padding: 0 20px !important;
  }

  .toolbar {
    min-height: 70px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 !important;
  }

  /* ================= LOGO ================= */

  .logo {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    letter-spacing: 0.09em;
    color: #061418;
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

  .navBtn {
    color: #061418 !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    text-transform: none !important;
    white-space: nowrap;
    min-width: auto !important;
    padding: 6px 8px !important;
    border-radius: 8px !important;

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

    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background: #20c65a !important;
      border-color: #20c65a !important;
      color: #fff !important;
    }
  }

  /* ================= LOGIN BUTTON ================= */

  .login {
    min-width: 180px !important;
    justify-content: center;
  }

  /* ================= MOBILE HAMBURGER ================= */

  .menuButton {
    display: none !important;
    color: #061418 !important;
  }

  /* ================= LOGIN DROPDOWN ================= */

  .loginMenu {
    .MuiPaper-root {
      margin-top: 8px;

      min-width: 180px;

      border-radius: 12px;
      border: 1px solid #eeeeee;

      box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);

      transform-origin: top center;
    }

    .MuiMenuItem-root {
      font-family: "Inter";
      font-size: 15px;
      font-weight: 500;

      color: #061418;

      padding: 12px 18px;

      transition:
        background-color 0.2s ease,
        color 0.2s ease;

      &:hover {
        background: #f1fff5;
        color: #20c65a;
      }
    }
  }

  /* ================= TABLET + MOBILE ================= */

  @media (max-width: 1100px) {
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

  /* ================= MOBILE DRAWER ================= */

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

      transition:
        background-color 0.2s ease,
        color 0.2s ease;

      &:hover {
        background: #f1fff5;
      }
    }
  }

  /* ================= 768px ================= */

  @media (max-width: 768px) {
    .header {
      padding-top: 15px !important;
      padding-bottom: 15px !important;

      .headerContainer {
        padding: 0 16px !important;
      }

      .toolbar {
        min-height: 60px !important;
      }

      .language {
        display: none !important;
      }

      .logoImg {
        width: 120px !important;
      }
    }
  }

  /* ================= 480px ================= */

  @media (max-width: 480px) {
    .header {
      .headerContainer {
        padding: 0 12px !important;
      }

      .logoImg {
        width: 105px !important;
      }
    }
  }
`;

const Header = () => {
  /* ================= MOBILE DRAWER STATE ================= */

  const [mobileOpen, setMobileOpen] = useState(false);

  /* ================= LOGIN DROPDOWN STATE ================= */

  const [loginAnchor, setLoginAnchor] = useState(null);

  /* ================= MOBILE DRAWER ================= */

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  /* ================= LOGIN DROPDOWN ================= */

  const handleLoginClick = (event) => {
    setLoginAnchor(event.currentTarget);
  };

  const handleLoginClose = () => {
    setLoginAnchor(null);
  };

  /* ================= LOGIN ================= */

  const handleLogin = () => {
    handleLoginClose();

    // Later you can navigate to:
    // /login
  };

  /* ================= SIGN UP ================= */

  const handleSignUp = () => {
    handleLoginClose();

    // Later you can navigate to:
    // /signup
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

            {/* ================= LOGO ================= */}

            <Link
              href="/"
              underline="none"
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

            {/* ================= DESKTOP NAVIGATION ================= */}

            <Box className="navMenu">
              {menu.map((item, index) => (
                <Button
                  key={index}
                  className="navBtn"
                >
                  {item}

                  {item === "Our Services" && (
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

            {/* ================= RIGHT SIDE ================= */}

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

                <KeyboardArrowDownIcon />
              </Button>

              {/* ================= LOGIN / SIGN UP ================= */}

              <Button
                className="login"
                onClick={handleLoginClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Login / Sign Up
              </Button>

              {/* ================= LOGIN DROPDOWN ================= */}

              <Menu
                className="loginMenu"
                anchorEl={loginAnchor}
                open={Boolean(loginAnchor)}
                onClose={handleLoginClose}

                /*
                 * IMPORTANT:
                 * Prevents the page from shrinking/jumping
                 * when the dropdown opens.
                 */
                disableScrollLock

                /*
                 * Smooth opening/closing animation
                 */
                transitionDuration={200}

                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}

                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                {/* LOGIN */}

                <MenuItem onClick={handleLogin}>
                  Login
                </MenuItem>

                {/* SIGN UP */}

                <MenuItem onClick={handleSignUp}>
                  Sign Up
                </MenuItem>
              </Menu>

              {/* ================= MOBILE MENU BUTTON ================= */}

              <IconButton
                color="inherit"
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

        {/* ================= MOBILE DRAWER ================= */}

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
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* ================= MOBILE NAVIGATION ================= */}

          <List>
            {menu.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
              >
                <ListItemButton
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;