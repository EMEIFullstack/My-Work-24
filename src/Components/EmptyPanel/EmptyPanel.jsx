import { Avatar, Button, Stack, Typography } from "@mui/material";

export default function EmptyPanel({ icon, title, text, button, onClick }) {
  return (
    <Stack className="empty-panel" alignItems="center" justifyContent="center">
      <Avatar className="empty-avatar">{icon}</Avatar>
      <Typography className="empty-title">{title}</Typography>
      <Typography className="empty-description">{text}</Typography>
      {button && <Button variant="outlined" onClick={onClick} className="empty-action">{button}</Button>}
    </Stack>
  );
}