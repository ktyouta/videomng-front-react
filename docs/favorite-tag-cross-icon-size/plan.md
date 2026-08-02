# お気に入り動画詳細画面 タグ削除アイコンのモバイルサイズ調整

## タスク

- [x] `TagButtonComponent.tsx`に`crossSize` propを追加（未指定時は20px維持）
- [x] `FavoriteTagEditAssignedList.tsx`からhooksの`isMobile`を受け取り、`crossSize`をスマホ時12px/PC時20pxで渡す
