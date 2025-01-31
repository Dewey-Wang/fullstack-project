# 使用 Node.js 作為基礎映像
FROM node:18
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package*.json ./
RUN npm install

# 複製所有前端程式碼
COPY . .

# 編譯 React 應用程式
RUN npm run build

# 使用 Nginx 提供靜態檔案
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
