'use client';
import { BottomButton } from '@/components/buttons/BottomButton';
import CustomTextArea from '@/components/common/Fields/CustomTextArea';
import CustomTextField from '@/components/common/Fields/CustomTextField';
import TopBar from '@/components/navigation/TopBar';
import { Text } from '@vapor-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

const data: StoreType = {
  id: 2355,
  name: '구름식당',
  category: 'restaurant',
  address: '제주시 어쩌구 우동',
  operationTime: '월~금 09:00~24:00',
  phone: '010-3333-3333',
  guestBookCount: 10,
  lat: '33.45012664348227',
  lon: '126.91831460907449',
};

export default function Page() {
  const [question, setQuestion] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <TopBar isBack title={data?.name} call={data?.phone} operationTime={data?.operationTime} />
      <GuestbookForm>
        <Text typography="heading4" asChild>
          <h3>방명록 남기기</h3>
        </Text>
        <CustomTextField
          label={
            <LabelBox>
              <span>Q</span>
              랜덤으로 들어오는 질문 1개
            </LabelBox>
          }
          value={question}
          onChange={(value) => setQuestion(value)}
        />
        <CustomTextArea
          label={
            <LabelBox>
              <span>Q</span>
              방명록을 적어주세요. (30자 이상)
            </LabelBox>
          }
          id={'content'}
          placeholder="30자 이상 작성해주세요."
          value={content}
          onChange={(value) => setContent(value)}
        />
        <BottomButton
          disabled={!question || content?.length < 30}
          onClick={handleSubmit}
          fromBottom={'0'}
        >
          확인
        </BottomButton>
      </GuestbookForm>
    </>
  );
}

const GuestbookForm = styled.form`
  position: relative;
  top: -20px;
  border-radius: 20px 20px 0 0;
  background-color: var(--color-white);
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 40px 20px 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    padding-left: 10px;
  }
  fieldset {
    margin-bottom: 100px;
  }
`;

const LabelBox = styled.span`
  display: flex;
  gap: 6px;
  font-size: 14px;
  color: var(--color-black);

  span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: var(--color-primary-orange);
    color: var(--color-white);
    border-radius: 50%;
  }
`;
