import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import QuestionsSec from '../../assets/Components/QuestionsSec/QuestionsSec'
import NewsSlider from '../../assets/Components/SliderComponent/NewsSlider';
import { HomeWrapper } from '../../HomeWrapper/HomeWrapper';

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

    // const image = "./Ellipse 11.png";

  return (
    <HomeWrapper>
        <Box fontFamily="Montserrat">
            <Container>
            <Typography variant="h3" align='center'>
                Frequently Asked{" "} <span className='span'>Questions
        </span>
        </Typography>
        <Typography variant="body1" mt={2}>
            It is a long established fact that a reader will be distracted by the readable content of a page
        </Typography>
        {/* <img src={image} alt="Description" className='image'/> */}
        {data.map((item, idx) => (
            <QuestionsSec key={idx} title={item.title} para={item.para} />
        ))}
        <Box className="button">
          <Button className='btn'>View More</Button>
        </Box>
        </Container>
        <section className='news-section'>
          <Container>
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