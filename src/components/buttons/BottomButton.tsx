import { Button } from '@vapor-ui/core';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  onClick: (e?: any) => void;
  disabled?: boolean;
  fromBottom?: string;
  isBg?: boolean;
};
export const BottomButton = ({
  children,
  onClick,
  disabled,
  fromBottom = '20px',
  isBg = true,
}: Props) => {
  return (
    <SButtonWrapper $fromBottom={fromBottom} $isBg={isBg}>
      <Button size="xl" stretch onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </SButtonWrapper>
  );
};

const SButtonWrapper = styled.div<{ $fromBottom; $isBg }>`
  position: fixed;
  bottom: ${(p) => p.$fromBottom};
  width: 100%;
  max-width: 500px;
  padding: 10px 30px 30px;
  left: 50%;
  transform: translateX(-50%);
  button {
    background-color: var(--color-primary-yellow);
    color: var(--vapor-color-gray-900);
  }
  background-color: ${(p) => (p.$isBg ? '#fff' : '')};
`;
