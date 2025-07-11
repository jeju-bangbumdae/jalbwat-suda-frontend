'use client';

import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export const BottomModal = ({
  isOpen,
  children,
  isBottomNavShow,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  isBottomNavShow?: boolean;
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(200); // 초기 높이

  const startY = useRef(0);
  const startHeight = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startY.current = e.clientY;
    startHeight.current = height;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dy = moveEvent.clientY - startY.current;
      setHeight(Math.max(150, startHeight.current - dy)); // 최소 150px
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  if (!isOpen) return null;

  return (
    <>
      <CustomModal ref={sheetRef} style={{ height }} $isBottomNavShow={isBottomNavShow}>
        <Handle onMouseDown={onMouseDown} />
        <Content>{children}</Content>
      </CustomModal>
    </>
  );
};

// 모달 시트
const CustomModal = styled.div<{ $isBottomNavShow }>`
  position: fixed;
  left: 50%;
  bottom: ${(P) => (P.$isBottomNavShow ? '100px' : 0)};
  transform: translateX(-50%);
  background: var(--color-white);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 1000;
  transition: height 0.2s ease;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.08);
`;

// 위아래 드래그 핸들
const Handle = styled.div`
  width: 50px;
  height: 4px;
  background: var(--color-gray-300);
  border-radius: 50px;
  margin: 20px auto;
  cursor: ns-resize;
`;

// 내용 부분
const Content = styled.div`
  padding: 10px 20px 50px;
  height: calc(100% - 4px);
  overflow-y: auto;
`;
