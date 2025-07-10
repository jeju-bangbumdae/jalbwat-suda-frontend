'use client';
import { MainSwiper } from '@/components/main/MainSwiper';
import { BottomNav } from '@/components/navigation/BottomNav';
import axios from 'axios';
import { useEffect } from 'react';

export default function HomePage({ baseURL, kakaoKey }) {
  console.log('!!', baseURL);
  console.log("kakao!!!, ", kakaoKey);
  const getData = async () => {
    try {
      const res = await axios.get(`${baseURL}/health`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <MainSwiper />
      <BottomNav />
    </div>
  );
}
