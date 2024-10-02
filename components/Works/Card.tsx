import React, { useState, useRef } from "react";
import { Cards } from "./style";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Card({ props }: any) {
  const [techsModal, setTechsModal] = useState<Boolean>();
  const videoRef:any = useRef(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <Cards>
      <p className="title">{props.titulo}</p>
      <p className="sub-title">{props.alt}</p>

      {props.video ? (
        <video
          src={props.video}
          className="project-image"
          controls
          muted
          autoPlay
          loop
          ref={videoRef}
          onDoubleClick={handleFullScreen} // Add double-click event to enter fullscreen
        />
      ) : (
        <Image src={props.img} alt={props.alt} className="project-image" />
      )}

      <div className="links">
        {props.github && (
          <Link
            href={props.github}
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </Link>
        )}

        {props.url && (
          <Link
            href={props.url}
            target="_blank"
            aria-label="Site"
            rel="noopener noreferrer"
          >
            <HiOutlineExternalLink />
          </Link>
        )}
      </div>

      <div className="techs">
        <p className="techs-title">Technologies in this project:</p>
        <p className="techs-text">{props.techs}</p>
      </div>
    </Cards>
  );
}
