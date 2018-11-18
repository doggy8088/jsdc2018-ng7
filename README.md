# JSDC 2018 - Angular 7 Workshop

本專案是 [JSDC 2018](http://2018.jsdc.tw/)【體驗 Angular 7 極速開發】Workshop 的 Repo 內容，詳細記載開發過程所寫的原始碼變更紀錄。

## 實現功能

- [x] 新增待辦工作
- [x] 刪除待辦工作
- [x] 標示完成待辦工作
- [x] 將所有待辦工作標示完成
- [x] 將所有待辦工作標示未完成
- [x] 取消標示待辦工作
- [x] 顯示未完成的待辦工作數量
- [x] 依據狀態篩選待辦工作
- [x] 清除所有已完成的待辦工作
- [x] 滑鼠雙擊可編輯待辦工作
- [x] 滑鼠雙擊進入編輯時會讓鍵盤游標自動 focus 編輯欄位
- [x] 編輯待辦工作時按下 Escape 可取消編輯
- [x] 編輯待辦工作時按下 Enter 可確認編輯

## 開發說明

```sh
git clone https://github.com/doggy8088/jsdc2018-ng7.git
cd jsdc2018-ng7
npm install
npm start
```

瀏覽到 `http://localhost:4200/` 即可查看執行結果。

## 建置部署

執行 `ng build --prod` 即可建置出可部署的網站檔案，輸出結果會在 `dist/` 目錄下。

如果要發佈到 GitHub Pages 則必須加上 `--base-href /jsdc2018-ng7/` 參數，確保相對路徑正確。
