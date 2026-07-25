# PWA対応 仕様書

## 背景・目的
- 本アプリ（Cloudflare Pagesにデプロイ）をPWA（Progressive Web App）対応させ、ホーム画面への追加・スタンドアロン起動・静的アセットのキャッシュによる再訪問時の高速化を可能にする。
- 動画データ・API応答等の動的コンテンツはキャッシュ対象に含めない（キャッシュにより古いデータが表示され続けるリスクを避けるため）。

## 要件

- [ ] `vite-plugin-pwa` を devDependencies に追加する
- [ ] `vite.config.ts` に `VitePWA` プラグインを追加する
  - [ ] `registerType: 'autoUpdate'` とし、Service Worker更新時にユーザー操作なしで最新版へ切り替わるようにする
  - [ ] manifestに `name` / `short_name` / `description` / `theme_color` / `background_color` / `display: 'standalone'` を設定する
  - [ ] アイコンは暫定で既存の `public/react.svg` を流用する（正式なアイコン画像は別途対応、本仕様のスコープ外）
  - [ ] 静的ビルド成果物（JS/CSS/HTML/アイコン等）のみをprecache対象とし、APIレスポンス等の動的データに対するruntime cachingは設定しない
- [ ] `npm run build` 実行後、`dist/` に `manifest.webmanifest` と Service Worker（`sw.js` 等）が生成されることを確認する
- [ ] 開発サーバー（`npm run dev`）ではPWA機能を有効化しない（`devOptions.enabled` はデフォルトのfalseのまま。ローカルでの動作確認は `npm run build` → `npm run preview` で行う）

## スコープ外（今回対応しない）
- 正式なPWAアイコン画像（192x192, 512x512等のPNG）の用意
- プッシュ通知対応
- カスタム更新通知UI（`virtual:pwa-register` を使った独自プロンプト表示）
- オフライン時の代替ページ（フォールバック画面）

## 検証方法
- 本対応はビルド設定のみの変更であり、Vitestによるユニットテスト対象ではない
- `npm run build` を実行し、`dist/manifest.webmanifest` と Service Workerファイルが生成されることを確認する
- `npx tsc --noEmit` で型エラーが発生しないことを確認する
