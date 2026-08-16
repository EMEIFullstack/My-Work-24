
import {
  Box,
  Container,
  Paper,
  styled,
  Typography,
} from "@mui/material";

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import OptionCard from "../OptionCard/OptionCard";


const Step3Wrapper = styled(Box)`
width:100%;
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
     margin: 40px 0!important;  
  }

  .optionGrid {
    width: 100%;
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 7px;
  }
`

const Step3 = ({ value, onChange }) => {

  const options = [
    {
      id: "laying-new-floor",
      label: "Laying New Floor",
      icon: <LayersOutlinedIcon />,
    },
    {
      id: "maintaining",
      label: "Maintaining The Soil",
      icon: <BuildOutlinedIcon />,
    },
    {
      id: "repairing",
      label: "Repairing Tiled Flooring",
      icon: <ConstructionOutlinedIcon />,
    },
    {
      id: "other",
      label: "Other",
      icon: <MoreHorizOutlinedIcon />,
    },
  ];

  return (
   <Container>
    <Step3Wrapper>
     <Paper
      elevation={0}
      className="requestCard"
    >

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
   </Step3Wrapper>
   </Container>
  );
};

export default Step3;