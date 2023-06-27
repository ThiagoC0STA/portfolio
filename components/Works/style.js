import styled from "styled-components";

export const Cards = styled.section`
  width: 22vw;
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
    width: 22vw;
    height: 230px;
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
    width: 100%;
    height: 210px;
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

  @media (max-width: 1400px) {
    width: 30vw;
    height: 250px;

    .techs {
      width: 30vw;
      height: 250px;
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
      height: 170px !important;
    }
  }

  @media (max-width: 900px) {
    width: 50vw;
    height: 300px;

    h4 {
      font-size: 14px;
    }

    .techs {
      width: 50vw;
      height: 300px;
    }

    .project-image {
      height: 220px !important;
    }

    svg {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 900px) {
    width: 60vw;
    height: 220px;

    h4 {
      font-size: 12px;
    }

    .project-image {
      height: 130px !important;
    }

    .techs {
      width: 60vw;
      height: 220px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
