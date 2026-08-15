import React from 'react';
import { Box, Typography, Pagination, IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function SearchResults() {
  return (
    <Box className="search-sec">
      
      {/* Header Area */}
      <Box className="search-header">
        <Typography variant="h5" className="search-title">Search Result</Typography>
        <Typography variant="body2" className="search-count">12 Results Found</Typography>
      </Box>

      {/* Cards Area */}
      <Box className="search-cards-wrapper">
        {[1, 2, 3].map((item, index) => (
          <Box key={index} className="result-card">
            
            <img src="https://via.placeholder.com/150x100.png" alt="work" className="result-img" />
            
            <Box className="result-text-box">
              <Typography variant="subtitle1" className="company-name">Company name goes here</Typography>
              
              <Box className="loc-wrap">
                <LocationOnOutlinedIcon className="loc-icon" />
                <Typography variant="caption" className="loc-label">Project Location</Typography>
              </Box>
              
              <Typography variant="body2" className="loc-address">6391 Elgin St. Celina, Delaware 10299</Typography>
            </Box>

            <IconButton className="arrow-btn">
              <ArrowOutwardIcon className="arrow-icon" />
            </IconButton>
            
          </Box>
        ))}
      </Box>

      {/* Pagination Area */}
      <Box className="pagination-wrap">
        <Pagination count={6} variant="outlined" shape="circular" className="page-ctrl" />
      </Box>

    </Box>
  );
}