# お気に入り動画詳細画面 スマホ時本文文字サイズの統一

## 背景
お気に入り動画詳細画面の「公開コメント」は本文font-sizeが11px（直書き）で、ユーザーから「これがいい感じ」との評価があった。他のメニュー（動画情報/メモ/キーワード検索コメント/動画詳細設定/タグ）はスマホ時12pxのままで、公開コメントより1px大きい状態だった。

## 要件（スマホ表示時のみ、PC表示は変更しない）
- 動画情報・メモ・キーワード検索コメント・動画詳細設定の本文が11pxになる（`FAVORITE_VIDEO_DETAIL_FONT_SIZE.MENU_BODY.MOBILE`を12px→11pxに変更）
- タグの本文相当箇所（未設定メッセージ×2・ガイド本文・「タグ検索：」ラベル）が11pxになる
- タグの見出し相当箇所（「設定されているタグ」「既存タグから設定」「タグの設定方法」）も11pxになる（他メニューの見出しラベルが今回の変更で11pxになるため、タグも合わせる）
- ホーム動画詳細・お気に入り内チャンネル動画詳細は対象外（「11pxの基準となるコメント欄」が存在しないため）

## 対象ファイル
- `consts/FavoriteVideoDetailFontSize.ts`（`MENU_BODY.MOBILE`, `TAG_GUIDE_BODY.MOBILE`, `TAG_GUIDE_TITLE.MOBILE`）
- `videotag/FavoriteTagList.tsx`（`NoTagListTitleDiv`, `TagListAreaTitleDiv`）
- `videotag/FavoriteTagEditAssignedList.tsx`（`NoTagListTitleDiv`, `TagListTitleDiv`）
- `videotag/FavoriteTagEditExistingList.tsx`（`TagEditAreaMessageSpan`, `TitleSpan`, `TagMasterListTitleDiv`）

## 別件（未使用コンポーネント削除）
`FavoriteMemoHeader.tsx`・`FavoriteSearchKeywordCommentHeader.tsx`はどこからも参照されていないため削除する（今回の文字サイズ変更とは別作業として実施）。
