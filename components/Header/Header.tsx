import React, { useState } from "react";
import { HeaderDiv, NavDiv } from "./style";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import HoverScale from "../Motion/HoverScale";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <HeaderDiv>
      <a className="logo" href="#">
        <HoverScale>Rodc Dev</HoverScale>
      </a>
      <NavDiv>
        <ul className={active ? "active" : "inative"}>
          <li>
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" scroll={false}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="#services" scroll={false}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#portfolio" scroll={false}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false}>
              Contact
            </Link>
          </li>
        </ul>
      </NavDiv>
      <FaBars onClick={() => setActive(!active)} />
    </HeaderDiv>
  );
};

export default Header;
