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
import "swiper/css/effect-coverflow";
import "swiper/swiper.min.css";

const Works: React.FC = () => {
  const swiperParams = {
    navigation: true,
    loop: true,
    grabCursor: true,
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      2000: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
        pagination: false,
        effect: "slider",
      },
      100: {
        slidesPerView: 1,
        pagination: false,
        effect: "slider",
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
