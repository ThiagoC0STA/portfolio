import React from "react";
import { MainDiv, AvatarDiv } from "./style";
import Avatar from "../../public/Assets/IMG/avatar.png";
import Image from "next/image";

const Main = () => {
  return (
    <MainDiv id="main">
      <p className="hello">Hello, i&apos;m</p>
      <h1>Thiago Costa</h1>
      <p>Front-End developer</p>
      <div>
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:6938252803970592768/"
          target="_blank"
          id="cv-button"
        >
          Download CV
        </a>
        <a
          href="https://github.com/thiagoc0sta"
          target="__blank"
          id="github-button"
        >
          My github
        </a>
      </div>
      <AvatarDiv>
        <Image
          src={Avatar}
          alt="Avatar"
          layout="fill"
          property={true}
          quality={100}
        />
      </AvatarDiv>
    </MainDiv>
  );
};

export default Main;
