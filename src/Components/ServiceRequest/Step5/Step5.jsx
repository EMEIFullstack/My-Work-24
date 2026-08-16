import {
  Paper,
  Typography,
  Box,
  IconButton,
  TextField,
  styled,
  Container,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Step5Wrapper = styled(Box)`
  width: 100%;

  .quantityCard {
   width: 100%;
    max-width: 1137px;
    min-height: 240px;
    margin: 0 auto;

    padding: 24px 26px !important;

    box-sizing: border-box;

    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;

    background: rgba(255, 255, 255, 0.85) !important;
  }

  .quantityTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;
    color: #061418;
     margin: 40px 0!important;

  }

  .quantityControl {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 6px;
  }

  .quantityButton {
    width: 40px !important;
    height: 40px !important;

    border: 1px solid #aeb7b2 !important;

    border-radius: 6px !important;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .quantityInput {
    width: 130px;
    
    .MuiInputBase-input {
      padding: 12px;

      text-align: center;

      font-size: 16px;


       &::placeholder {
      color: #061418 !important;
      opacity: 1 !important;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px !important;
    }
  }
`;

const Step5 = ({ value, onChange }) => {
  const decrease = () => {
    const currentValue = Number(value) || 0;

    if (currentValue > 1) {
      onChange(currentValue - 1);
    }
  };

  const increase = () => {
    const currentValue = Number(value) || 0;
    onChange(currentValue + 1);
  };
  return (
    <Container>
    <Step5Wrapper>
      <Paper elevation={0} className="quantityCard">
        <Typography className="quantityTitle">
          What Flooring Work Needs To Be Done?
        </Typography>

        <Box className="quantityControl">
          <IconButton className="quantityButton" onClick={decrease}>
            <RemoveIcon />
          </IconButton>

          <TextField
            size="small"
            value={value}
            placeholder="Enter number"
            onChange={(event) => {
              const inputValue = event.target.value;

              // Allow empty field
              if (inputValue === "") {
                onChange("");
                return;
              }

              const number = Number(inputValue);

              if (number >= 1) {
                onChange(number);
              }
            }}
            className="quantityInput"
          />

          <IconButton className="quantityButton" onClick={increase}>
            <AddIcon />
          </IconButton>
        </Box>
      </Paper>
    </Step5Wrapper>
    </Container>
  );
};

export default Step5;
