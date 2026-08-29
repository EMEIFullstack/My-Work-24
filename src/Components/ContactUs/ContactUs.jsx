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
  styled,
} from "@mui/material";

import WaveTitle from "../../Components/common/WaveTitle";

// ================= ASSETS =================

import mailIcon from "../../assets/icons/contact-mail.png";
import phoneIcon from "../../assets/icons/contact-call.png";
import locationIcon from "../../assets/icons/contact-location.png";

// ================= STYLED COMPONENTS =================

const ContactSectionWrapper = styled(Box)`
  .contactSection {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding-top: 130px;
    padding-bottom: 90px;
    background-color: #fcfefb;

    background-image:
      radial-gradient(
        circle at 0% 0%,
        rgba(32, 198, 90, 0.35) 0%,
        rgba(32, 198, 90, 0.1) 18%,
        transparent 35%
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba(245, 166, 106, 0.12) 0%,
        transparent 30%
      ),
      linear-gradient(to right, rgba(220, 226, 222, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(220, 226, 222, 0.35) 1px, transparent 1px);

    background-size:
      100% 100%,
      100% 100%,
      60px 60px,
      60px 60px;

    overflow: hidden;
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
    padding: 40px;
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

  /* ================= FLEX LAYOUT ================= */

  .cardContentFlex {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 50px;
    width: 100%;
  }

  /* ================= FORM PANEL ================= */

  .formPanelWrapper {
    flex: 1 1 480px;
    width: 100%;
  }

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
    margin-top: 0;
    margin-bottom: 25px;
  }

  /* ================= INPUT ================= */

  .customInput {
    margin-bottom: 20px;

    & .MuiInputLabel-root {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 29px;

      color: #64757a;
      transform: none;
      position: relative;
      margin-bottom: 6px;
    }

    & .MuiInputBase-root {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 600;
      color: #111;
      padding-bottom:12px;

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
    flex: 1 1 380px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 40px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    box-sizing: border-box;
  }

  /* ================= DESCRIPTION ================= */

  .companyDesc {
    font-family: "Inter", sans-serif;
    color: #718084;
    font-size: 14px;
    line-height: 22px;
    margin-top: 12px;
    margin-bottom: 35px;
    max-width: 340px;
    text-align: left;
  }

  /* ================= INFO ITEM ================= */

  .infoItem {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* ================= ICON ================= */

  .iconCircle {
    width: 65px;
    height: 65px;
    min-width: 42px;
    border-radius: 50%;
    background-color: #00cd64;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
      width: 34px;
      height: 34px;
      object-fit: contain;
    }
  }

  /* ================= LABEL ================= */

  .infoLabel {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #64757a;
    margin-bottom: 10px;
  }

  /* ================= VALUE ================= */

  .infoValue {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #061418;
  }

  /* ================= RESPONSIVE ================= */

  @media (max-width: 900px) {
    .cardContentFlex {
      flex-direction: column;
      gap: 32px;
    }

    .contactOuterCard {
      padding: 30px 25px;
    }

    .infoPanel {
      padding-top: 0;
    }

    .formPanelWrapper,
    .infoPanel {
      flex: 1 1 100%;
    }
  }

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
            <Box className="cardContentFlex">
              {/* ================= LEFT FORM ================= */}

              <Box className="formPanelWrapper">
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
                        MenuProps={{ disableScrollLock: true }}
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
              </Box>

              {/* ================= RIGHT INFO ================= */}

              <Box className="infoPanel">
                <WaveTitle
                  mainTitle="Company"
                  highlightTitle="Info"
                  fontSize="38px"
                  headingLevel="h2"
                  marginBottom={0}
                />

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
            </Box>
          </Box>
        </Container>
      </Box>
    </ContactSectionWrapper>
  );
};

export default ContactQuerySection;
