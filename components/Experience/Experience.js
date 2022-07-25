import React from "react";
import { AbilitiesDiv, GeralDiv } from "./style";
import { ColumnDiv } from "../style";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiGit } from "react-icons/si";

const Experience = () => {
  return (
    <ColumnDiv id="experience">
      <h2>My Experience</h2>
      <h3>My Abilities</h3>
      <GeralDiv>

        <AbilitiesDiv>
          <DiHtml5 />
          <h3>HTML</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <DiCss3 />
          <h3>CSS</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <IoLogoJavascript className="smallIcon" />
          <h3>JavaScript</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <DiReact />
          <h3>React</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <SiNextdotjs className="smallIcon" />
          <h3>Next</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <SiStyledcomponents />
            <h3>Styled Comp</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <SiTailwindcss className="smallIcon" />
          <h3>Tailwind Css</h3>
        </AbilitiesDiv>

        <AbilitiesDiv>
          <SiGit className="smallIcon" />
           <h3>Git</h3>
        </AbilitiesDiv>
      </GeralDiv>
    </ColumnDiv>
  );
};

export default Experience;
