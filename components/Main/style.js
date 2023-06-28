import styled from "styled-components";

export const MainDiv = styled.main`
  margin-top: 150px;
  color: #eeeeee;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 2.3em;
  }

  p {
    color: #1b9be3;
    font-size: 1em;
  }

  .hello {
    font-weight: normal;
    color: #eeeeee;
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
      color: #eeeeee;
      border: 1.33px solid #1b9be3;
      transition: all ease 0.6s;
    }

    #cv-button:hover {
      background-color: #1b9be3;
      transition: all ease 0.6s;
      color: #000000;
    }

    #github-button {
      background-color: #1b9be3;
      color: #000000;
      transition: all ease 0.6s;
      border: 1.33px solid transparent;
    }

    #github-button:hover {
      background: transparent;
      color: #eeeeee;
      border: 1.33px solid #1b9be3;
      transition: all ease 0.6s;
    }
  }

  @media (max-width: 850px) {
    .hello {
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
  background: linear-gradient(206.57deg, #000 16.67%, #1b9be3 100%);
  border-radius: 40px 40px 5px 5px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    object-fit: cover;
    margin-top: 20px !important;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 230px;

    img {
      margin-top: 10px !important;
    }
  }
`;
