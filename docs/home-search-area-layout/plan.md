# ホーム動画一覧 レイアウト刷新 計画書

## 背景
ホーム画面の動画一覧（検索エリア・検索前ワードエリア）について、動作は変えずに見た目のみをお気に入り動画一覧と同じテイストに刷新する。

## タスク
- [x] `HomeConst.ts` にデザイントークン（パネル色・ボタン色・アクセント色・セクション間隔）を追加
- [x] `HomeSearchArea.tsx` を「外側6%余白＋内側パネルカード」の2層構造にし、お気に入りの検索エリアと同じ配色・角丸を反映
- [x] `HomeSearchText.tsx` の検索ボックスを固定割合幅（57%/72%）から`flex:1`に変更し、カード内を埋めるように修正
- [x] `HomeSearchConditionModal.tsx` の条件指定トリガーをボタン化・ホバー演出追加（角丸を均等化）
- [x] `HomeVideoAreaDefault.tsx` を「外側6%余白＋内側パネルカード」の2層構造にし、セクション間隔を35px/125pxから20pxに統一
- [x] `HomeRecentKeywords.tsx` / `HomeFrequentKeywords.tsx` / `HomeFavoriteKeywords.tsx` の固定54%幅を廃止し、ラベル＋`flex-wrap`の行レイアウトに変更。リストが空の場合はセクション自体を非表示にする
- [x] `HomeHistoryWord.tsx` のホバー色をアクセント色に統一
- [x] レビュー実施（frontend-review / architecture-review / comments-review / performance-check）
- [x] spec-review 実施

## 既知の残課題
- 「最近の検索」「よく検索するワード」「お気に入りワード」が3つとも同時に空の場合（新規ユーザー等）、カード自体が中身ゼロの空箱として表示される。解消には3つの子コンポーネントの状態を親に引き上げる構造変更が必要で、hooksのロジック変更を伴うため今回のスコープ外とした。
