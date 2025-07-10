'use client';
import { Button, IconButton, Text } from '@vapor-ui/core';
import styled from 'styled-components';
import BackButton from '../buttons/BackButton';
import Image from 'next/image';
import SettingIcon from '../icons/SettingIcon';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  isBack?: boolean;
  title?: string;
  call?: string;
  operationTime?: string;
  hasMapBtn?: boolean;
  hasSetting?: boolean;
  height?: string;
}

const TopBar = ({
  isBack = false,
  title = '',
  call,
  operationTime,
  hasMapBtn = false,
  hasSetting = false,
  height,
}: Props) => {
  const { id } = useParams();
  const router = useRouter();
  const handleClickMapBtn = () => {
    router.push(`/guestbook?storeId=${id}`);
  };

  return (
    <Container $height={height}>
      {isBack && (
        <div style={{ position: 'absolute', left: '20px' }}>
          <BackButton />
        </div>
      )}
      <MainTitlePart>
        <Title>{title || hasSetting ? '' : '로딩 중'}</Title>
        {!!operationTime && (
          <InfoDl>
            <dt>
              <Image
                src={'/images/time.svg'}
                className="time"
                width={13}
                height={13}
                alt={'시간'}
              />
              영업시간
            </dt>
            <dd>{operationTime || '-'}</dd>
          </InfoDl>
        )}
        {!!call && (
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
            <dd>{call || '-'}</dd>
          </InfoDl>
        )}
        {hasMapBtn && (
          <>
            <MapButton size="md" color="contrast" variant={'outline'} onClick={handleClickMapBtn}>
              {'지도 보기'}
            </MapButton>
            <div style={{ paddingBottom: '60px' }}></div>
          </>
        )}
      </MainTitlePart>
      {hasSetting && (
        <IconButton
          className="tail"
          aria-label="설정"
          variant="ghost"
          style={{ position: 'absolute', right: '20px', top: '23px' }} // 직접 위치 지정
        >
          <SettingIcon />
        </IconButton>
      )}
    </Container>
  );
};

export default TopBar;

// 스타일 정의

const Container = styled.div<{ $height?: string }>`
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 23px;
  background-image: linear-gradient(#fff0c5, #eea14e);

  height: ${(props) => props.$height ?? 'auto'};
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

const MapButton = styled(Button)`
  padding: 0 20px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid var(--color-gray-900);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
