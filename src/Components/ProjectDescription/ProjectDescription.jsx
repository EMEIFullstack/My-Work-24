import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Add, ExpandMore } from "@mui/icons-material";

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

export default function ProjectDescription({ expanded, onToggle }) {
  return (
    <Accordion
      expanded={expanded}
      onChange={(_, value) => onToggle(value)}
      className="detail-accordion description-accordion"
    >
      <AccordionSummary expandIcon={expanded ? <ExpandMore /> : <Add />} className="accordion-summary">
        <Typography>Project Description</Typography>
      </AccordionSummary>
      <AccordionDetails className="question-details">
        {questions.map(([question, answer]) => (
          <div className="question-item" key={question}>
            <Typography component="h3">{question}</Typography>
            <Typography>{answer}</Typography>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}