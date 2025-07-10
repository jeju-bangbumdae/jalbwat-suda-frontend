import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const MapBox = ({ markerdata, mapOptions, selectedPin, setSelectedPin }) => {
  const mapContainerRef = useRef(null); // 지도를 담을 DOM
  const kakaoMapRef = useRef<any>(null); // 지도 객체

  // 지도 그리기
  const drawMap = () => {
    if (!window?.kakao?.maps) return;

    const center = mapOptions?.center ?? [33.45012664348227, 126.91831460907449]; // 없으면 기본값
    const level = mapOptions?.level ?? 3;

    const options = {
      center: new window.kakao.maps.LatLng(...center),
      level: level,
    };

    if (mapContainerRef.current) {
      kakaoMapRef.current = new window.kakao.maps.Map(mapContainerRef.current, options);
    }
  };

  // 이미지 있는 마커 그리기
  const displayMarker = () => {
    console.log(markerdata, 'markerdata');
    if (kakaoMapRef.current)
      markerdata.forEach((el) => {
        // 마커의 이미지정보
        const imageSrc = '/images/mark.svg',
          imageSize = new window.kakao.maps.Size(46, 63),
          imageOption = { offset: new window.kakao.maps.Point(23, 65) };
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 지도에 생성할 마커
        const marker = new window.kakao.maps.Marker({
          image: markerImage,
          position: new window.kakao.maps.LatLng(el.x, el.y),
          clickable: true,
        });

        marker.setMap(kakaoMapRef.current);

        window.kakao.maps.event.addListener(marker, 'click', function () {
          console.log(selectedPin, 'selectedPin');
          setSelectedPin(el);
        });
      });
  };

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    // SDK 로드 이후 실행
    window.kakao.maps.load(() => {
      drawMap();
      displayMarker();
    });
  }, [mapOptions]);

  return <MapContainer ref={mapContainerRef} />;
};

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;
