# モーダル刷新 作業計画

`docs/modal-renewal/spec.md`の決定事項を実装するタスク一覧。

## 1. 基盤コンポーネントの変更
- [x] `src/components/ModalPortal.tsx`
  - 背景を`linear-gradient(180deg, #22252c, #1a1c22)`に変更
  - 枠線を白ベースの淡いグロー(`box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 0 24px rgba(255,255,255,0.06)`)に変更（黒背景では黒い影が見えないため）
  - `ModalContainer`の`min-height`デフォルトを`90%`から撤廃（コンテンツ量に応じた高さをデフォルトに）
  - 閉じるボタン(×)に`IconComponent`の`hasCircleBackground`+ホバーアクセントカラーを付与
  - （対象外）開閉時のtransitionは今回スコープ外。遅延アンマウントの仕組みが別途必要なため見送り
- [x] `src/components/ModalPortalConfirm.tsx`
  - ライト配色を`CONFIRM_MODAL_CONTAINER_STYLE`定数に切り出し
  - `ModalPortal`に`close={props.closeModal}` `isCloseOuter={true}`を渡すよう変更（現状渡していない）
  - `danger?: boolean`propを追加し、trueのときOKボタンを`ButtonComponent`の`variant="red"`にする
  - タイトル横に`WarningHeader`（アイコン+強調色）を差し込めるようにする
- [x] `src/components/IconComponent.tsx` / `src/consts/ButtonInteractionConst.ts`
  - 変更不要（既存の`hasCircleBackground`をそのまま利用）。ただし`DANGER_COLOR`定数を追加し、`ButtonComponent`の`red`variantと警告文言で共通使用するよう統一
- [x] `ModalHeader` / `ModalBody` / `ModalFooter`（`src/components/`に新規作成）
  - `spec.md`の内部レイアウト仕様通り新規作成。`theme?: "dark" | "light"`propで区切り線色を切り替え
  - `ModalBody`に`overflowY?: "auto" | "hidden"`（デフォルト`"auto"`）propを追加。独自のスクロール領域を持つ既存コンテンツ（`TagFolderSelectPanel.tsx`等）が`overflowY="hidden"`で現状の挙動を維持できるようにする
- [x] `WarningHeader`（`src/components/`に新規作成）
  - アイコン`IoWarningOutline` + 強調色ヘッダー

## 2. 閉じ方の統一（×ボタン・背景クリック）
- [x] `src/features/favorite/components/videofolder/searcharea/deletefolder/FavoriteDeleteFolderModal.tsx`
  - `hideCloseButton={true}`を削除（`isCloseOuter={true}`は維持）
- [x] 上記「1. 基盤コンポーネントの変更」の`ModalPortalConfirm.tsx`修正により、以下は自動的に×ボタン・背景クリックが有効になった（個別修正不要）
  - `FavoriteDeleteFolderConfirmModal.tsx` / `FavoriteVideoDetailInfo.tsx` / `FavoriteMemoContentViewDeleteArea.tsx` / `FavoriteVideoFolderVideoContent.tsx` / `Siginup.tsx` / `UpdateUserInfo.tsx` / `UpdateUserPassword.tsx` / `FavoriteSearchCsvExport.tsx`

## 3. 警告表現（danger prop）の適用
危険操作（元に戻せない・データが失われる）にのみ`danger={true}`を付与する。

- [x] `FavoriteDeleteFolderConfirmModal.tsx`: `danger={true}`（フォルダ削除、元に戻せない）。`MessageSpan`/`FinalWarnTextSpan`の色も`DANGER_COLOR`に統一
- [x] `FavoriteMemoContentViewDeleteArea.tsx`: `danger={true}`（メモ削除、元に戻せない）
- [x] `FavoriteVideoDetailInfo.tsx`（お気に入り解除）: `danger={true}`。`useFavoriteVideoDetailInfo.ts`の`executeDelete`はお気に入りレコード自体への`DELETE`で、紐づくタグ・メモ等の付随データも失われるため
- [x] `FavoriteVideoFolderVideoContent.tsx`（フォルダから除外）: `danger`対象外。フォルダとの紐付け解除のみで、お気に入り自体（タグ・メモ等）は残るため（対応不要と確認済み）
- [x] `Siginup.tsx` / `UpdateUserInfo.tsx` / `UpdateUserPassword.tsx` / `FavoriteSearchCsvExport.tsx`: 削除系ではないため対象外（対応不要と確認済み）

