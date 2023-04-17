import styled from "styled-components";

export const Cards = styled.section`
  width: 300px;
  height: 210px;
  padding: 30px;
  background-color: #141c20;
  border-radius: 15px;
  overflow: hidden;
  margin-left: 25px;

  p {
    color: #fcfcfc;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    position: relative;
    bottom: -15px;
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

  a {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #a003e4;
    padding: 5px 15px;
    font-size: 13px;
    color: #fcfcfc;
    font-weight: 500;
    transition: all ease 0.6s;
    display: flex;
    align-items: center;
    gap: 4px;

    :hover {
      background-color: #a003e4;
      transition: all ease 0.6s;
      color: #141a20;

      svg {
        color: #141a20;
      }
    }
  }

  @media (max-width: 1540px) {
    width: 190px;
    height: 150px;

    .MainTec {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }

    a {
      font-size: 10px;
    }

    svg {
      font-size: 0.9rem;
    }

    div {
      gap: 10px;
    }

    .project-image {
      width: 170px !important;
      height: 76px !important;
    }
  }

  @media (max-width: 720px) {
    width: 140px;
    height: 98px;
    padding: 20px;

    p {
      font-size: 8px;
    }

    .project-image {
      width: 120px !important;
      height: 61px !important;
      margin-top: -10px;
    }

    div {
      bottom: -10px;
    }

    a {
      font-size: 8px;
      padding: 3px 9px;
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
      height: 71%;
    }
  }

  @media (max-width: 720px) {
    .slick-arrow {
      height: 57%;
    }

    .slick-arrow {
      ::before {
        font-size: 25px;
      }
    }
  }
`;
