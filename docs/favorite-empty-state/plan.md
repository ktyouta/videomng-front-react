# お気に入り動画 空表示の刷新 — 計画

## タスク
- [x] `useFavoriteVideoArea` に未登録判定（`isUnregistered`）を追加して返す
- [x] 空表示コンポーネント `FavoriteVideoEmpty.tsx` を新規作成（未登録/絞り込み0件の出し分け・レスポンシブ・CTA）
- [x] `FavoriteVideoArea.tsx` の空表示分岐を `FavoriteVideoEmpty` に差し替え
- [x] 型エラー0件を確認（ベースライン内）
- [x] レビュー（frontend / architecture / comments / performance）
- [x] spec-review

## タスク（エラー表示の刷新）
- [x] 共通の器 `FavoriteVideoStatus.tsx` を新設（アイコン円＋見出し＋補足＋任意アクション）
- [x] `FavoriteVideoEmpty.tsx` を `FavoriteVideoStatus` へ委譲（見た目不変）
- [x] `FavoriteVideoError.tsx` を新規作成（警告アイコン＋再読み込みボタン）
- [x] `useFavoriteVideoArea` に `refetch` を追加して返す
- [x] `FavoriteVideoArea.tsx` のエラー分岐を `FavoriteVideoError` に差し替え・未使用 `MessageDiv` 除去
- [x] 型エラー0件を確認（ベースライン内）
- [x] レビュー（frontend / architecture / comments / performance）
- [x] spec-review

## タスク（他画面への水平展開）
- [x] 共通器 `FavoriteVideoStatus` / `FavoriteVideoError` を `features/favorite/components/` へ移設（既存 import 更新）
- [x] フォルダ内一覧（`FavoriteVideoFolderVideoArea`）: 空表示・エラーを刷新、`useFavoriteVideoFolderArea` に `refetch` 追加
- [x] お気に入りチャンネル（`ChannelVideoArea`）: 空表示を刷新
- [x] home 内に `HomeVideoStatus` を新設し `HomeChannelVideoArea` の空表示を刷新
- [x] 各画面の未使用 `MessageDiv` を除去
- [x] 型エラー新規0件を確認（ベースライン133不変）

## メモ
- CTA遷移先: `ROUTER_PATH.HOME.ROOT`（`/video`）
- キーワード絞り込みはクライアント側（`useFavoriteSearchText`）のため hook から参照不可 → `total` で代替判定
- 横展開（4画面共通の EmptyState 化）は別スコープ
