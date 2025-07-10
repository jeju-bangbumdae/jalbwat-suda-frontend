'use client';
import debounce from 'lodash.debounce';
import { MapTop } from '@/components/map/MapTop';
import { MapBox } from '@/components/map/MapBox';
import { MapBottomModal } from '@/components/map/MapBottomModal';
import Script from 'next/script';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { BottomNav } from '@/components/navigation/BottomNav';
import { Spinner } from '@/components/common/Spinner/Spinner';
import { getStoreListApi } from '@/api/getStoreListApi';
import { getStoreApi } from '@/api/getStoreApi';
import SearchParamProvider from './SearchParamProvider';

export default function Page() {
  const [selectedStore, setSelectedStore] = useState<StoreType>();
  const [storeId, setStoreId] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [mapOptions, setMapOptions] = useState<MapOptionsType>();
  const [latLon, setLatLon] = useState<LatLonType>();
  const [storeList, setStoreList] = useState<StoreType[]>([]);
  const kakaoMapRef = useRef<any>(null);

  const onLoadKakaoAPI = async () => {
    if (!window.kakao) return;

    window.kakao.maps.load(() => {
      if (storeId) return;
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
  }, [storeId]);

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
      }
    };
    fetchData();
  }, [storeId]);

  const fetchData = async (latLon) => {
    if (!latLon?.lat) return;
    const data = await getStoreListApi({
      lat: latLon?.lat,
      lon: latLon?.lon,
      category: category || '',
    });
    if (data) setStoreList(data);
  };

  const debouncedFetch = useMemo(() => debounce(fetchData, 500), [category]);
  useEffect(() => {
    debouncedFetch(latLon);
    return () => debouncedFetch.cancel();
  }, [category, latLon]);

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
        <SearchParamProvider
          onParams={({ category, storeId }) => {
            setCategory(category);
            setStoreId(storeId);
          }}
        />

        <MapTop setLatLon={setLatLon} kakaoMapRef={kakaoMapRef} />
      </Suspense>
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
    </>
  );
}
