# Node.js 베이스 이미지
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 포트 오픈
EXPOSE 3000

# 서버 실행
CMD ["npm", "start"]
