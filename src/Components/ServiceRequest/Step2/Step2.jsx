// Step2.jsx
import { Box, Container, Paper, styled, Typography } from "@mui/material";

import stepIcon5 from "../../../assets/icons/step-icon5.png";
import stepIcon6 from "../../../assets/icons/step-icon6.png";
import stepIcon7 from "../../../assets/icons/step-icon7.png";
import stepIcon8 from "../../../assets/icons/step-icon8.png";

import OptionCard from "../OptionCard/OptionCard";

const Step2Wrapper = styled(Box)`
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

const Step2 = ({ value, onChange }) => {
  const options = [
    {
      id: "carpet",
      label: "Carpet",
      icon: <img src={stepIcon5} alt="Carpet" width="40" height="40" />,
    },
    {
      id: "pvc",
      label: "PVC",
      icon: <img src={stepIcon6} alt="PVC" width="40" height="40" />,
    },
    {
      id: "linoleum",
      label: "Linoleum",
      icon: <img src={stepIcon7} alt="Linoleum" width="40" height="40" />,
    },
    {
      id: "seamless",
      label: "Seamless Covering",
      icon: <img src={stepIcon8} alt="Seamless Covering" width="40" height="40" />,
    },
  ];

  return (
    <Container>
      <Step2Wrapper>
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
      </Step2Wrapper>
    </Container>
  );
};

export default Step2;