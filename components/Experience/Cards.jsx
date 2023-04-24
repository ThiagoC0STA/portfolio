import React from "react";
import FadeIn from "../FadeIn/FadeIn";
import { AbilitiesDiv } from "./style";
import HoverScale from "../Motion/HoverScale";

export default function Cards({ icon, name }) {
  return (
    <FadeIn>
      <HoverScale>
        <AbilitiesDiv>
          {icon}
          <h3>{name}</h3>
        </AbilitiesDiv>
      </HoverScale>
    </FadeIn>
  );
}
