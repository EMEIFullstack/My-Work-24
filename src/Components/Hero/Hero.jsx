import { Box, Container, Typography } from "@mui/material";

import SearchBar from "../SearchBar/SearchBar";

import HeroImage from "../../assets/hero.png";
import YellowGraphic from "../../assets/yellow-graphic.png";
import GreenWave from "../../assets/green-wave.png";
import styled from "@emotion/styled";
import SectionHeading from "../SectionHeading/SectionHeading";

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
    padding: 120px 0 80px;
    background: #ffffff;
    font-family:
      "Plus Jakarta Sans", sans-serif !important; // Forces modern sans-serif font

    /* 1. TOP-LEFT GREEN GLOW (Huge radial gradient reaching up past the navbar) */
    .heroBackgroundGlow {
      position: absolute;
      top: -200px;
      left: -200px;
      width: 850px;
      height: 850px;
      background: radial-gradient(
        circle at 35% 35%,
        rgba(175, 245, 200, 0.65) 0%,
        rgba(220, 252, 232, 0.35) 45%,
        rgba(255, 255, 255, 0) 70%
      );
      filter: blur(60px);
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
      bottom: -25px;
      left: -50px;
      width: 58%;
      max-width: 880px;
      z-index: 2;
      pointer-events: none;
    }

    .heroContainer {
      max-width: 1180px !important;
      margin: 0 auto;
      padding: 0 24px !important;
      position: relative;
      z-index: 3;
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
      width: 48%;
      padding-top: 15px;

      .yellowGraphicWrapper {
        position: relative;
        display: inline-block;
        margin-bottom: 24px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          // background: radial-gradient(
          //   circle,
          //   rgba(255, 218, 118, 0.8) 0%,
          //   rgba(255, 255, 255, 0) 70%
          // );
          z-index: -1;
          border-radius: 50%;
        }

        .yellowGraphic {
          width: 52px;
          height: auto;
          display: block;
        }
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
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }

    /* 4. SEARCH BAR POSITIONING (Lifted high over vest level) */
    .searchBarRow {
      position: relative;
      z-index: 20;
      margin-top: -165px; // Increases negative top margin to pull search bar way higher
      width: 76%; // Matches exact length across text and image in Figma

      > div {
        background: rgba(255, 255, 255, 0.78) !important;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
        border-radius: 50px;
      }
    }

    @media (max-width: 1100px) {
      .heroWrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .heroLeft,
      .heroRight {
        width: 100%;
        justify-content: center;
      }

      .searchBarRow {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
  .imageFrame {
    position: relative;
    width: 100%;
    max-width: 450px;
    /* Black border */
    margin-top: 60px;
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

  /* Image */

  @media (max-width: 1200px) {
    .imageFrame {
      width: 430px;
    }

    .imageBox {
      width: 380px;
    }
  }

  @media (max-width: 768px) {
    .imageFrame {
      max-width: 320px;
      margin-top: 20px !important;
    }

    .imageBox {
      width: 300px;
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

        <Container maxWidth={false} className="heroContainer">
          <Box className="heroMainLayout">
            {/* Top Row: Left Content & Right Image */}
            <Box className="heroWrapper">
              {/* LEFT COLUMN */}
              <Box className="heroLeft">
                <div className="yellowGraphicWrapper">
                  <img src={YellowGraphic} alt="" className="yellowGraphic" />
                </div>

                <SectionHeading
                  line1={heroData.line1}
                  line2={heroData.line2}
                  highlight={heroData.highlight}
                  line3={heroData.line3}
                />

                <Typography className="description">
                  {heroData.description}
                </Typography>
              </Box>

              {/* RIGHT COLUMN: Workers Image */}
              <Box className="heroRight">
                <Box className="imageFrame">
                  {/* Main frame */}

                  <Box className="imageBox">
                    <img src={HeroImage} alt="construction" />
                  </Box>
                </Box>
                
              </Box>
            </Box>

            {/* SEARCH BAR (Left-aligned with text, overlaps image) */}
            <Box className="searchBarRow">
              <SearchBar />
            </Box>
          </Box>
        </Container>
      </Box>
    </HeroWrapper>
  );
};

export default Hero;
