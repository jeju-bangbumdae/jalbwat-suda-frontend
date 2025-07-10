'use client';
import { CATEGORY_LIST } from '@/constant/commonConstant';
import { Button } from '@vapor-ui/core';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';

export const MapTop = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const router = useRouter();

  const handleClickButton = (newCate) => {
    router.replace(`/guestbook?category=${category == newCate ? '' : newCate}`);
  };

  return (
    <MapTopWrapper>
      {/* <TextInput.Root visuallyHidden size="xl">
        <TextInput.Label>검색창</TextInput.Label>
        <TextInput.Field style={{ width: '100%' }} />
      </TextInput.Root> */}

      {/* 필터 */}
      <ul>
        {CATEGORY_LIST.map((item) => {
          const selected = category == item.value;
          return (
            <li key={item.label}>
              <FilterButton
                size="md"
                color="contrast"
                variant={'outline'}
                $selected={selected}
                onClick={() => handleClickButton(item.value)}
              >
                {item.label}
              </FilterButton>
            </li>
          );
        })}
      </ul>
    </MapTopWrapper>
  );
};

const MapTopWrapper = styled.div`
  padding: 16px;
  position: absolute;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    gap: 6px;
    margin: 8px 0 0 0;
  }
`;

const FilterButton = styled(Button)<{ $selected }>`
  padding: 0 20px;
  border-radius: 20px;
  background-color: white;
  border: ${(p) =>
    p.$selected ? '1.5px solid var(--color-gray-900)' : '1.5px solid var(--color-gray-300)'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
