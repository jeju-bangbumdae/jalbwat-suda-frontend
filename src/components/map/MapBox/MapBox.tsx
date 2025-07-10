import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const MapBox = ({ markerdata, mapOptions, selectedPin, setSelectedPin }) => {
  const mapContainerRef = useRef(null); // 지도를 담을 DOM
  const kakaoMapRef = useRef<any>(null); // 지도 객체

  // 지도 그리기
  const drawMap = () => {
    const options = {
      center: new window.kakao.maps.LatLng(...mapOptions.center),
      level: mapOptions.level,
    };

    if (mapContainerRef.current)
      kakaoMapRef.current = new window.kakao.maps.Map(mapContainerRef.current, options);
  };

  // 이미지 있는 마커 그리기
  const displayMarker = () => {
    console.log(markerdata, 'markerdata');
    if (kakaoMapRef.current)
      markerdata.forEach((el) => {
        // 마커의 이미지정보
        // const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
        //   imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        //   imageOption = { offset: new window.kakao.maps.Point(27, 69) };
        // const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 지도에 생성할 마커
        const marker = new window.kakao.maps.Marker({
          // image: markerImage,
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
    if (!window.kakao) return;
    drawMap();
    displayMarker();
  }, [mapOptions]);

  return <MapContainer ref={mapContainerRef} />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 80vh;
`;
