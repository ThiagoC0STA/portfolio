import React, { useState } from "react";
import { Cards } from "./style";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Card({ props }: any) {
  const [techsModal, setTechsModal] = useState<Boolean>();

  return (
    <Cards>
      <p className="title">{props.titulo}</p>
      <Image src={props.img} alt={props.alt} className="project-image" />

      <div className="links">
        { props.github &&  <Link
          href={props.github}
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </Link>}
       
        <Link
          href={props.url}
          target="_blank"
          aria-label="Site"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink />
        </Link>
      </div>

      <div className="techs">
        <p className="techs-title">Technologies in this project:</p>
        <p className="techs-text">{props.techs}</p>
      </div>
    </Cards>
  );
}
