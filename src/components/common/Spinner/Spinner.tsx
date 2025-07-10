import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner = ({
  size,
  color = 'gray',
  style,
}: {
  size: number;
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <SSpinner $size={size} $color={color} style={style}>
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

const SSpinner = styled.div<{ $size: number; $color: string }>`
  width: ${(p) => p.$size + 'px'};
  height: ${(p) => p.$size + 'px'};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  span {
    display: block;
    width: ${(p) => p.$size + 'px'};
    height: ${(p) => p.$size + 'px'};
    border: ${(p) => `${p.$size < 40 ? 2 : 6}px solid transparent`};
    border-radius: 50%;
    border-right-color: ${(p) => p.$color};
    opacity: 0.7;
    animation: ${spinnerAnim} 0.8s linear infinite;
  }
`;
