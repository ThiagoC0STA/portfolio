import styled from "styled-components";

export const Cards = styled.section`
  width: 300px;
  height: 210px;
  padding: 30px;
  background-color: #141c20;
  border-radius: 15px;

  h4 {
    color: #eeeeee;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .techs {
    background-color: #141c20;
    position: absolute;
    padding: 30px;
    margin: -30px;
    width: 300px;
    height: 210px;
    border-radius: 15px;
  }

  p {
    font-size: 12px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: -20px;
  }

  svg {
    font-size: 1.1rem;
    color: #eeeeee;
    transition: color 0.5s;
    cursor: pointer;
  }

  .project-image {
    object-fit: cover;
    border-radius: 8px;
  }

  a,
  button {
    background-color: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #a003e4;
    padding: 5px 15px;
    transition: all ease 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: #a003e4;
      transition: all ease 0.6s;

      svg {
        color: #141a20;
      }
    }
  }

  .active {
    background-color: #a003e4;
    transition: all ease 0.6s;

    svg {
      color: #141a20;
    }
  }

  @media (max-width: 1200px) {
    width: 190px;
    height: 150px;

    .techs {
      width: 190px;
      height: 150px;
    }

    p {
      font-size: 10px;
    }

    .MainTec {
      font-size: 12px;
    }

    h4 {
      font-size: 12px;
    }

    svg {
      font-size: 0.9rem;
    }

    .project-image {
      width: 170px !important;
      height: 76px !important;
    }
  }

  @media (max-width: 720px) {
    width: 140px;
    height: 110px;
    padding: 20px;

    h4 {
      font-size: 8px;
    }

    .techs {
      width: 120px;
      height: 90px;
      margin: -20px;
      padding: 20px;
    }

    p {
      font-size: 8px;
      margin-top: -7px;
    }

    .project-image {
      width: 120px !important;
      height: 61px !important;
      margin-top: -10px;
    }

    .links {
      bottom: -10px;
    }

    a,
    button {
      font-size: 8px;
      padding: 4px 12px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
