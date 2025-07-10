
import config from '@/lib/config';
import HomePage from './(main)/home/HomePage';

export default function Home() {

  return (
    <>
      <HomePage baseURL={config.NEXT_PUBLIC_API_URL} />
    </>
  );
}
