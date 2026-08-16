import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
  Container,
} from "@mui/material";

const Step4Wrapper = styled(Box)`
  width: 100%;

  .measurementCard {
    width: 100%;
    max-width: 1137px;
    min-height: 400px;
    margin: 0 auto;

    padding: 24px 0px !important;

    box-sizing: border-box;

    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;

    background: rgba(255, 255, 255, 0.85) !important;
  }

  .measurementTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;

    color: #061418;
    margin-top: 60px;
     margin: 40px 0!important;
  }

  .measurementDescription {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* or 160% */
    text-align: center;

    color: #64757a;
    margin-bottom:35px
  }

  .measurementInput {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 5px;

    .unit {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px !important;
      line-height: 29px;
      color: #64757a;

    }

    .MuiTextField-root {
      width: 120px;

      .MuiInputBase-input {
        padding: 7px;

        font-size: 15px;
        
      }

      .MuiInputLabel-root {
        font-size: 15px;
        color:#000;
        font-weight:500;
      }
    }
    margin-bottom: 55px;
  }

  .accuracyTitle {
    margin-top: 18px !important;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22px !important;
    line-height: 29px;

    text-align: center;

    color: #061418;
    margin-bottom:27px;
  }

  .accuracyOptions {
    display: flex;

    justify-content: center;

    gap: 7px;

    margin-top: 10px;
  }

  .accuracyButton {
    /* Frame 1707488756 */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 16px;
    box-sizing: border-box;

    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 60px 78.7px rgba(17, 129, 71, 0.06);
    backdrop-filter: blur(8px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 30px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 23px;

    color: #061418;
  }

  .accuracyButton.selected {
    border-color: #00c967 !important;

    background: #f4fff8 !important;
  }

  .smallRadio {
    width: 14px;
    height: 14px;

    border: 1px solid #888;

    border-radius: 50%;
  }

  .accuracyButton.selected .smallRadio {
    border-color: #00c967;

    background: #00c967;

    box-shadow: inset 0 0 0 2px #fff;
  }
`;

const Step4 = ({ measurement, accuracy, onChange }) => {
  return (
    <Container>
      <Step4Wrapper>
      <Paper elevation={0} className="measurementCard">
        <Typography className="measurementTitle">
          What Flooring Work Needs To Be Done?
        </Typography>

        <Typography className="measurementDescription">
          An inaccurate indication of the area will have a major impact on the
          price offered.
          <br />
          Also take into account the affected wall areas.
        </Typography>

        <Box className="measurementInput">
          <Typography className="unit">m²</Typography>

          <TextField
            label="Enter value"
            type="number"
            size="small"
            value={measurement}
            onChange={(event) =>
              onChange({
                measurement: event.target.value,
              })
            }
          />
        </Box>

        <Typography className="accuracyTitle">
          How Accurate Is The Measurement?
        </Typography>

        <Box className="accuracyOptions">
          <Button
            variant="outlined"
            className={
              accuracy === "exact"
                ? "accuracyButton selected"
                : "accuracyButton"
            }
            onClick={() =>
              onChange({
                accuracy: "exact",
              })
            }
          >
            <Box className="smallRadio" />
            Exactly
          </Button>

          <Button
            variant="outlined"
            className={
              accuracy === "approximate"
                ? "accuracyButton selected"
                : "accuracyButton"
            }
            onClick={() =>
              onChange({
                accuracy: "approximate",
              })
            }
          >
            <Box className="smallRadio" />
            Approximately
          </Button>
        </Box>
      </Paper>
    </Step4Wrapper>
    </Container>
  );
};

export default Step4;
