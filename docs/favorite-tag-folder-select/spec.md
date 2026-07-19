# お気に入り登録モーダル（タグ・フォルダ選択）仕様書

## 対象画面
- Home動画詳細（`src/features/home/components/videodetail/HomeVideoDetailInfo.tsx` → `HomeVideoDetailTagSelect.tsx`）
- チャンネル動画詳細/お気に入り（`src/features/favorite/components/videochannel/videodetail/VideoDetailInfo.tsx` → `VideoDetailTagSelect.tsx`）

両画面とも「未お気に入り動画をお気に入りに登録する」新規登録フローであり、UI構成はHome側を正とする。

## 要件項目

- [ ] モーダルは「フォルダ選択」「タグ検索」「タグ一覧」の3セクションのみで構成する（「選択中のタグ」専用エリア・独立ヘッダーは持たない）
- [ ] 見出しは「お気に入り登録設定」の1つのみ
- [ ] フォルダ選択欄は `Selectbox` を使用し、未選択をデフォルトとする
- [ ] タグ一覧はキーワードでフィルタできる（Enterキー・フォーカスアウトで絞り込み）
- [ ] タグの選択/解除はタグ一覧内のボタンをクリックして行う。選択中のタグはボーダー色 `#ff9f00` で表現する
- [ ] 登録ボタン押下でAPIにリクエストを送信し、成功時は一覧へ戻る
- [ ] モーダルはオーバーレイクリックで閉じられる（`isCloseOuter`）
- [ ] モバイル時のモーダル幅は93%、モーダル最小高さはモバイル時70vh・それ以外405px
- [ ] Favorite/videochannel側は独自のタグ型（`tagType`）・API（`getFavoriteVideoTagMaster`, `getFolderList`）を使用し続ける（Home側とAPI・型は統一しない）
- [ ] タイトル直下に、モーダルの目的を伝える一言の説明文を表示する（独立した見出し・セクションとしては扱わない）

## 変更履歴
- 2026-07-19: Favorite/videochannel側のUI構成をHome側に統一する改修に伴い新規作成
- 2026-07-19: タイトル直下に説明文を追加する要件を追記
