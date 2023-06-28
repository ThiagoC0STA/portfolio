import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;

  svg {
    color: #1b9be3ad;
    font-size: 44px;
    padding: 25px;
    background-color: #0f1a20;
    border-radius: 17px;
    cursor: pointer;
    transition: all 0.4s;
  }

  svg:hover {
    color: #1b9be3;
  }

  @media (max-width: 600px) {
    gap: 25px;

    svg {
      font-size: 36px;
      padding: 20px;
    }
  }
`;
