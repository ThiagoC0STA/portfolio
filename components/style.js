import styled from "styled-components";

export const ColumnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 160px;

  h2 {
  color: #bb00ff;
  font-size: 1.7em;
}

  h3 {
    color: #ccc;
    font-weight: 500;
    margin: 1px 0 45px 0;
    font-size: 0.85em;
  }

  p {
    color: #ccc;
    font-size: 0.85em;
  }

  @media (max-width: 850px) {
    margin-top: 130px;
  }
`;
