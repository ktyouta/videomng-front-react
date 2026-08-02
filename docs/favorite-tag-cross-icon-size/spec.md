# お気に入り動画詳細画面 タグ削除アイコンのモバイルサイズ調整

## 背景
「タグ」編集モードの「設定されているタグ」欄は、タグボタンに削除用の×印（`isDispCross`）を表示している。この×印が`font-size: 20px`固定（レスポンシブ非対応）のため、スマホ表示時にタグ本体（11px）に対して大きく見え、「既存タグから設定」欄（×印なし）のタグボタンより目立って大きい状態だった。

## 原因
共通コンポーネント`TagButtonComponent.tsx`の`CrossButtonSpan`が`font-size: 20px`を直書きしていた。

## 要件
- スマホ表示で「設定されているタグ」欄の×印が12pxになる
- PC表示は20pxのまま変更しない
- `TagButtonComponent`の他の利用箇所（`FavoriteSearchSelectedTag.tsx`, `FavoriteVideoFolderSearchSelectedTag.tsx`、いずれも検索条件エリアの選択済みタグ）は影響を受けない（`crossSize`未指定時は20px維持）

## 対象外とした理由
共通コンポーネント側を直接変更すると、確認していない検索条件エリアの2画面にも見た目の変更が及ぶため、design-proposalで「呼び出し元だけで対応する」方針を採用した。`TagButtonComponent`には後方互換の`crossSize` propを追加し、未指定時は既存動作（20px）を維持する。
