import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function PageHeader({ title, isMobile, onAddProject }) {
  return (
    <Box className="page-header">
      <Box>
        <Typography component="h1" className="page-title">{title}</Typography>
        {isMobile && title === "My Job/Project" && (
          <Typography className="mobile-subtitle">Manage your project details</Typography>
        )}
      </Box>
      {title === "My Job/Project" && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add className="add-project-icon" />}
          className="add-project-button"
          onClick={onAddProject}
        >
          Add Project
        </Button>
      )}
    </Box>
  );
}