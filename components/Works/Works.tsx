import React from "react";
import { ColumnDiv } from "../style";
import { Cards, Container, HiddenDiv } from "./style";
import Slider, { Settings } from "react-slick";
import { items } from "./items";
import Image, { StaticImageData } from "next/image";
import FadeIn from "../FadeIn/FadeIn";

const Works: React.FC = () => {
  const SampleNextArrow: React.FC<any> = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  };

  const SamplePrevArrow: React.FC<any> = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
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

  const renderWork = ({ titulo, img, url, alt, id }: any) => (
    <div key={id}>
      <Cards>
        <h4>{titulo}</h4>
        <div>
          <Image src={img} alt={alt} layout="fill" quality={100} />
        </div>
        <a tabIndex={-1} href={url} target="_blank" rel="noopener noreferrer">
          View More
        </a>
      </Cards>
    </div>
  );

  return (
    <FadeIn>
      <ColumnDiv id="portfolio">
        <h2>Recent Works</h2>
        <h3>My Portfolio</h3>
        <Container>
          <HiddenDiv>
            <Slider {...settings}>{items.map(renderWork)}</Slider>
          </HiddenDiv>
        </Container>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Works;
