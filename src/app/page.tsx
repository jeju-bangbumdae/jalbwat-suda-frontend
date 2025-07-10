
import config from '@/lib/config';
import HomePage from './(main)/home/HomePage';

export default function Home() {

  console.log(config.NEXT_PUBLIC_API_URL);
  
  return (
    <>
    <HomePage baseURL={config.NEXT_PUBLIC_API_URL}/>
    </>
  );
}