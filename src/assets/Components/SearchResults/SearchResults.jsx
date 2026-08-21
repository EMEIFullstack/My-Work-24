// import React from 'react';
// import { Box, Typography, Pagination, IconButton } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// import img1 from '../../work1.png';
// import img2 from '../../work2.png';
// import img3 from '../../work3.png';




// export default function SearchResults() {
//     const myImages = [img1, img2, img3];
//   return (
//     <Box className="search-sec">
      
//       {/* Header Area */}
//       <Box className="search-header">
//         <Typography variant="h5" className="search-title">Search Result</Typography>
//         <Typography variant="body2" className="search-count">12 Results Found</Typography>
//       </Box>

//       {/* Cards Area */}
//       <Box className="search-cards-wrapper">
//         {[1, 2, 3].map((item, index) => (
//           <Box key={index} className="result-card">
            
//             <img src="https://via.placeholder.com/150x100.png" alt="work" className="result-img" />
            
//             <Box className="result-text-box">
//               <Typography variant="subtitle1" className="company-name">Company name goes here</Typography>
              
//               <Box className="loc-wrap">
//                 <LocationOnOutlinedIcon className="loc-icon" />
//                 <Typography variant="caption" className="loc-label">Project Location</Typography>
//               </Box>
              
//               <Typography variant="body2" className="loc-address">6391 Elgin St. Celina, Delaware 10299</Typography>
//             </Box>

//             <IconButton className="arrow-btn">
//               <ArrowOutwardIcon className="arrow-icon" />
//             </IconButton>
            
//           </Box>
//         ))}
//       </Box>

//       {/* Pagination Area */}
//       <Box className="pagination-wrap">
//         <Pagination count={6} variant="outlined" shape="circular" className="page-ctrl" />
//       </Box>

//     </Box>
//   );
// }




// import React from 'react';
// import { Box, Typography, Pagination, IconButton } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// // 1. Import your images from the assets folder right here
// import img1 from '../../work1.png';
// import img2 from '../../work2.png';
// import img3 from '../../work3.png';

// export default function SearchResults() {
  
//   // 2. Put your imported images into this array instead of [1, 2, 3]
//   const myImages = [img1, img2, img3];

//   return (
//     <Box className="search-sec">
      
//       {/* Header Area */}
//       <Box className="search-header">
//         <Typography variant="h5" className="search-title">Search Result</Typography>
//         <Typography variant="body2" className="search-count">12 Results Found</Typography>
//       </Box>

//       {/* Cards Area */}
//       <Box className="search-cards-wrapper">
        
//         {/* 3. Map over your new 'myImages' array instead of the numbers */}
//         {myImages.map((imageSource, index) => (
//           <Box key={index} className="result-card">
            
//             {/* 4. Use 'imageSource' here instead of the placeholder URL */}
//             <img src={imageSource} alt="work" className="result-img" />
            
//             <Box className="result-text-box">
//               <Typography variant="subtitle1" className="company-name">Company name goes here</Typography>
              
//               <Box className="loc-wrap">
//                 <LocationOnOutlinedIcon className="loc-icon" />
//                 <Typography variant="caption" className="loc-label">Project Location</Typography>
//               </Box>
              
//               <Typography variant="body2" className="loc-address">6391 Elgin St. Celina, Delaware 10299</Typography>
//             </Box>

//             <IconButton className="arrow-btn">
//               <ArrowOutwardIcon className="arrow-icon" />
//             </IconButton>
            
//           </Box>
//         ))}
//       </Box>

//       {/* Pagination Area */}
//       <Box className="pagination-wrap">
//         <Pagination count={6} variant="outlined" shape="circular" className="page-ctrl" />
//       </Box>

//     </Box>
//   );
// }











// ____









// import React from 'react';
// import { Box, Typography, Pagination, IconButton } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { SearchWrapper } from './SearchWrapper'; 

// import img1 from '../../work1.png';
// import img2 from '../../work2.png';
// import img3 from '../../work3.png';

// export default function SearchResults() {
  
//   const myImages = [img1, img2, img3];

//   return (
//     <SearchWrapper>
//       <Box className="search-sec">
        
//         <Box className="search-header">
//           <Typography variant="h5" className="search-title">Search Result</Typography>
//           <Typography variant="body2" className="search-count">12 Results Found</Typography>
//         </Box>

//         <Box className="search-cards-wrapper">
//           {myImages.map((imageSource, index) => (
//             <Box key={index} className="result-card">
              
//               <img src={imageSource} alt="work" className="result-img" />
              
//               <Box className="result-text-box">
//                 <Typography variant="subtitle1" className="company-name">Company name goes here</Typography>
//                 <Box className="loc-wrap">
//                   <LocationOnOutlinedIcon className="loc-icon" />
//                   <Typography variant="caption" className="loc-label">Project Location</Typography>
//                 </Box>
//                 <Typography variant="body2" className="loc-address">6391 Elgin St. Celina, Delaware 10299</Typography>
//               </Box>

//               <IconButton className="arrow-btn">
//                 <ArrowOutwardIcon className="arrow-icon" />
//               </IconButton>
              
//             </Box>
//           ))}
//         </Box>

//         <Box className="pagination-wrap">
//           <Pagination count={6} variant="outlined" shape="circular" className="page-ctrl" />
//         </Box>

