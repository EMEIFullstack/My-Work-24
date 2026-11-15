import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { HomeWrapper } from '../../HomeWrapper/HomeWrapper'
import RelatedNews from '../../Components/RelatedNews/RelatedNews'
// import './NewsDetails.scss'

function NewsDetails() {

    const image= "src/assets/yellow elipse.png"
    const small= "src/assets/66.png"
    const calender= "src/assets/cal.png"
    const details = "src/assets/details.png"
    const image1= "src/assets/yellow graphic.png"
    const image2= "src/assets/greem graphic.png"
    const image3= "src/assets/Group 1707489997.png"
    const graphic= "src/assets/Shape 40.png"

    
    const yellow= "src/assets/left elipse.png"
    const green = "src/assets/right elipse.png"

  return (
    <HomeWrapper>
        <Box>
            <img src={image} alt="Yellow Ellipse" className='elipse' />
                {/* <img src={image1} alt="" className='yellow'/>
        <img src={image2} alt="" className='green'/>
        <img src={image3} alt="" className='green'/> */}
            <Container fixed>
        {/* <img src={yellow} alt="" className='left'/>
                <img src={green} alt="" className='right'/> */}
        <Typography variant='h3' className='news-details' align='left'>Lorem ipsum dolor sit amet consectetur. Massa eu sed sit feugiat bibendum nibh in. A ut amet ut nunc cras morbi. Aliquam ac velit sed.</Typography>
        <Box className='parent-box'>
            <Box className='child-box'>
                <Typography variant='body' className='p'><span><img src={small} alt="Small Image" /></span>Abram George</Typography>
                </Box>
            <Box className='child-box'>
                <Typography variant='body' className='p'><span><img src={calender} alt="Calender" /></span>Published on January 15, 2024</Typography>
                </Box>
        </Box>
            <img src="src/assets/details.png" alt="" className='details'/>
            <Typography variant='body2' className='details-description'>Lorem ipsum dolor sit amet consectetur. Justo feugiat cras blandit arcu fringilla vitae aenean. Varius in urna ultricies sed augue facilisi proin orci. Consectetur amet nisl et ac aliquet tempor tortor. Eu vel donec ut sapien orci. Elit facilisis at sed tempus sed dui urna dui quisque. Aliquam ornare augue donec posuere eget lacus egestas. Sapien varius parturient lacus tortor aenean pulvinar viverra nunc.</Typography>
            <Typography variant='body2' className='details-description'>
Tortor feugiat ac urna a. Metus elit neque nec leo blandit proin vitae sociis turpis. Vel mattis adipiscing nisl blandit tempor eget adipiscing. Egestas vel duis sem lobortis in ut. Mi ornare justo et egestas suscipit nulla massa. Mattis non a magnis viverra non id etiam neque sagittis. Sed vivamus integer diam hendrerit at ullamcorper non lacinia. Pulvinar enim lectus quisque amet. Maecenas ridiculus felis mattis risus malesuada varius vitae. Tristique adipiscing mattis ultrices nisi cras bibendum tortor.
Vulputate est scelerisque dignissim id amet iaculis nisl diam in. Ut pulvinar turpis et diam vitae. Aliquam pellentesque odio nisl tincidunt laoreet enim risus ullamcorper. Etiam massa a cursus in ipsum senectus in ut. Id lorem pulvinar nunc quam.
</Typography>
            <Typography variant='body2' className='details-description'>
Nulla dictum sed vitae venenatis turpis. Vitae magna blandit orci sollicitudin sit varius magnis cras turpis. Commodo ac nulla tortor mi in id ut ullamcorper. Mauris vulputate cursus tellus eu tellus scelerisque. Porttitor eget sed facilisis integer commodo egestas magnis donec. Aenean eu velit nunc consectetur at. Volutpat sapien neque gravida ultrices enim. Scelerisque ullamcorper at viverra placerat nibh purus tortor ultricies pulvinar. Pharetra mauris pulvinar enim porttitor. Nullam tincidunt tempor ut tellus vitae non non habitasse. Non facilisis phasellus eu proin nisl nisl maecenas porttitor. Blandit nunc in id vulputate ornare nisl placerat. In sit suspendisse senectus amet augue. Aliquam adipiscing vitae ut sed pellentesque lacus mus lacinia nulla.
</Typography>
            <Typography variant='body2' className='details-description'>
Est integer augue in elementum velit. Semper id vestibulum a tincidunt augue nulla. Sit dui feugiat facilisis quam ac curabitur in. Nisi non sapien in congue nunc amet pretium ante. Nibh etiam sit vitae eu neque at enim magna laoreet. Amet id aliquet aliquet sem. Suspendisse tincidunt sit aliquam gravida urna. Quam urna et morbi dignissim. Amet turpis morbi vestibulum mattis. Malesuada sed vel semper ultrices aliquam tortor dolor sit sit. Sed ornare sodales nec at augue massa in quam. Lacus tortor euismod turpis enim. Sit aliquam volutpat non gravida. Sit tellus convallis et arcu habitant.</Typography>
<img src={yellow} alt="" className='green'/>
            <img src={green} alt="" className='yellow'/>
            <img src={graphic} alt="" className='shape'/>
            <img src={image1} alt="" className='graphic'/>
    <section className='related-section'>
        <Typography variant='h3' align='center'>
            Related {" "} <span className='span'>News
        </span>
        </Typography>
        <Typography variant='body2'>It is a long established fact that a reader will be distracted by </Typography>
        <RelatedNews/>
    </section>
            </Container>
            </Box>
    </HomeWrapper>
  )
}

export default NewsDetails