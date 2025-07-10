'use client';
import { Text } from '@vapor-ui/core';
import styled from 'styled-components';
import BackButton from '../buttons/BackButton';
import Image from 'next/image';

interface Props {
  isBack?: boolean;
  title?: string;
  call?: string;
  operationTime?: string;
}

const TopBar = ({ isBack = false, title = '', call, operationTime }: Props) => {
  return (
    <Container>
      {isBack && <BackButton />}
      <MainTitlePart>
        <Title>{title}</Title>
        <InfoDl>
          <dt>
            <Image src={'/images/time.svg'} className="time" width={13} height={13} alt={'시간'} />
            영업시간
          </dt>
          <dd>{operationTime}</dd>
        </InfoDl>
        <InfoDl>
          <dt>
            <Image
              src={'/images/call.svg'}
              width={18}
              height={18}
              alt={'번호'}
              className="callIcon"
            />
          </dt>
          <dd>{call}</dd>
        </InfoDl>
      </MainTitlePart>
    </Container>
  );
};

export default TopBar;

// 스타일 정의

const Container = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 23px;
  background-image: linear-gradient(#fff0c5, #eea14e);

  & > button {
    left: 20px;
    position: absolute;
  }
`;

const MainTitlePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoDl = styled.dl`
  display: flex;
  align-items: center;
  justify-content: center;

  .time {
    margin-right: 4px;
  }
  .callIcon {
    vertical-align: middle;
  }
  dt {
    margin-right: 8px;
  }
  &:last-child {
    margin-bottom: 74px;
  }
`;
