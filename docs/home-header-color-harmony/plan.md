# ホーム画面・ヘッダー 配色調和 計画書

## 背景
ホーム画面の検索実行ボタンとヘッダーのログインボタンの色が、周囲の画面デザインと調和していなかったため、既存の配色トーンに合わせて修正する。

## タスク
- [x] `HomeConst.ts` に検索実行ボタン用の色定数 `HOME_SEARCH_AREA_SEARCH_BUTTON_BG` を追加
- [x] `TextboxWithButton.tsx` に `iconAreaBgColor` props を追加し、色を外から指定可能にする（省略時は従来色を維持し他5画面は無変更）
- [x] `HomeSearchText.tsx` で新色を指定
- [x] `HeaderUserMenu.tsx` のログインボタンを `variant="red"` から `variant="blue"`（ログイン画面の実行ボタンと同色）に変更
- [x] レビュー実施（frontend-review / architecture-review / comments-review / performance-check）
- [x] spec-review 実施
