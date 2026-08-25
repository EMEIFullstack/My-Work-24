// Step1.jsx
import { Box, Container, Paper, styled, Typography } from "@mui/material";

import stepIcon1 from "../../../assets/icons/step-icon1.png";
import stepIcon2 from "../../../assets/icons/step-icon2.png";
import stepIcon3 from "../../../assets/icons/step-icon3.png";
import stepIcon4 from "../../../assets/icons/step-icon4.png";

import OptionCard from "../OptionCard/OptionCard";

const Step1Wrapper = styled(Box)`
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

const Step1 = ({ value, onChange }) => {
  const options = [
    {
      id: "floor-tiles",
      label: "Floor Tiles",
      icon: <img src={stepIcon1} alt="Floor Tiles" width="40" height="40" />,
    },
    {
      id: "carpet-pvc-linoleum",
      label: "Carpet, PVC & Linoleum",
      icon: <img src={stepIcon2} alt="Carpet PVC Linoleum" width="40" height="40" />,
    },
    {
      id: "parquet-laminate",
      label: "Parquet & Laminate",
      icon: <img src={stepIcon3} alt="Parquet & Laminate" width="40" height="40" />,
    },
    {
      id: "other",
      label: "Other Floor Covering Work",
      icon: <img src={stepIcon4} alt="Other" width="40" height="40" />,
    },
  ];

  return (
    <Container>
      <Step1Wrapper>
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
      </Step1Wrapper>
    </Container>
  );
};

export default Step1;