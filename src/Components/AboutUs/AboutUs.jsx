import { Box, Container, Typography, Paper, styled } from "@mui/material";

import Header from "../../Shared/Header/Header";
import WaveTitle from "../../Components/common/WaveTitle";

const AboutusWrapper = styled(Box)`
  /* ================= MAIN SECTION ================= */

  .aboutSection {
    position: relative;

    width: 100%;

    min-height: 100vh;

    padding-top: 130px;

    padding-bottom: 90px;

    background-color: #fcfefb;

    background-image:
      radial-gradient(
        circle at 0% 0%,
        rgba(32, 198, 90, 0.08),
        transparent 40%
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba(245, 166, 106, 0.08),
        transparent 40%
      ),
      linear-gradient(to right, rgba(220, 226, 222, 0.3) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(220, 226, 222, 0.3) 1px, transparent 1px);

    background-size:
      100% 100%,
      100% 100%,
      60px 60px,
      60px 60px;

    overflow: hidden;
  }

  /* ================= CONTAINER ================= */

  .aboutContainer {
    width: 100%;

    max-width: 1200px !important;

    margin: 0 auto;

    padding: 0 30px !important;

    position: relative;

    z-index: 2;
  }

  /* ================= ABOUT HEADING ================= */

  .aboutHeading {
    position: relative;

    z-index: 2;

    text-align: center;

    margin-bottom: 45px;
  }

  .aboutHeading .waveTitle {
    margin-bottom: 0;
  }

  /* ================= SUBTITLE ================= */

  .sectionSubtitle {
    max-width: 520px;

    margin: 10px auto 0 !important;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* or 160% */
    text-align: center;

    color: #64757a;
  }

  /* ==================================================
     MISSION CARD
     ================================================== */

  .missionCard {
    width: 100%;

    max-width: 1140px;

    min-height: 260px;

    margin: 0 auto !important;

    padding: 75px 70px !important;

    border-radius: 20px !important;

    background: #ffffff !important;

    border: 1px solid rgba(201, 209, 204, 0.65) !important;

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.025),
      0 15px 40px rgba(28, 67, 45, 0.05) !important;

    box-sizing: border-box;

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);

      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.035),
        0 18px 45px rgba(28, 67, 45, 0.07) !important;
    }
  }

  /* ================= MISSION TEXT ================= */

  .missionText {
    margin-top: 22px !important;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 29px !important;
    /* or 160% */

    color: #64757a !important;
  }

  /* ==================================================
     VALUES
     ================================================== */

  .valuesSection {
    max-width: 750px;

    margin: 48px auto 0 !important;

    padding: 10px 20px;

    text-align: center;
  }

  .valuesText {
    max-width: 680px;

    margin: 20px auto 0 !important;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* or 160% */
    text-align: center;

    color: #64757a;
  }

  /* ==================================================
     STATISTICS
     ================================================== */

  .statsGrid {
    width: 100%;

    max-width: 1140px;

    margin: 40px auto 0;

    display: flex;

    justify-content: space-between;

    align-items: stretch;

    gap: 15px;

    box-sizing: border-box;
  }

  /* ================= STAT CARD ================= */

  .statCard {
    width: 370px;

    min-width: 370px;

    height: 110px;

    padding: 18px 20px !important;

    border-radius: 16px !important;

    border: 1px solid rgba(201, 209, 204, 0.7) !important;

    background: #ffffff !important;

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.025),
      0 10px 30px rgba(28, 67, 45, 0.04) !important;

    display: flex !important;

    flex-direction: column !important;

    align-items: center !important;

    justify-content: center !important;

    text-align: center;

    box-sizing: border-box;

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);

      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.04),
        0 15px 35px rgba(32, 198, 90, 0.06) !important;
    }
  }

  .statNumber {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    text-align: center;

    color: #00cd64;

    margin: 0 !important;
  }

  .statLabel {
    margin-top: 5px !important;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 160% */
    text-align: center;

    color: #64757a;

    white-space: nowrap;
  }

  /* ==================================================
     LEFT DECORATION
     ================================================== */

  .leftDecoration {
    position: absolute;

    left: -10px;

    bottom: 80px;

    width: 70px;

    height: 140px;

    pointer-events: none;

    z-index: 1;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  /* ==================================================
     RIGHT DECORATION
     ================================================== */

  .rightDecoration {
    position: absolute;

    right: -8px;

    bottom: 55px;

    width: 75px;

    height: 75px;

    pointer-events: none;

    z-index: 1;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  /* ==================================================
     TABLET
     ================================================== */

  @media (max-width: 1200px) {
    .aboutContainer {
      padding: 0 30px !important;
    }

    .missionCard {
      max-width: 100%;
      padding: 65px 60px !important;

      border-radius: 15px !important;
      border: 1px solid #000 !important;
    }

    .statsGrid {
      flex-wrap: wrap;

      justify-content: center;
    }

    .statCard {
      width: 360px;

      min-width: 360px;
    }
  }

  /* ==================================================
     SMALL TABLET
     ================================================== */

  @media (max-width: 900px) {
    .aboutContainer {
      padding: 0 25px !important;
    }

    .missionCard {
      padding: 50px 50px !important;

      border-radius: 15px !important;
      border: 1px solid #000 !important;
    }

    .statsGrid {
      gap: 20px;
    }

    .statCard {
      width: 340px;

      min-width: 340px;
    }
  }

  /* ==================================================
     MOBILE
     ================================================== */

  @media (max-width: 768px) {
    .aboutSection {
      padding-top: 100px;

      padding-bottom: 60px;
    }

    .aboutContainer {
      padding: 0 20px !important;
    }

    .aboutHeading {
      margin-bottom: 35px;
    }

    .sectionSubtitle {
      font-size: 12px !important;

      padding: 0 10px;
    }

    .missionCard {
      width: 100%;

      min-height: auto;

      padding: 30px 25px !important;

      border-radius: 18px !important;
    }

    .missionText {
      margin-top: 18px !important;
    }

    .valuesSection {
      margin-top: 40px !important;

      padding: 10px;
    }

    .valuesText {
      margin-top: 15px !important;
    }

    .statsGrid {
      width: 100%;

      flex-direction: column;

      align-items: center;

      gap: 18px;

      margin-top: 30px;
    }

    .statCard {
      width: 100%;

      min-width: 0;

      max-width: 370px;

      height: 100px;
    }

    .leftDecoration,
    .rightDecoration {
      display: none;
    }
  }

  /* ==================================================
     SMALL MOBILE
     ================================================== */

  @media (max-width: 480px) {
    .aboutSection {
      padding-top: 85px;
    }

    .aboutContainer {
      padding: 0 15px !important;
    }

    .missionCard {
      padding: 45px 38px !important;

      border-radius: 15px !important;
      border: 1px solid #000 !important;
    }

    .missionText {
      font-size: 12.5px !important;
    }

    .valuesText {
      font-size: 12.5px !important;
    }

    .statCard {
      width: 100%;

      max-width: 100%;

      height: 95px;
    }

    .statNumber {
      font-size: 22px !important;
    }

    .statLabel {
      font-size: 11px !important;
    }
  }
`;

