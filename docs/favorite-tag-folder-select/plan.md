# お気に入り登録モーダル レイアウト統一 作業計画

## 背景
Home側とFavorite/videochannel側で、お気に入り登録モーダルのレイアウト・構造が異なっていた。Home側を正として統一する。

## タスク

- [ ] `VideoDetailInfo.tsx`: ModalPortalの `modalWidth`（mobile 80%→93%）・`modalMinHeight`（固定405px→`isMobile?"70vh":"405px"`）・`isCloseOuter={true}` をHome側に合わせる
- [ ] `VideoDetailTagSelect.tsx`: 独立ヘッダー（「タグを設定」）を削除し、見出しを「お気に入り登録設定」に統一
- [ ] `VideoDetailTagSelect.tsx`: 「選択中のタグ」専用エリア（AssignedListDiv等）を削除
- [ ] `VideoDetailTagSelect.tsx`: タグ一覧のボタンに選択状態のボーダー色（`#ff9f00`）表現を追加
- [ ] `VideoDetailTagSelect.tsx`: FolderAreaDiv・ClearableTextbox height・FooterDiv高さ・ButtonComponent sizeをHome側の値に統一
- [ ] `useVideoDetailTagSelect.ts`: `addTagEditList`/`deleteTagEditList`を`toggleTagEditList`方式に統合、`isOpenTagMasterList`関連を削除
- [ ] `npx tsc --noEmit` で型エラー0件を確認
- [ ] frontend-review / architecture-review / comments-review / performance-check 実施
- [ ] spec-review 実施（docs/favorite-tag-folder-select/spec.md 準拠）
