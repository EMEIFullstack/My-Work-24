import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  styled,
} from "@mui/material";

import WaveTitle from "../../Components/common/WaveTitle";

// ================= ASSETS =================

import mailIcon from "../../assets/icons/contact-mail.png";
import phoneIcon from "../../assets/icons/contact-call.png";
import locationIcon from "../../assets/icons/contact-location.png";

// ================= STYLED COMPONENTS =================

const ContactSectionWrapper = styled(Box)`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .contactSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:60px;
  }

  .contactContainer {
    width: 100%;
    max-width: 1200px !important;
    margin: 0 auto;
    padding: 0 20px !important;
  }

  /* ================= HEADING ================= */

  .contactHeading {
    text-align: center;
    margin-bottom: 40px;
  }

  .sectionSubtitle {
    max-width: 520px;
    margin: 10px auto 0 !important;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #64757a;
  }

  /* ================= OUTER CARD ================= */

  .contactOuterCard {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 40px; /* Equalized padding around all sides */
    box-sizing: border-box;
    border-radius: 28px;
    border: 1px solid rgba(200, 215, 205, 0.6);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 253, 245, 0.85) 60%,
      rgba(254, 251, 235, 0.95) 100%
    );

    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);

    position: relative;
    overflow: hidden;
  }

  /* ================= FORM PANEL ================= */

  .formPanel {
    width: 100%;
    background: #ffffff;
    border-radius: 20px;

    padding: 40px 35px;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

    box-sizing: border-box;
  }

  .formTitle {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #111;
    margin-bottom: 25px;
  }

  /* ================= INPUT ================= */

  .customInput {
    margin-bottom: 20px;

    & .MuiInputLabel-root {
      font-size: 13px;
      color: #8c9ba0;
      font-weight: 500;

      transform: none;
      position: relative;

      margin-bottom: 6px;
    }

    & .MuiInputBase-root {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #111;

      &:before {
        border-bottom: 1px solid #e2e8e5;
      }

      &:hover:not(.Mui-disabled):before {
        border-bottom: 1px solid #00cd64;
      }

      &:after {
        border-bottom: 2px solid #00cd64;
      }
    }

    & .MuiInput-input {
      padding: 6px 0 8px 0;
    }
  }

  /* ================= SELECT ================= */

  .customInput .MuiSelect-select {
    padding: 6px 0 8px 0;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #111;
  }

  /* ================= SUBMIT BUTTON ================= */

  .submitBtn {
    background-color: #00cd64;
    color: #fff;

    text-transform: none;

    font-weight: 600;
    font-size: 14px;

    padding: 10px 36px;

    border-radius: 50px;

    margin-top: 15px;

    transition: all 0.3s ease;

    &:hover {
      background-color: #00b356;

      box-shadow: 0 6px 18px rgba(0, 205, 100, 0.3);

      transform: translateY(-1px);
    }
  }

  /* ================= RIGHT INFO PANEL ================= */

  .infoPanel {
    width: 100%;

    padding: 30px 20px 20px 50px;

    box-sizing: border-box;
  }

  .companyHeading {
    font-family: "Poppins", sans-serif;

    font-weight: 800;

    font-size: 38px;

    color: #111;

    line-height: 1.1;

    span {
      color: #00cd64;

      position: relative;

      display: inline-block;

      /* ================= WAVE UNDERLINE ================= */

      &:after {
        content: "";

        position: absolute;

        bottom: -6px;
        left: 0;

        width: 100%;
        height: 6px;

        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 4"><path d="M0 2 Q 5 0, 10 2 T 20 2" fill="none" stroke="%2300cd64" stroke-width="2"/></svg>')
          repeat-x;

        background-size: 12px 6px;
      }
    }
  }

  /* ================= DESCRIPTION ================= */

  .companyDesc {
    font-family: "Inter", sans-serif;

    color: #718084;

    font-size: 14px;

    line-height: 22px;

    margin-top: 12px;

    margin-bottom: 35px;

    max-width: 320px;
  }

  /* ================= INFO ITEM ================= */

  .infoItem {
    display: flex;

    align-items: center;

    gap: 18px;

    margin-bottom: 24px;
  }

  /* ================= ICON ================= */

  .iconCircle {
    width: 42px;
    height: 42px;

    min-width: 42px;

    border-radius: 50%;

    background-color: #00cd64;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    img {
      width: 30px;
      height: 30px;

      object-fit: contain;
    }
  }

  /* ================= LABEL ================= */

  .infoLabel {
    font-family: "Inter", sans-serif;

    font-size: 13px;

    color: #8c9ba0;

    margin-bottom: 2px;
  }

  /* ================= VALUE ================= */

  .infoValue {
    font-family: "Inter", sans-serif;

    font-weight: 700;

    font-size: 14px;

    color: #111;

    line-height: 21px;
  }

  /* ================= TABLET ================= */

  @media (max-width: 900px) {
    .contactOuterCard {
      padding: 30px 25px;
    }

    .infoPanel {
      padding: 25px 10px 10px;
    }
  }

  /* ================= MOBILE ================= */

  @media (max-width: 600px) {
    padding: 50px 15px;

    .contactContainer {
      padding: 0 10px !important;
    }

    .contactHeading {
      margin-bottom: 30px;
    }

    .sectionSubtitle {
      font-size: 14px;
      line-height: 22px;
    }

    .contactOuterCard {
      padding: 20px 15px;

      border-radius: 20px;
    }

    .formPanel {
      padding: 30px 20px;

      border-radius: 16px;
    }

    .formTitle {
      font-size: 20px;
    }

    .infoPanel {
      padding: 20px 5px 10px;
    }

    .companyHeading {
      font-size: 32px;
    }

    .companyDesc {
      font-size: 13px;
      margin-bottom: 25px;
    }

    .infoItem {
      gap: 14px;
      margin-bottom: 20px;
    }

    .iconCircle {
      width: 40px;
      height: 40px;
      min-width: 40px;

      img {
        width: 27px;
        height: 27px;
      }
    }

    .infoValue {
      font-size: 13px;
    }
  }
`;

