import React from "react";
import { AbilitiesDiv, GeralDiv } from "./style";
import { ColumnDiv } from "../style";
import { items } from "./items";
import FadeIn from "../FadeIn/FadeIn";

const Experience: React.FC = () => {
  return (
    <FadeIn>
      <ColumnDiv id="experience">
        <h2>My Experience</h2>
        <h3>My Abilities</h3>

        <GeralDiv>
          {items.map(({ icon, name, id }) => (
            <FadeIn key={id}>
              <AbilitiesDiv>
                {icon}
                <h3>{name}</h3>
              </AbilitiesDiv>
            </FadeIn>
          ))}
        </GeralDiv>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Experience;
