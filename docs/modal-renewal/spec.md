# モーダル刷新 仕様書

## 背景
ホーム画面・お気に入り画面・動画詳細画面・ヘッダーのデザインをおしゃれな方向に刷新してきた流れの一環として、モーダル（`ModalPortal.tsx` / `ModalPortalConfirm.tsx`を使う約20画面）も刷新したい。既存の不具合修正ではなく、デザイン統一の延長線上の取り組み。

## 対象範囲
`ModalPortal` / `ModalPortalConfirm`を使用する全モーダル（`FavoriteDeleteFolderModal` / `FavoriteSearchFilterModal` / `FavoriteAddTagModal` / `HeaderUsagePrecautionModal` / `FavoriteFavoriteCommentModalIcon` 等、約20画面）。

## 現状の問題点

### 配色
- 背景がダーク系（`#181a1e`・白文字）とライト系（`#e0e0e0`・黒文字）の2系統混在
- `ModalPortalConfirm`の利用箇所（`FavoriteDeleteFolderConfirmModal`等）は全て削除・更新等の実行確認フロー。「注意事項表示」(`HeaderUsagePrecautionModal`)はライト系ではなく他の閲覧系と同じダーク系の素の`ModalPortal`（誤って同一視していたため訂正）

### 高さ
- `modalMinHeight`の指定が`%` / `px` / `vh` / `clamp()` / 空文字とバラバラで、コンテンツ量と無関係な決め打ち値
- 固定高さの指定方法も2系統ある: `modalMinHeight`prop（例: `FavoriteDeleteFolderModal`の`25%`）と`containerStyle.height`直接指定（例: `FavoriteFavoriteCommentModalIcon`の`90%`）

### 警告表現
- 削除確認等のキャンセル/OKボタンが両方`variant="black"`で、危険操作（削除実行）が色分けされていない（`ButtonComponent`には`red`variantが既にあるのに未使用）
- `FavoriteDeleteFolderConfirmModal`の最終警告文「削除すると元に戻せません」が黒文字のまま強調なし
- 「注意事項表示」(`HeaderUsagePrecautionModal`)は警告用の視覚要素（アイコン・強調色）が最初から無い

### 外枠デザイン
- `ModalContainer`は`background-color:#181a1e; border:1px solid white;`のみで、シャドウ・アニメーション・アイコン装飾が一切ない
- 開閉時のtransitionが無く、`isOpen`条件でDOMごと出し入れするため唐突に出現・消滅する
- 閉じるボタンが素の白い×アイコンで、ホバー時の反応や円形背景（動画詳細画面刷新で導入済みの`hasCircleBackground`）が未適用

### 内部レイアウト
- 各モーダルの中身コンポーネント（`FavoriteSearchCondition.tsx` / `FavoriteFavoriteComment.tsx`等）がタイトル・区切り・余白を個別実装しており、タイトル要素が`styled.div``（空スタイル）`のまま装飾なしのケースがある
- ヘッダー領域とボディ領域の間に区切り線が無い
- `height:4%` / `height:87%` / `height:96%`のように、親の`modalMinHeight`を前提にした脆い%分割を個別実装している

### その他
- モーダルタイトルの太字有無が画面ごとに不統一
- 閉じるボタン(×)の非表示は`FavoriteDeleteFolderModal`のみの例外（意図的かは未確認）
- 実行前の二段階確認（ネストモーダル）の有無も機能ごとにバラバラ
- `FavoriteDeleteFolderModal.tsx`が共通のライト系確認部品`ModalPortalConfirm`を使わず、`ModalPortal`に直接同じライト系スタイルを手動で複製している（チェックボックス項目があり`ModalPortalConfirm`の固定レイアウトに収まらないため）。同じフォルダ削除フロー内で1段階目（手動複製）と2段階目（`ModalPortalConfirm`使用）で実現方法が異なる

## 決定事項

### 配色
ライト/ダークの完全統一は不採用。`ModalPortalConfirm`系（削除確認等の意思決定モーダル）はライト系のまま残し、警告として機能する見た目を作り込む方向とする。

### 高さ
基本は「コンテンツ量に応じた高さ＋最小限のpadding」とし、固定高さは限定的な例外としてのみ許可する。`ModalBody`を`flex:1`にすることで、外側コンテナの高さが`auto`でも固定値でも同じ仕組みで対応できる（固定時は`ModalBody`が残り領域を占有し`overflow-y:auto`で内部スクロール）。

### 警告表現
警告の「視覚要素」だけを共通部品`WarningHeader`（アイコン+強調色ヘッダー）として切り出し、ボタン構造（あり/なし）は既存の`ModalPortal`/`ModalPortalConfirm`の枠組みに任せる。

