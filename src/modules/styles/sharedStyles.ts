import { css, keyframes } from '../styled-components';

export const centeredFlex = css`
  justify-content: center;
  align-items: center;
`;

const blurIn = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opactiy: 1;
  }
`;

export const blurInCss = css`
  animation: ${blurIn} 0.6s 1 linear;
`;
