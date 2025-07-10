import { Button } from '@vapor-ui/core';
import styled from 'styled-components';

type Props = { children: React.ReactNode; onClick: (e?: any) => void; disabled?: boolean };
export const BottomButton = ({ children, onClick, disabled }: Props) => {
  return (
    <SButtonWrapper>
      <Button size="xl" stretch onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </SButtonWrapper>
  );
};

const SButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  left: 50%;
  transform: translateX(-50%);
  button {
    background-color: var(--color-primary-yellow);
    color: var(--vapor-color-gray-900);
  }
`;
