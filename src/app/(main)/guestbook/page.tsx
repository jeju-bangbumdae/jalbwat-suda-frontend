'use client';

import { MapTop } from '@/components/map/MapTop';
import { MapBox } from '@/components/map/MapBox';
import { MapBottomModal } from '@/components/map/MapBottomModal';

// import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect, useState } from 'react';
import { BottomNav } from '@/components/navigation/BottomNav';
import { Spinner } from '@/components/common/Spinner/Spinner';

const data = [
  {
    id: 2355,
    name: '구름식당',
    category: 'restaurant',
    address: '제주시 어쩌구 우동',
    openingHour: '월~금 09:00~24:00',
    number: '010-3333-3333',
    guestBookCount: 10,
    x: 33.45012664348227,
    y: 126.91831460907449,
  },
];

type MapOptionsType = {
  center: number[];
  level: number;
};

// category, 현재 위치 사용해서 markerdata 보여주기
export default function Page() {
  const [selectedPin, setSelectedPin] = useState();
  // const searchParams = useSearchParams();
  const [mapOptions, setMapOptions] = useState<MapOptionsType>(); //기본 제주도 중앙

  // 이미 한번 실행된거라 뒤로가기 하면 이건 실행안된다.. 걍 기본 제주도 중앙으로 들어옴( 근데 어짜피 데이터  현재 좌표 기준으로 들어올거 같아서 괜춘~~)
  const onLoadKakaoAPI = async () => {
    window.kakao.maps.load(() => {
      console.log("env!! - in load : ", process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      const getGeoSuccess = (event) => {
        setMapOptions({
          center: [event.coords.latitude, event.coords.longitude],
          level: 5,
        });
      };
      const getGeoErr = () => {
        setMapOptions({
          center: [33.3606281, 126.5358345],
          level: 10,
        });
      };
      window.navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoErr);
    });
  };

  // TODO: reqData 들어오면 첫번쨰꺼로 setMapOptions

  // const reqData = {
  //   // 이 맵옵션이 완전 처음에는 > 현재위치 아니면은 내가 지금 보고 있는 맵에서의 중심값을 보내기
  //   //  map.getCenter();
  //   x: mapOptions?.center[0],
  //   y: mapOptions?.center[1],
  //   category: searchParams.get('category'),
  // };

  // useEffect(() => {
  //   if (!reqData?.[0]?.x) return;
  //   setMapOptions({
  //     center: [reqData[0].x, reqData[0].y],
  //     level: 5,
  //   });
  // }, [reqData?.[0]?.x]);

  console.log("env!! - kakao key: ", process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  console.log("env!! - Process : ", process);
  console.log("env!! - process.env: ", process.env);

  useEffect(() => {
  console.log("[useEffect] env!! - kakao key: ", process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  console.log("[useEffect] env!! - Process : ", process);
  console.log("[useEffect] env!! - process.env: ", process.env);
  }, [])
  return (
    <>
      {/* category설정하기 */}
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
        onLoad={onLoadKakaoAPI}
        onError={(err) => console.log(err)}
      />
      <Suspense fallback={<Spinner size={200} />}>
        <MapTop />

        <MapBox
          markerdata={data}
          mapOptions={mapOptions}
          selectedPin={selectedPin}
          setSelectedPin={setSelectedPin}
        />
        {data && <MapBottomModal data={data} />}
        <BottomNav />
      </Suspense>
    </>
  );
}