## 4. 内部レイアウト共通化（ModalHeader/ModalBody/ModalFooter移行）
全11ファイルの実装を確認済み。**例外なく全て**、タイトル用要素が`HeaderTitleSpan`/`TitleSpan`という空の`styled.div`（装飾なし）で、かつ`height:4%`+`height:87%/96%`のような親の`modalMinHeight`を前提にした手動%分割になっている、同一のアンチパターンだった。

- [x] `src/features/favorite/components/videolist/searcharea/filter/FavoriteSearchCondition.tsx`
- [x] `src/features/favorite/components/videodetail/videocomment/videofavoritecomment/FavoriteFavoriteComment.tsx`（固定高さ`containerStyle.height:90%`モーダルでの動作確認込み）
- [x] `src/features/favorite/components/videofolder/searcharea/deletefolder/FavoriteDeleteFolder.tsx`（`theme="light"`で移行。`spec.md`の「ライト系だが自由なコンテンツの受け皿」に対応）
- [x] `src/features/favorite/components/videofolder/searcharea/filter/FavoriteVideoFolderSearchCondition.tsx`
- [x] `src/features/home/components/videolist/searcharea/HomeSearchCondition.tsx`
- [x] `src/features/favorite/components/videodetail/videotag/addtag/FavoriteAddTag.tsx`
- [x] `src/features/favorite/components/videodetail/videocomment/videoblockcomment/FavoriteBlockComment.tsx`
- [x] `src/features/favorite/components/videofolder/searcharea/updatefolder/FavoriteUpdateFolder.tsx`
- [x] `src/features/favorite/components/videolist/searcharea/folder/FavoriteCreateFolder.tsx`（`FavoriteCreateFolderContainer.tsx`経由で`FavoriteCreateFolderInFolderModal`からも共用のため1箇所の修正で両方に反映）
- [x] `src/features/favorite/components/videolist/searcharea/csv/export/FavoriteSearchCsvExport.tsx`
- [x] `src/features/favorite/components/videolist/searcharea/csv/import/FavoriteSearchCsvImport.tsx`
- [x] `src/features/header/components/SideMenu/UsagePrecaution/HeaderUsagePrecaution.tsx`
- [x] `src/features/header/components/SideMenu/HowToUse/HeaderHowToUse.tsx`

**horizontal-scopeで発見した4つ目のパターン（上記11件とは別枠）**
- [x] `src/components/TagFolderSelectPanel.tsx`（`HomeVideoDetailTagFolderSelect.tsx`と`VideoDetailTagFolderSelect.tsx`(videochannel)の共通中身）: `ModalHeader`/`ModalBody`(`overflowY="hidden"`)/`ModalFooter`に統一。フォルダ選択・タグ検索欄は固定表示のままタグ一覧のみスクロールする既存の使い勝手を維持（`MainArea`/`Parent`/`TagMasterAreaDiv`/`TagMasterListAreaDiv`の内部構造は維持）

## 6. `ModalPortal`への集約（2026-08-07改訂）
`spec.md`「## 設計改訂（2026-08-07）: `ModalPortal`への集約」の実装。旧タスク（1〜5）は完了済み・履歴として残す。振る舞い（各モーダルの見た目・挙動）は現状維持したまま内部構造だけを作り替える改修。

### 6-1. 土台の再構築
- [x] `src/components/ModalPortal.tsx`
  - `ModalLayout.tsx`の`ModalHeader`/`ModalBody`/`ModalFooter`を**非公開の内部部品**として取り込む
  - スロットprop追加: `title?`/`titleIcon?`（ヘッダ）、`footer?`（フッタ）、`theme?`、`bodyOverflowY?`、`bodyStyle?`
  - `title`/`footer`いずれか指定時のみ骨格（Header/Body/Footer）を描画。未指定時は従来通り素の枠として`children`を直接描画（`VideoDetailInfo`/`HomeVideoDetailInfo`等の既存の素枠利用を壊さない）
  - `ModalConst.ts`の定数のうち`ModalLayout`系・`ModalPortal`系をこのファイルにモジュールレベル定数としてコロケーション
