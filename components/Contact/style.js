import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;

  svg {
    color: #a003e4ad;
    font-size: 37px;
    padding: 25px;
    background-color: #141c20;
    border-radius: 17px;
    cursor: pointer;
    transition: all 0.4s;
  }

  svg:hover {
    color: #a003e4;
  }

  @media (max-width: 600px) {
    gap: 25px;

    svg {
      font-size: 30px;
      padding: 20px;
    }
  }
`;
