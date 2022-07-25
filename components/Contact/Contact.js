import React from "react";
import { ColumnDiv } from "../style";
import { Cards } from "./style";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <ColumnDiv id="contact">
      <h2>Contact Me</h2>
      <h3>get in touch</h3>
      <Cards>
        <a href="https://github.com/thiagoc0sta" target="__blank">
          <AiOutlineGithub />
        </a>

        <a href="https://www.linkedin.com/in/thiago-rodrigues-da-costa-525242210/" target="__blank">
          <AiFillLinkedin />
        </a>

        <a href="" target="__blank">
          <HiOutlineMail />
        </a>
      </Cards>
    </ColumnDiv>
  );
};

export default Contact;
