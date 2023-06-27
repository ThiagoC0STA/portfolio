import React from "react";
import { ColumnDiv } from "../style";
import { Container } from "./style";
import { items } from "./items";
import FadeIn from "../FadeIn/FadeIn";
import Link from "next/link";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

const Works: React.FC = () => {
  const swiperParams = {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      100: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <FadeIn>
      <ColumnDiv id="portfolio">
        <h2>Recent Works</h2>
        <Link
          href="https://github.com/ThiagoC0STA"
          target="__blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="githublink"
        >
          More in my github
        </Link>
        <Container>
          <Swiper {...swiperParams} modules={[Pagination, EffectCoverflow]}>
            {items.map((props) => (
              <SwiperSlide key={props.id}>
                <Card props={props} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Works;
