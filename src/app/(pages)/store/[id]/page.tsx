'use client';
import GuestBookList from '@/components/guestbook/GuestBookList';
import TopBar from '@/components/navigation/TopBar';
import { GuestBookResponse } from '@/types/dto/GuestBook';
import { Text } from '@vapor-ui/core';
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

const guestBookData: GuestBookResponse[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  content: `방명록 내용 ${i + 1}`,
}));

export default function Page() {

  return (
    <PageWrapper>
      <TopBar isBack title={data.name} call={data.phone} operationTime={data.operationTime} hasMapBtn />
      <GuestbookModal>
        <TextContainer>
          <Text typography="heading5" asChild>
            <h3 style={{ color: 'var(--color-gray-900)' }}>방명록</h3>
          </Text>
          <Text typography="body3" style={{ color: 'var(--color-gray-600)' }}>
            *방명록은 QR로만 남길 수 있습니다.
          </Text>
        </TextContainer>
        <ScrollArea>
          <GuestBookList data={guestBookData} />
        </ScrollArea>
      </GuestbookModal>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-background);
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0; // 크기 고정
`;

const GuestbookModal = styled.div`
  position: relative;
  top: -20px;
  border-radius: 20px 20px 0 0;
  background-color: var(--color-white);
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 60px 20px 0;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  overflow-y: auto;
`;


const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;