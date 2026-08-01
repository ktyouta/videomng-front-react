# お気に入り動画詳細画面 公開コメントヘッダーの廃止

## 背景
お気に入り動画詳細画面の「公開コメント」タブで、お気に入りコメントリスト・非表示コメントリストの2アイコンを表示するために専用のヘッダー行(height:22px)を設けていた。専用領域を設けず、アイコンをコメントリストの右上に重ねて表示する方が見やすいという指摘があった。

## 対象画面
- お気に入り動画詳細・公開コメント(`src/features/favorite/components/videodetail/videocomment/FavoriteComment.tsx`、`FavoriteCommentHeader.tsx`)

## 要件

- [x] 専用のヘッダー行(width:100%、height:22px)を廃止すること
- [x] 2アイコン(お気に入りコメントリスト・非表示コメントリスト)は、コメントリストの右上に`position:absolute`で重ねて表示すること
- [x] `position:relative`の基準は、複数パネルで共用されている`FavoriteVideoDetailPanel`ではなく、`FavoriteComment.tsx`内にローカルに追加すること(他パネルへの影響回避)
- [x] コメントリストの`padding-top:20px`は変更しないこと(アイコンとの重なりを避ける既存の余白として機能させる)
- [x] アイコン自体の見た目・ホバー時のツールチップ表示は変更しないこと

## 非対象(変更しないもの)
- `FavoriteFavoriteCommentModalIcon.tsx`・`FavoriteBlockCommentModalIcon.tsx`内部の実装
- 共通コンポーネント`FavoriteVideoDetailPanel`
