import {
  AccountCircleOutlined,
  FolderOutlined,
  NotificationsNoneOutlined,
  LogoutOutlined,
  Close
} from "@mui/icons-material";
import {
  Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography
} from "@mui/material";

const navItems = [
  { label: "My Profile", icon: <AccountCircleOutlined /> },
  { label: "My Job/Project", icon: <FolderOutlined /> },
  { label: "Notifications", icon: <NotificationsNoneOutlined /> }
];

function SidebarContent({ activeNav, onNavigate, onSignOut }) {
  return (
    <Box className="sidebar-inner">
      <List className="navigation-list" disablePadding>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={activeNav === item.label}
            onClick={() => onNavigate(item.label)}
            className="navigation-item"
          >
            <ListItemIcon className="navigation-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <ListItemButton className="signout-item" onClick={onSignOut}>
        <ListItemIcon className="navigation-icon"><LogoutOutlined /></ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItemButton>
    </Box>
  );
}

export default function Sidebar({ activeNav, onNavigate, onSignOut, mobileOpen, onMobileClose, isMobile }) {
  const handleNavigate = (label) => {
    onNavigate(label);
    onMobileClose();
  };

  if (isMobile) {
    return (
      <Drawer open={mobileOpen} onClose={onMobileClose} PaperProps={{ className: "mobile-drawer" }}>
        <Box className="drawer-close">
          <Typography fontWeight={700}>Menu</Typography>
          <IconButton onClick={onMobileClose} aria-label="Close navigation"><Close /></IconButton>
        </Box>
        <SidebarContent
          activeNav={activeNav}
          onNavigate={handleNavigate}
          onSignOut={onSignOut}
        />
      </Drawer>
    );
  }

  return (
    <Box component="aside" className="desktop-sidebar">
      <SidebarContent activeNav={activeNav} onNavigate={onNavigate} onSignOut={onSignOut} />
    </Box>
  );
}