# お気に入り動画詳細画面 パネルのスクロール対応

## タスク

- [x] `FavoriteVideoDetailMenu.tsx` の「動画詳細設定」メニューの `FavoriteVideoDetailPanel` に `overflowY: isMobile ? "auto" : "visible"` を追加
- [x] `FavoriteVideoDetailMenu.tsx` の「タグ」メニューの `FavoriteVideoDetailPanel` に `overflowY: isMobile ? "auto" : "visible"` を追加

## 対応しなかったこと（スコープ外・ユーザー判断）

- ホーム動画詳細画面（`HomeVideoDetailMenu.tsx`）の公開コメント・キーワード検索コメント
- お気に入り内チャンネル動画詳細画面（`VideoDetailMenu.tsx`）の公開コメント・キーワード検索コメント

上記4箇所も同様に `height` 固定・内部スクロールなしの問題パターンを持つことを horizontal-scope で確認済みだが、今回はお気に入り動画詳細画面の2箇所のみを対応範囲とした。
