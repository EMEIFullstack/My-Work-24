// import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { HomeWrapper } from "../../HomeWrapper/HomeWrapper";

import firstCard from "../../assets/4th card.png";
import secondCard from "../../assets/5th card.png";
import thirdCard from "../../assets/6th card.png";

const data = [
  {
    id: 1,
    image: firstCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 2,
    image: secondCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 3,
    image: thirdCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 4,
    image: firstCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 5,
    image: thirdCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 6,
    image: secondCard,
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
];

export default function RelatedNews() {
  return (
    <HomeWrapper>
      <Container fixed>
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          // spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                className="card"
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  
                />

                <CardContent className="card-content">
                  <Typography
                    variant="body"
                    color="text.secondary"
                    gutterBottom
                    className="date"
                  >
                    {item.date}
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={600}
                    gutterBottom
                    
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="description"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </HomeWrapper>
  );
}