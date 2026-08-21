import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { BannerWrapper } from './BannerWrapper'; // <-- Importing your new CSS!

export default function PostJobBanner() {
  return (
    <BannerWrapper>
      <Box className="post-banner">
        <Box>
          <Typography variant="h3" className="banner-title">
            Post Your <span className="span-white">Job</span>
          </Typography>
          <Typography variant="body1" className="banner-desc">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </Typography>
        </Box>
        <Box>
          <Button className="btn banner-btn">Post Now</Button>
        </Box>
      </Box>
    </BannerWrapper>
  );
}