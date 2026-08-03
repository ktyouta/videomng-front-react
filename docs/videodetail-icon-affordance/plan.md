# 動画詳細画面 アイコンのタップ可能性向上

## 経緯
ユーザーから、動画詳細画面の戻る矢印・編集用鉛筆・編集モードの×/チェック・スマホ時サムネのアイコンについて
「タップできることが分かりづらい」との指摘。horizontal-scopeで同一パターンのアイコン（コメント非表示・再表示・
お気に入り・削除、メモ削除）も追加で見つかり、ユーザー確認の上ですべて対応する方針に決定。
背景形状はdesign-proposalで丸型を採用。

## タスク
- [x] `IconComponent.tsx`に円形背景オプション（`hasCircleBackground`・`circleBgColor`・`circleFitsContent`）を追加
- [x] 円形背景色の定数を追加（`ButtonInteractionConst.ts`）
- [x] 戻る矢印（`BackToListIcon.tsx`）に円形背景を適用
- [x] メモ/タグ/動画詳細設定の編集・×・チェックアイコン（9箇所）に円形背景を適用
- [x] コメント非表示・再表示・お気に入り・削除、メモ削除アイコン（5箇所）に円形背景を適用
- [x] スマホ時サムネイル右上アイコン（`IconBadgeButton`、favorite/home/videochannelの3画面）に円形背景を適用
- [x] frontend-review / architecture-review / comments-review / performance-check 実施
- [x] spec-review 実施

## 実装中に発覚した追加対応
- `FavoriteMemoCancelIconArea.tsx`/`FavoriteMemoUpdateIconArea.tsx`にサイズ確定用の`IconSizeDiv`を新設（既存はサイズ確定用のラッパーdivを持たず、円背景の追加で%指定サイズの解決基準が不定になる問題を修正するため）
