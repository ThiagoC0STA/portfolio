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
    gap: 130px;
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
    .container {
      flex-direction: column;
      gap: 50px;
    }
  }
`;

export const AvatarDiv = styled.div`
  width: 240px;
  height: 220px;
  border-radius: 30px;
  overflow: hidden;
  background: linear-gradient(206.57deg, #000 28%, #1b9be3 100%);

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
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 500px;
  gap: 50px;

  p:nth-child(1) {
    line-height: 24px;
  }

  .company {
    position: absolute;
    margin-top: 90px;
    margin-left: 1px;
    font-size: 10px;
  }

  .experiences {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
  }

  @media (max-width: 1140px) {
    width: 380px;

    .company {
      margin-left: 0;
      margin-top: 110px;
    }
  }

  @media (max-width: 850px) {
    width: 320px;

    .company {
      margin-top: 90px;
    }

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
  gap: 3px;
  background-color: #0f1a20;
  width: 120px;
  height: 90px;
  border-radius: 18px;
  cursor: pointer;

  svg {
    color: #1b9be39e;
    font-size: 17px;
  }

  p:nth-child(2) {
    font-weight: 500;
    color: #e9e9e9;
  }

  p:nth-child(3) {
    font-size: 0.65em;
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