- [x] `src/components/ModalPortalConfirm.tsx`
  - `WarningHeader`をこのファイルへコロケーション（確認モーダル専用のため）
  - `CONFIRM_MODAL_CONTAINER_STYLE`をこのファイルへコロケーション
  - 新`ModalPortal`のスロットAPIを使う薄いプリセットに整理

### 6-2. 各画面の移行（14件）
中身コンポーネント（`Xxx.tsx`）が`ModalPortal`を直接描画し、`title`/`titleIcon`/`footer`スロット＋本文childrenを渡す形に変更。ラッパー（`XxxModal.tsx`）はトリガー＋開閉stateのみ担当し`<Xxx isOpen close .../>`を描画。各画面の`Parent`(flex骨格)は撤廃。本文フォントが12/13/16系と異なる画面（HowToUse/UsagePrecaution=13/16系）は内側要素にフォント指定を残して現状維持。
- [x] `FavoriteSearchCondition.tsx`（footerなし）
- [x] `FavoriteVideoFolderSearchCondition.tsx`（footerなし）
- [x] `HomeSearchCondition.tsx`（footerなし）
- [x] `HeaderHowToUse.tsx`（footerなし・font 13/16系）
- [x] `HeaderUsagePrecaution.tsx`（footerなし・font 13/16系）
- [x] `FavoriteFavoriteComment.tsx`（固定高さ`height:90%`）
- [x] `FavoriteBlockComment.tsx`
- [x] `FavoriteAddTag.tsx`
- [x] `FavoriteCreateFolder.tsx`（`FavoriteCreateFolderInFolderModal`と共用）
- [x] `FavoriteUpdateFolder.tsx`
- [x] `FavoriteSearchCsvExport.tsx`
- [x] `FavoriteSearchCsvImport.tsx`
- [x] `FavoriteDeleteFolder.tsx`（`theme="light"`）
- [x] `TagFolderSelectPanel.tsx`（`bodyOverflowY="hidden"`・タグ一覧のみ独自スクロール維持）

### 6-3. 旧ファイルの削除
- [x] `src/components/ModalLayout.tsx`を削除（全consumerが`ModalPortal`スロットへ移行済みを確認後）
- [x] `src/consts/ModalConst.ts`を削除
- [x] `FavoriteDeleteFolderModal.tsx`の`CONFIRM_MODAL_CONTAINER_STYLE`参照を`ModalPortalConfirm.tsx`からの参照に変更

### 6-4. 確認
- [x] `npx tsc --noEmit -p tsconfig.app.json`で今回変更起因のエラー0件
- [x] 各種レビュー（frontend-review等）

## 5. 対象外（意図的に除外）
- `FavoriteVideoDetailInfo.tsx`（favorite・videochannelではなく通常のお気に入り画面側）はタグ選択モーダルを持たないため対象外（呼び出し元propsを確認済み。お気に入り画面では`FavoriteAddTagModal`という別フローでタグ編集する設計のため）
- PC/スマホのレスポンシブ幅調整は`docs/modal-mobile-responsive/`で対応済みのため今回スコープ外

## 実装完了後の確認結果
- 型チェック: `npx tsc --noEmit -p tsconfig.app.json`で今回変更したファイルに起因するエラー0件（既存の未使用変数エラー等は本タスクと無関係のため対象外）
- frontend-review: マジックナンバー(`ModalPortal.tsx`の閉じるボタンサイズ)と既存のRules of Hooks違反(早期returnの後の`useEffect`)を修正済み
- architecture-review: 指示範囲外の実装なし
- comments-review: WHATコメント1件を削除済み
- performance-check: 問題なし
- spec-review: `spec.md`の決定事項と実装の差分なし
