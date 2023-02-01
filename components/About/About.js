import Image from "next/image";
import React from "react";
import { AboutDiv, AvatarDiv, TextsDiv, Work } from "./style";
import Avatar2 from "../../public/Assets/IMG/avatar2.png";
import { FaBriefcase } from "react-icons/fa";
import { ColumnDiv } from "../style";

const About = () => {
  return (
    <AboutDiv id="about">
      <ColumnDiv>
        <h2>About Me</h2>
        <h3>My Intro</h3>
      </ColumnDiv>
      <div className="container">
        <AvatarDiv>
          <Image src={Avatar2} alt="Avatar" label="fill" quality={100} />
        </AvatarDiv>
        <TextsDiv>
          <p>
            Front-end developer passionate about technology and with an open and
            creative mind, always quality work to the satisfaction of its
            customers and seeking more and more learning.
          </p>

          <div className="experiences">
            <Work>
              <FaBriefcase />
              <p>Freelancer</p>
              <p>+2 years</p>
            </Work>

            <Work>
              <FaBriefcase />
              <p>La costa</p>
              <p>6 months</p>
            </Work>

            <Work>
              <FaBriefcase />
              <p>Experience</p>
              <p>On the way</p>
            </Work>
          </div>
        </TextsDiv>
      </div>
    </AboutDiv>
  );
};

export default About;
