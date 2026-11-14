import { useState } from "react";
import {
  Accordion, AccordionDetails, AccordionSummary, Alert, AppBar, Avatar,
  Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle,
  Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon,
  ListItemText, Snackbar, Stack, Tab, Tabs, TextField, Toolbar, Typography,
  useMediaQuery, useTheme, Menu, MenuItem, Paper
} from "@mui/material";

import {
  AccountCircleOutlined,
  FolderOutlined,
  NotificationsNoneOutlined,
  LogoutOutlined,
  Add,
  MoreVert,
  ExpandMore,
  Close,
  Menu as MenuIcon,
  MessageOutlined,
  DescriptionOutlined,
  SendOutlined,
  CheckCircle,
  Home
} from "@mui/icons-material";

import './Dashboard.scss';

// const drawerWidth = 140;

const questions = [
  ["What cleaning work needs to be done?", "Window"],
  ["How many floors are the rooms in the apartment or house spread over?", "1"],
  ["How big are the rooms?", "2"],
  ["How big is the area in total?", "253 m²"],
  ["How many floor-to-ceiling windows do you have?", "1"],
  ["How many balcony doors do you have?", "5"],
  ["Should shutters be cleaned?", "Yes"],
  ["What species are they?", "Shutter"],
  ["What type of order do you want?", "Unique"],
  ["Is material required?", "No"],
  ["Are there any other details you would like to share with the craftsmen?", "Dummy content"]
];

const navItems = [
  { label: "My Profile", icon: <AccountCircleOutlined /> },
  { label: "My Job/Project", icon: <FolderOutlined /> },
  { label: "Notifications", icon: <NotificationsNoneOutlined /> }
];

