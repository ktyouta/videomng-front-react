# PWA対応 実装計画

## 対象
アプリ全体のビルド設定（`features/` 単位の機能ではなく、インフラ的な変更）

## タスク

- [x] `vite-plugin-pwa` を devDependencies に追加する
- [x] `vite.config.ts` に `VitePWA` プラグインを追加する（manifest設定・アイコン設定・autoUpdate設定）
- [x] `npm run build` でビルド成果物（manifest.webmanifest・Service Worker）が生成されることを確認する
- [x] `npx -y -p typescript@5 tsc --noEmit -p tsconfig.app.json` / `-p tsconfig.node.json` で型エラーがないことを確認する

## 変更ファイル一覧

| ファイルパス | 種別 | 操作 |
|---|---|---|
| package.json | 設定 | 変更（devDependency追加） |
| vite.config.ts | 設定 | 変更（VitePWAプラグイン追加） |
| docs/pwa/spec.md | ドキュメント | 新規 |
| docs/pwa/plan.md | ドキュメント | 新規 |

## 備考
- アイコン画像は暫定で `public/react.svg` を流用（正式画像は別対応）
- APIレスポンス等の動的データはキャッシュ対象に含めない（precacheは静的ビルド成果物のみ）
