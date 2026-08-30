
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

import SearchBar from "../SearchBar/SearchBar";
import HeroImage from "../../assets/hero.png";
import YellowGraphic from "../../assets/yellow-graphic.png";
import GreenWave from "../../assets/green-wave.png";
import WaveTitle from "../common/WaveTitle";

const heroData = {
  line1: "Construction",
  line2: "Service",
  highlight: "Marketplace",
  line3: "Platform",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  image: HeroImage,
};

const HeroWrapper = styled(Box)`
  .heroSection {
    position: relative;
    padding: 120px 0 150px;
    background: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif !important;

    /* 1. TOP-LEFT GREEN GLOW */
    .heroBackgroundGlow {
      position: absolute;
      top: -200px;
      left: -200px;
      width: 850px;
      height: 850px;
     
      z-index: 0;
      pointer-events: none;
    }

    /* 2. GRID OVERLAY */
    .grid {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: calc(100% + 100px);
      background-image:
        linear-gradient(rgba(46, 204, 113, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(46, 204, 113, 0.08) 1px, transparent 1px);
      background-size: 60px 60px;
      z-index: 1;
      pointer-events: none;
    }

    /* 3. BOTTOM GREEN WAVE */
    .greenWaveBg {
      position: absolute;
      bottom: 40px;
      left: -15px;
      width: 58%;
      max-width: 880px;
      z-index: 2;
      pointer-events: none;
    }

    .heroMainLayout {
      position: relative;
    }

    .heroWrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 40px;
    }

    /* LEFT SIDE CONTENT */
    .heroLeft {
      width: 55%;
      padding-top: 15px;
      text-align: left;

      .yellowGraphicWrapper {
        position: relative;
        display: inline-block;
        margin: 0 0 20px 140px; /* Offset margin-left shifts icon to center over heading */

        .yellowGraphic {
          width: 52px;
          height: auto;
          display: block;
        }
      }
    }

    /* TITLE BOX & LAYOUT CONTROL */
    .heroTitleBox {
      text-align: left;

      .line1Text {
        display: block;
        font-size: 48px;
        line-height: 1.15;
        font-weight: 800;
        color: #111;
        margin-bottom: 4px !important;
      }

      .line2Row {
        display: flex;
        align-items: center;
        gap: 10px;

        .line2Text {
          font-size: 48px;
          line-height: 1.15;
          font-weight: 800;
          color: #111;
        }

        > div {
          margin-bottom: 0 !important;
        }

        .MuiTypography-root {
          font-size: 48px !important;
          line-height: 1.15 !important;
        }
      }

      .line3Text {
        display: block;
        font-size: 48px;
        line-height: 1.15;
        font-weight: 800;
        color: #111;
        margin-top: 4px !important;
      }
    }

    .description {
      max-width: 420px;
      font-size: 14px !important;
      line-height: 1.6 !important;
      margin-top: 20px !important;
      color: #8c8c8c;
      font-family: "Plus Jakarta Sans", sans-serif !important;
    }

    /* RIGHT SIDE IMAGE */
    .heroRight {
      width: 45%;
      display: flex;
      justify-content: flex-end;
    }

    /* 4. SEARCH BAR POSITIONING */
    .searchBarRow {
      position: relative;
      z-index: 20;
      margin-top: -165px;
      width: 76%;
    }
  }

  .imageFrame {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }

  .imageBox {
    position: relative;
    border-radius: 34px;
    width: 100%;
    overflow: visible;
    margin-top: 60px;

    img {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      border-radius: 34px;
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: -8px;
      right: 0;
      bottom: -8px;
      border: 2px solid #111;
      background: #18c964;
      border-radius: 34px;
      z-index: 0;
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 1200px) {
    .imageFrame {
      width: 430px;
    }

    .imageBox {
      width: 380px;
    }
  }

  @media (max-width: 1100px) {
    .heroSection {
      .heroWrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .heroLeft,
      .heroRight {
        width: 100%;
        justify-content: center;
        text-align: center;
      }

      .heroLeft {
        .yellowGraphicWrapper {
          margin: 0 auto 20px auto;
        }
      }

      .searchBarRow {
        margin-top: 20px;
        width: 100%;
      }

      .heroTitleBox {
        text-align: center;

        .line2Row {
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .heroSection {
      padding: 110px 0 120px;

      .heroWrapper {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }

      .heroLeft,
      .heroRight {
        width: 100%;
        text-align: center;
      }

      .searchBarRow {
        width: 100%;
        margin-top: 30px;
      }

      .greenWaveBg {
        width: 80%;
        left: -30px;
        bottom: 30px;
      }
    }

    .description {
      margin: 20px auto 0 !important;
    }

    .imageFrame {
      max-width: 420px;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    .heroSection {
      padding: 100px 0 100px;

      .heroWrapper {
        gap: 40px;
      }

      .heroLeft {
        text-align: center;
      }

      .greenWaveBg {
        width: 90%;
        left: -40px;
        bottom: 20px;
      }
    }

    .description {
      max-width: 100%;
      margin: auto;
      margin-top: 20px !important;
    }

    .imageFrame {
      max-width: 330px;
    }

    .imageBox {
      margin-top: 0;
    }
  }

  @media (max-width: 576px) {
    .heroSection {
      padding: 90px 0 90px;
    }

    .heroLeft {
      padding-top: 0;
    }

    .yellowGraphic {
      width: 40px !important;
    }

    .description {
      font-size: 13px !important;
      line-height: 1.8 !important;
    }

    .imageFrame {
      max-width: 280px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Box className="heroSection">
        {/* Background Radial Glow */}
        <div className="heroBackgroundGlow" />

        {/* Grid Pattern Overlay */}
        <div className="grid" />

        {/* Bottom Looping Green Line */}
        <img src={GreenWave} alt="" className="greenWaveBg" />

        <Container fixed>
          <Box className="heroMainLayout">
            {/* Top Row: Left Content & Right Image */}
            <Box className="heroWrapper">
              {/* LEFT COLUMN */}
              <Box className="heroLeft">
                <div className="yellowGraphicWrapper">
                  <img src={YellowGraphic} alt="" className="yellowGraphic" />
                </div>

                {/* HEADING SECTION */}
                <Box className="heroTitleBox">
                  <Typography className="line1Text">
                    {heroData.line1}
                  </Typography>

                  <Box className="line2Row">
                    <Typography className="line2Text">
                      {heroData.line2}
                    </Typography>
                    <WaveTitle
                      mainTitle=""
                      highlightTitle={heroData.highlight}
                    />
                  </Box>

                  <Typography className="line3Text">
                    {heroData.line3}
                  </Typography>
                </Box>

                <Typography className="description">
                  {heroData.description}
                </Typography>
              </Box>

              {/* RIGHT COLUMN: Workers Image */}
              <Box className="heroRight">
                <Box className="imageFrame">
                  <Box className="imageBox">
                    <img src={HeroImage} alt="construction" />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* SEARCH BAR */}
            <Box className="searchBarRow">
              <SearchBar />
            </Box>
          </Box>
          <div className="right-middle-blur" />
        </Container>
      </Box>
    </HeroWrapper>
  );
};

export default Hero;