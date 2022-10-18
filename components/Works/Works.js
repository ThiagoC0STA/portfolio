import React from "react";
import { ColumnDiv } from "../style";
import { Cards, Container, HiddenDiv } from "./style";
import Slider from "react-slick";
import { items } from "./items";
import Image from "next/image";

const Works = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: "57px",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ColumnDiv id="portfolio">
      <h2>Recent Works</h2>
      <h3>My Portfolio</h3>
      <Container>
        <HiddenDiv>
          <Slider {...settings}>
            {items.map(({ titulo, img, url, alt, id }) => (
              <div key={id}>
                <Cards>
                  <h4>{titulo}</h4>
                  <div>
                    <Image src={img} alt={alt} layout="fill" quality="100" />
                  </div>
                  <a tabIndex={-1} href={url} target="__blank">
                    View More
                  </a>
                </Cards>
              </div>
            ))}
          </Slider>
        </HiddenDiv>
      </Container>
    </ColumnDiv>
  );
};

export default Works;