- `ModalPortalConfirm`に`danger?: boolean`propを追加し、trueのときOKボタンを自動で`ButtonComponent`の`variant="red"`にする
- 警告アイコンは既存の`IoWarningOutline`（サイドメニューの注意事項リンクで使用済み）を流用する

**破綻ケース**: 警告レベルが「注意(黄)」「危険(赤)」等の複数段階に分かれる場合、`WarningHeader`が単一警告色決め打ちのままだと対応できない。その場合`level: "caution" | "danger"`propを追加し色をlevelから解決する設計に拡張する。

### 外枠デザイン
オーバーレイが`rgba(0,0,0,0.9)`とほぼ黒に近いため、**黒系のbox-shadowで立体感を出す手法は機能しない**（影の色が背景と同化して見えない）。暗い背景で視認できるのは白/明るい色のグロー・ボーダーのみ。

- 背景: 単色ではなく`linear-gradient(180deg, #22252c, #1a1c22)`のような微妙な明暗グラデーションで光源感を出す
- 縁: `box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 0 24px rgba(255,255,255,0.06)`のような白系の淡いグロー/リングを採用（決定）。アクセントカラー`BUTTON_HOVER_ACCENT_COLOR(#7abaff)`ベースの案は不採用。理由: 警告表現でOKボタンに`red`（危険色）を使う設計のため、縁を青系アクセントにすると赤いボタン+青い縁で視覚的に衝突する。またアクセントカラーはホバー反応色として意味が固定されており、常時表示の縁取りに流用すると「ホバー中」との意味が曖昧になる
- 枠線の太さ・角丸(6px)自体はヘッダーパネル（`HEADER_PANEL_*`）と既に一致しており変更不要
- 閉じるボタンに`IconComponent`の`hasCircleBackground`+ホバーアクセントカラーを付与

**対象外（スコープ縮小）**: 開閉時のtransitionは対象外とする。現在の`ModalPortal`は`{props.isOpen && createPortal(...)}`という条件付きレンダリングで、非表示時はDOMから即座に取り除かれるため、CSSの`transition`を追加しても閉じる際のアンマウントが即座に起こり退場アニメーションが機能しない。実現するには遅延アンマウント（`isOpen`が`false`になった後も一定時間マウントを維持する仕組み）が別途必要で、土台となる`ModalPortal.tsx`の複雑度を上げてまで今回対応する優先度ではないと判断（ui-consistency-reviewの指摘を受けて決定）。

### 内部レイアウト
共通レイアウト部品`ModalHeader`/`ModalBody`/`ModalFooter`を新設し、各モーダルの中身コンポーネントがこれを組み合わせて使う。

```
ModalHeader: display:flex; gap:10px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.08)
  → タイトル横にトリガーボタンと同じアイコンをhasCircleBackground付きで表示
ModalBody: flex:1; padding:16px 0; overflow-y:auto; display:flex; flex-direction:column; gap:16px
ModalFooter: display:flex; justify-content:flex-end; gap:12px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.08)
```

**破綻ケース**: 将来、モーダルの中身が「タイトル+ボディ+フッター」の3段構成に収まらない特殊な画面（タブ切り替え内包等）が出た場合、固定の3コンポーネント構成では対応できない。その場合は`ModalHeader`/`ModalBody`単位で個別に呼び出せる「パーツ提供」にとどめ、組み合わせ方を呼び出し側に委ねる設計に緩める。

**`ModalBody`のoverflow上書き対応**: `src/components/TagFolderSelectPanel.tsx`（後述）は、フォルダ選択・タグ検索欄は固定表示のまま、内側のタグ一覧部分だけが独自に`overflow:auto`でスクロールする構造を持つ。`ModalBody`の`overflow-y:auto`をそのまま強制すると、固定表示だった検索欄までスクロールに巻き込まれ使い勝手が変わってしまう。そのため`ModalBody`に`overflowY?: "auto" | "hidden"`（デフォルト`"auto"`）propを追加し、内部で独自のスクロール領域を持つ既存コンテンツは`overflowY="hidden"`を指定して現状のスクロール範囲を維持できるようにする。

### `TagFolderSelectPanel.tsx`への適用
`horizontal-scope`で発見した4つ目の中身パターン。`HomeVideoDetailTagFolderSelect.tsx`/`VideoDetailTagFolderSelect.tsx`（videochannel）から共通で呼び出される、お気に入り登録時のタグ・フォルダ選択パネル。他の11ファイルと違い既に`flex`ベースで実装されているが、タイトル(`TagMasterListTitleDiv`)は太字のみで区切り線が無く、`ModalHeader`の見た目とは異なる。

