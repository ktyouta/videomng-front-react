# 引継ぎ: お気に入り動画詳細画面のデザイン刷新を他画面へ水平展開

## 目的
「お気に入り動画詳細画面」に対して行ったデザイン刷新（レイアウト・スタイル変更）を、以下2画面に水平展開する。

- ホーム動画詳細画面（`src/features/home/components/videodetail/`）
- お気に入り内チャンネル動画詳細画面（`src/features/favorite/components/videochannel/videodetail/`）

## 対象外（お気に入り専用メニューのため展開不要）
お気に入り動画詳細画面には「メモ」「動画詳細設定」「タグ」メニューがあるが、ホーム動画詳細・チャンネル動画詳細にはこの3メニュー自体が存在しない（`MENU_NO`定義を比較確認済み。ホーム側は`INFO`/`COMMENT`/`KEYWORD_SEARCH_COMMENT`の3つのみ）。したがって、この3メニューに関する変更は展開不要・展開不可。

対象は共通して存在する3メニューのみ：**動画情報 / 公開コメント / キーワード検索コメント**

## 参照すべきコミット
以下の基準点より後、「お気に入り動画詳細画面のデザインを刷新」というコミットメッセージで5回に分けてコミットされている。

```
git log --oneline 72da6bd..HEAD
8b8082e お気に入り動画詳細画面のデザインを刷新
66f4723 お気に入り動画詳細画面のデザインを刷新
46c5a58 お気に入り動画詳細画面のデザインを刷新
ff8ecf8 お気に入り動画詳細画面のデザインを刷新
59c6f3f お気に入り動画詳細画面のデザインを刷新
```

全体差分を見る場合:
```
git diff 72da6bd..HEAD --stat -- src/features/favorite/components/videodetail/ src/components/TagButtonComponent.tsx src/components/BackToListIcon.tsx
```

**重要**: `59c6f3f`・`ff8ecf8`・`46c5a58`の3コミットは、水平展開を依頼したセッションでは会話履歴として把握できていない（別セッションで行われた作業）。`66f4723`・`8b8082e`の2コミットは会話履歴があり、後述の「把握済みの変更点」に対応する。**着手前に必ず `git show <commit>` で3コミット分の実際の差分を確認すること**（会話ログを当てにしない）。

## 対応ファイルのマッピング表

| お気に入り側 | ホーム側 | チャンネル動画詳細側 |
|---|---|---|
| `videodetail/FavoriteVideoDetail.tsx` | `videodetail/HomeVideoDetail.tsx` | `videochannel/videodetail/VideoDetail.tsx` |
| `videodetail/FavoriteVideoDetailInfo.tsx` | `videodetail/HomeVideoDetailInfo.tsx` | `videochannel/videodetail/VideoDetailInfo.tsx` |
| `videodetail/FavoriteVideoDetailMenu.tsx` | `videodetail/HomeVideoDetailMenu.tsx` | `videochannel/videodetail/VideoDetailMenu.tsx` |
| `videodetail/FavoriteVideoDetailPanel.tsx` | `videodetail/HomeVideoDetailPanel.tsx` | `videochannel/videodetail/VideoDetailPanel.tsx` |
| `videodetail/consts/FavoriteVideoDetailFontSize.ts` | `videodetail/consts/HomeVideoDetailFontSize.ts` | `videochannel/videodetail/consts/VideoDetailFontSize.ts` |
| `videocomment/FavoriteComment.tsx` | `videocomment/HomeComment.tsx` | `videochannel/videodetail/comment/Comment.tsx` |
| `videocomment/FavoriteCommentContent.tsx` | `videocomment/HomeCommentContent.tsx` | `videochannel/videodetail/comment/CommentContent.tsx` |
| `videocomment/FavoriteReplyCommentContent.tsx` | `videocomment/HomeReplyCommentContent.tsx` | `videochannel/videodetail/comment/ReplyCommentContent.tsx` |
| `videocomment/FavoriteCommentFavoriteIconArea.tsx` | 対応ファイルなし（要確認） | 対応ファイルなし（要確認） |
| `videosearchkeywordcomment/FavoriteSearchKeywordCommentInput.tsx` | `videosearchkeywordcomment/HomeSearchKeywordCommentInput.tsx` | `searchkeywordcomment/SearchKeywordCommentInput.tsx` |
| `videosearchkeywordcomment/FavoriteSearchKeywordCommentHeader.tsx`（削除済み） | `videosearchkeywordcomment/HomeSearchKeywordCommentHeader.tsx`（未使用、要削除） | `searchkeywordcomment/SearchKeywordCommentHeader.tsx`（未使用、要削除） |
| `src/components/BackToListIcon.tsx`（共通） | 対応済み（自動反映） | 対応済み（自動反映） |
| `src/components/TagButtonComponent.tsx` | 対象外（タグ機能なし） | 対象外（タグ機能なし） |

