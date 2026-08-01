# お気に入り動画詳細画面 メニューSelectboxのスタイル統一

## 背景
お気に入り動画詳細画面のメニューSelectbox(`FavoriteVideoDetailMenu.tsx`)が、背景色`rgb(24, 26, 30)`(ほぼ黒、パネル背景と同色)・枠線未指定(react-selectのデフォルトの薄い枠線)・角丸未指定(react-selectのデフォルト)という、お気に入り一覧画面のSelectbox(`FavoriteSearchSortArea.tsx`)とは異なるスタイルになっていた。一覧画面は背景色`#3a3d42`・枠線なし・角丸10pxで統一されており、この画面だけトーンが外れていた。

## 対象画面
- お気に入り動画詳細(`src/features/favorite/components/videodetail/FavoriteVideoDetailMenu.tsx`)

## 要件

- [x] Selectboxの背景色を`#3a3d42`(一覧画面と同じ)にすること
- [x] Selectboxの枠線を`transparent`(枠線なし)にすること
- [x] Selectboxの角丸を`10px`にすること
- [x] 文字サイズの判定基準(`isMobile`)は変更しないこと

## 非対象(変更しないもの)
- Home動画詳細・チャンネル動画詳細画面の同種Selectbox(horizontal-scopeで重複を確認したが、今回のスコープ外)
- 文字サイズの値・判定基準
