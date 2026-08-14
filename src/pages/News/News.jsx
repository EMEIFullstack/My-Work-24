import { Box, Container, Typography } from '@mui/material'
import { HomeWrapper } from '../../HomeWrapper/HomeWrapper';
import React from 'react'
import NewsPage from '../../Components/NewsPage/NewsPage';

function News() {


    const data = [
        {
            id: 1,
            image: "src/assets/1st card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 2,
            image: "src/assets/2nd card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 3,
            image: "src/assets/3rd card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 4,
            image: "src/assets/4th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 5,
            image: "src/assets/5th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 6,
            image: "src/assets/6th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 7,
            image: "src/assets/7th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 8,
            image: "src/assets/8th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        },
        {
            id: 9,
            image: "src/assets/9th card.png",
            date: "26 Sep, 2024",
            title: "Lorem Ipsum is simply dummy text of the ",
            para: "It is a long established fact that a reader will be distracted by the"
        }
    ];

    const image= "src/assets/yellow elipse.png"
    const image1= "src/assets/yellow graphic.png"
    const image2= "src/assets/greem graphic.png"
    const image3= "src/assets/Group 1707489997.png"

  return (
    <HomeWrapper>
    <Box>
        <img src={image} alt="elipse" className='elipse'/>
        <img src={image1} alt="" className='yellow'/>
        <img src={image2} alt="" className='green'/>
        <img src={image3} alt="" className='green'/>
        <Container fixed>
            <Typography variant='h1' align='center' className='news'>
                News
            </Typography>
            <Typography variant='body1' align='center'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
            </Typography>
            <Box className="news-flex">
                {data.map((item) => (
                    <NewsPage key={item.id} image={item.image} title={item.title} para={item.para} date={item.date} />
                ))}
            </Box>
        </Container>
    </Box>
    </HomeWrapper>
  )
}

export default News