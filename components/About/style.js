import styled from "styled-components";

export const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #eeeeee;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px 0 60px 0;
  }

  .container {
    display: flex;
    gap: 120px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 0.9em;
    color: #ccc;
    font-weight: 500;
  }

  h5 {
    color: #eeeeee;
  }

  @media (max-width: 850px) {
    margin-top: 50px;

    section {
      margin: 70px 0 20px 0;
    }

    p {
      font-size: 0.72em;
    }
  }

  @media (max-width: 720px) {
    p {
      font-size: 0.68em;
    }

    .container {
      flex-direction: column;
      gap: 70px;
    }
  }
`;

export const AvatarDiv = styled.div`
  width: 240px;
  height: 220px;
  border-radius: 30px;
  overflow: hidden;
  background: transparent;
  background: linear-gradient(206.57deg, #7100bdd6 16.67%, #ff2f2fd6 100%);

  img {
    top: -20px !important;
    margin-left: 20px;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    width: 220px;
    height: 200px;
  }
`;

export const TextsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 500px;
  gap: 50px;

  p:nth-child(1) {
    line-height: 24px;
  }

  .experiences {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
  }

  @media (max-width: 1140px) {
    width: 380px;
  }

  @media (max-width: 850px) {
    width: 320px;

    p:nth-child(1) {
      line-height: 18px;
    }
  }
`;

export const Work = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  background-color: #141c20;
  width: 120px;
  height: 90px;
  border-radius: 18px;
  cursor: pointer;

  svg {
    color: #9900ff9e;
    font-size: 17px;
  }

  p:nth-child(3) {
    font-size: 0.65em;
    display: flex;
    justify-content: center;
  }

  p:nth-child(2) {
    font-weight: 500;
    color: #ccc;
  }

  @media (max-width: 850px) {
    width: 100px;
    height: 70px;

    p:nth-child(3) {
      font-size: 0.55em;
    }

    svg {
      font-size: 15px;
    }

    p:nth-child(2) {
      font-size: 11px;
    }
  }
`;
