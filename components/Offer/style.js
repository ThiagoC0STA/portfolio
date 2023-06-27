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
    background-color: #141c20;
    border-radius: 15px;

    div {
      display: flex;
      align-items: center;
    }

    div:first-child {
      justify-content: flex-start;
      gap: 15px;
      margin-bottom: 20px;

      svg {
        color: #a003e4c3;
        font-size: 20px;
      }

      h4 {
        color: #eeeeee;
        font-weight: 500;
        font-size: 15px;
      }
    }

    div:last-child {
      justify-content: flex-end;
    }
  }

  p {
    max-height: 50px;
    color: #ccc;
  }

  a {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #a003e4;
    padding: 5px 22px;
    font-size: 15px;
    color: #eeeeee;
    font-weight: 500;
    position: relative;
    bottom: -80px;
    transition: all ease 0.6s;
  }

  a:hover {
    background-color: #a003e4;
    transition: all ease 0.6s;
    color: #141a20;
  }

  @media (max-width: 850px) {
    h4 {
      font-size: 13px !important;
    }

    p {
      font-size: 11px;
    }

    section {
      width: 60vw;
      height: 150px;
    }

    a {
      right: 0;
      bottom: -50px;
      font-size: 10px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
  }
`;
