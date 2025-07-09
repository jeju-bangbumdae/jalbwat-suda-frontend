import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner = ({ size }: { size: number }) => {
  return (
    <SSpinner $size={size}>
      <span></span>
    </SSpinner>
  );
};

const spinnerAnim = keyframes` 
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const SSpinner = styled.div<{ $size: number }>`
  width: ${(p) => p.$size + 'px'};
  height: ${(p) => p.$size + 'px'};

  span {
    display: block;
    width: ${(p) => p.$size + 'px'};
    height: ${(p) => p.$size + 'px'};
    border: ${(p) => `${p.$size < 40 ? 2 : 6}px solid transparent`};
    border-radius: 50%;
    border-right-color: rgba(0, 0, 0, 0.7);
    animation: ${spinnerAnim} 0.8s linear infinite;
  }
`;
