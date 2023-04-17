import styled from "styled-components";

export const HeaderDiv = styled.header`
  background-color: #141c20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  min-height: 80px;
  max-height: 120px;
  color: #fcfcfc;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 0 7px 0 #030303;
  z-index: 9999;
  width: 100vw;

  h1,
  svg,
  a {
    cursor: pointer;
  }

  .logo {
    font-size: 1.8em;
    font-weight: 500;
    margin-left: 15%;
    color: #fff;
  }

  svg {
    display: none;
  }

  @media (max-width: 1140px) {
    ul {
      position: absolute;
      right: 0;
      padding-top: 20vh;
      top: 11.9vh;
      flex-direction: column;
      width: 25vw;
      height: 100vh;
      background-color: #16212b;
      transform: translateX(100vw);
      display: none;
      box-shadow: 0 10px 7px 0 #030303;
      transition: transform 0.3s ease-in;
    }

    .active {
      transform: translateX(0);

      li {
        animation: navLinkFade 0.7s ease forwards 0.3s;
      }
    }

    li {
      opacity: 0;
      transition: all ease 1s;
      font-size: 14px;
    }

    svg {
      display: block;
      margin-right: 5%;
      z-index: 999;
    }

    @keyframes navLinkFade {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 850px) {
    height: 10vh;

    ul {
      top: 10vh;
      width: 35vw;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 850px) {
    ul {
      width: 47vw;
    }
  }
`;

export const NavDiv = styled.nav`
  margin-right: 10%;
  scroll-behavior: smooth;

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  a {
    font-size: 1em;
    font-weight: 500;
    transition: all 0.5s;
    color: #fcfcfc;
  }

  a:hover {
    color: #a003e4;
  }
`;
