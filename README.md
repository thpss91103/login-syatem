# 登入系統
### 介紹
可以將長網址轉換成短網址。
![login](https://github.com/thpss91103/login-system/blob/main/public/image/indexImg.png)
### 功能
1. 使用者可以登入
### 如何使用
1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：
```
cd shortenURL
```
4. 安裝所需套件
```
npm i express express-handlebars
npm i body-parser
npm i dotenv
```
5. 安裝mongoose
```
npm i mongoose
```
6. 將自己的mongoose網址貼在.env檔案裡。
7. 安裝nodemon(已安裝可跳過)
```
npm install -g nodemon
```
8. 啟動伺服器，輸入：
```
npm run dev
```
9. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
```
Listening on http://localhost:3000
```
10. 利用userList.json進行測試
```
models/seeds/userList.json
```
11. 若欲暫停使用
```
ctrl + c
```
### 開發工具
- Node.js 10.15.0
- Express 4.18.2
- Express-Handlebars 7.0.4
- Bootstrap 4.0.0
- Font-awesome 5.8.1
- MongoDB
- Mongoose 7.0.3
- Dotenv 16.0.3