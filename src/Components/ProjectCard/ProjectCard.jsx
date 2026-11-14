import { useState } from "react";
import {
  Box, Chip, IconButton, Menu, MenuItem, Paper, Stack, Typography
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import ProjectTabs from "./ProjectTabs.jsx";
import ProjectDescription from "./ProjectDescription.jsx";
import ProjectSectionAccordion from "./ProjectSectionAccordion.jsx";
import EmptyPanel from "./EmptyPanel.jsx";
import { DescriptionOutlined, MessageOutlined, SendOutlined } from "@mui/icons-material";

export default function ProjectCard({ projectName, onAddProject, isMobile, notify }) {
  const [activeTab, setActiveTab] = useState(0);
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [executionOpen, setExecutionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <Paper elevation={0} className="project-card">
      <Box className="project-heading">
        <Box className="project-copy">
          <Typography component="h2" className="project-title">{projectName}</Typography>
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
            <MenuItem onClick={() => { setMenuAnchor(null); onAddProject(); }}>Add another project</MenuItem>
          </Menu>
        </Stack>
      </Box>

      <ProjectTabs value={activeTab} onChange={setActiveTab} isMobile={isMobile} />

      <Box className="tab-content">
        {activeTab === 0 && (
          <>
            <ProjectDescription expanded={descriptionOpen} onToggle={setDescriptionOpen} />
            <ProjectSectionAccordion
              title="Execution"
              expanded={executionOpen}
              onToggle={setExecutionOpen}
              rows={[
                ["Project status", "Pending"],
                ["Preferred schedule", "To be confirmed"],
                ["Work type", "Window cleaning"]
              ]}
            />
            <ProjectSectionAccordion
              title="Contact Details"
              expanded={contactOpen}
              onToggle={setContactOpen}
              rows={[
                ["Contact person", "Not provided"],
                ["Email", "Not provided"],
                ["Phone", "Not provided"]
              ]}
            />
          </>
        )}
        {activeTab === 1 && (
          <EmptyPanel
            icon={<MessageOutlined />}
            title="Project messages"
            text="Your conversations about this project will appear here."
            button="Start a conversation"
            onClick={() => notify("Messaging will be available when a craftsman joins the project.")}
          />
        )}
        {activeTab === 2 && (
          <EmptyPanel
            icon={<DescriptionOutlined />}
            title="Proposals"
            text="Proposals from craftsmen will appear here when available."
          />
        )}
        {activeTab === 3 && (
          <EmptyPanel
            icon={<SendOutlined />}
            title="Invite a craftsman"
            text="Invite a professional to review your project and send a proposal."
            button="Copy invite link"
            onClick={() => notify("Invite link copied (demo).")}
          />
        )}
      </Box>
    </Paper>
  );
}