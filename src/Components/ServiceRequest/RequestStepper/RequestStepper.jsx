import { Box, Paper, Typography, styled } from "@mui/material";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const StepperWrapper = styled(Box)`
  width: 100%;

  display: flex;
  justify-content: center;

  .requestStepper {
    max-width: 100%;
    width: 840px;

    padding: 10px 0px !important;

    box-sizing: border-box;

    position: relative;

    border: 1px solid #aeb7b2 !important;

    border-radius: 14px !important;

    background: rgba(255, 255, 255, 0.95) !important;

    box-shadow: none !important;
  }

  /* COMPLETE GREY LINE */

  .stepperLine {
    position: absolute;

    left: 12.5%;
    right: 12.5%;

    top: 33px;

    height: 5px;

    background: #dce7e0;

    border-radius: 10px;

    z-index: 1;
  }

  /*GREEN PROGRESS */

  .stepperProgress {
    position: absolute;

    left: 0;
    top: 0;

    height: 100%;

    background: #00c967;

    border-radius: 10px;

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
  }

     /* ICON */
 
  .stepIcon {
    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #eaf5ee;

    color: #89958e;

    transition: all 0.3s ease;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  .stepIcon.active,
  .stepIcon.completed {
    background: #00c967;

    color: #ffffff;
  }

     /* LABEL */

  .stepLabel {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #64757a;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .stepLabel.active {
    color: #111;

    font-weight: 700 !important;
  }

  .stepLabel.completed {
    color: #222;

    font-weight: 600 !important;
  }
`;

const RequestStepper = ({ currentStage = "start", currentStep = 1 }) => {
  
  /* STEP PROGRESS  */

  let progress = 0;

  if (currentStage === "start") {
    const stepProgress = [
      0, // Step 1
      9, // Step 2
      14, // Step 3
      20, // Step 4
      24, // Step 5
      28, // Step 6
      33.3333, // Step 7
    ];

    progress = stepProgress[currentStep - 1] || 0;
  } else if (currentStage === "date") {
    progress = 33.3333;
  } else if (currentStage === "contact") {
    progress = 66.6666;
  } else if (currentStage === "summary" || currentStage === "completed") {
    progress = 100;
  }

  /* ACTIVE STAGE*/

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

  /*STAGES */

  const stages = [
    {
      label: "Start Request",
      icon: <AssignmentOutlinedIcon />,
    },

    {
      label: "Date/Location",
      icon: <LocationOnOutlinedIcon />,
    },

    {
      label: "Contact",
      icon: <ContactPhoneOutlinedIcon />,
    },

    {
      label: "Summary",
      icon: <DescriptionOutlinedIcon />,
    },
  ];

  return (
    <StepperWrapper>
      <Paper elevation={0} className="requestStepper">
  
        {/* GREY LINE */}

        <Box className="stepperLine">
          {/* GREEN LINE */}

          <Box
            className="stepperProgress"
            sx={{
              width: `${progress}%`,
            }}
          />
        </Box>

            {/* FOUR STAGES */}
      
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
                  {stage.icon}
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
