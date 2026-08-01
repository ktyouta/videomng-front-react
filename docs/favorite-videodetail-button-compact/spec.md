# お気に入り動画詳細画面 操作ボタンのコンパクト化

## 背景
お気に入り動画詳細画面の「再生」「お気に入りから外す」ボタンが画面幅いっぱいの大きなブロックとして縦に2つ並んでおり、圧迫感があった。既存の共通ボタン部品(`ButtonComponent`)のサイズ・角丸バリアントを使ってデバイス幅で出し分ける対応をいったん行ったが、デバイス幅の判定基準（`isMobile`とCSSメディアクエリ、あるいは`isMobile`と`isTabletOrPc`）が複数混在し、768px境界でタブレット実機の表示が崩れる不具合が繰り返し発生した。この反省を踏まえ、デバイス幅による分岐をなくし、検索エリアの`FavoriteSearchActionButton`と同系統の固定サイズのチップ型ボタンに置き換える。

## 対象画面
- お気に入り動画詳細(`src/features/favorite/components/videodetail/FavoriteVideoDetailInfo.tsx`)

## 要件

### スマホ幅(768px未満)
- [x] サムネイル下のボタン列(チップ型ボタン)は廃止すること
- [x] サムネイル右上に重ねた小さいアイコンボタン(ラベルなし)にすること
- [x] アイコンボタンに背景は敷かないこと。サムネイル右上の角から少しはみ出す位置(`top:-10px; right:-10px`)に配置し、サムネイル画像ではなく周囲のページ背景に乗せることで視認性を確保すること
- [x] アイコンサイズは16px。`drop-shadow`は効果が薄いため付けないこと
- [x] 解除アイコンは`FaRegTrashAlt`を使うこと

### タブレット・PC幅(768px以上)
- [x] 「再生」「解除」ともにアイコン+ラベルのチップ型ボタンにすること(アイコンのみにしないこと)。チップの見た目は一覧画面の`FavoriteSearchActionButton`と同じ値(height:39px, padding:0 14px, gap:6px, background:#3a3d42, border-radius:8px, icon 16px)を使うこと
- [x] チップボタンを、お気に入り一覧画面の`OperationPanelDiv`と同じ配色のパネル(`background-color:#1c1f26`、`border:1px solid #3a3f4b`、`box-shadow:0 4px 12px rgba(0,0,0,0.6)`、`border-radius:12px`、`padding:14px`)で囲むこと
- [x] 再生アイコンは`MdPlayArrow`、解除アイコンは`FaRegTrashAlt`を使うこと
- [x] ラベルの文字サイズは14px(`FavoriteSearchActionButton`のlandscape/PC時の値)にすること

### デバイス判定
- [x] スマホ/タブレット・PCの出し分けは、`mediaQuery.tablet`と`mediaQuery.pc`をそれぞれ個別に`useMediaQuery`で呼び出し、その結果(真偽値)同士を`||`で結合した`isTabletOrPc`で行うこと
- [x] `useMediaQuery`の呼び出し自体を`&&`/`||`の右辺に置き、短絡評価で呼び出しをスキップする書き方をしないこと(Hooks呼び出し数不整合の再発防止)
- [x] `isMobile`(768px以下)とCSSメディアクエリ(`min-width:768px`)を併用しないこと(768px境界の重複判定の再発防止)

## 非対象(変更しないもの)
- 確認モーダル(`ModalPortalConfirm`)側の挙動
- Home動画詳細・チャンネル動画詳細画面の同種ボタン(horizontal-scopeで重複を確認したが、今回のスコープ外)
