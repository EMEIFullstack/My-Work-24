import React, { useState } from "react";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import CompanyInfo from "./CompanyInfo";
import AddLocation from "./AddLocation";


const Signup = () => {

  // =====================================================
  // CURRENT STEP
  // =====================================================

  const [step, setStep] = useState(1);


  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({

    // STEP 1 - COMPANY INFO
    companyName: "",
    email: "",
    contactNumber: "",
    employees: "",
    services: "",
    vatNumber: "",
    description: "",
    profilePicture: "",
    registrationDocument: "",
    password: "",
    confirmPassword: "",
    terms: false,

    // STEP 2 - LOCATION
    location: "",

  });


  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {

    const {
      name,
      value,
      checked,
      type,
    } = event.target;

    setFormData((previousData) => ({
      ...previousData,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

  };


  // =====================================================
  // NEXT BUTTON
  // =====================================================

  const handleNext = () => {

    if (step < 4) {

      setStep((previousStep) => previousStep + 1);

    }

  };


  // =====================================================
  // BACK BUTTON
  // =====================================================

  const handleBack = () => {

    if (step > 1) {

      setStep((previousStep) => previousStep - 1);

    }

  };


  // =====================================================
  // STEP ITEM STYLE
  // =====================================================

  const getStepItem = (currentStep) => ({

    width: "25%",

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "flex-start",

    cursor: "pointer",

    position: "relative",

    zIndex: 2,

    "&:not(:last-child)::after": {

      content: '""',

      position: "absolute",

      top: "12px",

      left: "50%",

      width: "100%",

      height: "1px",

      backgroundColor:
        step > currentStep
          ? "#00CD64"
          : "#DCEAE5",

      zIndex: 0,

    },

  });


  // =====================================================
  // STEP CONTENT
  // =====================================================

  const renderStep = () => {

    switch (step) {

      // =================================================
      // STEP 1 - COMPANY INFO
      // =================================================

      case 1:

        return (
          <CompanyInfo
            formData={formData}
            handleChange={handleChange}
          />
        );


      // =================================================
      // STEP 2 - ADD LOCATION
      // =================================================

      case 2:

        return (
          <AddLocation
            formData={formData}
            handleChange={handleChange}
            onBack={handleBack}
            onNext={handleNext}
          />
        );


      // =================================================
      // STEP 3 - ADD WORK
      // =================================================

      case 3:

        return (
          <Box sx={placeholderWrapper}>

            <Typography sx={placeholderText}>
              Add Work page will be added here
            </Typography>

          </Box>
        );


      // =================================================
      // STEP 4 - ADD REVIEW
      // =================================================

      case 4:

        return (
          <Box sx={placeholderWrapper}>

            <Typography sx={placeholderText}>
              Add Review page will be added here
            </Typography>

          </Box>
        );


      default:

        return null;

    }

  };


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <Box sx={pageWrapper}>

      {/* =================================================
          MAIN SIGNUP CARD
      ================================================= */}

      <Box sx={signupCard}>


        {/* =================================================
            SIGN UP HEADING
        ================================================= */}

        <Typography sx={signupTitle}>

          Sign <span>Up</span>

        </Typography>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <Typography sx={signupDescription}>

          It is a long established fact that a reader will be

        </Typography>


        {/* =================================================
            STEP INDICATOR
        ================================================= */}

        <Box sx={stepWrapper}>


          {/* =================================================
              STEP 1
          ================================================= */}

          <Box
            sx={getStepItem(1)}
            onClick={() => setStep(1)}
          >

            <Box
              sx={
                step >= 1
                  ? activeStepCircle
                  : stepCircle
              }
            >
              1
            </Box>

            <Typography
              sx={
                step >= 1
                  ? activeStepLabel
                  : stepLabel
              }
            >
              Company Info
            </Typography>

          </Box>


          {/* =================================================
              STEP 2
          ================================================= */}

          <Box
            sx={getStepItem(2)}
            onClick={() => setStep(2)}
          >

            <Box
              sx={
                step >= 2
                  ? activeStepCircle
                  : stepCircle
              }
            >
              2
            </Box>

            <Typography
              sx={
                step >= 2
                  ? activeStepLabel
                  : stepLabel
              }
            >
              Add Location
            </Typography>

          </Box>


          {/* =================================================
              STEP 3
          ================================================= */}

          <Box
            sx={getStepItem(3)}
            onClick={() => setStep(3)}
          >

            <Box
              sx={
                step >= 3
                  ? activeStepCircle
                  : stepCircle
              }
            >
              3
            </Box>

            <Typography
              sx={
                step >= 3
                  ? activeStepLabel
                  : stepLabel
              }
            >
              Add Work
            </Typography>

          </Box>


          {/* =================================================
              STEP 4
          ================================================= */}

          <Box
            sx={getStepItem(4)}
            onClick={() => setStep(4)}
          >

            <Box
              sx={
                step >= 4
                  ? activeStepCircle
                  : stepCircle
              }
            >
              4
            </Box>

            <Typography
              sx={
                step >= 4
                  ? activeStepLabel
                  : stepLabel
              }
            >
              Add Review
            </Typography>

          </Box>

        </Box>


        {/* =================================================
            STEP CONTENT
        ================================================= */}

        <Box sx={formWrapper}>

          {renderStep()}

        </Box>


        {/* =================================================
            STEP 1 BOTTOM SECTION ONLY
        ================================================= */}

        {step === 1 && (

          <Box sx={bottomSection}>

            {/* LOGIN */}

            <Typography sx={loginText}>

              Already Have An Account?{" "}

              <Box
                component="span"
                sx={loginLink}
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Login
              </Box>

            </Typography>


            {/* NEXT */}

            <Box sx={buttonGroup}>

              <Button
                type="button"
                onClick={handleNext}
                sx={nextButton}
              >
                Next
              </Button>

            </Box>

          </Box>

        )}


      </Box>

    </Box>

  );

};


export default Signup;


// =========================================================
// PAGE WRAPPER
// =========================================================

const pageWrapper = {

  width: "100%",
paddingTop: "130px",
  display: "flex",

  justifyContent: "center",

  alignItems: "flex-start",

 

  paddingBottom: "141px",

  boxSizing: "border-box",

  backgroundColor: "#FFFFFF",

  "@media (max-width: 700px)": {

    padding: "20px 12px 141px",

  },

};


// =========================================================
// SIGNUP CARD
// =========================================================

const signupCard = {
  width: "100%",
  maxWidth: "678px",
  boxSizing: "border-box",

  padding: "40px 50px 25px",

  border: "1px solid #B8C3C0",
  borderRadius: "20px",

  backgroundColor: "#FFFFFF",

  height: "auto",
  minHeight: "0",


  "@media (max-width: 700px)": {

    width: "100%",

    minHeight: "auto",

    padding: "28px 20px 20px",

  },

};


// =========================================================
// SIGN UP TITLE
// =========================================================

const signupTitle = {

  width: "100%",

  height: "60px",

  margin: 0,

  fontFamily: "'Montserrat', sans-serif",

  fontStyle: "normal",

  fontWeight: 800,

  fontSize: "49px",

  lineHeight: "60px",

  textAlign: "center",

  letterSpacing: "-0.02em",

  color: "#061418",

  "& span": {

    color: "#00CD64",

  },

  "@media (max-width: 600px)": {

    fontSize: "38px",

    lineHeight: "46px",

    height: "46px",

  },

};


// =========================================================
// DESCRIPTION
// =========================================================

const signupDescription = {

  width: "530px",

  maxWidth: "100%",

  height: "29px",

  margin: "4px auto 27px",

  fontFamily: "'Inter', sans-serif",

  fontStyle: "normal",

  fontWeight: 400,

  fontSize: "18px",

  lineHeight: "29px",

  textAlign: "center",

  color: "#64757A",

  "@media (max-width: 600px)": {

    width: "100%",

    height: "auto",

    fontSize: "14px",

    lineHeight: "22px",

  },

};


// =========================================================
// STEP WRAPPER
// =========================================================

const stepWrapper = {

  width: "100%",

  display: "flex",

  alignItems: "flex-start",

  marginBottom: "33px",

  position: "relative",

};


// =========================================================
// NORMAL STEP CIRCLE
// =========================================================

const stepCircle = {

  width: "25px",

  height: "25px",

  borderRadius: "50%",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  fontFamily: "'Inter', sans-serif",

  fontSize: "12px",

  fontWeight: 500,

  backgroundColor: "#E8F2EE",

  color: "#81908B",

  position: "relative",

  zIndex: 2,

};


// =========================================================
// ACTIVE STEP CIRCLE
// =========================================================

const activeStepCircle = {

  ...stepCircle,

  backgroundColor: "#00CD64",

  color: "#FFFFFF",

};


// =========================================================
// NORMAL STEP LABEL
// =========================================================

const stepLabel = {

  marginTop: "5px",

  fontFamily: "'Inter', sans-serif",

  fontStyle: "normal",

  fontWeight: 400,

  fontSize: "16px",

  lineHeight: "24px",

  textAlign: "center",

  color: "#929A97",

  whiteSpace: "nowrap",

  position: "relative",

  zIndex: 2,

  "@media (max-width: 600px)": {

    fontSize: "11px",

    lineHeight: "16px",

  },

};


// =========================================================
// ACTIVE STEP LABEL
// =========================================================

const activeStepLabel = {

  ...stepLabel,

  color: "#00CD64",

};


// =========================================================
// FORM WRAPPER
// =========================================================

const formWrapper = {

  width: "100%",

};


// =========================================================
// TEMPORARY STEP PAGE
// =========================================================

const placeholderWrapper = {

  width: "100%",

  minHeight: "400px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

};


const placeholderText = {

  fontFamily: "'Inter', sans-serif",

  fontSize: "18px",

  color: "#64757A",

};


// =========================================================
// BOTTOM SECTION
// ONLY USED FOR STEP 1
// =========================================================

const bottomSection = {

  width: "100%",

  display: "flex",

  alignItems: "center",

  justifyContent: "space-between",

  borderTop: "1px solid #E7ECEA",

  paddingTop: "14px",

  marginTop: "20px",

  boxSizing: "border-box",

  "@media (max-width: 600px)": {

    flexDirection: "column",

    alignItems: "stretch",

    gap: "15px",

  },

};


// =========================================================
// LOGIN TEXT
// =========================================================

const loginText = {

  margin: 0,

  fontFamily: "'Inter', sans-serif",

  fontStyle: "normal",

  fontWeight: 400,

  fontSize: "14px",

  lineHeight: "24px",

  color: "#64757A",

  whiteSpace: "nowrap",

};


// =========================================================
// LOGIN LINK
// =========================================================

const loginLink = {

  color: "#00CD64",

  fontWeight: 500,

  cursor: "pointer",

  "&:hover": {

    textDecoration: "underline",

  },

};


// =========================================================
// BUTTON GROUP
// =========================================================

const buttonGroup = {

  display: "flex",

  alignItems: "center",

  gap: "10px",

};


// =========================================================
// NEXT BUTTON
// =========================================================

const nextButton = {

  width: "104px",

  height: "36px",

  borderRadius: "20px",

  backgroundColor: "#00CD64",

  color: "#FFFFFF",

  fontFamily: "'Inter', sans-serif",

  fontSize: "14px",

  fontWeight: 500,

  lineHeight: "24px",

  textTransform: "none",

  boxShadow: "none",

  "&:hover": {

    backgroundColor: "#00B958",

    boxShadow: "none",

  },

};


// =========================================================
// BACK BUTTON
// =========================================================
const backButton = {
  width: "90px",
  height: "32px",
  border: "1px solid #A5B0AD",
  borderRadius: "18px",
  backgroundColor: "#FFFFFF",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 0,
  boxSizing: "border-box",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#FFFFFF",
    borderColor: "#A5B0AD",
    boxShadow: "none",
  },
};
const backButtonText = {
  width: "38px",
  height: "19px",

  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",

  textAlign: "center",
  color: "#00CD64",

  textTransform: "none",
  padding: 0,
  margin: 0,
};