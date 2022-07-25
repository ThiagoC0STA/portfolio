import styled from "styled-components";

export const MainDiv = styled.main`
  margin-top: 150px;
  color: #fcfcfc;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 2.3em;
  }

  h4 {
    font-weight: normal;
  }

  p {
    color: #bd00ff;
    font-size: 1em;
  }

  div {
    display: flex;
    gap: 40px;
    margin-top: 30px;

    a {
      padding: 10px;
      border-radius: 5px;
      font-size: 1.1em;
      font-weight: 500;
      width: 143px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #cv-button {
      background: transparent;
      color: #fcfcfc;
      border: 1.33px solid #bd00ff;
      transition: all ease 0.6s;
    }

    #cv-button:hover {
      background-color: #bd00ff;
      transition: all ease 0.6s;
      color: #141a20;
    }

    #github-button {
      background-color: #bd00ff;
      color: #141a20;
      transition: all ease 0.6s;
      border: 1.33px solid transparent;
    }

    #github-button:hover {
      background: transparent;
      color: #fcfcfc;
      border: 1.33px solid #bd00ff;
      transition: all ease 0.6s;
    }
  }

  @media (max-width: 850px) {
    h4 {
      font-size: 0.8em;
    }

    h1 {
      font-size: 1.9em;
    }

    p {
      font-size: 0.8em;
    }
    div {
      a {
        width: 100px;
        font-size: 0.8em;
      }
    }
  }
`;

export const AvatarDiv = styled.div`
  width: 270px;
  height: 250px;
  background: linear-gradient(206.57deg, #7100bd 16.67%, #ff2f2f 100%);
  border-radius: 40px 40px 5px 5px;

  img {
    margin-top: 20px !important;
    min-width: 75% !important;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 230px;
  }
`;
