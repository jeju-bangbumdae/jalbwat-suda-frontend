'use client';
import { BottomNav } from '@/components/navigation/BottomNav';
import { Button, Text } from '@vapor-ui/core';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {

  const searchParams = useSearchParams();
  // const qrcode = searchParams.get('qrcode'); // 문자열로 반환됨 (예: 'true', 'false', null)
  // const [input, setInput] = useState("");

  const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/`)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getData();
    }, [])

  return (<>
    <main>
      <Button>너 됨?</Button>
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
        <p style={{color: "var(--color-primary-orange)"}}>테스트 문구! - 일반 텍스트</p>
        <Text style={{color: "var(--color-primary-orange)"}}>테스트 문구! - vapor 텍스트</Text>
      </ol>
    </main>
    <BottomNav />
  </>
  );
}