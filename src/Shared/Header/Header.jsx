import  { useState } from "react";

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
  styled
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menu = ["Home", "Our Services", "About Us", "News", "Contact Us", "FAQ"];

const HeaderWrapper = styled(Box)`
  .header {
  background: transparent !important;
  box-shadow: none !important;

  // Fluid vertical padding for smaller mobile/tablet screens
  padding-bottom: 20px !important;
  padding-top: 20px !important;

  @media (min-width: 768px) {
    padding-bottom: 40px !important;
    padding-top: 40px !important;
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

  /* Logo */
  .logo {
    /* MyWork24 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    letter-spacing: 0.09em;
    color: #061418;
  }

  /* Navigation */
  .navMenu {
    /* Frame 34 */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    font-family: 'Inter';
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

  /* Right */
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

    &:hover {
      background: #20c65a !important;
      border-color: #20c65a !important;
      color: #fff !important;
    }
  }

  /* Mobile Hamburger Toggle Handle */
  .menuButton {
    display: none !important;
    color: #061418 !important;
  }
}

/* Tablet and Mobile Breakpoint Conversions */
@media (max-width: 1100px) {
  .header {
    .navMenu {
      display: none;
    }

    .toolbar {
      justify-content: space-between;
    }

    // Displays the hamburger button icon on mobile/tablet viewports
    .menuButton {
      display: inline-flex !important;
    }

    // Hides the primary desktop button stream to fit mobile device viewports
    .login {
      display: none !important;
    }
  }
}

/* Mobile Drawer Component Styles */
.mobileDrawer {
  width: 280px;
  padding: 20px;

  .drawerHeader {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .MuiListItemText-primary {
    font-family: 'Inter';
    font-weight: 500;
    color: #061418;
    font-size: 16px;
  }
}
`

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <HeaderWrapper> 
      <AppBar position="absolute" elevation={0} className="header">
      <Container maxWidth={false} className="headerContainer">
        <Toolbar className="toolbar">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <Box className="navMenu">
            {menu.map((item, index) => (
              <Button key={index} className="navBtn">
                {item}
                {item === "Our Services" && (
                  <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                )}
              </Button>
            ))}
          </Box>

          {/* Right Side Buttons */}
          <Box className="rightSide">
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

            <Button className="login">
              Login / Sign Up
            </Button>

            {/* Mobile Hamburger Menu Toggle */}
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

      {/* Responsive Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: "mobileDrawer" }}
      >
        <Box className="drawerHeader">
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menu.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
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