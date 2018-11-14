import React from 'react';
import styled, { keyframes } from '../styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const Spinner = styled.div`
    display: block;
    margin: auto;
    height: 2em;
    width: 2em;
    border: 6px solid rgba(0, 174, 239, 0.2);
    border-top-color: rgba(0, 174, 239, 0.8);
    border-radius: 50%;
    animation: ${spin} 0.6s infinite linear;
  }
`;
