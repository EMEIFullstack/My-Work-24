import React from 'react';
import { Box } from '@mui/material';


import PostJobBanner from '../../Components/PostJobBanner/PostJobBanner';


import Hero from '../../Components/Hero/Hero';
import HowItWorks from '../../Components/HowItWork/HowItWork';

export default function Home() {
  return (
    <Box fontFamily="Montserrat">
        
  
        <Hero />
           <PostJobBanner />
        <HowItWorks />
        

     

    </Box>
  );
}