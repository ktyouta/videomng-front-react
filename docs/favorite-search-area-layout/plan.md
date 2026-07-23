# お気に入り検索条件エリア レイアウト刷新 計画書

## 背景
お気に入り動画一覧の検索条件エリア（`FavoriteSearchArea`配下）について、動作は変えずに見た目のみをおしゃれで使い勝手の良いデザインに刷新する。

## タスク
- [x] `FavoriteConst.ts` にデザイントークン（余白・パネル色・ボタン色・ラベル色）を追加
- [x] 共通コンポーネント `FavoriteSearchActionButton.tsx` を新規作成
- [x] `FavoriteSearchFilterModal.tsx` / `FavoriteCreateFolderModal.tsx` / `FavoriteSearchCsvImportModal.tsx` / `FavoriteSearchCsvExportModal.tsx` を共通ボタン部品に置き換え
- [x] `FavoriteSearchSortArea.tsx` / `FavoriteSearchText.tsx` のラベル色を統一
- [x] `FavoriteSearchAreaPc.tsx` / `FavoriteSearchAreaMobile.tsx` の余白・パネル背景を反映
- [x] レビュー実施（frontend-review / architecture-review / comments-review / performance-check）
- [x] spec-review 実施
- [x] 並べ替えラベル削除に伴うスマホ表示の余白調整（`FavoriteSearchSortArea` / `FavoriteSearchText` / `FavoriteVideoFolderSearchSortArea`）
- [x] PC操作行の間隔をgapに統一し、共通ボタン`FavoriteSearchActionButton`からmargin-rightを撤廃（影響を受けた全箇所にgapを追加）
