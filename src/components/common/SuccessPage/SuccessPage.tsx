'use client';
import { BottomButton } from '@/components/buttons/BottomButton';
import { Text } from '@vapor-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

type Props = {
  title: string;
  isCharicShow?: boolean;
  isBgShow?: boolean;
};

export const SuccessPage = ({ title, isCharicShow = true, isBgShow = true }: Props) => {
  const router = useRouter();

  return (
    <BackgorundContainer $isBgShow={isBgShow}>
      <Text typography="heading3" asChild>
        <h1>{title}</h1>
      </Text>
      {isCharicShow && (
        <Image src={'/images/character.png'} width={212} height={154} alt="남방이" />
      )}
      <BottomButton isBg={false} onClick={() => router.push('/')}>
        확인
      </BottomButton>
    </BackgorundContainer>
  );
};

const BackgorundContainer = styled.div<{ $isBgShow }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background: ${(p) => (p.$isBgShow ? `url('/images/background.png')` : ``)};
  background-size: cover;

  h1 {
    margin-bottom: 30px;
    margin-top: -120px;
  }
`;
