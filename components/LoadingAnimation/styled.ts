import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(70%); }
  to { opacity: 1; transform: translatey(0%); }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeOut} 2s 4.5s ease-out;

  h1 {
    font-size: 72px;
    animation: ${slideInFromLeft} 2s ease-in-out, ${fadeOut} 2s 4.5s ease-out;
    letter-spacing: 4px;
    font-weight: bold;
    color: #fffffff6;
  }

  p:nth-child(2) {
    font-size: 21px;
    animation: ${slideInFromRight} 2s ease-in-out, ${fadeOut} 2s 4.5s ease-out;
    margin-top: -15px;
    letter-spacing: 6px;
    font-weight: 500;
    color: #1b9be3;
  }

  p:nth-child(3) {
    animation: ${fadeIn} 0.5s ease-in, ${fadeOut} 2s 4.5s ease-out;
    color: #11f0c9;
    margin-top: 350px;
    font-size: 16px;
    position: absolute;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 48px;
    }

    p:nth-child(2) {
      font-size: 14px;
      margin-top: -10px;
    }

    p:nth-child(3) {
      margin-top: 200px;
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 40px;
    }

    p:nth-child(2) {
      font-size: 12px;
      letter-spacing: 4.6px;
    }

    p:nth-child(3) {
      font-size: 10px;
    }
  }
`;
