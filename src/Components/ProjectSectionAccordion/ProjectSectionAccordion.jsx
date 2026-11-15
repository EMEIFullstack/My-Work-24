import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { Add, ExpandMore } from "@mui/icons-material";

export default function ProjectSectionAccordion({ title, expanded, onToggle, rows }) {
  return (
    <Accordion
      expanded={expanded}
      onChange={(_, value) => onToggle(value)}
      className="detail-accordion"
    >
      <AccordionSummary expandIcon={expanded ? <ExpandMore /> : <Add />} className="accordion-summary">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion-details">
        <Box className="execution-content">
          {rows.map(([label, value]) => (
            <Box className="info-row" key={label}>
              <Typography>{label}</Typography>
              <Typography>{value}</Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}