const tabItems = [
  { label: "Overview", icon: <DescriptionOutlined /> },
  { label: "Message", icon: <MessageOutlined /> },
  { label: "Proposal", icon: <DescriptionOutlined /> },
  { label: "Invite", icon: <SendOutlined /> }
];

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeNav, setActiveNav] = useState("My Job/Project");
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [executionOpen, setExecutionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState(["Lorem Ipsum Is Simply Dummy"]);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [toast, setToast] = useState("");

  const notify = (message) => setToast(message);

  const createProject = (event) => {
    event.preventDefault();
    const name = projectName.trim();
    if (!name) return;
    setProjects((old) => [name, ...old]);
    setProjectName("");
    setAddOpen(false);
    notify("Project added successfully.");
  };

  const drawerContent = (
    <Box className="sidebar-inner">
      <List className="navigation-list" disablePadding>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={activeNav === item.label}
            onClick={() => {
              setActiveNav(item.label);
              setMobileOpen(false);
            }}
            className="navigation-item"
          >
            <ListItemIcon className="navigation-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <ListItemButton className="signout-item" onClick={() => notify("You have been signed out (demo).")}>
        <ListItemIcon className="navigation-icon"><LogoutOutlined /></ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItemButton>
    </Box>
  );

  const sectionAccordion = (title, expanded, setExpanded, children) => (
    <Accordion expanded={expanded} onChange={(_, value) => setExpanded(value)} className="detail-accordion">
      <AccordionSummary expandIcon={expanded ? <ExpandMore /> : <Add />} className="accordion-summary">
        <Typography>{title}</Typography>
      </AccordionSummary>
      {expanded && <AccordionDetails className="accordion-details">{children}</AccordionDetails>}
    </Accordion>
  );

  return (
    <Box className="page-background">
      <Box className="container">
      <Paper elevation={0} className="dashboard-frame">
        {isMobile && (
          <IconButton className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
            <MenuIcon />
          </IconButton>
        )}

        {isMobile ? (
          <Drawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{ className: "mobile-drawer" }}
          >
            <Box className="drawer-close">
              <Typography fontWeight={700}>Menu</Typography>
              <IconButton onClick={() => setMobileOpen(false)}><Close /></IconButton>
            </Box>
            {drawerContent}
          </Drawer>
        ) : (
          <Box component="aside" className="desktop-sidebar">{drawerContent}</Box>
        )}

        <Box component="main" className="main-panel">
          {activeNav === "My Job/Project" ? (
            <>
              <Box className="page-header">
                <Box>
                  <Typography component="h1" className="page-title">My Job/Project</Typography>
                  {isMobile && <Typography className="mobile-subtitle">Manage your project details</Typography>}
                </Box>
                <Button variant="contained" color="primary" startIcon={<Add className="add-project-icon" />} className="add-project-button" onClick={() => setAddOpen(true)}>
                  Add Project
                </Button>
              </Box>

              <Paper elevation={0} className="project-card">
                <Box className="project-heading">
                  <Box className="project-copy">
                    <Typography component="h2" className="project-title">{projects[0]}</Typography>
                    <Typography className="project-description">
                      Standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" spacing={0.5} className="project-actions">
                    <Chip label="Pending" size="small" className="pending-chip" />
                    <IconButton size="small" aria-label="Project options" onClick={(event) => setMenuAnchor(event.currentTarget)}>
                      <MoreVert fontSize="small" />
                    </IconButton>
                    <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
                      <MenuItem onClick={() => { setMenuAnchor(null); notify("Project details are up to date."); }}>View details</MenuItem>
                      <MenuItem onClick={() => { setMenuAnchor(null); setAddOpen(true); }}>Add another project</MenuItem>
                    </Menu>
                  </Stack>
                </Box>

                <Tabs
                  value={activeTab}
                  onChange={(_, value) => setActiveTab(value)}
                  variant={isMobile ? "fullWidth" : "standard"}
                  className="project-tabs"
                  aria-label="Project sections"
                >
                  {tabItems.map((item) => (
                    <Tab key={item.label} icon={item.icon} iconPosition="start" label={item.label} />
                  ))}
                </Tabs>

                <Box className="tab-content">
                  {activeTab === 0 && (
                    <>
                      <Accordion expanded={descriptionOpen} onChange={(_, value) => setDescriptionOpen(value)} className="detail-accordion description-accordion">
                        <AccordionSummary expandIcon={descriptionOpen ? <ExpandMore /> : <Add />} className="accordion-summary">
                          <Typography>Project Description</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="question-details">
                          {questions.map(([question, answer]) => (
                            <Box className="question-item" key={question}>
                              <Typography component="h3">{question}</Typography>
                              <Typography>{answer}</Typography>
                            </Box>
                          ))}
                        </AccordionDetails>
                      </Accordion>

                      {sectionAccordion("Execution", executionOpen, setExecutionOpen, (
                        <Box className="execution-content">
                          <Box className="info-row"><Typography>Project status</Typography><Typography>Pending</Typography></Box>
                          <Box className="info-row"><Typography>Preferred schedule</Typography><Typography>To be confirmed</Typography></Box>
                          <Box className="info-row"><Typography>Work type</Typography><Typography>Window cleaning</Typography></Box>
                        </Box>
                      ))}

                      {sectionAccordion("Contact Details", contactOpen, setContactOpen, (
                        <Box className="execution-content">
                          <Box className="info-row"><Typography>Contact person</Typography><Typography>Not provided</Typography></Box>
                          <Box className="info-row"><Typography>Email</Typography><Typography>Not provided</Typography></Box>
                          <Box className="info-row"><Typography>Phone</Typography><Typography>Not provided</Typography></Box>
                        </Box>
                      ))}
                    </>
                  )}

                  {activeTab === 1 && (
                    <EmptyPanel icon={<MessageOutlined />} title="Project messages" text="Your conversations about this project will appear here." button="Start a conversation" onClick={() => notify("Messaging will be available when a craftsman joins the project.")} />
                  )}
                  {activeTab === 2 && (
                    <EmptyPanel icon={<DescriptionOutlined />} title="Proposals" text="Proposals from craftsmen will appear here when available." />
                  )}
                  {activeTab === 3 && (
                    <EmptyPanel icon={<SendOutlined />} title="Invite a craftsman" text="Invite a professional to review your project and send a proposal." button="Copy invite link" onClick={() => notify("Invite link copied (demo).")} />
                  )}
                </Box>
              </Paper>
            </>
          ) : (
            <>
              <Box className="page-header"><Typography component="h1" className="page-title">{activeNav}</Typography></Box>
              <Paper elevation={0} className="alternate-card">
                <Avatar className="empty-avatar">{activeNav === "My Profile" ? <AccountCircleOutlined /> : <NotificationsNoneOutlined />}</Avatar>
                <Typography className="empty-title">{activeNav}</Typography>
                <Typography className="empty-description">
                  {activeNav === "My Profile"
                    ? "Your profile information and account preferences will appear here."
                    : "You're all caught up. New project notifications will appear here."}
                </Typography>
                <Button variant="outlined" onClick={() => setActiveNav("My Job/Project")}>Back to My Job/Project</Button>
              </Paper>
            </>
          )}
        </Box>
      </Paper>

      <Dialog open={addOpen} onClose={() => setAddOpen(false)} fullWidth maxWidth="xs">
        <Box component="form" onSubmit={createProject}>
          <DialogTitle className="dialog-title">
            <Box>
              <Typography component="h2">Add a project</Typography>
              <Typography>Give your new project a name to get started.</Typography>
            </Box>
            <IconButton onClick={() => setAddOpen(false)} aria-label="Close dialog"><Close /></IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              required
              label="Project name"
              placeholder="Enter project name"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
              size="small"
              margin="dense"
            />
          </DialogContent>
          <DialogActions className="dialog-actions">
            <Button onClick={() => setAddOpen(false)} color="inherit">Cancel</Button>
            <Button type="submit" variant="contained">Create project</Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Snackbar open={Boolean(toast)} autoHideDuration={3000} onClose={() => setToast("")} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={() => setToast("")} severity="success" variant="filled" icon={<CheckCircle />} sx={{ width: "100%" }}>{toast}</Alert>
      </Snackbar>
      </Box>
    </Box>
  );
}

function EmptyPanel({ icon, title, text, button, onClick }) {
  return (
    <Stack className="empty-panel" alignItems="center" justifyContent="center">
      <Avatar className="empty-avatar">{icon}</Avatar>
      <Typography className="empty-title">{title}</Typography>
      <Typography className="empty-description">{text}</Typography>
      {button && <Button variant="outlined" onClick={onClick} className="empty-action">{button}</Button>}
    </Stack>
  );
}

export default Dashboard;