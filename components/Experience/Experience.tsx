import React from "react";
import { CenterDiv, GeralDiv } from "./style";
import { ColumnDiv } from "../style";
import { items } from "./items";
import FadeIn from "../FadeIn/FadeIn";
import Cards from "./Cards";


const Experience: React.FC = () => {
  return (
    <FadeIn>
      <ColumnDiv id="experience" className="motion">
        <CenterDiv>
          <h2>My Experience</h2>
          <h3>My Abilities</h3>
        </CenterDiv>

        <GeralDiv className="motion">
          {items.map(({ icon, name, id }) => (
            <Cards key={id} icon={icon} name={name} />
          ))}
        </GeralDiv>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Experience;
function setDragValue(arg0: { x: number; y: number }) {
  throw new Error("Function not implemented.");
}
