
// import React from "react";


// import "./footer.scss";


// import {
//   Box,
//   Container,
//   Typography,
//   Link,
// } from "@mui/material";

// import {
//   Facebook,
//   Instagram,
//   X,
// } from "@mui/icons-material";

// /* =========================
//    Footer Styles
// ========================= */

// const footerWrapper = {
//   position: "relative",
//   overflow: "hidden",

//   background: `
//     radial-gradient(
//       circle at 0% 0%,
//       rgba(2, 249, 121, 0.18) 0%,
//       rgba(1, 93, 47, 0.12) 20%,
//       rgba(0, 205, 99, 0) 40%,
//       rgba(7, 228, 114, 0) 60%,
//       transparent 80%
//     ),
//     linear-gradient(
//       180deg,
//       #111a1e 0%,
//       #111a1e 100%
//     )
//   `,

//   color: "#ffffff",
//   paddingTop: "60px",

//   /* Tablet */
//   "@media (max-width: 992px)": {
//     "& .footerTop": {
//       gridTemplateColumns: "repeat(2, 1fr)",
//       gap: "40px",
//     },

//     "& .footerColumn": {
//       minWidth: 0,
//     },

//     "& .footerBottomWrapper": {
//       gridTemplateColumns: "1fr",
//       justifyItems: "start",
//     },

//     "& .footerRight": {
//       gridTemplateColumns: "auto auto",
//       gap: "20px",
//     },
//   },

//   /* Mobile */
//   "@media (max-width: 768px)": {
//     paddingTop: "40px",

//     "& .footerTop": {
//       gridTemplateColumns: "1fr",
//       gap: "35px",
//     },

//     "& .footerColumn": {
//       width: "100%",
//     },

//     "& .footerLogoText": {
//       fontSize: "28px",
//     },

//     "& .footerRight": {
//       gridTemplateColumns: "1fr",
//       justifyItems: "start",
//       textAlign: "left",
//     },

//     "& .footerLanguage": {
//       gridTemplateColumns: "repeat(5, max-content)",
//     },
//   },
// };


// /* =========================
//    TOP FOOTER - GRID
// ========================= */

// const footerTop = {
//   display: "grid",

//   /*
//     Logo + 3 columns
//   */
//   gridTemplateColumns: "1.2fr 1fr 1fr 1fr",

//   justifyContent: "space-between",

//   alignItems: "start",

//   gap: "80px",

//   paddingBottom: "50px",
// };


// /* =========================
//    LOGO
// ========================= */

// const footerLogo = {
//   minWidth: 0,
// };

// const footerLogoText = {
//   fontFamily: "Montserrat, sans-serif",
//   fontStyle: "normal",
//   fontWeight: 700,
//   fontSize: "23px",
//   lineHeight: 1.2,
//   letterSpacing: "0.09em",

//   color: "#ffffff",

//   "& span": {
//     color: "#17c964",
//     fontFamily: "Montserrat, sans-serif",
//   },
// };


// /* =========================
//    COLUMN - GRID
// ========================= */

// const footerColumn = {
//   display: "grid",

//   /*
//     Each item gets its own row
//   */
//   gridAutoRows: "max-content",

//   minWidth: 0,

  
//   fontFamily: "Inter, sans-serif",
//   fontStyle: "normal",
//   fontWeight: 500,
//   fontSize: "16px",
//   lineHeight: "19px",
// };


// /* =========================
//    HEADING
// ========================= */

// const footerHeading = {
//   fontFamily: "Inter, sans-serif",
//   fontStyle: "normal",
//   fontWeight: 700,
//   fontSize: "18px",
//   lineHeight: 1.3,

//   color: "#ffffff",

//   marginBottom: "24px",
// };


// /* =========================
//    LINKS
// ========================= */

// const footerLink = {
//   textDecoration: "none",

//   color: "#bdbdbd",

//   fontSize: "15px",

//   marginBottom: "16px",

//   transition: "all 0.3s ease",

//   "&:hover": {
//     color: "#17c964",
//   },
// };


// /* =========================
//    SOCIAL ICONS - GRID
// ========================= */

// const footerSocial = {
//   display: "grid",

//   gridTemplateColumns: "repeat(3, max-content)",

//   gap: "16px",

//   marginTop: "18px",

//   "& svg": {
//     fontSize: "22px",

//     color: "#ffffff",

//     cursor: "pointer",

//     transition: "0.3s",

//     "&:hover": {
//       color: "#17c964",

//       transform: "scale(1.1)",
//     },
//   },
// };


// /* =========================
//    BOTTOM FOOTER
// ========================= */

// const footerBottom = {
//   borderTop: "1px solid rgba(255, 255, 255, 0.08)",

//   padding: "28px 0",
// };


// /* =========================
//    BOTTOM WRAPPER - GRID
// ========================= */

// const footerBottomWrapper = {
//   display: "grid",

//   /*
//     Left = Copyright
//     Right = Links + Language
//   */
//   gridTemplateColumns: "1fr auto",

//   alignItems: "center",

//   gap: "20px",
// };


