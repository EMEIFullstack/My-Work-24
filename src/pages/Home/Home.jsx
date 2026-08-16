
// import { Box, Container } from '@mui/material'
// import React from 'react'
// import PostJobBanner from '../../assets/Components/PostJobBanner/PostJobBanner';
// import { HomeWrapper } from '../../HomeWrapper/HomeWrapper';

// function Home() {
//   return (
//     <HomeWrapper>
//         <Box fontFamily="Montserrat">
//             <Container>
                
//                 {/* THIS IS ONLY YOUR BANNER */}
//                 <Box mt={5}>
//                    <PostJobBanner />
//                 </Box>

//             </Container>
//         </Box>
//     </HomeWrapper>
//   )
// }
import React from 'react';
import { Box, Container } from '@mui/material';

// 1. Import your components
import PostJobBanner from '../../assets/Components/PostJobBanner/PostJobBanner';

// 2. Import Sagarika's components
import Hero from '../../Components/Hero/Hero';
import HowItWorks from '../../Components/HowItWork/HowItWork';

export default function Home() {
  return (
    <Box fontFamily="Montserrat">
        
        {/* Sagarika's Hero & How It Works Sections */}
        <Hero />
        <HowItWorks />
        
        {/* Your Post Job Banner Section */}
        <Container>
            <Box mt={5} mb={5}>
               <PostJobBanner />
            </Box>
        </Container>

    </Box>
  );
}

