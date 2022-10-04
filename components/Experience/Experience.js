import React from "react";
import { AbilitiesDiv, GeralDiv } from "./style";
import { ColumnDiv } from "../style";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { items } from "./items";

const Experience = () => {
  return (
    <ColumnDiv id="experience">
      <h2>My Experience</h2>
      <h3>My Abilities</h3>

      <GeralDiv>
        {items.map(({ icon, name, id }) => (
          <AbilitiesDiv key={id}>
            {icon}
            <h3>{name}</h3>
          </AbilitiesDiv>
        ))}
      </GeralDiv>
    </ColumnDiv>
  );
};

export default Experience;
