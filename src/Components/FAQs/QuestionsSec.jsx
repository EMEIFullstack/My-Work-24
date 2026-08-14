import * as React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

export default function QuestionsSec({ title, para }) {
  
  const id = React.useId();

  return (
    <div>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`} className="accordion-summary"
        >
          <Typography variant="h4">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
          <Typography variant="body1" className="para">
            {para}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
