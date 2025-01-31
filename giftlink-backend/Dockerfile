# 使用 Node.js 作為基礎映像
FROM node:18
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package*.json ./
RUN npm install

# 複製所有後端程式碼
COPY . .

# 設定環境變數
ENV PORT=3060
EXPOSE 3060

# 啟動應用程式
CMD ["node", "server.js"]
