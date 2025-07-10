'use client';
import { getGuestBooksByStoreApi } from '@/api/getGuestBooksByStoreApi';
import { getStoreApi } from '@/api/getStoreApi';
import { Spinner } from '@/components/common/Spinner/Spinner';
import GuestBookList from '@/components/guestbook/GuestBookList';
import TopBar from '@/components/navigation/TopBar';

import { Text } from '@vapor-ui/core';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type StoreInfoType = {
  store: StoreType | undefined;
  guestbookList: GuestBookType[] | undefined;
};

export default function Page() {
  const { id } = useParams();
  const [storeInfo, setStoreInfo] = useState<StoreInfoType>();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const guestbookData = await getGuestBooksByStoreApi({ storeId: +id });
      const storeData = await getStoreApi({ storeId: +id });
      if (storeData)
        setStoreInfo({
          store: storeData,
          guestbookList: guestbookData,
        });
    };
    fetchData();
  }, [id]);

  return (
    <PageWrapper>
      <TopBar
        isBack
        title={storeInfo?.store?.name}
        call={storeInfo?.store?.phone}
        operationTime={storeInfo?.store?.operationTime}
        hasMapBtn
      />
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
          {storeInfo?.guestbookList ? (
            <GuestBookList data={storeInfo?.guestbookList} />
          ) : (
            <Spinner size={100} color="gray" style={{ marginTop: '30px' }} />
          )}
          {storeInfo?.guestbookList?.length == 0 && (
            <Text
              typography="body2"
              style={{ color: 'var(--color-gray-600)', textAlign: 'center' }}
            >
              작성된 방명록이 없습니다.
            </Text>
          )}
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
