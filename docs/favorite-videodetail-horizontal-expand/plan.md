# お気に入り動画詳細画面のデザイン刷新の水平展開 - 作業記録

## 調査
- [x] investigate: 59c6f3f・ff8ecf8・46c5a58の実差分を確認(handover.mdの記載を実態に合わせて更新)
- [x] ui-consistency-review: ホーム動画詳細・チャンネル動画詳細の現状と展開元の差分を確認
- [x] horizontal-scope相当の洗い出し: マッピング表の対象ファイルを確定
- [x] ユーザー確認: モバイル版ボタン(再生+ログイン誘導/未登録/登録済み)は見た目だけ統一し構造は現状維持

## 実装(ホーム動画詳細・チャンネル動画詳細 共通対応)
- [x] 共通定数の切り出し(`ButtonInteractionConst.ts`)
- [x] 動画情報エリア(`VideoContentDiv`・`VideoInfoDiv`・`VideoTitle`・`VideoImg`)
- [x] 動画情報エリアのボタン(チップ化・パネル化。デバイス判定統一は分岐自体が不要になったため対象外)
- [x] メニューエリア(`MenuParentDiv`・`ComboAreaDiv`・Selectboxスタイル・各パネル高さ)
- [x] `HomeVideoDetailPanel.tsx`/`VideoDetailPanel.tsx`のpaddingレスポンシブ化
- [x] `HOME_VIDEO_DETAIL_FONT_SIZE`/`VIDEO_DETAIL_FONT_SIZE`のMENU_BODY.MOBILE変更
- [x] 公開コメント(padding-top・文字サイズ・アバターアイコン幅)
- [x] キーワード検索コメント入力欄の高さレスポンシブ化
- [x] 未使用の`HomeSearchKeywordCommentHeader.tsx`/`SearchKeywordCommentHeader.tsx`削除

## レビュー・仕様突き合わせ
- [x] 型チェック(`tsc -p tsconfig.app.json --noEmit`、新規エラー0件・既存150件のまま)
- [x] frontend-review / architecture-review / comments-review / performance-check(architecture-reviewでラベル短縮を軽微な指摘として記録、実装は維持)
- [x] spec-review(2件の仕様差分をspec.mdに反映済み)
