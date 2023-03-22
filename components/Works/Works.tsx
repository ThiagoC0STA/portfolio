import React from "react";
import { ColumnDiv } from "../style";
import { Cards, Container, HiddenDiv } from "./style";
import Slider, { Settings } from "react-slick";
import { items } from "./items";
import Image from "next/image";
import FadeIn from "../FadeIn/FadeIn";
import Link from "next/link";

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
        <p>{titulo}</p>
        <div>
          <Image src={img} alt={alt} width={257} height={131} quality={100} />
        </div>
        <Link
          tabIndex={-1}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </Link>
      </Cards>
    </div>
  );

  return (
    <FadeIn>
      <ColumnDiv id="portfolio">
        <h2>Recent Works</h2>
        <Link
          href="https://github.com/ThiagoC0STA"
          target="__blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="githublink"
        >
          More in my github
        </Link>
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
