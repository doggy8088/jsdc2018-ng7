# JSDC 2018 - Angular 7 Workshop

本專案是 [JSDC 2018](http://2018.jsdc.tw/)【體驗 Angular 7 極速開發】Workshop 的 Repo 內容，詳細記載開發過程所寫的原始碼變更紀錄。

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
