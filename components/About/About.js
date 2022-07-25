import Image from "next/image";
import React from "react";
import { AboutDiv, AvatarDiv, TextsDiv, Work } from "./style";
import Avatar2 from "../../Assets/IMG/avatar2.png";
import { FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <AboutDiv id="about">
      <section>
        <h2>About Me</h2>
        <h3>My Intro</h3>
      </section>
      <div className="container">
        <AvatarDiv>
          <Image src={Avatar2} alt="Avatar" />
        </AvatarDiv>
        <TextsDiv>
            <p>
              Front-end developer passionate about technology and with an open and creative mind, always quality work to the satisfaction of its customers and seeking more and more learning.
            </p>

          <div className="experiences">
            <Work>
              <FaBriefcase />
              <h5>Freelancer</h5>
              <p>+1 year</p>
            </Work>

            <Work>
              <FaBriefcase />
              <h5>Experience</h5>
              <p>On the way</p>
            </Work>

            <Work>
              <FaBriefcase />
              <h5>Experience</h5>
              <p>On the way</p>
            </Work>
          </div>
        </TextsDiv>
      </div>
    </AboutDiv>
  );
};

export default About;
