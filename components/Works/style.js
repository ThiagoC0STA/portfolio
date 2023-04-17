import styled from "styled-components";

export const Cards = styled.section`
  width: 300px;
  height: 210px;
  padding: 30px;
  background-color: #141c20;
  border-radius: 15px;
  overflow: hidden;
  margin-left: 25px;

  h4 {
    color: #fcfcfc;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .techs {
    background-color: #141c20;
    position: absolute;
    padding: 30px;
    margin: -30px;
    width: 300px;
    height: 210px;
    border-radius: 15px;
  }

  p {
    font-size: 12px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: -20px;
  }

  svg {
    font-size: 1.1rem;
    color: #fcfcfcdb;
    transition: color 0.5s;
    cursor: pointer;
  }

  .project-image {
    object-fit: cover;
    border-radius: 8px;
  }

  a,
  button {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #a003e4;
    padding: 5px 15px;
    transition: all ease 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: #a003e4;
      transition: all ease 0.6s;

      svg {
        color: #141a20;
      }
    }
  }

  .active {
    background-color: #a003e4;
    transition: all ease 0.6s;

    svg {
      color: #141a20;
    }
  }

  @media (max-width: 1540px) {
    width: 190px;
    height: 150px;

    .techs {
      width: 190px;
      height: 150px;
    }

    p {
      font-size: 10px;
    }

    .MainTec {
      font-size: 12px;
    }

    h4 {
      font-size: 12px;
    }

    svg {
      font-size: 0.9rem;
    }

    .project-image {
      width: 170px !important;
      height: 76px !important;
    }
  }

  @media (max-width: 720px) {
    width: 140px;
    height: 110px;
    padding: 20px;

    h4 {
      font-size: 8px;
    }

    .techs {
      width: 120px;
      height: 90px;
      margin: -20px;
      padding: 20px;
    }

    p {
      font-size: 8px;
      margin-top: -7px;
    }

    .project-image {
      width: 120px !important;
      height: 61px !important;
      margin-top: -10px;
    }

    .links {
      bottom: -10px;
    }

    a,
    button {
      font-size: 8px;
      padding: 4px 12px;
    }
  }

  @media (max-width: 400px) {
    margin-left: 15px;
  }

  @media (max-width: 361px) {
    margin-left: 5px;
  }
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1130px) {
    width: 65vw;
  }

  @media (max-width: 1030px) {
    width: 70vw;
  }

  @media (max-width: 970px) {
    width: 80vw;
  }

  @media (max-width: 830px) {
    width: 50vw;
  }

  @media (max-width: 780px) {
    width: 55vw;
  }

  @media (max-width: 750px) {
    width: 60vw;
  }

  @media (max-width: 720px) {
    width: 50vw;
  }

  @media (max-width: 700px) {
    width: 55vw;
  }

  @media (max-width: 650px) {
    width: 60vw;
  }

  @media (max-width: 580px) {
    width: 65vw;
  }

  @media (max-width: 530px) {
    width: 70vw;
  }

  @media (max-width: 530px) {
    width: 70vw;
  }

  @media (max-width: 490px) {
    width: 90vw;
  }
`;

export const HiddenDiv = styled.div`
  overflow-x: hidden;

  .slick-track {
    display: flex;
  }

  .slick-arrow {
    background-color: #121618;
    padding: 31px;
    cursor: pointer;
    z-index: 999;
    height: 77%;
    display: flex;
    align-items: center;
    justify-content: center;

    ::before {
      color: #bb00ffda;
      font-size: 30px;
    }

    .slick-prev {
      margin-left: -1px;
    }
  }

  @media (max-width: 1540px) {
    margin-left: 0;
    .slick-arrow {
      height: 70%;
    }
  }

  @media (max-width: 720px) {
    .slick-arrow {
      height: 59%;
    }

    .slick-arrow {
      ::before {
        font-size: 25px;
      }
    }
  }
`;
