import React from "react";
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
import "swiper/css/pagination";
import { HomeWrapper } from "../../../HomeWrapper/HomeWrapper";

const data = [
  {
    id: 1,
    image: "/src/assets/1st card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 2,
    image: "/src/assets/2nd card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 3,
    image: "/src/assets/3rd card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 4,
    image: "/src/assets/1st card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 5,
    image: "/src/assets/3rd card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
  {
    id: 6,
    image: "/src/assets/2nd card.png",
    date: "26 Sep, 2024",
    title: "Lorem Ipsum is simply dummy text of the",
    description:
      "It is a long established fact that a reader will be distracted by the",
  },
];

export default function NewsSlider() {
  return (
    <HomeWrapper>
        <Container>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
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
            <Card className="card">
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
              />

              <CardContent className="card-content">
                <Typography
                  variant="body"
                  color="text.secondary"
                  gutterBottom className="date"
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

                <Typography variant="body2" color="text.secondary" className="description">
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