**決定**: `ModalHeader`/`ModalBody`(`overflowY="hidden"`)/`ModalFooter`に統一する。ただし使い勝手（フォルダ選択・タグ検索欄は固定、タグ一覧のみスクロール）は変更しない。既存の`MainArea`/`Parent`/`TagMasterAreaDiv`/`TagMasterListAreaDiv`の入れ子・スクロール構造はそのまま維持し、外側の`Root`/`FooterDiv`部分だけを共通部品に置き換える。

### 閉じ方（×ボタン・背景クリック）
`ModalPortalConfirm`ベースの確認モーダル（`FavoriteDeleteFolderConfirmModal`等）は現状`close`/`isCloseOuter`propを`ModalPortal`に渡しておらず、×ボタンも背景クリックでの閉じるも一切無い（キャンセル/OKボタンでしか閉じられない）。`FavoriteDeleteFolderModal.tsx`は`hideCloseButton={true}`で×ボタンのみ同じく非表示にしているが、`isCloseOuter={true}`で背景クリックは効くという不整合があった。

**決定**: 「意思決定を強制する」意図は採用せず、全ての確認モーダルで×ボタン・背景クリックの両方から閉じられるように統一する。
- `ModalPortalConfirm.tsx`: `ModalPortal`に`close={props.closeModal}` `isCloseOuter={true}`を渡すよう変更（現状渡していない）
- `FavoriteDeleteFolderModal.tsx`: `hideCloseButton={true}`を削除し×ボタンを表示する（`isCloseOuter={true}`は既存のまま維持）

### 二段階確認（ネストモーダル）の基準
現状二段階になっているのは`FavoriteDeleteFolderModal`（フォルダ削除）と`FavoriteSearchCsvExport`（CSV取込アップロード）の2箇所のみ。両方に共通するのは「危険度が高いから念のため2回確認させている」のではなく、**実行前に追加の入力（チェックボックス選択・ファイル選択）が必要で、入力用モーダルと実行確認用モーダルが自然に分かれている**という構造。お気に入り解除・メモ削除・フォルダからの動画除外は追加入力が不要な「はい/いいえ」のみの操作のため、`ModalPortalConfirm`単体の1段階で済んでいる。

**決定**: 二段階にするかどうかは危険度では判断しない。
- 実行前に追加の入力（選択肢・ファイル等）が必要 → 入力用モーダル（フォーム）+ `ModalPortalConfirm`による実行確認モーダルの2段階
- 追加入力が不要 → `ModalPortalConfirm`単体の1段階
- 危険度・影響範囲の大小は確認回数ではなく、確認モーダル内の警告表現（上記「警告表現」の`danger`prop・警告文の強調）で表現する

### 「ライト系だが自由なコンテンツ」の受け皿
`FavoriteDeleteFolderModal.tsx`は`ModalPortalConfirm`のライト配色（背景`#e0e0e0`・角丸20px・黒文字）を`containerStyle`に手動で複製している。チェックボックス項目があり`ModalPortalConfirm`の固定レイアウト（タイトル+キャンセル/OKボタンのみ）に収まらないため。

**決定**:
- ライト配色を`CONFIRM_MODAL_CONTAINER_STYLE`のような`CSSProperties`定数に切り出し、`ModalPortalConfirm`内部と`FavoriteDeleteFolderModal`の`containerStyle`の両方から参照する（色の二重管理を解消）
- `ModalHeader`/`ModalBody`/`ModalFooter`（内部レイアウトの共通部品）に`theme?: "dark" | "light"`propを追加し、区切り線の色を切り替える
  - dark: `rgba(255,255,255,0.08)`（白ベース、暗い背景で視認できる）
  - light: `rgba(0,0,0,0.08)`（黒ベース、明るい背景で視認できる）
  - **注意**: dark用に設計した白ベースの区切り線をライト系にそのまま使うと、明るい背景に明るい線がほぼ同化して見えなくなる。ダーク版で直した「輪郭が見えない」問題をライト系で再発させないよう、themeごとに反転させる必要がある
- `FavoriteDeleteFolderModal`の中身（`FavoriteDeleteFolder.tsx`）を、独自の`Parent`/`MeainArea`/`FooterDiv`実装から`ModalHeader`(theme="light")+`ModalBody`(チェックボックス内容)+`ModalFooter`(キャンセル/削除ボタン)の組み合わせに置き換える

## 未決事項
なし。実装対象ファイル一覧・作業計画は`docs/modal-renewal/plan.md`を参照（全11件の内部レイアウト対象ファイルの実装確認済み、`danger`対象の判定も「お気に入り解除＝danger（付随データが失われる）」「フォルダから除外＝danger対象外（紐付け解除のみ）」で確定）。次のステップは実装着手。
