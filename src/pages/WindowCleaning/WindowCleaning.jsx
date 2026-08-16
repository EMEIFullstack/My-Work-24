import { useState } from "react";

import { Box, Typography, Button, styled, Container } from "@mui/material";

import RequestStepper from "../../Components/ServiceRequest/RequestStepper/RequestStepper";

import Step1 from "../../Components/ServiceRequest/Step1/Step1";
import Step2 from "../../Components/ServiceRequest/Step2/Step2";
import Step3 from "../../Components/ServiceRequest/Step3/Step3";
import Step4 from "../../Components/ServiceRequest/Step4/Step4";
import Step5 from "../../Components/ServiceRequest/Step5/Step5";
import Step6 from "../../Components/ServiceRequest/Step6/Step6";
import Step7 from "../../Components/ServiceRequest/Step7/Step7";
import WaveTitle from "../../Components/ServiceRequest/WaveTitle/WaveTitle";

const WindowCleaningWrapper = styled(Box)`
  .windowCleaningPage {
    position: relative;
    min-height: 100vh;
    padding-top: 85px;
    padding-bottom: 70px;

    background:
      linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
      radial-gradient(
        circle at 0% 0%,
        rgba(176, 239, 205, 0.65) 0%,
        rgba(176, 239, 205, 0.25) 18%,
        transparent 38%
      ),
      radial-gradient(
        circle at 100% 35%,
        rgba(255, 239, 184, 0.45) 0%,
        rgba(255, 239, 184, 0.15) 22%,
        transparent 42%
      ),
      radial-gradient(
        circle at 55% 100%,
        rgba(218, 245, 229, 0.7) 0%,
        transparent 45%
      ),
      #f8faf8;

    background-size:
      72px 72px,
      72px 72px,
      auto,
      auto,
      auto,
      auto;

    overflow: hidden;
  }
  .requestIntro {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800 !important;
    font-size: 42px !important;
    line-height: 51px !important;
    text-align: center;
    letter-spacing: -0.02em;

    color: #061418;

    padding: 70px;
  }

  .requestDescription {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* or 160% */
    text-align: center;

    color: #64757a;
    margin: 35px 0;
  }

  .requestSubtitle {
    /* Start a request now */

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    text-align: center;
    text-transform: capitalize;

    color: #000000;
  }

  .requestContent {
    width: 100%;
    max-width: 1137px;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .requestNavigation {
    width: 100%;
    max-width: 540px;
    margin: 15px auto 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    box-sizing: border-box;
  }

  .backButton,
  .nextButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 32px;
    gap: 10px;

    background: #00cd64;
    border-radius: 63px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;
  }

  .backButton {
    border-color: #aeb7b2 !important;

    background: #eff8f2 !important;

    color: #333 !important;

    &:hover {
      background: #e5f2e9 !important;
    }
  }

  .nextButton {
    background: #00c967 !important;

    box-shadow: none !important;

    &:hover {
      background: #00b45b !important;

      box-shadow: none !important;
    }
  }
`;

