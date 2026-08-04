import { Box, Container } from '@mui/material'
import React from 'react'
import PostJobBanner from '../../assets/Components/PostJobBanner/PostJobBanner';
import { HomeWrapper } from '../../HomeWrapper/HomeWrapper';

function Home() {
  return (
    <HomeWrapper>
        <Box fontFamily="Montserrat">
            <Container>
                
                {/* THIS IS ONLY YOUR BANNER */}
                <Box mt={5}>
                   <PostJobBanner />
                </Box>

            </Container>
        </Box>
    </HomeWrapper>
  )
}

export default Home;