// ================= MAIN COMPONENT =================

const ContactQuerySection = () => {
  return (
    <ContactSectionWrapper>
      <Box className="contactSection">
        {/* ================= CONTAINER ================= */}

        <Container maxWidth={false} className="contactContainer">
          {/* ================= HEADER ================= */}

          <Box className="contactHeading">
            <WaveTitle
              mainTitle="Contact"
              highlightTitle="Us"
              fontSize="32px"
              headingLevel="h1"
              marginBottom={0}
            />

            <Typography className="sectionSubtitle">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </Typography>
          </Box>

          {/* ================= MAIN CARD ================= */}

          <Box className="contactOuterCard">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* ================= LEFT FORM ================= */}

              <Grid item xs={12} md={6}>
                <Paper elevation={0} className="formPanel">
                  <Typography variant="h5" className="formTitle">
                    Issue Your Query
                  </Typography>

                  <Box component="form" noValidate autoComplete="off">
                    {/* ROLE */}

                    <FormControl
                      fullWidth
                      variant="standard"
                      className="customInput"
                    >
                      <InputLabel shrink htmlFor="role-select">
                        What Is Your Role?
                      </InputLabel>

                      <Select
                        defaultValue="Company"
                        inputProps={{
                          id: "role-select",
                        }}
                        disableUnderline={false}
                      >
                        <MenuItem value="Company">Company</MenuItem>

                        <MenuItem value="Individual">Individual</MenuItem>

                        <MenuItem value="Developer">Developer</MenuItem>
                      </Select>
                    </FormControl>

                    {/* FULL NAME */}

                    <Box className="customInput">
                      <InputLabel shrink>Full Name*</InputLabel>

                      <TextField
                        fullWidth
                        variant="standard"
                        defaultValue="John Doe"
                      />
                    </Box>

                    {/* EMAIL */}

                    <Box className="customInput">
                      <InputLabel shrink>Email*</InputLabel>

                      <TextField
                        fullWidth
                        variant="standard"
                        defaultValue="demomail@gmail.com"
                      />
                    </Box>

                    {/* PHONE */}

                    <Box className="customInput">
                      <InputLabel shrink>Phone Number</InputLabel>

                      <TextField
                        fullWidth
                        variant="standard"
                        defaultValue="1234567890"
                      />
                    </Box>

                    {/* MESSAGE */}

                    <Box className="customInput">
                      <InputLabel shrink>Your Message Here*</InputLabel>

                      <TextField
                        fullWidth
                        variant="standard"
                        defaultValue="Type here"
                      />
                    </Box>

                    {/* SUBMIT */}

                    <Button
                      variant="contained"
                      disableElevation
                      className="submitBtn"
                    >
                      Submit
                    </Button>
                  </Box>
                </Paper>
              </Grid>

              {/* ================= RIGHT INFO ================= */}

              <Grid item xs={12} md={6}>
                <Box className="infoPanel">
                  <Typography variant="h2" className="companyHeading">
                    Company <span>Info</span>
                  </Typography>

                  <Typography className="companyDesc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>

                  {/* MAIL */}

                  <Box className="infoItem">
                    <Box className="iconCircle">
                      <img src={mailIcon} alt="Mail Us" />
                    </Box>

                    <Box>
                      <Typography className="infoLabel">Mail Us</Typography>

                      <Typography className="infoValue">
                        demomail@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* CALL */}

                  <Box className="infoItem">
                    <Box className="iconCircle">
                      <img src={phoneIcon} alt="Call Us" />
                    </Box>

                    <Box>
                      <Typography className="infoLabel">Call Us</Typography>

                      <Typography className="infoValue">1234567890</Typography>
                    </Box>
                  </Box>

                  {/* ADDRESS */}

                  <Box className="infoItem">
                    <Box className="iconCircle">
                      <img src={locationIcon} alt="Address" />
                    </Box>

                    <Box>
                      <Typography className="infoLabel">Address</Typography>

                      <Typography className="infoValue">
                        2715 Ash Dr. San Jose, South Dakota 83475
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ContactSectionWrapper>
  );
};

export default ContactQuerySection;
