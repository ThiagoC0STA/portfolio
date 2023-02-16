import Image from "next/image";
import React from "react";
import { AboutDiv, AvatarDiv, TextsDiv, Work } from "./style";
import type { IconType } from "react-icons";
import Avatar2 from "../../public/Assets/IMG/avatar2.png";
import { FaBriefcase } from "react-icons/fa";
import { ColumnDiv } from "../style";
import FadeIn from "../FadeIn/FadeIn";

type WorkExperience = {
  title: string;
  duration: string;
};

type WorkProps = {
  icon: IconType;
  experience: WorkExperience;
};

const WorkComponent: React.FC<WorkProps> = ({ icon: Icon, experience }) => (
  <Work>
    <Icon />
    <p>{experience.title}</p>
    <p>{experience.duration}</p>
  </Work>
);

const About: React.FC = () => {
  const workExperiences: WorkExperience[] = [
    { title: "Freelancer", duration: "+2 years" },
    { title: "La costa", duration: "6 months" },
    { title: "Experience", duration: "On the way" },
  ];

  return (
    <FadeIn>
      <AboutDiv id="about">
        <ColumnDiv>
          <h2>About Me</h2>
          <h3>My Intro</h3>
        </ColumnDiv>
        <div className="container">
          <AvatarDiv>
            <Image src={Avatar2} alt="Avatar" quality={100} />
          </AvatarDiv>
          <TextsDiv>
            <p>
              Front-end developer passionate about technology and with an open
              and creative mind, always quality work to the satisfaction of its
              customers and seeking more and more learning.
            </p>

            <div className="experiences">
              {workExperiences.map((experience, index) => (
                <WorkComponent
                  key={index}
                  icon={FaBriefcase}
                  experience={experience}
                />
              ))}
            </div>
          </TextsDiv>
        </div>
      </AboutDiv>
    </FadeIn>
  );
};

export default About;
