'use client';

import GuestBookListItem from './GuestBookListItem';
import styled from 'styled-components';

interface Props {
  data: GuestBookType[];
}

const GuestBookList = ({ data }: Props) => {
  return (
    <Container>
      {!!data &&
        data.map((iter) => {
          return (
            <GuestBookListItem
              key={iter.id}
              content={iter.content}
              // TODO: 이떄 닫기랑 열기랑 차이가 없는거 같아서 확인요망~
            />
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default GuestBookList;
