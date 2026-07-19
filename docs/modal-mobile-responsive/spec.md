# モーダルのスマホ表示レイアウト改善 仕様書

## 背景
`src/components/TagFolderSelectPanel.tsx` はスマホでも見やすいスタイル方針（Selectboxの高さ・文字サイズをisMobileで縮小、モーダル横幅93%）を持つ。他のモーダルはこの方針が適用されておらず、スマホ表示でセレクトボックスの縦幅が大きい・文字サイズが大きい・モーダル横幅がファイルごとにバラバラという崩れが発生している。

## 要件

### モーダル横幅
- [ ] スマホ表示（`width <= 768px`）時、対象モーダルの横幅は画面幅の93%になる
- [ ] PC表示時の横幅は変更しない（既存値を維持する）
- [ ] `modalWidth` 未指定（デフォルト73%依存）だったモーダルも、スマホ時のみ93%を明示指定する（PC側は指定しない＝既存のデフォルト73%を維持）

### セレクトボックスの縦幅・文字サイズ
- [ ] `FavoriteSearchCondition.tsx` / `FavoriteVideoFolderSearchCondition.tsx` の `MultiSelectbox` は、スマホ表示時に高さ・文字サイズが縮小される
- [ ] `HomeSearchCondition.tsx` の `Selectbox` は、スマホ表示時に高さ・文字サイズが縮小される

### 文字サイズ
- [ ] `HomeSearchCondition.tsx` にスマホ用フォントサイズのメディアクエリが追加される（現状は文字サイズ調整が一切ない）
- [ ] `ModalPortalConfirm.tsx` のタイトル文字サイズ（現状14px固定）がレスポンシブ対応する

## 対象ファイル
`docs/modal-mobile-responsive/plan.md` を参照。

## 対象外
- `FavoriteVideoDetailMenu.tsx` / `HomeVideoDetailMenu.tsx` / `VideoDetailMenu.tsx`（モーダルではない画面内メニュー）
- `FavoriteDetailSettingView.tsx`（Selectbox不使用）
- `FavoriteDeleteFolderConfirmModal.tsx`（Selectbox不使用）
- `VideoDetailTagSelect.tsx` / `HomeVideoDetailTagSelect.tsx`（対応済み）
- PC表示時のスタイル（今回の指示範囲外、変更しない）
