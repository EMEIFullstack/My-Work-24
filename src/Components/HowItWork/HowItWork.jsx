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

import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import womanImg from "../../assets/woman.png";
import SectionHeading from "../SectionHeading/SectionHeading";

const primaryGreen = "#00c853";
const textDark = "#121212";
const textGray = "#6c757d";
const borderColor = "#eef2f5";

/* =========================
   Section Data
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
      icon: HowToRegOutlinedIcon,
      title: "Register Our Portal",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      icon: WorkOutlineOutlinedIcon,
      title: "Post Your Jobs",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      icon: AssignmentTurnedInOutlinedIcon,
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
    alt: "Professional",
  },
};

/* =========================
   Styled Component
========================= */

const HowItWorkWrapper = styled(Box)`
  padding: 140px 0;
  background-color: #ffffff;
  width: 100%;

  .subtitle {
    color: ${textGray};
    margin-bottom: 32px;
    max-width: 440px;
    margin-top: 16px;
  }

  /* =========================
     Steps
  ========================= */

  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .step-card {
    display: flex;
    align-items: center;
    padding: 18px 24px;
    border-radius: 16px;
    border: 1px solid ${borderColor};
    background: #ffffff;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(0, 200, 83, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 18px;
    flex-shrink: 0;
  }

  .step-icon {
    font-size: 28px;
    color: ${primaryGreen};
  }

  .step-title {
    font-weight: 700;
    font-size: 16px;
    color: ${textDark};
  }

  .step-desc {
    color: ${textGray};
    font-size: 13px;
  }

  /* =========================
     Visual Section
  ========================= */

  .visual-wrapper {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    width: 100%;
    max-width: 520px;
    min-height: 480px;

    margin: 0 auto;
  }

  .green-glow {
    position: absolute;

    width: 350px;
    height: 350px;

    background: radial-gradient(
      circle,
      rgba(0, 200, 83, 0.2) 0%,
      rgba(255, 255, 255, 0) 70%
    );

    top: 0;
    right: 0;

    z-index: 1;
  }

  /* =========================
     Job Card
  ========================= */

  .job-post-card {
    position: absolute;

    top: 10px;
    left: 0;

    width: 250px;

    padding: 16px;

    border-radius: 12px;
    border: 1px solid ${borderColor};

    background: #ffffff;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);

    z-index: 2;
  }

  .card-header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 6px;
  }

  .job-title {
    font-weight: 700;
    font-size: 13px;
    color: ${textDark};
  }

  .time {
    font-size: 10px;
    color: ${textGray};
  }

  .job-desc {
    font-size: 10px;
    color: ${textGray};

    margin-bottom: 10px;
  }

  .tag {
    display: inline-block;

    background: #e8f5e9;
    color: ${primaryGreen};

    font-weight: 600;
    font-size: 10px;

    padding: 3px 8px;

    border-radius: 12px;
  }

  /* =========================
     Person Image
  ========================= */

  .person-img {
    position: relative;

    width: 100%;
    max-width: 400px;

    height: auto;

    z-index: 3;

    display: block;

    margin: 0 auto;
  }

  /* =========================
     Applications Card
  ========================= */

  .applications-card {
    position: absolute;

    bottom: 0;
    right: 0;

    width: 280px;

    background: ${primaryGreen};

    border-radius: 16px;

    padding: 16px;

    z-index: 4;
  }

  .app-title {
    color: #ffffff;

    font-weight: 700;
    font-size: 14px;

    margin-bottom: 12px;
  }

  .applicant-item {
    display: flex;
    align-items: center;

    gap: 10px;

    padding: 8px 12px;

    border-radius: 8px;

    background: #ffffff;

    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .applicant-name {
    font-weight: 600;
    font-size: 11px;
    color: ${textDark};
  }

  .rating {
    color: #ff9800;
    font-size: 13px;
  }

  /* =========================
     Responsive
  ========================= */

  @media (max-width: 900px) {
    padding: 100px 0;

    .visual-wrapper {
      margin-top: 50px;
    }
  }

  @media (max-width: 600px) {
    padding: 70px 0;

    .visual-wrapper {
      min-height: 400px;
    }

    .job-post-card {
      left: -10px;
      width: 220px;
    }

    .applications-card {
      right: -10px;
      width: 240px;
    }

    .person-img {
      max-width: 330px;
    }
  }
`;

/* =========================
   Component
========================= */

const HowItWorks = () => {
  const { heading, subtitle, steps, job, applicants, image } = sectionData;

  return (
    <HowItWorkWrapper>
      <Container>
        <Grid container spacing={20} alignItems="center">

          {/* =========================
              Left Side
          ========================= */}

          <Grid item xs={12} md={6}>
            <Box>
              <SectionHeading
                line2={heading.line2}
                highlight={heading.highlight}
              />

              <Typography variant="body1" className="subtitle">
                {subtitle}
              </Typography>

              <Box className="steps-container">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <Paper
                      elevation={0}
                      key={index}
                      className="step-card"
                    >
                      <Box className="icon-wrapper">
                        <StepIcon className="step-icon" />
                      </Box>

                      <Box className="step-text">
                        <Typography
                          variant="h6"
                          className="step-title"
                        >
                          {step.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          className="step-desc"
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* =========================
              Right Side
          ========================= */}

          <Grid item xs={12} md={6}>
            <Box className="visual-wrapper">

              {/* Green Glow */}
              <Box className="green-glow" />

              {/* Job Card */}
              <Paper
                elevation={0}
                className="job-post-card"
              >
                <Box className="card-header">

                  <Typography className="job-title">
                    {job.title}
                  </Typography>

                  <Typography className="time">
                    {job.time}
                  </Typography>

                </Box>

                <Typography className="job-desc">
                  {job.description}
                </Typography>

                <Box className="tag">
                  {job.salary}
                </Box>
              </Paper>

              {/* Person */}
              <img
                src={image.src}
                alt={image.alt}
                className="person-img"
              />

              {/* Applications */}
              <Box className="applications-card">

                <Typography className="app-title">
                  Applications
                </Typography>

                {applicants.map((applicant, index) => (
                  <Paper
                    elevation={0}
                    className="applicant-item"
                    key={index}
                  >
                    <Avatar />

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