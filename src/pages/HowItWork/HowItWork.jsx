
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Rating,
  Paper,
  styled,
} from "@mui/material";

import workPortal from "../../assets/icons/work-portal.png";
import workJob from "../../assets/icons/work-job.png";
import workClient from "../../assets/icons/work-client.png";

import womanImg from "../../assets/woman.png";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

/* =========================
   COLOR TOKENS
========================= */

const primaryGreen = "#00c853";
const textDark = "#0a171c";
const textGray = "#788896";
const borderColor = "#e1e9ec";

/* =========================
   SECTION DATA
========================= */

const sectionData = {
  heading: {
    line2: "How It",
    highlight: "Works",
  },

  subtitle:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",

  steps: [
    {
      icon: workPortal,
      title: "Register Our Portal",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      icon: workJob,
      title: "Post Your Jobs",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      icon: workClient,
      title: "Get Construction Clients",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
  ],

  job: {
    title: "House Cleaning",
    time: "1 day ago",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    salary: "$24,000 - 30,000",
  },

  applicants: [
    {
      name: "Construction Service Provider",
      rating: 5,
    },
    {
      name: "Construction Service Provider",
      rating: 5,
    },
  ],

  image: {
    src: womanImg,
    alt: "Professional Woman",
  },
};

/* =========================
   STYLED COMPONENT
========================= */

const HowItWorkWrapper = styled(Box)`
  position: relative;
  width: 100%;
  padding: 70px 0 60px;
  background: #ffffff;
  overflow: hidden;

  /* =========================================
     MAIN CONTAINER
  ========================================= */

  .how-it-work-container {
    position: relative;
    z-index: 5;
  }

  .main-grid {
    align-items: center;
    justify-content: center;
  }

  /* =========================================
     LEFT SIDE
  ========================================= */

  .left-content {
    position: relative;
    z-index: 5;
    max-width: 480px;
    margin: 0 auto;
  }

  .subtitle {
    max-width: 440px;
    margin-top: 12px;
    margin-bottom: 28px;

    color: ${textGray};
    font-size: 13px;
    line-height: 1.6;
    font-weight: 400;
  }

  /* =========================================
     STEP CARDS
  ========================================= */

  .steps-container {
    width: 100%;
    max-width: 480px;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .step-card {
    width: 100%;

    display: flex;
    align-items: center;

    padding: 16px 20px;

    border: 1px solid ${borderColor};
    border-radius: 20px;

    background: #ffffff;

    box-shadow: 0 4px 16px rgba(10, 23, 28, 0.03);

    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(10, 23, 28, 0.07);
    }
  }

  /* =========================================
     ICON & BLOB
  ========================================= */

  .icon-wrapper {
    position: relative;

    width: 54px;
    height: 54px;
    min-width: 54px;

    margin-right: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blob-bg {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    background: #dcf5e7;
    border-radius: 50%;
  }

  .icon-wrapper img {
    position: relative;
    z-index: 2;

    width: 28px;
    height: 28px;

    object-fit: contain;
  }

  .step-text {
    min-width: 0;
  }

  .step-title {
    margin: 0;

    color: ${textDark};
    font-size: 16px;
    line-height: 1.35;
    font-weight: 700;
    letter-spacing: -0.2px;
  }

  .step-desc {
    max-width: 340px;

    margin-top: 4px;

    color: ${textGray};
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
  }

  /* =========================================
     RIGHT VISUAL AREA
  ========================================= */

  .visual-column {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .visual-wrapper {
    position: relative;

    width: 500px;
    height: 470px;

    margin: 0 auto;
  }

  /* =========================================
     SOFT FEATHERED MINT GLOW
  ========================================= */

  .green-spot-glow {
    position: absolute;

    top: 20px;
    right: -10px;

    width: 380px;
    height: 340px;

    border-radius: 50%;

    background: radial-gradient(
      circle at 50% 50%,
      rgba(130, 235, 184, 0.95) 0%,
      rgba(142, 230, 189, 0.65) 45%,
      rgba(215, 252, 234, 0.2) 70%,
      rgba(255, 255, 255, 0) 100%
    );

    filter: blur(25px);

    z-index: 1;
    pointer-events: none;
  }

  /* =========================================
     DOT GRID
  ========================================= */

  .dot-grid-bg {
    position: absolute;

    top: 35px;
    left: 115px;

    width: 48px;
    height: 48px;

    background-image: radial-gradient(
      ${primaryGreen} 1.1px,
      transparent 1.1px
    );

    background-size: 5px 5px;

    opacity: 0.7;

    z-index: 2;
  }

  /* =========================================
     HOUSE CLEANING CARD
  ========================================= */

  .job-post-card {
    position: absolute;

    top: 78px;
    left: 50px;

    width: 250px;
    min-height: 105px;

    padding: 12px 14px;

    border-radius: 10px;

    border: 1px solid #edf1f3;

    background: #ffffff;

    box-shadow: 0 12px 28px rgba(15, 35, 45, 0.07);

    z-index: 3;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;
  }

  .job-title {
    color: ${textDark};

    font-size: 10px;
    font-weight: 700;
  }

  .time {
    color: #a0a8ae;

    font-size: 7px;
    font-weight: 400;
  }

  .job-desc {
    max-width: 210px;

    margin-bottom: 7px;

    color: ${textGray};

    font-size: 7px;
    line-height: 1.45;
  }

  .tag {
    display: inline-flex;
    align-items: center;

    padding: 3px 8px;

    border-radius: 10px;

    background: #e5f7eb;

    color: ${primaryGreen};

    font-size: 8px;
    font-weight: 700;
  }

  /* =========================================
     WOMAN
  ========================================= */

  .person-img {
    position: absolute;

    bottom: 52px;
    right: 50px;

    width: auto;
    height: 425px;

    max-width: none;

    object-fit: contain;

    z-index: 5;

    pointer-events: none;
  }

  /* =========================================
     APPLICATIONS CARD
  ========================================= */

  .applications-card {
    position: absolute;

    right: 8px;
    bottom: 5px;

    width: 265px;

    padding: 14px 15px 15px;

    border-radius: 14px;

    background: ${primaryGreen};

    box-shadow:
      0 18px 35px rgba(0, 200, 83, 0.25),
      0 8px 18px rgba(0, 200, 83, 0.12);

    z-index: 8;
  }

  .app-title {
    margin-bottom: 9px;

    color: #ffffff;

    font-size: 11px;
    line-height: 1.2;
    font-weight: 700;
  }

  .applicant-item {
    width: 100%;

    min-height: 42px;

    display: flex;
    align-items: center;

    gap: 8px;

    padding: 7px 10px;

    margin-bottom: 7px;

    border-radius: 9px;

    background: #ffffff;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .applicant-avatar {
    width: 27px;
    height: 27px;

    background: #bdbdbd;
  }

  .applicant-name {
    margin: 0;

    color: ${textDark};

    font-size: 8px;
    line-height: 1.2;
    font-weight: 700;
  }

  .rating {
    margin-top: -2px;

    font-size: 11px;

    color: #ff9800;
  }

  /* =========================================
     CONCENTRIC WAVE DECORATIONS
  ========================================= */

  .side-wave-left,
  .side-wave-right {
    position: absolute;

    top: 50%;

    width: 90px;
    height: 180px;

    transform: translateY(-50%);

    pointer-events: none;

    z-index: 1;
  }

  .side-wave-left {
    left: 0;

    background: radial-gradient(
      circle at 0% 50%,
      transparent 0px,
      transparent 12px,
      #00c853 13px,
      #00c853 15px,
      transparent 16px,
      transparent 28px,
      #00c853 29px,
      #00c853 31px,
      transparent 32px,
      transparent 44px,
      #00c853 45px,
      #00c853 47px,
      transparent 48px,
      transparent 60px,
      rgba(0, 200, 83, 0.6) 61px,
      rgba(0, 200, 83, 0.6) 63px,
      transparent 64px
    );
  }

  .side-wave-right {
    right: 0;

    background: radial-gradient(
      circle at 100% 50%,
      transparent 0px,
      transparent 12px,
      #00c853 13px,
      #00c853 15px,
      transparent 16px,
      transparent 28px,
      #00c853 29px,
      #00c853 31px,
      transparent 32px,
      transparent 44px,
      #00c853 45px,
      #00c853 47px,
      transparent 48px,
      transparent 60px,
      rgba(0, 200, 83, 0.6) 61px,
      rgba(0, 200, 83, 0.6) 63px,
      transparent 64px
    );
  }

  /* =========================================
     RESPONSIVE
  ========================================= */

  @media (max-width: 1200px) {
    .visual-wrapper {
      transform: scale(0.92);
      transform-origin: center center;
    }

    .steps-container {
      max-width: 440px;
    }
  }

  @media (max-width: 900px) {
    padding: 65px 0;

    .main-grid {
      align-items: flex-start;
    }

    .left-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 100%;
    }

    .subtitle {
      max-width: 500px;
    }

    .steps-container {
      max-width: 600px;
      text-align: left;
    }

    .visual-column {
      margin-top: 25px;
    }

    .visual-wrapper {
      margin: 0 auto;
      transform: scale(0.9);
    }

    .side-wave-left,
    .side-wave-right {
      display: none;
    }
  }

  @media (max-width: 600px) {
    padding: 50px 0;

    .subtitle {
      font-size: 12px;
    }

    .step-card {
      padding: 12px 14px;
    }

    .icon-wrapper {
      width: 46px;
      height: 46px;
      min-width: 46px;
      margin-right: 14px;
    }

    .icon-wrapper img {
      width: 24px;
      height: 24px;
    }

    .step-title {
      font-size: 14px;
    }

    .step-desc {
      font-size: 11px;
    }

    .visual-wrapper {
      width: 390px;
      height: 390px;

      transform: scale(0.82);
      transform-origin: center top;

      margin-bottom: -60px;
    }
  }

  @media (max-width: 430px) {
    .visual-wrapper {
      transform: scale(0.68);
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

/* =========================
   COMPONENT
========================= */

const HowItWorks = () => {
  const { heading, subtitle, steps, job, applicants, image } = sectionData;

  return (
    <HowItWorkWrapper>
      {/* Decorative concentric side wave elements */}
      <div className="side-wave-left" />
      <div className="side-wave-right" />

      <Container maxWidth="lg" className="how-it-work-container">
        <Grid container spacing={{ xs: 3, md: 5 }} className="main-grid">
          {/* =================================
              LEFT CONTENT
          ================================= */}

          <Grid item xs={12} md={6}>
            <Box className="left-content">
              <SectionHeading
                line2={heading.line2}
                highlight={heading.highlight}
              />

              <Typography variant="body1" className="subtitle">
                {subtitle}
              </Typography>

              <Box className="steps-container">
                {steps.map((step, index) => (
                  <Paper elevation={0} className="step-card" key={index}>
                    <Box className="icon-wrapper">
                      <Box className="blob-bg" />
                      <img src={step.icon} alt={step.title} />
                    </Box>

                    <Box className="step-text">
                      <Typography variant="h6" className="step-title">
                        {step.title}
                      </Typography>

                      <Typography variant="body2" className="step-desc">
                        {step.description}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* =================================
              RIGHT VISUAL
          ================================= */}

          <Grid item xs={12} md={6} className="visual-column">
            <Box className="visual-wrapper">
              {/* Soft Feathered Mint Glow */}
              <Box className="green-spot-glow" />

              {/* Dotted pattern */}
              <Box className="dot-grid-bg" />

              {/* House Cleaning Card */}
              <Paper elevation={0} className="job-post-card">
                <Box className="card-header">
                  <Typography className="job-title">{job.title}</Typography>
                  <Typography className="time">{job.time}</Typography>
                </Box>

                <Typography className="job-desc">{job.description}</Typography>

                <Box className="tag">💼 {job.salary}</Box>
              </Paper>

              {/* Woman Image */}
              <img src={image.src} alt={image.alt} className="person-img" />

              {/* Applications Card */}
              <Box className="applications-card">
                <Typography className="app-title">Applications</Typography>

                {applicants.map((applicant, index) => (
                  <Paper elevation={0} className="applicant-item" key={index}>
                    <Avatar className="applicant-avatar" />

                    <Box>
                      <Typography className="applicant-name">
                        {applicant.name}
                      </Typography>

                      <Rating
                        value={applicant.rating}
                        readOnly
                        size="small"
                        className="rating"
                      />
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HowItWorkWrapper>
  );
};

export default HowItWorks;