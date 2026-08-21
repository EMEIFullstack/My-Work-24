import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { HomeWrapper } from '../../HomeWrapper/HomeWrapper';
import QuestionsSec from '../../Components/FAQs/QuestionsSec';
import NewsSlider from '../../Components/News/NewsSlider';
import PostJobBanner from '../../assets/Components/PostJobBanner/PostJobBanner';



function Home() {

    const data = [
        {
            title: "Lorem Ipsum is simply dummy text of the printing?",
            para: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },

        {
            title: "Lorem Ipsum is simply dummy text of the printing?",
            para: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        },

        {
            title: "Lorem Ipsum is simply dummy text of the printing?",
            para: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }

    ]

    const image = "src/assets/Ellipse 11.png";

  return (
    <HomeWrapper>
        <Box fontFamily="Montserrat">
          {/* <Hero /> */}
        {/* <HowItWorks /> */}
        
        {/* Your Post Job Banner Section */}
        <Container>
            <Box mt={5} mb={5}>
               <PostJobBanner />
            </Box>
        </Container>
            <Container fixed>
            <Typography variant="h3" align='center'>
                Frequently Asked{" "} <span className='span'>Questions
        </span>
        </Typography>
        <Typography variant="body1" mt={2}>
            It is a long established fact that a reader will be distracted by the readable content of a page
        </Typography>
        <img src={image} alt="Description" className='image'/>
        {data.map((item, idx) => (
            <QuestionsSec key={idx} title={item.title} para={item.para} />
        ))}
        <Box className="button">
          <Button className='btn'>View More</Button>
        </Box>
        </Container>
        <section className='news-section'>
          <Container fixed>
            <Typography variant='h3' align='center' className='news'>News</Typography>
            <Typography variant='body1'>It is a long established fact that a reader will be distracted by the readable content of a page</Typography>
            <NewsSlider/>
          </Container>
        </section>
    </Box>
    </HomeWrapper>
  )
}

export default Home

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
// import React from 'react';
// import { Box, Container } from '@mui/material';

// 1. Import your components

// 2. Import Sagarika's components
// import Hero from '../../Components/Hero/Hero';
// import HowItWorks from '../../Components/HowItWork/HowItWork';

// export default function Home() {
//   return (
//     <Box fontFamily="Montserrat">
        
//         {/* Sagarika's Hero & How It Works Sections */}
        

//     </Box>
//   );
// }


