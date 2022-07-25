import React from "react";
import { MainDiv, AvatarDiv } from "./style";
import Avatar from "../../Assets/IMG/avatar.png";
import Image from "next/image";

const Main = () => {
  return (
    <MainDiv>
      <h4>Hello, i&apos;m</h4>
      <h1>Thiago Costa</h1>
      <p>Front-End developer</p>
      <div>
        <a href="https://www.linkedin.com/in/thiago-rodrigues-da-costa-525242210/" target="_blank" id="cv-button">Download CV</a>
        <a href="https://github.com/thiagoc0sta" target="__blank" id="github-button">My github</a>
      </div>
      <AvatarDiv>
        <Image src={Avatar} alt="Avatar" />
      </AvatarDiv>
    </MainDiv>
  );
};

export default Main;
