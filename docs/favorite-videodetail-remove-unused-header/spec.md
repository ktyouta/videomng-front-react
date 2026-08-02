# お気に入り動画詳細画面 未使用コンポーネントの削除

## 背景
文字サイズ調査の過程で、`FavoriteMemoHeader.tsx`（「メモ」見出し）・`FavoriteSearchKeywordCommentHeader.tsx`（「キーワード検索(コメント)」見出し）がどこからも参照されていないデッドコードであることが判明した。ユーザーの指示により削除する。

## 要件
- `FavoriteMemoHeader.tsx`が削除され、他のどこからも参照されていない
- `FavoriteSearchKeywordCommentHeader.tsx`が削除され、他のどこからも参照されていない
- 削除により型エラー・ビルドエラーが発生しない
