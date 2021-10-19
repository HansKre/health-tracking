import { keyframes } from 'styled-components';

export const bounceIn = keyframes` 
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1.3);
  }
`;

export const bounceInReduced = keyframes` 
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.05);
  }
`;
