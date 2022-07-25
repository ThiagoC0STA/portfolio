import styled from "styled-components";

export const ExperienceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 160px;
`;

export const GeralDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  width: 800px;
  height: 350px;
  margin-top: 20px;

  @media (max-width: 850px) {
    width: 500px;
    height: 220px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 330px;
  }
`;

export const AbilitiesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background-color: #16212b;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all ease 0.4s;
  gap: 20px;

  svg {
    margin-top: 10px;
    font-size: 5em;
    color: #bd00ff5c;
    min-height: 80px;
    transition: all ease 0.5s;
  }

  .smallIcon {
    font-size: 4em;
  }

  ::before {
    content: "";
    position: absolute;
    height: 150px;
    width: 150px;
    background: linear-gradient(206.57deg, #7100bdd6 16.67%, #ff2f2fd6 100%);
    z-index: -1;
    filter: blur(14px);
    opacity: 0;
    transition: all ease 0.6s;
  }

  :hover::before {
    transition: all ease 0.6s;
    opacity: 1;
  }

  :hover {
    svg {
      color: #bd00ff;
    }

    h3 {
      color: #fcfcfc;
    } 
  }

  @media (max-width: 850px) {
    width: 100px;
    height: 100px;
    gap: 7px;

    svg {
      font-size: 3.8em;
      margin-top: -5px;
    }

    h3 {
      font-size: 11px !important;
    }

    .smallIcon {
      font-size: 3.2em;
    }

    ::before {
      height: 100px;
      width: 100px;
    }
  }

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;

    svg {
      font-size: 3em;
    }

    h3 {
      font-size: 10px !important;
    }

    .smallIcon {
      font-size: 2.2em;
    }

    ::before {
      height: 70px;
      width: 70px;
    }
  }
`;
