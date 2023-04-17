import React, { useState } from "react";
import { Cards } from "./style";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiCodeBlock } from "react-icons/bi";

export default function Card({ props }: any) {
  const [techsModal, setTechsModal] = useState<Boolean>();

  return (
    <Cards>
      {techsModal && (
        <div className="techs">
          <h4>Technologies Used</h4>
          <p>{props.techs}</p>
        </div>
      )}
      <h4>{props.titulo}</h4>
      <Image
        src={props.img}
        alt={props.alt}
        width={300}
        height={131}
        quality={100}
        className="project-image"
      />

      <div className="links">
        <Link
          tabIndex={-1}
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </Link>
        <Link
          tabIndex={-1}
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink />
        </Link>

        <button
          className={techsModal && "active"}
          tabIndex={-1}
          onClick={() => setTechsModal(!techsModal)}
        >
          <BiCodeBlock />
        </button>
      </div>
    </Cards>
  );
}
