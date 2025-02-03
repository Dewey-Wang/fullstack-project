require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: process.env.AWS_REGION || "us-east-1" });
const dynamoDB = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.DYNAMODB_TABLE || "giftapp-data";

// **確保 `gifts.json` 存在**
const giftsFilePath = path.resolve(__dirname, "..", "util", "import-mongo", "gifts.json");

console.log(`🔍 嘗試讀取 gifts.json: ${giftsFilePath}`);

if (!fs.existsSync(giftsFilePath)) {
  console.error(`❌ 找不到 gifts.json: ${giftsFilePath}`);
  process.exit(1);
}

// **讀取 `gifts.json`**
const giftsData = JSON.parse(fs.readFileSync(giftsFilePath, "utf8")).docs;

const db = {
  getGifts: async () => {
    const params = new ScanCommand({ TableName: TABLE_NAME });
    const data = await dynamoDB.send(params);
    return data.Items || [];
  },
  addGift: async (gift) => {
    const params = new PutCommand({ TableName: TABLE_NAME, Item: gift });
    await dynamoDB.send(params);
    return gift;
  },
  initializeData: async () => {
    console.log("🔄 檢查是否需要導入 `gifts.json` 到 DynamoDB...");
    const existingGifts = await db.getGifts();
    if (existingGifts.length === 0) {
      console.log("🚀 正在導入 `gifts.json`...");
      for (const gift of giftsData) {
        await db.addGift(gift);
      }
      console.log("✅ `gifts.json` 數據已成功導入到 DynamoDB！");
    } else {
      console.log("✅ `gifts.json` 已存在於 DynamoDB，跳過導入！");
    }
  }
};

// **確保 API 啟動時自動導入 `gifts.json`**
db.initializeData();

module.exports = db;