// ================= COMPONENT =================

const AboutUs = () => {
  return (
    <>
      <Header />

      <AboutusWrapper>
        <Box className="aboutSection">
          {/* ================= CONTENT ================= */}

          <Container maxWidth={false} className="aboutContainer">
            {/* ================= ABOUT ================= */}

            <Box className="aboutHeading">
              <WaveTitle
                mainTitle="About"
                highlightTitle="Us"
                fontSize="32px"
                headingLevel="h1"
                marginBottom={0}
              />

              <Typography className="sectionSubtitle">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </Typography>
            </Box>

            {/* ================= MISSION ================= */}

            <Paper className="missionCard">
              <WaveTitle
                mainTitle="Our"
                highlightTitle="Mission"
                fontSize="23px"
                headingLevel="h2"
                marginBottom={0}
              />

              <Typography className="description missionText"></Typography>

              <Typography className="description  missionText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>

              <Typography className="description  missionText">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and
              </Typography>
            </Paper>

            {/* ================= VALUES ================= */}

            <Box className="valuesSection">
              <WaveTitle
                mainTitle="Our"
                highlightTitle="Values"
                fontSize="23px"
                headingLevel="h2"
                marginBottom={0}
              />

              <Typography className="description valuesText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>

            {/* ================= STATISTICS ================= */}

            <Box className="statsGrid">
              <Paper className="statCard">
                <Typography className="statNumber">12+</Typography>

                <Typography className="statLabel">Services</Typography>
              </Paper>

              <Paper className="statCard">
                <Typography className="statNumber">99%</Typography>

                <Typography className="statLabel">Platform Success</Typography>
              </Paper>

              <Paper className="statCard">
                <Typography className="statNumber">2024</Typography>

                <Typography className="statLabel">Founded</Typography>
              </Paper>
            </Box>
          </Container>

          {/* ================= LEFT DECORATION ================= */}

          <Box className="leftDecoration">
            <svg viewBox="0 0 50 100" fill="none">
              <path
                d="M 0 10 C 35 10 35 90 0 90"
                stroke="#20C65A"
                strokeWidth="2.5"
              />

              <path
                d="M 0 25 C 25 25 25 75 0 75"
                stroke="#20C65A"
                strokeWidth="2.5"
              />

              <path
                d="M 0 40 C 15 40 15 60 0 60"
                stroke="#20C65A"
                strokeWidth="2.5"
              />
            </svg>
          </Box>

          {/* ================= RIGHT DECORATION ================= */}

          <Box className="rightDecoration">
            <svg viewBox="0 0 100 100" fill="none">
              <path
                d="
                  M 15 75
                  Q 10 20 50 10
                  Q 30 50 35 85
                  Q 30 25 70 20
                  Q 50 60 55 90
                  Q 60 35 85 25
                  Q 70 70 75 95
                "
                stroke="#F5A66A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      </AboutusWrapper>
    </>
  );
};

export default AboutUs;
