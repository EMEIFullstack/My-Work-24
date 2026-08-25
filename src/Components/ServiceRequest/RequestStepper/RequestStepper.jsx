import { Box, Paper, Typography, styled } from "@mui/material";

// Adjust relative path according to your folder structure
import reqStartIcon from "../../../assets/icons/request-start.png";
import reqDateIcon from "../../../assets/icons/request-date.png";
import reqContactIcon from "../../../assets/icons/reqquest-contact.png";
import reqSummaryIcon from "../../../assets/icons/request-summery.png";

const StepperWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;

  .requestStepper {
    max-width: 100%;
    width: 840px;
    padding: 16px 0px !important;
    box-sizing: border-box;
    position: relative;
    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;
    background: rgba(255, 255, 255, 0.95) !important;
    box-shadow: none !important;
  }

  /* GREY LINE */
  .stepperLine {
    position: absolute;
    left: 12.5%;
    right: 12.5%;
    top: 38px;
    height: 2px;
    background: #e0eee6;
    border-radius: 2px;
    z-index: 1;
  }

  /* GREEN PROGRESS LINE */
  .stepperProgress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #00c967;
    border-radius: 2px;
    transition: width 0.4s ease;
    z-index: 2;
  }

  /* STEP ITEMS */
  .stepperItems {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: flex-start;
  }

  .stepItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }

  /* ICON CONTAINER */
  .stepIcon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #eaf5ee;
    transition: all 0.3s ease;

    img {
      width: 22px;
      height: 22px;
      object-fit: contain;
      /* Forces icon to remain black in default state */
      filter: brightness(0);
      transition: filter 0.3s ease;
    }

    &:hover img {
      filter: brightness(0);
    }
  }

  /* Active & Completed Container Backgrounds */
  .stepIcon.active,
  .stepIcon.completed {
    background: #00c967;

    /* Forces icon to remain black when active, completed, or hovered */
    img,
    &:hover img {
      filter: brightness(0);
    }
  }

  /* LABEL */
  .stepLabel {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #64757a;
  }

  .stepLabel.active {
    color: #111111;
    font-weight: 700 !important;
  }

  .stepLabel.completed {
    color: #222222;
    font-weight: 600 !important;
  }
`;

const RequestStepper = ({ currentStage = "start", currentStep = 1 }) => {
  let progress = 0;

  if (currentStage === "start") {
    const stepProgress = [0, 9, 14, 20, 24, 28, 33.3333];
    progress = stepProgress[currentStep - 1] || 0;
  } else if (currentStage === "date") {
    progress = 33.3333;
  } else if (currentStage === "contact") {
    progress = 66.6666;
  } else if (currentStage === "summary" || currentStage === "completed") {
    progress = 100;
  }

  let activeStage = 0;
  if (currentStage === "start") {
    activeStage = 0;
  } else if (currentStage === "date") {
    activeStage = 1;
  } else if (currentStage === "contact") {
    activeStage = 2;
  } else {
    activeStage = 3;
  }

  const stages = [
    { label: "Start Request", icon: reqStartIcon },
    { label: "Date/Location", icon: reqDateIcon },
    { label: "Contact", icon: reqContactIcon },
    { label: "Summary", icon: reqSummaryIcon },
  ];

  return (
    <StepperWrapper>
      <Paper elevation={0} className="requestStepper">
        <Box className="stepperLine">
          <Box
            className="stepperProgress"
            sx={{
              width: `${progress}%`,
            }}
          />
        </Box>

        <Box className="stepperItems">
          {stages.map((stage, index) => {
            const isActive = index === activeStage;
            const isCompleted = index < activeStage;

            return (
              <Box key={stage.label} className="stepItem">
                <Box
                  className={`
                    stepIcon
                    ${isActive ? "active" : ""}
                    ${isCompleted ? "completed" : ""}
                  `}
                >
                  <img src={stage.icon} alt={stage.label} />
                </Box>

                <Typography
                  className={`
                    stepLabel
                    ${isActive ? "active" : ""}
                    ${isCompleted ? "completed" : ""}
                  `}
                >
                  {stage.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </StepperWrapper>
  );
};

export default RequestStepper;