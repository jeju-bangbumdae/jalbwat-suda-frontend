'use client';
import Script from 'next/script';
import { useRef } from 'react';

export default function Page() {
  const mapRef = useRef(null); // 지도를 담을 DOM
  const kakaoMapRef = useRef(null); // 지도 객체

  const onLoadKakaoAPI = async () => {
    window.kakao.maps.load(() => {
      const getGeoSuccess = (event) => {
        const options = {
          center: new window.kakao.maps.LatLng(event.coords.latitude, event.coords.longitude),
          level: 5,
        };
        if (mapRef.current)
          kakaoMapRef.current = new window.kakao.maps.Map(mapRef.current, options);
      };

      const getGeoErr = () => {
        const options = {
          center: new window.kakao.maps.LatLng(33.3606281, 126.5358345),
          level: 10,
        };
        if (mapRef.current)
          kakaoMapRef.current = new window.kakao.maps.Map(mapRef.current, options);
      };

      window.navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoErr);

      
    });
  };
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
        onLoad={onLoadKakaoAPI}
        onError={(err) => console.log(err)}
      />
      <div>
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      </div>
    </>
  );
}
