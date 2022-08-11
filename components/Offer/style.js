import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  section {
    width: 250px;
    height: 210px;
    padding: 30px;
    background-color: #16212b;
    border-radius: 15px;
  }

  p {
    max-height: 50px;
  }

  a {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #b400f3;
    padding: 5px 22px;
    font-size: 15px;
    color: #fcfcfc;
    font-weight: 500;
    position: relative;
    right: -107px;
    bottom: -80px;
    transition: all ease 0.6s;
  }

  a:hover {
    background-color: #b400f3;
    transition: all ease 0.6s;
    color: #141a20;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 20px;

    svg {
      color: #da71ffa3;
      font-size: 20px;
    }

    h4 {
      color: #fcfcfc;
      font-weight: 500;
      font-size: 15px;
    }
  }

  @media (max-width: 850px) {
    h4 {
      font-size: 13px !important;
    }

    p {
      font-size: 11px;
    }

    section {
      width: 190px;
      height: 150px;
    }

    a {
      right: -88px;
      bottom: -50px;
      font-size: 10px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    section {
      width: 160px;
      height: 120px;
    }

    div {
      svg {
        font-size: 15px;
      }
    }

    h4 {
      font-size: 10px !important;
    }

    p {
      font-size: 10px;
    }

    a {
      right: -85px;
      bottom: -30px;
      font-size: 8px;
    }
  }
`;
