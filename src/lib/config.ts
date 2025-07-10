// src/lib/config.ts (서버 컴포넌트 전용)
import fs from 'fs';
import path from 'path';

export type FrontendConfig = {
  NEXT_PUBLIC_API_URL?: string;
  KAKAO_KEY?: string;
  // 필요한 설정들 추가
};

let config: FrontendConfig = {};

try {
  const configPath = path.resolve(process.cwd(), 'k8s/config/frontend-config.json');
  const configFile = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(configFile);
} catch (e) {
  console.error('❌ Config load failed:', e);
}

export default config;