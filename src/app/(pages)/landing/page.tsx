'use client';
import { Button } from '@vapor-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function Page() {
  const router = useRouter();

  return (
    <BackgorundContainer>
      <h1>
        <Image src={'/images/logo.svg'} width={172} height={129} alt="잘봤수다 로고" />
      </h1>
      <div>
        <SButton size="xl" stretch onClick={() => router.push('/login')}>
          로그인하기
        </SButton>
        <SSpan>혹시 사장님이신가요?</SSpan>
      </div>
    </BackgorundContainer>
  );
}

const BackgorundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/images/landingBg.png');
  background-size: cover;
  background-position: 80%;
  gap: 309px;

  h1 {
    margin-top: 20px;
  }
`;

const SButton = styled(Button)`
  background-color: var(--color-primary-yellow);
  color: var(--vapor-color-gray-900);
`;

const SSpan = styled.span`
  text-decoration: underline;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  margin-top: 14px;
  text-align: center;
  width: 100%;
  display: inline-block;
`;
