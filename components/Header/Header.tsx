import React, { useState } from "react";
import { HeaderDiv, NavDiv } from "./style";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <HeaderDiv>
      <a className="logo" href="#main">
        Rodc Dev
      </a>
      <NavDiv>
        <ul className={active ? "active" : "inative"}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </NavDiv>
      <FaBars onClick={() => setActive(!active)} />
    </HeaderDiv>
  );
};

export default Header;
