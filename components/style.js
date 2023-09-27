import styled from "styled-components";

export const ColumnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 160px;
  scroll-margin-top: 10.7em !important;

  h2 {
    color: #1b9be3;
    font-size: 1.7em;
  }

  h3,
  .githublink {
    color: #e9e9e9;
    font-weight: 500;
    margin: 1px 0 45px 0;
    font-size: 0.85em;
    
  }

  p {
    color: #e9e9e9;
    font-size: 0.85em;
  }

  @media (max-width: 850px) {
    margin-top: 130px;
  }
`;
