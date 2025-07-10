# 1단계: 빌드 스테이지 (Node.js 환경에서 애플리케이션 빌드)
FROM node:18 AS builder

# 앱 디렉토리 설정
# 컨테이너 내부의 /app 디렉토리를 작업 디렉토리로 설정합니다.
WORKDIR src/app

COPY package*.json ./

# 의존성 설치
# package.json에 정의된 모든 Node.js 의존성을 설치합니다.
RUN npm install

# 전체 앱 소스 복사
# 'jalbwat-suda-frontend' 폴더의 나머지 모든 파일들을 현재 작업 디렉토리(/app)로 복사합니다.
COPY . . 

# 앱 빌드
# React 애플리케이션을 빌드하여 정적 파일(HTML, CSS, JS)을 'build' 디렉토리에 생성합니다.
RUN npm run build

# 2단계: 런타임 스테이지 (가벼운 이미지로 정적 파일 서빙)
# Node.js 런타임만 포함된 더 가벼운 이미지를 사용하여 최종 이미지 크기를 최적화합니다.
FROM node:18-alpine

# 앱 디렉토리 설정
# 최종 애플리케이션의 작업 디렉토리를 /app으로 설정합니다.
WORKDIR src/app

# 1단계(builder)에서 빌드된 정적 파일들을 현재 작업 디렉토리(/app)로 복사합니다.
COPY --from=builder src/app/build ./build

# 정적 파일 서버 설치
# 'serve' 패키지를 전역으로 설치하여 빌드된 정적 파일을 서빙합니다.
RUN npm install -g serve

# 포트 노출
# 애플리케이션이 3000번 포트를 통해 외부 요청을 수신할 것임을 선언합니다.
EXPOSE 3000

# 정적 앱 실행
# 'serve' 명령어를 사용하여 'build' 디렉토리의 정적 파일을 3000번 포트로 실행합니다.
CMD ["serve", "-s", "build", "-l", "3000"]
