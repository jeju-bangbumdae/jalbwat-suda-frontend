import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

export type FrontendConfig = {
  NEXT_PUBLIC_API_URL?: string;
  KAKAO_KEY?: string;
  // 필요한 설정들 추가
};

let config: FrontendConfig = {};

// 1. frontend-config.json 로드
try {
  const configPath = path.resolve(process.cwd(), 'k8s/config/frontend-config.json');
  const configFile = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(configFile);
} catch (e) {
  console.error('❌ frontend-config.json load failed:', e);
}

// 2. .env 파일 로드 및 병합 (선택 사항)
try {
  const envPath = path.resolve('/app/.env'); // volumeMount로 마운트한 위치
  const envResult = dotenv.config({ path: envPath });

  if (envResult.error) throw envResult.error;

  config = {
    ...config,
    NEXT_PUBLIC_API_URL: config.NEXT_PUBLIC_API_URL,
    KAKAO_KEY: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY || config.KAKAO_KEY,
  };
} catch (e) {
  console.error('❌ .env load failed:', e);
}

export default config;