**構造差分の注意**: お気に入り側は`FavoriteCommentHeader.tsx`・`FavoriteCommentList.tsx`が削除され`FavoriteComment.tsx`に統合されているが、ホーム側・チャンネル動画詳細側にはまだ`HomeCommentList.tsx`/`CommentList.tsx`が別ファイルとして残っている。単純なプロパティコピーでは済まず、構造の統合が必要になる可能性が高い。

`FavoriteCommentFavoriteIconArea.tsx`（コメントをお気に入り登録する機能）は、ホーム側・チャンネル動画詳細側に対応する概念があるか未確認。「お気に入り登録」自体がお気に入り機能なので対象外の可能性が高いが、要確認。

## 把握済みの変更点（このセッションの会話履歴に基づく、`66f4723`・`8b8082e`相当）

以下は本セッションでdesign-proposal→feature-modifyのフローを経て実施し、`docs/`配下にspec.md/plan.mdとして記録済み。

1. `docs/backtolist-icon-zindex/` — 戻る矢印のz-index対応（共通コンポーネント、対応済み）
2. `docs/favorite-videodetail-panel-scroll/` — スマホ高さ固定パネルのスクロール対応（動画詳細設定/タグのみ、対象外）
3. `docs/favorite-videodetail-textbox-mobile-size/` — キーワード検索・メモ入力欄のモバイルサイズ調整（メモは対象外、キーワード検索は要展開）
4. `docs/favorite-videodetail-header-absolute/` — ヘッダーアイコンのabsolute配置化（動画詳細設定/タグのみ、対象外）
5. `docs/favorite-videodetail-fontsize-mobile/` — 本文文字サイズ11px統一（ホーム/チャンネル動画詳細は「基準となる11pxコメント欄」が無いため対象外と判定済み。ただし`ff8ecf8`で公開コメント自体が作り直されている可能性があり、前提が変わっていないか要再確認）
6. `docs/favorite-videodetail-remove-unused-header/` — 未使用コンポーネント削除
7. `docs/favorite-tag-cross-icon-size/` — タグ削除アイコンサイズ調整（タグ機能自体対象外）

## 未把握の変更（`59c6f3f`・`ff8ecf8`・`46c5a58`相当、要調査）

- `59c6f3f`: `FavoriteVideoDetailInfo.tsx`（153行）、`FavoriteVideoDetailMenu.tsx`（214行）、`Footer.tsx`、`HeaderUserMenuList.tsx`の変更。`docs/favorite-videodetail-button-compact/`・`docs/favorite-videodetail-selectbox-style/`が関連する可能性
- `ff8ecf8`: `FavoriteVideoDetailInfo.tsx`（119行）、`FavoriteComment.tsx`（182行）、`FavoriteCommentHeader.tsx`/`FavoriteCommentList.tsx`削除、`FavoriteCommentContent.tsx`等の変更。`docs/favorite-comment-header-overlay/`が関連する可能性
- `46c5a58`: `VideoDetailInfo.tsx`・`VideoDetailMenu.tsx`・`FavoriteVideoDetailInfo.tsx`・`FavoriteVideoDetailMenu.tsx`・`HomeVideoDetailInfo.tsx`・`HomeVideoDetailMenu.tsx`の軽微な変更（7ファイル11行、既にホーム・チャンネル側にも変更が入っている＝一部は水平展開済みの可能性がある）

## 推奨する進め方
1. まず`git show 59c6f3f`・`git show ff8ecf8`・`git show 46c5a58`で実際の差分を確認し、上記マッピング表・変更点リストを実態に合わせて更新する
2. `docs/`配下の関連spec.md（`favorite-videodetail-button-compact`, `favorite-videodetail-selectbox-style`, `favorite-comment-header-overlay`）があれば読み、既存の意図を把握する
3. メニュー単位（動画情報→公開コメント→キーワード検索コメント）で1つずつ、design-proposal（構造差分がある場合）→feature-modifyのフローで進める
4. 各メニュー対応後、必ずui-consistency-review・レビュー4件・spec-reviewを実施する
