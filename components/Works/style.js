import styled from "styled-components";

export const Cards = styled.section`
  width: 300px;
  height: 200px;
  padding: 30px;
  background-color: #16212b;
  border-radius: 15px;
  overflow: hidden;
  margin-left: 25px;

  h4 {
    color: #fcfcfc;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
  }

  img {
    object-fit: cover;
    border-radius: 8px;
  }

  span {
    position: relative !important;
    width: 257px !important;
    height: 131px !important;
  }

  a {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #bb00ff;
    padding: 3px 13px;
    font-size: 13px;
    color: #fcfcfc;
    font-weight: 500;
    position: relative;
    bottom: -15px;
    transition: all ease 0.6s;

    :hover {
      background-color: #bb00ff;
      transition: all ease 0.6s;
      color: #141a20;
    }
  }

  @media (max-width: 1540px) {
    width: 190px;
    height: 140px;

    .MainTec {
      font-size: 12px;
    }

    h4 {
      font-size: 12px;
    }

    span {
      width: 150px !important;
      height: 76px !important;
    }

    a {
      bottom: -20px;
    }
  }

  @media (max-width: 720px) {
    width: 140px;
    height: 80px;

    h4 {
      font-size: 8px;
      margin-top: -15px;
    }

    span {
      width: 120px !important;
      height: 61px !important;
    }

    a {
      font-size: 8px;
      bottom: -2px;
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
    background-color: #141a20;
    padding: 31px;
    cursor: pointer;
    z-index: 999;
    height: 76%;
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
      height: 57%;
    }

    .slick-arrow {
      ::before {
        font-size: 25px;
      }
    }
  }
`;
