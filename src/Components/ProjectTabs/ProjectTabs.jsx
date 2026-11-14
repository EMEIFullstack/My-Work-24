import { Tabs, Tab } from "@mui/material";
import { DescriptionOutlined, MessageOutlined, SendOutlined } from "@mui/icons-material";

const tabs = [
  { label: "Overview", icon: <DescriptionOutlined /> },
  { label: "Message", icon: <MessageOutlined /> },
  { label: "Proposal", icon: <DescriptionOutlined /> },
  { label: "Invite", icon: <SendOutlined /> }
];

export default function ProjectTabs({ value, onChange, isMobile }) {
  return (
    <Tabs
      value={value}
      onChange={(_, nextValue) => onChange(nextValue)}
      variant={isMobile ? "fullWidth" : "standard"}
      className="project-tabs"
      aria-label="Project sections"
    >
      {tabs.map((tab) => (
        <Tab key={tab.label} icon={tab.icon} iconPosition="start" label={tab.label} />
      ))}
    </Tabs>
  );
}