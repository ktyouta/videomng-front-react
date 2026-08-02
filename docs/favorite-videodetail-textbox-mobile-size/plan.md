# お気に入り動画詳細画面 入力欄のモバイルサイズ調整

## タスク

- [x] `FavoriteSearchKeywordCommentInput.tsx`に`useMediaQuery`を追加し、`outerHeight`をスマホ時33px/PC時37pxに分岐
- [x] `FavoriteMemoCreateInput.tsx`に`useMediaQuery`を追加し、`outerHeight`をスマホ時33px/PC時37pxに分岐

## 対応しなかったこと（スコープ外・ユーザー判断）

- ホーム動画詳細画面の検索欄、お気に入り内チャンネル動画詳細画面の検索欄、ホーム画面トップの検索欄
- 共通コンポーネント`TextboxWithButton.tsx`・`ClearableTextbox.tsx`自体の変更（影響範囲が読みづらいためdesign-proposalで見送り）
