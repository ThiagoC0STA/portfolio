import React from "react";
import { ColumnDiv } from "../style";
import { Cards } from "./style";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <ColumnDiv id="contact">
      <h2>Contact Me</h2>
      <h3>get in touch</h3>
      <Cards>
        <a
          href="https://www.instagram.com/rodc_dev/?hl=pt"
          target="__blank"
          aria-label="Instagram"
        >
          <AiOutlineInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-rodrigues-da-costa-525242210/"
          target="__blank"
          aria-label="Linked-in"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="mailto: rodclikedev@gmail.com"
          target="__blank"
          aria-label="Email"
        >
          <HiOutlineMail />
        </a>
      </Cards>
    </ColumnDiv>
  );
};

export default Contact;