//       </Box>
//     </SearchWrapper>
//   );
// }


// import React, { useState } from 'react';
// import { Box, Typography, Pagination, IconButton } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { SearchWrapper } from './SearchWrapper'; 

// import img1 from '../../work1.png';
// import img2 from '../../work2.png';
// import img3 from '../../work3.png';

// export default function SearchResults() {
//   // 1. Add state to remember which page the user is currently on
//   const [page, setPage] = useState(1);

//   // 2. Create a mock list of 18 items so you have 6 pages of data to click through.
//   // This automatically reuses your 3 images.
//   const allData = Array.from({ length: 18 }).map((_, index) => {
//     const images = [img1, img2, img3];
//     return {
//       id: index + 1,
//       image: images[index % 3], 
//       companyName: `Company Name ${index + 1}`,
//       address: `6391 Elgin St. Celina, Delaware 10299`
//     };
//   });

//   // 3. Math to figure out which 3 cards to show based on the current page
//   const itemsPerPage = 3;
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = allData.slice(startIndex, endIndex); // This extracts just the 3 items for the active page

//   // 4. Function that triggers when you click a page number
//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <SearchWrapper>
//       <Box className="search-sec">
        
//         <Box className="search-header">
//           <Typography variant="h5" className="search-title">Search Result</Typography>
//           <Typography variant="body2" className="search-count">18 Results Found</Typography>
//         </Box>

//         <Box className="search-cards-wrapper">
          
//           {/* 5. Map over "currentItems" instead of your static images array */}
//           {currentItems.map((item) => (
//             <Box key={item.id} className="result-card">
              
//               <img src={item.image} alt="work" className="result-img" />
              
//               <Box className="result-text-box">
//                 <Typography variant="subtitle1" className="company-name">{item.companyName}</Typography>
//                 <Box className="loc-wrap">
//                   <LocationOnOutlinedIcon className="loc-icon" />
//                   <Typography variant="caption" className="loc-label">Project Location</Typography>
//                 </Box>
//                 <Typography variant="body2" className="loc-address">{item.address}</Typography>
//               </Box>

//               <IconButton className="arrow-btn">
//                 <ArrowOutwardIcon className="arrow-icon" />
//               </IconButton>
              
//             </Box>
//           ))}
//         </Box>

//         <Box className="pagination-wrap">
//           {/* 6. Hook up the Pagination component to the state */}
//           <Pagination 
//             count={6} 
//             page={page} 
//             onChange={handlePageChange} 
//             variant="outlined" 
//             shape="circular" 
//             className="page-ctrl" 
//           />
//         </Box>

//       </Box>
//     </SearchWrapper>
//   );
// }











































import React, { useState } from 'react';
import { Box, Typography, Pagination, IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SearchWrapper } from './SearchWrapper'; 

// Import all 6 images
import img1 from '../../work1.png';
import img2 from '../../work2.png';
import img3 from '../../work3.png';
import img4 from '../../work4.png';
import img5 from '../../work5.png';
import img6 from '../../work6.png';

export default function SearchResults() {
  // 1. Add state to remember which page the user is currently on
  const [page, setPage] = useState(1);

  // 2. Create a mock list of 18 items so you have 6 pages of data to click through.
  // This automatically reuses your 6 images.
  const allData = Array.from({ length: 18 }).map((_, index) => {
    const images = [img1, img2, img3, img4, img5, img6];
    return {
      id: index + 1,
      image: images[index % 6], // Now cycles through all 6 images!
      companyName: `MY WORK ${index + 1}`,
      address: `6391 Elgin St. Celina, Delaware 10299`
    };
  });

  // 3. Math to figure out which 3 cards to show based on the current page
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allData.slice(startIndex, endIndex); // This extracts just the 3 items for the active page

  // 4. Function that triggers when you click a page number
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Added this so it scrolls to top on page change!
  };

  return (
    <SearchWrapper>
      <Box className="search-sec">
        
        <Box className="search-header">
          <Typography variant="h5" className="search-title">Search Result</Typography>
          <Typography variant="body2" className="search-count">12 Results Found</Typography>
        </Box>

        <Box className="search-cards-wrapper">
          
          {/* 5. Map over "currentItems" instead of your static images array */}
          {currentItems.map((item) => (
            <Box key={item.id} className="result-card">
              
              <img src={item.image} alt="work" className="result-img" />
              
              <Box className="result-text-box">
                <Typography variant="subtitle1" className="company-name">{item.companyName}</Typography>
                <Box className="loc-wrap">
                  <LocationOnOutlinedIcon className="loc-icon" />
                  <Typography variant="caption" className="loc-label">Project Location</Typography>
                </Box>
                <Typography variant="body2" className="loc-address">{item.address}</Typography>
              </Box>

              <IconButton className="arrow-btn">
                <ArrowOutwardIcon className="arrow-icon" />
              </IconButton>
              
            </Box>
          ))}
        </Box>

        <Box className="pagination-wrap">
          {/* 6. Hook up the Pagination component to the state */}
          <Pagination 
            count={4} 
            page={page} 
            onChange={handlePageChange} 
            variant="outlined" 
            shape="circular" 
            className="page-ctrl" 
          />
        </Box>

      </Box>
    </SearchWrapper>
  );
}