// /* =========================
//    COPYRIGHT
// ========================= */

// const footerCopyright = {
//   fontFamily: "Inter, sans-serif",
//   fontStyle: "normal",
//   fontWeight: 500,

//   fontSize: "15px",

//   lineHeight: "18px",

//   color: "#64757D",
// };


// /* =========================
//    RIGHT SECTION - GRID
// ========================= */

// const footerRight = {
//   display: "grid",

//   /*
//     Terms | Privacy | Language
//   */
//   gridTemplateColumns: "auto auto auto",

//   alignItems: "center",

//   gap: "35px",

//   fontFamily: "Inter, sans-serif",

//   fontStyle: "normal",

//   fontWeight: 500,

//   fontSize: "15px",

//   lineHeight: "18px",

//   textAlign: "center",

//   "& a": {
//     textDecoration: "none",

//     color: "#8c8c8c",

//     fontSize: "14px",

//     transition: "0.3s",

//     "&:hover": {
//       color: "#ffffff",
//     },
//   },
// };


// /* =========================
//    LANGUAGE - GRID
// ========================= */

// const footerLanguage = {
//   display: "grid",

//   gridTemplateColumns: "repeat(5, max-content)",

//   alignItems: "center",

//   gap: "10px",

//   "& p": {
//     fontSize: "14px",

//     color: "#8c8c8c",

//     cursor: "pointer",

//     transition: "0.3s",

//     margin: 0,

//     "&:hover": {
//       color: "#ffffff",
//     },
//   },
// };


// /* =========================
//    FOOTER COMPONENT
// ========================= */

// const Footer = () => {
//   return (
//     <Box sx={footerWrapper}>

//       {/* =========================
//           TOP FOOTER
//       ========================= */}

//       <Container fixed>

//         <Box sx={footerTop} className="footerTop">

//           {/* Logo */}

//           <Box sx={footerLogo}>

//             <Typography
//               variant="h4"
//               sx={footerLogoText}
//               className="footerLogoText"
//             >
//               MyWork<span>24</span>
//             </Typography>

//           </Box>


//           {/* For Bidders */}

//           <Box
//             sx={footerColumn}
//             className="footerColumn"
//           >

//             <Typography sx={footerHeading}>
//               For Bidders
//             </Typography>

//             <Link href="#" sx={footerLink}>
//               Services
//             </Link>

//             <Link href="#" sx={footerLink}>
//               Frequently Asked Questions
//             </Link>

//             <Link href="#" sx={footerLink}>
//               News
//             </Link>

//           </Box>


//           {/* For Craftsmen */}

//           <Box
//             sx={footerColumn}
//             className="footerColumn"
//           >

//             <Typography sx={footerHeading}>
//               For Craftsmen
//             </Typography>

//             <Link href="#" sx={footerLink}>
//               Frequently Asked Questions
//             </Link>

//             <Link href="#" sx={footerLink}>
//               Artisan Subscription
//             </Link>

//           </Box>


//           {/* Questions */}

//           <Box
//             sx={footerColumn}
//             className="footerColumn"
//           >

//             <Typography sx={footerHeading}>
//               Questions
//             </Typography>

//             <Link href="#" sx={footerLink}>
//               About Us
//             </Link>

//             <Link href="#" sx={footerLink}>
//               Contact Us
//             </Link>


//             {/* Social Icons */}

//             <Box sx={footerSocial}>

//               <Facebook />

//               <Instagram />

//               <X />

//             </Box>

//           </Box>

//         </Box>

//       </Container>


//       {/* =========================
//           BOTTOM FOOTER
//       ========================= */}

//       <Box sx={footerBottom}>

//         <Container maxWidth="xl">

//           <Box
//             sx={footerBottomWrapper}
//             className="footerBottomWrapper"
//           >

//             {/* Copyright */}

//             <Typography sx={footerCopyright}>
//               © Copyright 2024 by SUISSEPAK LOGISTIC Sagl.
//               All rights reserved.
//             </Typography>


//             {/* Right Side */}

//             <Box
//               sx={footerRight}
//               className="footerRight"
//             >

//               <Link href="#">
//                 Terms and Conditions
//               </Link>

//               <Link href="#">
//                 Privacy Policy
//               </Link>


//               {/* Language */}

//               <Box
//                 sx={footerLanguage}
//                 className="footerLanguage"
//               >

//                 <Typography>
//                   English
//                 </Typography>

//                 <Typography>
//                   •
//                 </Typography>

//                 <Typography>
//                   French
//                 </Typography>

//                 <Typography>
//                   •
//                 </Typography>

//                 <Typography>
//                   Italian
//                 </Typography>

//               </Box>

//             </Box>

//           </Box>

//         </Container>

//       </Box>

//     </Box>
//   );
// };

// export default Footer;























import React from "react";



import {
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  X,
} from "@mui/icons-material";

/* =========================
   Footer Styles
========================= */

