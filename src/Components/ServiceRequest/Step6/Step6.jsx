// Step6.jsx
import { Box, Container, Paper, styled, Typography } from "@mui/material";
import stepIcon13 from "../../../assets/icons/step-icon13.png";
import stepIcon14 from "../../../assets/icons/step-icon14.png";
import stepIcon15 from "../../../assets/icons/step-icon15.png";
import stepIcon16 from "../../../assets/icons/step-icon16.png";

import OptionCard from "../OptionCard/OptionCard";

const Step6Wrapper = styled(Box)`
  width: 100%;
  .requestCard {
    width: 100%;
    max-width: 1137px;
    min-height: 400px;
    margin: 0 auto;
    padding: 24px 26px !important;
    box-sizing: border-box;
    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;
    background: rgba(255, 255, 255, 0.85) !important;
  }

  .requestCardTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #061418;
    margin: 40px 0 !important;
  }

  .optionGrid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
  }
`;

const Step6 = ({ value, onChange }) => {
  const options = [
    {
      id: "rectangular",
      label: "Simply Rectangular",
      icon: <img src={stepIcon13} alt="Simply Rectangular" width="40" height="40" />,
    },
    {
      id: "winding",
      label: "Winding",
      icon: <img src={stepIcon14} alt="Winding" width="40" height="40" />,
    },
    {
      id: "rounding",
      label: "With Rounding",
      icon: <img src={stepIcon15} alt="With Rounding" width="40" height="40" />,
    },
    {
      id: "not-specified",
      label: "Not Specified",
      icon: <img src={stepIcon16} alt="Not Specified" width="40" height="40" />,
    },
  ];

  return (
    <Container>
      <Step6Wrapper>
        <Paper elevation={0} className="requestCard">
          <Typography className="requestCardTitle">
            What Flooring Work Needs To Be Done?
          </Typography>
          <Box className="optionGrid">
            {options.map((option) => (
              <OptionCard
                key={option.id}
                value={option.id}
                selectedValue={value}
                label={option.label}
                icon={option.icon}
                onChange={onChange}
              />
            ))}
          </Box>
        </Paper>
      </Step6Wrapper>
    </Container>
  );
};

export default Step6;