import styled from "styled-components";

export const Cards = styled.section`
  width: 22vw;
  height: 360px;
  padding: 30px;
  background-color: #0f1a20;
  border-radius: 15px;

  .title {
    color: #eeeeee;
    font-weight: 500;
    font-size: 16px;
  }

  .sub-title {
    color: #eeeeee;
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 30px;
    margin-top: 2px;
  }

  .techs-title {
    color: #eeeeee;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 2px;
  }

  .techs-text {
    font-size: 11px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    position: absolute;
    margin-left: 10px;
    margin-top: -60px;
  }

  svg {
    font-size: 1.1rem;
    color: #eee;
    transition: color 0.5s;
    cursor: pointer;
  }

  .project-image {
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  video:fullscreen {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }

  a {
    background-color: #010a109e;
    backdrop-filter: blur(15px);
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 6px 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: #1b9ae3e5;
      transition: all ease 0.4s;

      svg {
        color: #141a20;
      }
    }
  }

  @media (max-width: 1400px) {
    width: 30vw;
    height: 340px;

    .techs {
      width: 30vw;
      height: 250px;
    }

    .MainTec {
      font-size: 12px;
    }

    .title {
      font-size: 12px;
    }

    .project-image {
      height: 200px !important;
    }
  }

  @media (max-width: 900px) {
    width: 50vw;
    height: 390px;

    .title {
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

  @media (max-width: 500px) {
    width: 60vw;
    height: 310px;

    .title {
      font-size: 14px;
    }

    .techs-title {
      font-size: 12px;
    }

    .sub-title {
      font-size: 10px;
      margin-bottom: 20px;
    }

    .techs-text {
      font-size: 10px;
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
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;
