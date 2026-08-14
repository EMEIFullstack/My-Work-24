// import { Typography, Box, styled } from "@mui/material";

// const SectionHeadingWrapper = styled(Box)`
//   .sectionHeading {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;

//   .title {
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight: 800;
//     font-size: 49px;
//     letter-spacing: -0.02em;
//     color: #061418;
//     line-height: 1.2;
//     width: 100%; // Ensures containment inside the flex track
//   }

//   .highlightWord {
//     position: relative;
//     color: #21C45D;
//     display: inline-block;
//     white-space: nowrap; // Prevents the highlighted word from accidentally breaking onto two lines
//   }

//   .wave {
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: -8px; // Pushes it just below the text boundary
//     width: 100%;
//     height: 20px; // Controls how deep the underline curve looks
//   }
// }

// .centerHeading {
//   text-align: center;
  
//   .title {
//     margin: 0 auto;
//   }
// }

// @media(max-width:1200px) {
//   .sectionHeading {
//     .title {
//       font-size: 44px !important;
//     }
//   }
// }

// @media(max-width:768px) {
//   .sectionHeading {
//     .title {
//       font-size: 38px !important;
//     }
//   }
// }

// @media(max-width:500px) {
//   .sectionHeading {
//     .title {
//       font-size: 30px !important;
//     }
//   }
// }
// `


// const SectionHeading = ({
//   line1 = "",
//   line2 = "",
//   highlight = "",
//   line3 = "",
//   center = false,
// }) => {
//   return (
//     <SectionHeadingWrapper> 
//       <Box className={`sectionHeading ${center ? "centerHeading" : ""}`}>
//       {line1 && (
//         <Typography variant="h1" className="title">
//           {line1}
//         </Typography>
//       )}

//       {(line2 || highlight) && (
//         <Typography variant="h1" className="title">
//           {line2}{" "}
//           <span className="highlightWord">
//             {highlight}
//             <svg
//               className="wave"
//               viewBox="0 0 100 20"
//               preserveAspectRatio="none"
//             >
//             <path
//   d="M0 10
//      C5 2,10 2,15 10
//      S25 18,35 10
//      S45 2,55 10
//      S65 18,75 10
//      S85 2,95 10
//      S100 18,100 10"
//   fill="none"
//   stroke="#20C65A"
//   strokeWidth="2.5"
//   strokeLinecap="round"
// />
//             </svg>
//           </span>
//         </Typography>
//       )}

//       {line3 && (
//         <Typography variant="h1" className="title">
//           {line3}
//         </Typography>
//       )}
//     </Box>
//     </SectionHeadingWrapper>
//   );
// };

// export default SectionHeading;
