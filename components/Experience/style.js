import styled from "styled-components";

export const GeralDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px 22px;
  width: 800px;
  margin-top: 20px;

  @media (max-width: 850px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 90vw;
    margin-bottom: 60px;
    gap: 12px;
  }
`;

export const AbilitiesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background-color: #0f1a20;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all ease 0.4s;
  gap: 20px;
  cursor: pointer;

  svg {
    margin-top: 10px;
    font-size: 5em;
    color: #1b9be3ad;
    min-height: 80px;
    transition: all ease 0.5s;
  }

  .customSvg {
    transition: all ease 0.5s;
  }

  .smallIcon {
    font-size: 4em;
  }

  :hover {
    svg {
      color: #1b9be3;
    }

    h3 {
      color: #eeeeee;
    }

    .customSvg {
      stop-color: #1b9be3;
    }
  }

  @media (max-width: 850px) {
    width: 100px;
    height: 100px;
    gap: 3px;

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
  }

  @media (max-width: 600px) {
    width: 90px;
    height: 100px;
    gap: 0;

    h3 {
      font-size: 10px !important;
    }
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
