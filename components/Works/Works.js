import React from "react";
import { ColumnDiv } from "../style";
import { Cards, HiddenDiv } from "./style";
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
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: "40px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <ColumnDiv id="portfolio">
      <h2>Recent Works</h2>
      <h3>My Portfolio</h3>
      <HiddenDiv>
        <Slider {...settings}>
          {items.map(({ titulo, img, url, alt }, index) => (
            <div key={index}>
              <Cards>
                <h4>{titulo}</h4>
                <div>
                  <Image src={img} alt={alt} />
                </div>
                <a href={url} target="__blank">
                  View More
                </a>
              </Cards>
            </div>
          ))}
        </Slider>
      </HiddenDiv>
    </ColumnDiv>
  );
};

export default Works;
