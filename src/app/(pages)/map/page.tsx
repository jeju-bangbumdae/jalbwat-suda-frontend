'use client';

import { MapBox } from '@/components/map/MapBox/MapBox';
import { MapTop } from '@/components/map/MapTop/MapTop';
import { BottomNav } from '@/components/navigation/BottomNav';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useState } from 'react';

const data = [
  {
    name: '구름식당',
    category: 'restaurant',
    img: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    address: '제주시 어쩌구 우동',
    x: 33.45012664348227,
    y: 126.91831460907449,
  },
];

export default function Page() {
  const [selectedPin, setSelectedPin] = useState();
  const searchParams = useSearchParams();
  const [mapOptions, setMapOptions] = useState({ center: [33.3606281, 126.5358345], level: 10 }); //기본 제주도 중앙

  const onLoadKakaoAPI = async () => {
    window.kakao.maps.load(() => {
      const getGeoSuccess = (event) => {
        setMapOptions({
          center: [event.coords.latitude, event.coords.longitude],
          level: 5,
        });
      };
      window.navigator.geolocation.getCurrentPosition(getGeoSuccess);
    });
  };

  // category, 현재 위치 사용해서 markerdata 보여주기
  const reqData = {
    x: mapOptions.center[0],
    y: mapOptions.center[1],
    category: searchParams.get('category'),
  };

  return (
    <>
      {/* category설정하기 */}
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
        onLoad={onLoadKakaoAPI}
        onError={(err) => console.log(err)}
      />
      <MapTop />
      <MapBox
        markerdata={data}
        mapOptions={mapOptions}
        selectedPin={selectedPin}
        setSelectedPin={setSelectedPin}
      />
      <BottomNav />
    </>
  );
}
