import React from "react";
import { Cards } from "./style";
import { ColumnDiv } from "../style";
import { AiOutlineCheckCircle } from "react-icons/ai";
import FadeIn from "../FadeIn/FadeIn";

const Offer: React.FC = () => {
  return (
    <FadeIn>
      <ColumnDiv id="services">
        <h2>What I Offer</h2>
        <h3>My Services</h3>
        <Cards>
          <section>
            <div>
              <AiOutlineCheckCircle />
              <h4>WebSite creation</h4>
            </div>
            <p>
              You need to create a website professional or simple? contact me
              and we will discuss your needs and desires
            </p>
            <a href="#contact">Contact Me</a>
          </section>

          <section>
            <div>
              <AiOutlineCheckCircle />
              <h4>WebSite Design</h4>
            </div>
            <p>
              You need a new design, something more modern? contact me and we
              will discuss your needs and desires
            </p>
            <a href="#contact">Contact Me</a>
          </section>
        </Cards>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Offer;