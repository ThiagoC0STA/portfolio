import React from "react";
import Image from "next/image";
import { MainDiv, AvatarDiv } from "./style";
import Avatar from "../../public/Assets/IMG/avatar.png";
import Link from "next/link";
import FadeIn from "../FadeIn/FadeIn";

const Main: React.FC = () => {
  return (
    <FadeIn>
      <MainDiv>
        <p className="hello">Hello, i&apos;m</p>
        <h1>Thiago Costa</h1>
        <p>Front end developer</p>
        <div>
          <Link
            href="https://www.linkedin.com/in/rodcdev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            id="cv-button"
          >
            My Linkedin
          </Link>
          <Link
            href="https://github.com/thiagoc0sta"
            target="_blank"
            aria-label="Github"
            rel="noopener noreferrer"
            id="github-button"
          >
            My github
          </Link>
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
    </FadeIn>
  );
};

export default Main;