const footerWrapper = {
  position: "relative",
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

  /* Tablet */
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
      justifyItems: "start",
    },

    "& .footerRight": {
      gridTemplateColumns: "auto auto",
      gap: "20px",
    },
  },

  /* Mobile */
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

    "& .footerRight": {
      gridTemplateColumns: "1fr",
      justifyItems: "start",
      textAlign: "left",
    },

    "& .footerLanguage": {
      gridTemplateColumns: "repeat(5, max-content)",
    },
  },
};


/* =========================
   TOP FOOTER - GRID
========================= */

const footerTop = {
  display: "grid",

  /*
    Logo + 3 columns
  */
  gridTemplateColumns: "1.2fr 1fr 1fr 1fr",

  justifyContent: "space-between",

  alignItems: "start",

  gap: "80px",

  paddingBottom: "50px",
};


/* =========================
   LOGO
========================= */

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


/* =========================
   COLUMN - GRID
========================= */

const footerColumn = {
  display: "grid",

  /*
    Each item gets its own row
  */
  gridAutoRows: "max-content",

  minWidth: 0,

  
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
};


/* =========================
   HEADING
========================= */

const footerHeading = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: 1.3,

  color: "#ffffff",

  marginBottom: "24px",
};


/* =========================
   LINKS
========================= */

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


/* =========================
   SOCIAL ICONS - GRID
========================= */

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


/* =========================
   BOTTOM FOOTER
========================= */

const footerBottom = {
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",

  padding: "28px 0",
};


/* =========================
   BOTTOM WRAPPER - GRID
========================= */

const footerBottomWrapper = {
  display: "grid",

  /*
    Left = Copyright
    Right = Links + Language
  */
  gridTemplateColumns: "1fr auto",

  alignItems: "center",

  gap: "20px",
};


/* =========================
   COPYRIGHT
========================= */

const footerCopyright = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,

  fontSize: "15px",

  lineHeight: "18px",

  color: "#64757D",
};


/* =========================
   RIGHT SECTION - GRID
========================= */

const footerRight = {
  display: "grid",

  /*
    Terms | Privacy | Language
  */
  gridTemplateColumns: "auto auto auto",

  alignItems: "center",

  gap: "35px",

  fontFamily: "Inter, sans-serif",

  fontStyle: "normal",

  fontWeight: 500,

  fontSize: "15px",

  lineHeight: "18px",

  textAlign: "center",

  "& a": {
    textDecoration: "none",

    color: "#8c8c8c",

    fontSize: "14px",

    transition: "0.3s",

    "&:hover": {
      color: "#ffffff",
    },
  },
};


/* =========================
   LANGUAGE - GRID
========================= */

const footerLanguage = {
  display: "grid",

  gridTemplateColumns: "repeat(5, max-content)",

  alignItems: "center",

  gap: "10px",

  "& p": {
    fontSize: "14px",

    color: "#8c8c8c",

    cursor: "pointer",

    transition: "0.3s",

    margin: 0,

    "&:hover": {
      color: "#ffffff",
    },
  },
};


/* =========================
   FOOTER COMPONENT
========================= */

const Footer = () => {
  return (
    <Box sx={footerWrapper}>

      {/* =========================
          TOP FOOTER
      ========================= */}

      <Container fixed>

        <Box sx={footerTop} className="footerTop">

          {/* Logo */}

          <Box sx={footerLogo}>

            <Typography
              variant="h4"
              sx={footerLogoText}
              className="footerLogoText"
            >
              MyWork<span>24</span>
            </Typography>

          </Box>


          {/* For Bidders */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >

            <Typography sx={footerHeading}>
              For Bidders
            </Typography>

            <Link href="#" sx={footerLink}>
              Services
            </Link>

            <Link href="#" sx={footerLink}>
              Frequently Asked Questions
            </Link>

            <Link href="#" sx={footerLink}>
              News
            </Link>

          </Box>


          {/* For Craftsmen */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >

            <Typography sx={footerHeading}>
              For Craftsmen
            </Typography>

            <Link href="#" sx={footerLink}>
              Frequently Asked Questions
            </Link>

            <Link href="#" sx={footerLink}>
              Artisan Subscription
            </Link>

          </Box>


          {/* Questions */}

          <Box
            sx={footerColumn}
            className="footerColumn"
          >

            <Typography sx={footerHeading}>
              Questions
            </Typography>

            <Link href="#" sx={footerLink}>
              About Us
            </Link>

            <Link href="#" sx={footerLink}>
              Contact Us
            </Link>


            {/* Social Icons */}

            <Box sx={footerSocial}>

              <Facebook />

              <Instagram />

              <X />

            </Box>

          </Box>

        </Box>

      </Container>


      {/* =========================
          BOTTOM FOOTER
      ========================= */}

      <Box sx={footerBottom}>

        <Container maxWidth="xl">

          <Box
            sx={footerBottomWrapper}
            className="footerBottomWrapper"
          >

            {/* Copyright */}

            <Typography sx={footerCopyright}>
              © Copyright 2024 by SUISSEPAK LOGISTIC Sagl.
              All rights reserved.
            </Typography>


            {/* Right Side */}

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


              {/* Language */}

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

        </Container>

      </Box>

    </Box>
  );
};

export default Footer;