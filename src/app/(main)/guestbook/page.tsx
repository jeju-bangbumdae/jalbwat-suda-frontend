'use client';

import { MapTop } from '@/components/map/MapTop';
import { MapBox } from '@/components/map/MapBox';
import { MapBottomModal } from '@/components/map/MapBottomModal';

import { useRouter, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect, useRef, useState } from 'react';
import { BottomNav } from '@/components/navigation/BottomNav';
import { Spinner } from '@/components/common/Spinner/Spinner';
import { getStoreListApi } from '@/api/getStoreListApi';
import { getStoreApi } from '@/api/getStoreApi';

// const storeList: StoreType[] = [
//   {
//     id: 2355,
//     name: '구름식당',
//     category: 'restaurant',
//     address: '제주시 어쩌구 우동',
//     operationTime: '월~금 09:00~24:00',
//     phone: '010-3333-3333',
//     guestBookCount: 10,
//     lat: '33.45012664348227',
//     lon: '126.91831460907449',
//   },
// ];

export default function Page() {
  const [selectedStore, setSelectedStore] = useState<StoreType>();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const storeId = searchParams.get('storeId');
  const router = useRouter();
  const [mapOptions, setMapOptions] = useState<MapOptionsType>();
  const [latLon, setLatLon] = useState<LatLonType>();
  const [storeList, setStoreList] = useState<StoreType[]>([]);
  const kakaoMapRef = useRef<any>(null); // 지도 객체

  // 1.-1 현재 위치 파악 혹은 제주도 정중앙으로 latlon (storeId가 없을때)
  const onLoadKakaoAPI = async () => {
    if (!window.kakao) return;

    window.kakao.maps.load(() => {
      console.log('env!! - in load : ', process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      const getGeoSuccess = (event) => {
        setLatLon({
          lat: event.coords.latitude,
          lon: event.coords.longitude,
        });
      };
      const getGeoErr = () => {
        setLatLon({
          lat: '33.3606281',
          lon: '126.5358345',
        });
      };
      window.navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoErr);
    });
  };
  useEffect(() => {
    if (!storeId) onLoadKakaoAPI();
  }, []);

  // 1-2. storeId가 있을 때는  storeList 1개만
  useEffect(() => {
    if (!storeId) return;
    const fetchData = async () => {
      const data = await getStoreApi({ storeId: +storeId });
      if (data) {
        setStoreList([data]);
        setMapOptions({
          center: [+data.lat, +data.lon],
          level: 5,
        });
        router.replace('/guestbook');
      }
    };
    fetchData();
  }, [storeId]);

  // 2. latLon, category이 바뀔때 목록 불러오기
  useEffect(() => {
    if (!latLon?.lat) return;
    const fetchData = async () => {
      const data = await getStoreListApi({
        lat: latLon?.lat,
        lon: latLon?.lon,
        category: category || '',
      });
      if (data) setStoreList(data);
    };
    fetchData();
  }, [category, latLon]);

  // 3. 목록이 들어오면 첫번째로 setMapOptions해서 지도 그리기
  useEffect(() => {
    if (!storeList?.[0]) return;
    setMapOptions({
      center: [+storeList[0].lat, +storeList[0].lon],
      level: 5,
    });
  }, [storeList]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
        onLoad={onLoadKakaoAPI}
        onError={(err) => console.log(err)}
      />
      <Suspense fallback={<Spinner size={80} />}>
        <MapTop setLatLon={setLatLon} kakaoMapRef={kakaoMapRef} />
        <MapBox
          kakaoMapRef={kakaoMapRef}
          storeList={storeList}
          mapOptions={mapOptions}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          setMapOptions={setMapOptions}
        />
        {storeList && <MapBottomModal data={storeList} />}
        <BottomNav />
      </Suspense>
    </>
  );
}
