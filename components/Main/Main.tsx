import React from "react";
import Image from "next/image";
import { MainDiv, AvatarDiv } from "./style";
import Avatar from "../../public/Assets/IMG/avatar.png";

const Main: React.FC = () => {
  return (
    <MainDiv id="main">
      <p className="hello">Hello, i&apos;m</p>
      <h1>Thiago Costa</h1>
      <p>Front-End developer</p>
      <div>
        <a
          href="https://www.linkedin.com/in/thiago-rodrigues-da-costa-525242210/"
          target="_blank"
          rel="noopener noreferrer"
          id="cv-button"
        >
          Download CV
        </a>
        <a
          href="https://github.com/thiagoc0sta"
          target="_blank"
          rel="noopener noreferrer"
          id="github-button"
        >
          My github
        </a>
      </div>
      <AvatarDiv>
        <Image
          src={Avatar}
          alt="Avatar"
          priority={true}
          width={205}
          height={250}
          quality={100}
        />
      </AvatarDiv>
    </MainDiv>
  );
};

export default Main;
