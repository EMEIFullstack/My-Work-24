import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Avatar,
  styled,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/* =====================================================
   NAVIGATION MENU
===================================================== */

const menu = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "News", path: "" },
  { name: "Contact Us", path: "/contactus" },
  { name: "FAQ", path: "/" },
];

/* =====================================================
   HEADER STYLES
===================================================== */

const HeaderWrapper = styled(Box)`
  position: relative;
  width: 100%;
  z-index: 100;

  .greenBlurEffect {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .greenBlurEffect::before {
    content: "";
    position: absolute;
    top: -90px;
    left: -90px;
    width: 270px;
    height: 270px;
    background: radial-gradient(
      circle,
      rgba(77, 238, 134, 0.26) 0%,
      rgba(43, 153, 81, 0.39) 35%,
      rgba(32, 198, 90, 0.116) 55%,
      transparent 75%
    );
    filter: blur(18px);
    border-radius: 50%;
  }

  .header {
    background: transparent !important;
    box-shadow: none !important;
    padding-bottom: 20px !important;
    padding-top: 20px !important;
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;

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

  .logoImg {
    display: block;
    object-fit: contain;
  }

  .navMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 8px;
    font-family: "Inter";
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
    text-decoration: none !important;

    &:hover {
      color: #20c65a !important;
      background: transparent !important;
    }
  }

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
  }

  .language:hover,
  .login:hover {
    background: #20c65a !important;
    border-color: #20c65a !important;
    color: #fff !important;
  }

  .profileAvatar {
    cursor: pointer;
    width: 42px;
    height: 42px;
    border: 2px solid #20c65a;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .menuButton {
    display: none !important;
    color: #061418 !important;
  }

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
  const [anchorEl, setAnchorEl] = useState(null);
  
  const location = useLocation();

  // Route check: consider logged in if on /profile or if localStorage flag is set
  const isLoggedIn = location.pathname === "/profile" || localStorage.getItem("isLoggedIn") === "true";

  const openLoginMenu = Boolean(anchorEl);

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Box className="greenBlurEffect" />

      <AppBar position="absolute" elevation={0} className="header">
        <Container maxWidth={false} className="headerContainer">
          <Toolbar className="toolbar">

            {/* LOGO */}
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
                  width: { xs: 120, sm: 150 },
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
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
                      sx={{ fontSize: 18, marginLeft: "2px" }}
                    />
                  )}
                </Button>
              ))}
            </Box>

            {/* RIGHT SIDE */}
            <Box className="rightSide">

              {/* LANGUAGE */}
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
                  sx={{ fontSize: 20, marginLeft: "2px" }}
                />
              </Button>

              {/* AUTH CHECK: LOGIN BUTTON OR PROFILE AVATAR */}
              {isLoggedIn ? (
                <Link to="/profile">
                  <Avatar
                    alt="Charlie Dorwart"
                    src="https://i.pravatar.cc/100?img=12"
                    className="profileAvatar"
                  />
                </Link>
              ) : (
                <>
                  <Button onClick={handleLoginClick} className="login">
                    Login / Sign Up
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: 20, marginLeft: "4px" }}
                    />
                  </Button>

                  {/* LOGIN DROPDOWN MENU */}
                  <Menu
                    anchorEl={anchorEl}
                    open={openLoginMenu}
                    onClose={handleLoginClose}
                    disableScrollLock
                    slotProps={{
                      paper: {
                        sx: { marginTop: "8px" },
                      },
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
                </>
              )}

              {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE DRAWER */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          disableScrollLock
          ModalProps={{ keepMounted: true }}
          PaperProps={{ className: "mobileDrawer" }}
        >
          <Box className="drawerHeader">
            <IconButton onClick={handleDrawerToggle} aria-label="close drawer">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menu.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.name} />
                  {item.name === "Our Services" && (
                    <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}

            {/* MOBILE AUTH LINKS */}
            {isLoggedIn ? (
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/profile"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="My Profile" />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
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
              </>
            )}
          </List>
        </Drawer>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;