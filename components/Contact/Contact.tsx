import React from "react";
import { ColumnDiv } from "../style";
import { Cards } from "./style";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import FadeIn from "../FadeIn/FadeIn";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <FadeIn>
      <ColumnDiv id="contact">
        <h2>Contact Me</h2>
        <h3>get in touch</h3>
        <Cards>
          <Link
            href="https://github.com/ThiagoC0STA"
            target="__blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <AiFillGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rodcdev/"
            target="__blank"
            rel="noopener noreferrer"
            aria-label="Linked-in"
          >
            <AiFillLinkedin />
          </Link>

          <Link
            href="mailto: rodclikedev@gmail.com"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <HiOutlineMail />
          </Link>
        </Cards>
      </ColumnDiv>
    </FadeIn>
  );
};

export default Contact;
