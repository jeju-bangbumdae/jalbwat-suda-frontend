import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import styled from 'styled-components';
import { Avatar, Text } from '@vapor-ui/core';
import Link from 'next/link';
import { CATEGORY_LIST } from '@/constant/commonConstant';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { getRecentGuestbookApi } from '@/api/getRecentGuestbookApi';

const guestbookList: GuestBookType[] = [
  {
    id: 2355,
    storeId: 2,
    name: '구름식당',
    category: 'restaurant',
    address: '제주시 어쩌구',
    user: {
      name: 'joo',
    },
    content: `제주도는 많이 와봤는데 이 가게는 처음 가봤어요! 가게 음식 메뉴도 많고 현지인들과 함께 먹는게 정말 현지 식당에 온것 같아서 분위기가 좋았습니다.
다음에도 가족과 함께 오고싶은 곳이에요. 서귀포시 근처에 있는 분들은 이 식당 꼭 한번 가보세요!`,
  },
  {
    id: 2355,
    storeId: 2,
    name: '구름식당',
    category: 'restaurant',
    address: '제주시 어쩌구',
    user: {
      name: 'joo',
    },
    content: `제주도는 많이 와봤는데 이 가게는 처음 가봤어요! 가게 음식 메뉴도 많고 현지인들과 함께 먹는게 정말 현지 식당에 온것 같아서 분위기가 좋았습니다.
다음에도 가족과 함께 오고싶은 곳이에요. 서귀포시 근처에 있는 분들은 이 식당 꼭 한번 가보세요!`,
  },
  {
    id: 2355,
    storeId: 2,
    name: '구름식당',
    category: 'restaurant',
    address: '제주시 어쩌구',
    user: {
      name: 'joo',
    },
    content: `제주도는 많이 와봤는데 이 가게는 처음 가봤어요! 가게 음식 메뉴도 많고 현지인들과 함께 먹는게 정말 현지 식당에 온것 같아서 분위기가 좋았습니다.
다음에도 가족과 함께 오고싶은 곳이에요. 서귀포시 근처에 있는 분들은 이 식당 꼭 한번 가보세요!`,
  },
];

export const MainSwiper = () => {
  // const [guestbookList, setGuestbookList] = useState<GuestBookType | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getRecentGuestbookApi();
  //     if (data) setGuestbookList(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Background>
      <h1>
        <Image src={'/images/logo.svg'} width={110} height={74} alt="잘봤수다 로고" />
      </h1>
      <SSwiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
        {guestbookList?.map((el, idx) => {
          return (
            <SSwiperSlide key={idx}>
              <Link href={`/store/${el.id}`}>
                <SlideInner>
                  <div>
                    <Avatar.Root
                      size="xl"
                      shape="circle"
                      alt={el?.name}
                      src={`/images/${el.category}.svg`}
                      style={{ border: '1px solid var(--vapor-color-gray-500)' }}
                    >
                      <Avatar.Image />
                      <Avatar.Fallback>{el?.name?.[0]}</Avatar.Fallback>
                    </Avatar.Root>
                    <div>
                      <Text asChild typography="heading5">
                        <h2>{el.name}</h2>
                      </Text>
                      <Text asChild>
                        <address>
                          {el.address?.split(' ').slice(0, 2).join(' ')} ·{' '}
                          {CATEGORY_LIST?.find((item) => item.value == el.category)?.label}
                        </address>
                      </Text>
                    </div>
                  </div>

                  <Text typography="body1" className="textContent">
                    <p>{el.content}</p>
                    <span>From.{el.user?.name}</span>
                  </Text>
                </SlideInner>

                <Text typeof="body1" style={{ color: 'var(--vapor-color-gray-500)' }}></Text>
              </Link>
            </SSwiperSlide>
          );
        })}
      </SSwiper>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  background: url('/images/background.png');
  background-size: cover;
`;

const SSwiper = styled(Swiper)`
  min-width: 254px;
  width: calc(100% - 200px);
  min-height: 360px;
  height: 80vw;
  max-height: 440px;
`;
const SSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;

  /* 흰색 */
  &:nth-child(1n),
  &:nth-child(5n),
  &:nth-child(7n) {
    background-color: var(--color-gray-050);
    color: var(--vapor-color-black);
    /* border: 1px solid var(--color-gray-900); */
  }
  /* 주황 */
  &:nth-child(2n),
  &:nth-child(4n),
  &:nth-child(6n) {
    border: unset;
    background-color: var(--color-primary-orange) !important;
    color: var(--color-white);
  }
  /* 노랑 */
  &:nth-child(3n),
  &:nth-child(8n),
  &:nth-child(9n) {
    border: unset;
    color: var(--vapor-color-black);
    background-color: var(--color-primary-yellow);
  }
`;

const SlideInner = styled.div`
  padding: 40px 20px 0;
  height: 100%;

  & > div {
    display: flex;
    gap: 20px;
    padding-bottom: 14px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--vapor-color-gray-500);
    address {
      font-size: 14px;
    }
  }

  .textContent {
    font-weight: 500;
    display: flex;
    height: calc(100% - 120px);
    flex-direction: column;
    justify-content: space-between;

    p + span {
      display: inline-block;
      width: 100%;
      text-align: right;
    }
  }
`;
