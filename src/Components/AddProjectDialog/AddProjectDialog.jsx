import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography
} from "@mui/material";
import { Close } from "@mui/icons-material";

export default function AddProjectDialog({ open, onClose, projectName, setProjectName, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box component="form" onSubmit={onSubmit}>
        <DialogTitle className="dialog-title">
          <Box>
            <Typography component="h2">Add a project</Typography>
            <Typography>Give your new project a name to get started.</Typography>
          </Box>
          <IconButton onClick={onClose} aria-label="Close dialog"><Close /></IconButton>
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
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button type="submit" variant="contained">Create project</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}