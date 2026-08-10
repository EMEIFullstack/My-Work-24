import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LearnMoreBtn = () => {
  return (
    <Box
      sx={{
        m: '12px',
        px: 3,
        height: '68px', 
        borderRadius: '100px', // Perfect pill shape
       
        background: 'linear-gradient(180deg, rgba(38, 30, 25, 0.72) 0%, rgba(26, 20, 16, 0.92) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#FFFFFF',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(180deg, rgba(38, 30, 25, 0.85) 0%, rgba(26, 20, 16, 0.98) 100%)',
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          color: '#FFFFFF',
          letterSpacing: '0.1px',
        }}
      >
        Learn More
      </Typography>
      <ArrowForwardIcon sx={{ fontSize: 22, color: '#FFFFFF' }} />
    </Box>
  );
};

export default LearnMoreBtn;