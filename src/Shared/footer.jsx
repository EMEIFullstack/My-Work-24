import React from "react";

import {
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  X,
} from "@mui/icons-material";

/* =========================================================
   FOOTER WRAPPER
========================================================= */

const footerWrapper = {
  position: "relative",
  width: "100%",
  overflow: "hidden",

  background: `
    radial-gradient(
      circle at 0% 0%,
      rgba(2, 249, 121, 0.18) 0%,
      rgba(1, 93, 47, 0.12) 20%,
      rgba(0, 205, 99, 0) 40%,
      rgba(7, 228, 114, 0) 60%,
      transparent 80%
    ),
    linear-gradient(
      180deg,
      #111a1e 0%,
      #111a1e 100%
    )
  `,

  color: "#ffffff",
  paddingTop: "60px",
  boxSizing: "border-box",

  "@media (max-width: 992px)": {
    "& .footerTop": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "40px",
    },

    "& .footerColumn": {
      minWidth: 0,
    },

    "& .footerBottomWrapper": {
      gridTemplateColumns: "1fr",
      rowGap: "25px",
    },

    "& .footerRight": {
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "20px",
    },
  },

  "@media (max-width: 768px)": {
    paddingTop: "40px",

    "& .footerTop": {
      gridTemplateColumns: "1fr",
      gap: "35px",
    },

    "& .footerColumn": {
      width: "100%",
    },

    "& .footerLogoText": {
      fontSize: "28px",
    },

    "& .footerBottomWrapper": {
      gridTemplateColumns: "1fr",
      rowGap: "20px",
    },

    "& .footerCopyright": {
      whiteSpace: "normal",
    },

    "& .footerRight": {
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "15px",
    },

    "& .footerLanguage": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
};

/* =========================================================
   TOP FOOTER
========================================================= */

const footerTop = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
  justifyContent: "space-between",
  alignItems: "start",
  gap: "80px",
  paddingBottom: "50px",
};

/* =========================================================
   LOGO
========================================================= */

const footerLogo = {
  minWidth: 0,
};

const footerLogoText = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "23px",
  lineHeight: 1.2,
  letterSpacing: "0.09em",
  color: "#ffffff",

  "& span": {
    color: "#17c964",
    fontFamily: "Montserrat, sans-serif",
  },
};

/* =========================================================
   FOOTER COLUMN
========================================================= */

const footerColumn = {
  display: "grid",
  gridAutoRows: "max-content",
  minWidth: 0,
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
};

/* =========================================================
   FOOTER HEADING
========================================================= */

const footerHeading = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: 1.3,
  color: "#ffffff",
  marginBottom: "24px",
};

/* =========================================================
   FOOTER LINKS
========================================================= */

const footerLink = {
  textDecoration: "none",
  color: "#bdbdbd",
  fontSize: "15px",
  marginBottom: "16px",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "#17c964",
  },
};

/* =========================================================
   SOCIAL ICONS
========================================================= */

const footerSocial = {
  display: "grid",
  gridTemplateColumns: "repeat(3, max-content)",
  gap: "16px",
  marginTop: "18px",

  "& svg": {
    fontSize: "22px",
    color: "#ffffff",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      color: "#17c964",
      transform: "scale(1.1)",
    },
  },
};

/* =========================================================
   BOTTOM FOOTER
========================================================= */

const footerBottom = {
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  padding: "28px 0",
  boxSizing: "border-box",
};

/* =========================================================
   BOTTOM WRAPPER
========================================================= */

const footerBottomWrapper = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "143px",
  alignItems: "center",
  boxSizing: "border-box",
  minWidth: 0,
};

/* =========================================================
   COPYRIGHT
========================================================= */

const footerCopyright = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",
  color: "#64757D",
  margin: 0,
  whiteSpace: "nowrap",
  flexShrink: 0,
};

/* =========================================================
   RIGHT SECTION
========================================================= */

const footerRight = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "28px",
  minWidth: 0,
  whiteSpace: "nowrap",
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "18px",

  "& a": {
    textDecoration: "none",
    color: "#8c8c8c",
    fontSize: "14px",
    lineHeight: "18px",
    whiteSpace: "nowrap",
    display: "inline-block",
    flexShrink: 0,
    transition: "0.3s",

    "&:hover": {
      color: "#ffffff",
    },
  },
};

/* =========================================================
   LANGUAGE
========================================================= */

const footerLanguage = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  whiteSpace: "nowrap",
  flexShrink: 0,

  "& p": {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#8c8c8c",
    cursor: "pointer",
    transition: "0.3s",
    margin: 0,
    whiteSpace: "nowrap",

    "&:hover": {
      color: "#ffffff",
    },
  },
};

/* =========================================================
   FOOTER COMPONENT
========================================================= */

const Footer = () => {
  return (
    <Box sx={footerWrapper}>
      <Container maxWidth="xl">

        {/* =====================================================
            TOP FOOTER
        ===================================================== */}

        <Box
          sx={footerTop}
          className="footerTop"
        >

          {/* ================= LOGO ================= */}

          <Box sx={footerLogo}>
            <Typography
              variant="h4"
              sx={footerLogoText}
              className="footerLogoText"
            >
              MyWork<span>24</span>
            </Typography>
          </Box>

          {/* ================= FOR BIDDERS ================= */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >
            <Typography sx={footerHeading}>
              For Bidders
            </Typography>

            <Link
              href="#"
              sx={footerLink}
            >
              Services
            </Link>

            <Link
              href="#"
              sx={footerLink}
            >
              Frequently Asked Questions
            </Link>

            <Link
              href="#"
              sx={footerLink}
            >
              News
            </Link>
          </Box>

          {/* ================= FOR CRAFTSMEN ================= */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >
            <Typography sx={footerHeading}>
              For Craftsmen
            </Typography>

            <Link
              href="#"
              sx={footerLink}
            >
              Frequently Asked Questions
            </Link>

            <Link
              href="#"
              sx={footerLink}
            >
              Artisan Subscription
            </Link>
          </Box>

          {/* ================= QUESTIONS ================= */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >
            <Typography sx={footerHeading}>
              Questions
            </Typography>

            <Link
              href="#"
              sx={footerLink}
            >
              About Us
            </Link>

            <Link
              href="#"
              sx={footerLink}
            >
              Contact Us
            </Link>

            {/* SOCIAL ICONS */}

            <Box sx={footerSocial}>
              <Facebook />
              <Instagram />
              <X />
            </Box>
          </Box>

        </Box>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <Box sx={footerBottom}>

          <Box
            sx={footerBottomWrapper}
            className="footerBottomWrapper"
          >

            {/* ================= COPYRIGHT ================= */}

            <Typography
              sx={footerCopyright}
              className="footerCopyright"
            >
              © Copyright 2024 by SUISSEPAK LOGISTIC Sagl.
              All rights reserved.
            </Typography>

            {/* ================= RIGHT SIDE ================= */}

            <Box
              sx={footerRight}
              className="footerRight"
            >

              <Link href="#">
                Terms and Conditions
              </Link>

              <Link href="#">
                Privacy Policy
              </Link>

              {/* ================= LANGUAGE ================= */}

              <Box
                sx={footerLanguage}
                className="footerLanguage"
              >
                <Typography>
                  English
                </Typography>

                <Typography>
                  •
                </Typography>

                <Typography>
                  French
                </Typography>

                <Typography>
                  •
                </Typography>

                <Typography>
                  Italian
                </Typography>
              </Box>

            </Box>

          </Box>

        </Box>

      </Container>
    </Box>
  );
};

export default Footer;