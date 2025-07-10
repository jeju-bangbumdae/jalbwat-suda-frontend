'use client';
import { BottomModal } from '@/components/common/Modal/BottomModal';
import { Avatar, Text } from '@vapor-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

export const MapBottomModal = ({ data }) => {
  return (
    <BottomModal isOpen isBottomNavShow>
      <ul>
        {data?.map((el) => (
          <PlaceItem key={el.address}>
            <Link href={`/store/${el.id}`}>
              <div>
                <Avatar.Root
                  size="xl"
                  shape="circle"
                  alt={el?.name}
                  src={`/images/${el.category}.svg`}
                >
                  <Avatar.Image />
                  <Avatar.Fallback>{el?.category?.[0]}</Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <Text asChild typography="heading5">
                    <h5>{el.name}</h5>
                  </Text>
                  <Text asChild typography="body1">
                    <address>{el.address}</address>
                  </Text>
                </div>
              </div>
              <Text style={{ color: 'var(--vapor-color-gray-500)' }}>
                {el.guestBookCount > 10 ? '+10' : `${el.guestBookCount}`}개
              </Text>
            </Link>
          </PlaceItem>
        ))}
      </ul>
    </BottomModal>
  );
};

const PlaceItem = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--vapor-color-gray-300);

    & > div {
      display: flex;
      & > div {
        margin-left: 20px;
      }
    }
  }
`;