const WindowCleaning = () => {
  /*
  =================================================
  WORKFLOW STATE
  =================================================
  */

  const [currentStage, setCurrentStage] = useState("start");

  const [currentStep, setCurrentStep] = useState(1);

  //  FORM DATA

  const [formData, setFormData] = useState({
    floorWork: "",

    floorType: "",

    floorCondition: "",

    measurement: "",

    accuracy: "",

    quantity: "",

    shape: "",

    title: "",

    description: "",

    files: [],
  });

  /*
  =================================================
  UPDATE FORM DATA
  =================================================
  */

  const updateFormData = (data) => {
    setFormData((previous) => ({
      ...previous,
      ...data,
    }));
  };

  /*
  =================================================
  NEXT BUTTON
  =================================================
  */

  const handleNext = () => {
    /*
    ================================================
    START REQUEST
    ================================================
    */

    if (currentStage === "start") {
      /*
        Step 1 → Step 2
        Step 2 → Step 3
        ...
        Step 6 → Step 7
      */

      if (currentStep < 7) {
        setCurrentStep((previous) => previous + 1);

        return;
      }

      /*
        Step 7 → Date/Location
      */

      setCurrentStage("date");

      return;
    }

    // DATE / LOCATION

    if (currentStage === "date") {
      setCurrentStage("contact");

      return;
    }

    // CONTACT

    if (currentStage === "contact") {
      setCurrentStage("summary");

      return;
    }

    // SUMMARY

    if (currentStage === "summary") {
      console.log("Final Request:", formData);

      setCurrentStage("completed");

      return;
    }
  };

  /*
  =================================================
  BACK BUTTON
  =================================================
  */

  const handleBack = () => {
    //  START REQUEST

    if (currentStage === "start") {
      if (currentStep > 1) {
        setCurrentStep((previous) => previous - 1);
      }

      return;
    }

    /*
  DATE → BACK TO STEP 7
*/

    if (currentStage === "date") {
      setCurrentStage("start");

      setCurrentStep(7);

      return;
    }

    /*
    CONTACT → DATE
     */

    if (currentStage === "contact") {
      setCurrentStage("date");

      return;
    }

    /*
    SUMMARY → CONTACT   
    */

    if (currentStage === "summary") {
      setCurrentStage("contact");

      return;
    }
  };

  /*
  =================================================
  RENDER START REQUEST STEPS
  =================================================
  */

  const renderStartStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            value={formData.floorWork}
            onChange={(value) =>
              updateFormData({
                floorWork: value,
              })
            }
          />
        );

      case 2:
        return (
          <Step2
            value={formData.floorType}
            onChange={(value) =>
              updateFormData({
                floorType: value,
              })
            }
          />
        );

      case 3:
        return (
          <Step3
            value={formData.floorCondition}
            onChange={(value) =>
              updateFormData({
                floorCondition: value,
              })
            }
          />
        );

      case 4:
        return (
          <Step4
            measurement={formData.measurement}
            accuracy={formData.accuracy}
            onChange={updateFormData}
          />
        );

      case 5:
        return (
          <Step5
            value={formData.quantity}
            onChange={(value) =>
              updateFormData({
                quantity: value,
              })
            }
          />
        );

      case 6:
        return (
          <Step6
            value={formData.shape}
            onChange={(value) =>
              updateFormData({
                shape: value,
              })
            }
          />
        );

      case 7:
        return (
          <Step7
            title={formData.title}
            description={formData.description}
            files={formData.files}
            onChange={updateFormData}
          />
        );

      default:
        return null;
    }
  };

  /*
  =================================================
  RENDER CURRENT STAGE
  =================================================
  */

  const renderCurrentContent = () => {
    /*
    -----------------------------------------------
    START REQUEST
    -----------------------------------------------
    */

    if (currentStage === "start") {
      return renderStartStep();
    }

    /*
    -----------------------------------------------
    DATE / LOCATION
    -----------------------------------------------
    */

    if (currentStage === "date") {
      return (
        <Box>
          <Typography>Date / Location</Typography>

          {/* 
            Put your Date/Location component here
          */}
        </Box>
      );
    }

    /*
    -----------------------------------------------
    CONTACT
    -----------------------------------------------
    */

    if (currentStage === "contact") {
      return (
        <Box>
          <Typography>Contact</Typography>

          {/*
            Put your Contact component here
          */}
        </Box>
      );
    }

    /*
    -----------------------------------------------
    SUMMARY
    -----------------------------------------------
    */

    if (currentStage === "summary") {
      return (
        <Box>
          <Typography>Summary</Typography>

          {/*
            Put your Summary component here
          */}
        </Box>
      );
    }

    /*
    -----------------------------------------------
    COMPLETED
    -----------------------------------------------
    */

    if (currentStage === "completed") {
      return (
        <Box>
          <Typography>Request Completed</Typography>
        </Box>
      );
    }

    return null;
  };

  /*
  =================================================
  PAGE
  =================================================
  */

  return (
    <WindowCleaningWrapper>
      <Box className="windowCleaningPage">
        {/* =========================================
            HEADING
        ========================================= */}
        <Container>
          <Box className="requestIntro">
            <WaveTitle mainTitle="Window" highlightTitle="Cleaning" />

            <Typography className="requestDescription">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Typography>

            <Typography component="h2" className="requestSubtitle">
              Start A Request Now
            </Typography>
          </Box>

          {/* =========================================
            COMMON STEPPER
        ========================================= */}

          <RequestStepper
            currentStage={currentStage}
            currentStep={currentStep}
          />

          {/* =========================================
            CURRENT CONTENT
        ========================================= */}

          <Box className="requestContent">{renderCurrentContent()}</Box>

          {/* =========================================
            NAVIGATION
        ========================================= */}

          {currentStage !== "completed" && (
            <Box className="requestNavigation">
              {/* BACK */}

              {(currentStep > 1 || currentStage !== "start") && (
                <Button
                  variant="outlined"
                  className="backButton"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}

              {/* NEXT */}

              <Button
                variant="contained"
                className="nextButton"
                onClick={handleNext}
              >
                {currentStage === "summary" ? "Submit" : "Next"}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </WindowCleaningWrapper>
  );
};

export default WindowCleaning;
