import styled from "styled-components";

export const FadeInDiv = styled.div<{ show: boolean }>`
  opacity: 0;
  transform: translateY(5%);
  transition: all 0.7s ease-in 0.2s;

  ${({ show }) =>
    show &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;
