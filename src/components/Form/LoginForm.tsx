'use client';

import { loginApi } from '@/api/postLoginApi';
import { BottomButton } from '@/components/buttons/BottomButton';
import CustomTextField from '@/components/common/Fields/CustomTextField';
import { Text } from '@vapor-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginApi({ email, password });
    if (token) {
      router.push('/');
    } else {
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <SForm>
      <Text typography="heading2" asChild>
        <h1>
          <Image src={'/images/logo.svg'} width={110} height={74} alt="잘봤수다 로고" />
        </h1>
      </Text>
      <CustomTextField
        label={'이메일'}
        placeholder="이메일을 작성해주세요."
        type="email"
        value={email}
        onChange={(value) => setEmail(value)}
      />
      <CustomTextField
        label={'비밀번호'}
        value={password}
        placeholder="비밀번호를 작성해주세요."
        onChange={(value) => setPassword(value)}
      />
      <BottomButton onClick={handleLogin} disabled={!email || !password}>
        로그인
      </BottomButton>
    </SForm>
  );
};

const SForm = styled.form`
  padding: 20px;

  h1 {
    margin: 20px 0;
    text-align: center;
  }
  input {
    margin-bottom: 20px;
  }
`;

export default LoginForm;
