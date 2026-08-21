import React from "react";
import { Box, Container, Typography, Button, styled } from "@mui/material";

import watermarkImg from "../../assets/watermark.png";

const bannerGreen = "#4cd88b";
const textDark = "#121212";



const bannerData = {
  titlePart1: "Post Your",
  titleHighlight: "Job",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  buttonText: "Post Now",
};



const BannerWrapper = styled(Box)`
  padding: 60px 0;
  width: 100%;
  margin-top: 40px;
  margin-right: 20px;

  .banner-container {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 40px 60px;
    border-radius: 24px;


    background-color: ${bannerGreen};
    background-image: url(${watermarkImg}); 
    background-repeat: no-repeat; 
    background-position: right; 
  }

  .watermark-img {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    pointer-events: none;
  }

  .banner-content {
    max-width: 500px;
  }

  
  .banner-title {
    font-weight: 800;
    font-size: 36px;
    color: ${textDark};
    margin-bottom: 12px;
  }

  .span-white {
    color: #ffffff;
    text-decoration: underline wavy #ffffff;
    text-underline-offset: 8px; 
    text-decoration-thickness: 3px; 
  }

  .banner-desc {
    color: #1e3c2d;
    font-size: 15px;
    margin-top: 15px;
  }

  .banner-btn {
    background-color: #ffffff;
    color: ${textDark};
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    padding: 12px 32px;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    .banner-container {
      flex-direction: column;
      text-align: center;
      padding: 40px 20px;
      gap: 24px;
    }
  }
`;
const PostJobBanner = () => {
  const { titlePart1, titleHighlight, description, buttonText } = bannerData;

return (
    <BannerWrapper>
      <Container>
        <Box className="banner-container">
          
          <img src={watermarkImg} alt="background pattern" className="watermark-img" />
          
          <Box className="banner-content">
            <Typography variant="h3" className="banner-title">
              {titlePart1} <span className="span-white">{titleHighlight}</span>
            </Typography>
            <Typography variant="body1" className="banner-desc">
              {description}
            </Typography>
          </Box>

          <Box className="banner-btn-box">
            <Button className="banner-btn">{buttonText}</Button>
          </Box>
          
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default PostJobBanner;