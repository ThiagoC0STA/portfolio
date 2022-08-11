import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;

  svg {
    color: #bd00ff5c;
    font-size: 37px;
    padding: 25px;
    background-color: #16212b;
    border-radius: 17px;
    cursor: pointer;
    transition: all ease 0.4s;
  }

  svg:hover {
    color: #b400f3;
  }

  @media (max-width: 600px) {
    gap: 25px;

    svg {
      font-size: 30px;
      padding: 20px;
    }
  }
`;
