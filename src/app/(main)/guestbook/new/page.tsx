'use client';
import { getRandomQuestionApi } from '@/api/getRandomQuestionApi';
import { getStoreApi } from '@/api/getStoreApi';
import { postGuestbookApi } from '@/api/postGuestbookApi';
import { BottomButton } from '@/components/buttons/BottomButton';
import CustomTextArea from '@/components/common/Fields/CustomTextArea';
import CustomTextField from '@/components/common/Fields/CustomTextField';
import TopBar from '@/components/navigation/TopBar';
import { Text } from '@vapor-ui/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// storeId 서치파람 필수값
export default function Page() {
  const [storeInfo, setStoreInfo] = useState<StoreType & { question: QuestionType }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const storeId = searchParams.get('storeId');
  const [answer, setAnswer] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!storeId) return;
    const fetchData = async () => {
      const quesitonData = await getRandomQuestionApi();
      const storeData = await getStoreApi({ storeId: +storeId });
      if (storeData && quesitonData) setStoreInfo({ ...storeData, question: quesitonData });
    };
    fetchData();
  }, [storeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!storeId) return;
    const data = await postGuestbookApi({
      answer,
      content,
      questionId: Number(storeInfo?.question?.id),
      storeId: +storeId,
    });
    if (data) router.push('/guestbook/new/success');
  };

  return (
    <>
      <TopBar
        isBack
        title={storeInfo?.name}
        call={storeInfo?.phone}
        operationTime={storeInfo?.operationTime}
      />
      <GuestbookForm>
        <Text typography="heading4" asChild>
          <h3 style={{ color: 'var(--color-gray-900)' }}>방명록 남기기</h3>
        </Text>
        <CustomTextField
          label={
            <LabelBox>
              <span>Q</span>
              {storeInfo?.question?.question}
            </LabelBox>
          }
          value={answer}
          placeholder={storeInfo?.question?.question}
          onChange={(value) => setAnswer(value)}
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
          disabled={!answer || content?.length < 30}
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
  padding: 60px 20px 0;

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
