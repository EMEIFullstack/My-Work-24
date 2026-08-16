// import React from 'react';
import { Box, Container } from '@mui/material';
import SearchResults from '../../assets/Components/SearchResults/SearchResults';

function SearchPage() {
  return (
    <Box fontFamily="Montserrat">
        <Container>
            
            <Box mt={5}>
               <SearchResults />
            </Box>

        </Container>
    </Box>
  )
}

export default SearchPage;


// import React, { useState } from 'react';
// import { Box, Typography, Pagination, IconButton } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { SearchWrapper } from './SearchWrapper'; 

// // 1. Import your new Map
// import MapSection from '../../assets/Components/MapSection/MapSection';

// // 2. Import your 6 images
// // 2. Import your 6 images
// import img1 from '../../assets/work1.png';
// import img2 from '../../assets/work2.png';
// import img3 from '../../assets/work3.png';
// import img4 from '../../assets/work4.png';
// import img5 from '../../assets/work5.png';
// import img6 from '../../assets/work6.png';

// export default function SearchResults() {
//   // Pagination State
//   const [page, setPage] = useState(1);

//   // Generate your 18 cards of dummy data
//   const allData = Array.from({ length: 18 }).map((_, index) => {
//     const images = [img1, img2, img3, img4, img5, img6];
//     return {
//       id: index + 1,
//       image: images[index % 6],
//       companyName: `Company Name ${index + 1}`,
//       address: `6391 Elgin St. Celina, Delaware 10299`
//     };
//   });

//   // Math for showing 3 cards per page
//   const itemsPerPage = 3;
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = allData.slice(startIndex, endIndex);

//   // Handle clicking a new page number
//   const handlePageChange = (event, value) => {
//     setPage(value);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Box>
//       {/* ======================================= */}
//       {/* THE MAP IS NOW PERFECTLY PLACED HERE    */}
//       {/* ======================================= */}
//       <MapSection />


//       {/* ======================================= */}
//       {/* YOUR SEARCH RESULTS REMAIN UNAFFECTED   */}
//       {/* ======================================= */}
//       <SearchWrapper>
//         <Box className="search-sec">
          
//           <Box className="search-header">
//             <Typography variant="h5" className="search-title">Search Result</Typography>
//             <Typography variant="body2" className="search-count">18 Results Found</Typography>
//           </Box>

//           <Box className="search-cards-wrapper">
//             {currentItems.map((item) => (
//               <Box key={item.id} className="result-card">
                
//                 <img src={item.image} alt="work" className="result-img" />
                
//                 <Box className="result-text-box">
//                   <Typography variant="subtitle1" className="company-name">{item.companyName}</Typography>
//                   <Box className="loc-wrap">
//                     <LocationOnOutlinedIcon className="loc-icon" />
//                     <Typography variant="caption" className="loc-label">Project Location</Typography>
//                   </Box>
//                   <Typography variant="body2" className="loc-address">{item.address}</Typography>
//                 </Box>

//                 <IconButton className="arrow-btn">
//                   <ArrowOutwardIcon className="arrow-icon" />
//                 </IconButton>
                
//               </Box>
//             ))}
//           </Box>

//           <Box className="pagination-wrap">
//             <Pagination 
//               count={6} 
//               page={page} 
//               onChange={handlePageChange} 
//               variant="outlined" 
//               shape="circular" 
//               className="page-ctrl" 
//             />
//           </Box>

//         </Box>
//       </SearchWrapper>
//     </Box>
//   );
// }