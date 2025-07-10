'use client';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

const markerdata = [
  {
    mapy: 33.5066211,
    mapx: 126.49281,
  },
  {
    mapy: 33.450705,
    mapx: 126.570677,
  },
  {
    mapy: 33.550705,
    mapx: 126.670677,
  },
];

export default function Page() {
  const mapContainerRef = useRef(null); // 지도를 담을 DOM
  const kakaoMapRef = useRef<any>(null); // 지도 객체
  const [mapOptions, setMapOptions] = useState({ center: [33.3606281, 126.5358345], level: 10 });

  // 지도 그리기
  const drawMap = () => {
    const options = {
      center: new window.kakao.maps.LatLng(...mapOptions.center),
      level: mapOptions.level,
    };

    if (mapContainerRef.current)
      kakaoMapRef.current = new window.kakao.maps.Map(mapContainerRef.current, options);

    if (kakaoMapRef.current) {
      const zoomControl = new window.kakao.maps.ZoomControl();
      kakaoMapRef.current.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }
  };

  // 이미지 있는 마커 그리기
  const displayMarker = () => {
    if (kakaoMapRef.current)
      markerdata.forEach((el) => {
        console.log(window.kakao.maps);

        // 마커의 이미지정보
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
          imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        // 지도에 생성할 마커
        const marker = new window.kakao.maps.Marker({
          image: markerImage,
          position: new window.kakao.maps.LatLng(el.mapy, el.mapx),
        });

        marker.setMap(kakaoMapRef.current);
      });
  };

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

  useEffect(() => {
    if (!window.kakao) return;
    drawMap();
    displayMarker();
  }, [mapOptions]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
        onLoad={onLoadKakaoAPI}
        onError={(err) => console.log(err)}
      />
      <div>
        <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
      </div>
    </>
  );
}
