# モーダルのスマホ表示レイアウト改善 作業計画

## タスク

### モーダル横幅を93%に揃える
- [x] `src/components/ModalPortalConfirm.tsx`（`isPcLess ? 82% : 29%` → `isPcLess ? 93% : 29%`、タイトルfont-sizeにメディアクエリ追加）
- [x] `src/features/favorite/components/videolist/searcharea/filter/FavoriteSearchFilterModal.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/filter/FavoriteVideoFolderSearchFilterModal.tsx`
- [x] `src/features/favorite/components/videodetail/videotag/addtag/FavoriteAddTagModal.tsx`
- [x] `src/features/favorite/components/videolist/searcharea/folder/FavoriteCreateFolderModal.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/createfolder/FavoriteCreateFolderInFolderModal.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/updatefolder/FavoriteUpdateFolderModal.tsx`
- [x] `src/features/favorite/components/videolist/searcharea/csv/export/FavoriteSearchCsvExportModal.tsx`
- [x] `src/features/favorite/components/videolist/searcharea/csv/import/FavoriteSearchCsvImportModal.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/deletefolder/FavoriteDeleteFolderModal.tsx`
- [x] `src/features/home/components/videolist/searcharea/HomeSearchConditionModal.tsx`
- [x] `src/features/header/components/SideMenu/HowToUse/HeaderHowToUseModal.tsx`
- [x] `src/features/header/components/SideMenu/UsagePrecaution/HeaderUsagePrecautionModal.tsx`

### モーダル横幅を新規指定する（isMobile未対応）
- [x] `src/features/favorite/hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentModalIcon.ts`（isMobile追加）
- [x] `src/features/favorite/components/videodetail/videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon.tsx`（modalWidth={isMobile ? "93%" : undefined}）
- [x] `src/features/favorite/hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentModalIcon.ts`（isMobile追加）
- [x] `src/features/favorite/components/videodetail/videocomment/videoblockcomment/FavoriteBlockCommentModalIcon.tsx`（modalWidth={isMobile ? "93%" : undefined}）

### セレクトボックスの縦幅・文字サイズをスマホで縮小
- [x] `src/features/favorite/components/videolist/searcharea/filter/FavoriteSearchCondition.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/filter/FavoriteVideoFolderSearchCondition.tsx`
- [x] `src/features/home/components/videolist/searcharea/HomeSearchCondition.tsx`（フォントサイズのメディアクエリも新規追加）

### レビューで追加対応したタスク
- [x] `src/components/MultiSelectbox.tsx` の `control` に `minHeight: props.height` を追加（`Selectbox.tsx`には既にあったが漏れており、`height` propを渡しても実際の高さが縮まらない状態だった）
- [x] `useFavoriteSearchConditionMain.ts` / `useFavoriteVideoFolderSearchConditionMain.ts` / `useHomeSearchConditionMain.ts` の `isMobile` を、親hookとの重複購読を避けるため props 経由の受け渡しに変更（hooks-reviewerの指摘により修正）

## 対象外（意図的に除外）
- PC表示時のスタイル変更
- `FavoriteVideoDetailMenu.tsx` / `HomeVideoDetailMenu.tsx` / `VideoDetailMenu.tsx`
- `FavoriteDetailSettingView.tsx`
- `FavoriteDeleteFolderConfirmModal.tsx`
- `"93%"` の名前付き定数化（既存の`height`/`fontSize`値と同じくインライン記述の慣習に合わせ、今回は据え置き）
