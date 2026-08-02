# お気に入り動画詳細画面のデザイン刷新をホーム/チャンネル動画詳細画面へ水平展開

## 背景
お気に入り動画詳細画面(`FavoriteVideoDetail.tsx`以下)に対して`72da6bd`以降5回のコミットでデザイン刷新(色統一・レイアウト調整・コメント欄の構造整理等)を行った。同じ改修をホーム動画詳細画面(`src/features/home/components/videodetail/`)とお気に入り内チャンネル動画詳細画面(`src/features/favorite/components/videochannel/videodetail/`)にも適用する。

## 対象範囲
共通して存在する3メニューのみ:**動画情報 / 公開コメント / キーワード検索コメント**
(「メモ」「動画詳細設定」「タグ」はお気に入り専用メニューのため対象外)

## 要件

### 動画情報エリア共通
- [x] `VideoContentDiv`のpaddingを`padding-left:7px; padding-right:7px;`(モバイル・タブレット)、`padding-left:6%; padding-right:5%;`(PC)にする
- [x] `VideoInfoDiv`をモバイルで`width:100%; display:flex; flex-direction:column;`にする(タブレット/PCの幅は既に統一済みのため変更しない)。`align-items:center`はチャンネル側`VideoDetailInfo.tsx`には適用したが、ホーム側`HomeVideoDetailInfo.tsx`はユーザー判断により付与しない状態のまま確定(2画面間で意図的な差異)
- [x] `VideoTitle`をモバイルで`font-size:12px; margin-bottom:1px; margin-top:1px;`にする(タブレット/PCは変更しない)
- [x] `VideoImg`に`display:block`を追加し、`ThumbnailWrapperDiv`(`position:relative; width:100%;`)でラップする(モバイルのサムネイル重ねアイコンの位置基準として使用するため)

### 動画情報エリアのボタン(ユーザー確認済み・最終決定: お気に入りの構造(モバイル=サムネイル重ねアイコン/タブレット・PC=ボタンパネル)に完全に合わせる)
- [x] タブレット・PC(`isTabletOrPc`): 「再生」「ログイン誘導」「お気に入り未登録(登録する)」「登録済み」を、お気に入りと同じグレー系チップボタン(背景`#3a3d42`、hover時のアクセント色・背景色変化)+パネル(背景`#1c1f26`、枠`#3a3f4b`、box-shadow、角丸12px)で表示する。ボタンの個数・出し分け条件(`isLogin`・`favoriteFlg`)は変更しない
- [x] モバイル(`!isTabletOrPc`): お気に入りと同じ`ThumbnailWrapperDiv`+`IconBtnAreaDiv`+`IconBadgeButton`(背景なし・白アイコン16px)構成で、サムネイル右上にアイコン1個のみを重ねる。「再生」アイコンは表示しない(お気に入り側もモバイルでは再生アイコンを持たないため踏襲)。表示するアイコンは状態に応じて「ログイン誘導」(`MdLogin`)/「登録する」(`FaRegStar`)/「登録済み」(`FaStar`)のいずれか1個を出し分ける
- [x] 各ボタン・アイコンの意味付け(「登録する」=`FaRegStar`、「登録済み」=`FaStar`、「ログイン誘導」=`MdLogin`、「再生」=既存の`MdPlayArrow`)は新規選定
- [x] タブレット・PCの`IconBtnAreaDiv`位置は`top:-10px; right:-3px;`(お気に入りと同じ値)
- [x] タブレット・PCのチップボタンに収まるよう、ラベル文言を短縮する(「お気に入りに登録する」→「登録する」、「お気に入り登録済み」→「登録済み」、「ログインしてお気に入りに登録」→「ログインして登録」)。お気に入り側の同種の刷新でも「お気に入りから外す」→「解除」という短縮の前例があり、チップ化に伴う付随的な文言調整として実施
- [x] `ButtonPanelDiv`は`width:100%`ではなく`width:fit-content`+`margin:0 auto`とし、`ChipButton`は`width:50%`を持たない(中身のサイズに応じて中央寄せになる。`VideoInfoDiv`の`align-items`設定に依存しない自己完結的な中央寄せ)

### メニューエリア共通
- [x] `MenuParentDiv`のwidthを`99%`→`100%`にする
- [x] `ComboAreaDiv`のメニューラベル(「メニュー：」)をモバイル時は非表示にし、Selectboxを中央寄せにする(タブレット/PCは表示・左寄せのまま)
- [x] メニューSelectboxの背景色を`#3a3d42`、枠線を`transparent`、角丸を`10px`にする
- [x] モバイル時のメニューSelectbox幅を`75%`→`96%`にする(ラベル非表示化に伴う)
- [x] 「動画情報」パネルの高さを`minHeight: isMobile?"unset":"505px", height: isMobile?"655px":"auto"`にする
- [x] 「公開コメント」パネルの高さを`height: isMobile?"655px":"60vh"`にする
- [x] 「キーワード検索コメント」パネルの高さを`height: isMobile?"655px":"60vh"`にする
- [x] `HomeVideoDetailPanel.tsx`/`VideoDetailPanel.tsx`の`min-height:60vh`を削除し、paddingを`10px`(モバイル)/`18px`(タブレット以上)にする
- [x] `HOME_VIDEO_DETAIL_FONT_SIZE`/`VIDEO_DETAIL_FONT_SIZE`の`MENU_BODY.MOBILE`を`12px`→`11px`にする

### 公開コメント
- [x] コメント一覧の`padding-top`を`20px`→`17px`にする
- [x] コメント一覧エリアの文字サイズを`11px`(モバイル)/`12px`(タブレット)/`16px`(PC)にする(`padding-right`もお気に入りと同じ`7px`(モバイル)/`20px`(タブレット以上)に合わせて変更)
- [x] コメント投稿者アイコン幅を`20px`(モバイル)/`25px`(タブレット以上)にする(親コメント・返信コメント両方)
- [x] ヘッダー統合・アイコンオーバーレイ化は対象外とする(Home/チャンネル側には元々「お気に入りコメント一覧」「非表示コメント一覧」のヘッダー・アイコン自体が存在しないため、移動対象がない)

### キーワード検索コメント
- [x] 入力欄の高さを`33px`(モバイル)/`37px`(PC)にする(`useMediaQuery`を追加)
- [x] 未使用の`HomeSearchKeywordCommentHeader.tsx`/`SearchKeywordCommentHeader.tsx`を削除する

### 共通定数の切り出し
- [x] `FAVORITE_SEARCH_AREA_ACCENT_COLOR`/`FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG`を`src/consts/ButtonInteractionConst.ts`(`BUTTON_HOVER_ACCENT_COLOR`/`BUTTON_HOVER_BG_COLOR`)に切り出す。既存の参照元(`FavoriteSearchActionButton.tsx`・`FavoriteVideoDetailInfo.tsx`)も新しい参照先に更新する

## 対象外(変更しないもの)
- 「メモ」「動画詳細設定」「タグ」メニュー(Home/チャンネルに該当メニューが存在しないため)
- `Footer.tsx`・`HeaderUserMenuList.tsx`(全画面共通コンポーネントのため既に自動反映済み)
- `FavoriteCommentFavoriteIconArea.tsx`(import整理のみでデザイン変更なし)
- tablet-landscape幅調整(`46c5a58`相当。既に3画面へ適用済み)
- ホーム/チャンネルのボタンの個数・出し分け条件・機能(ログイン誘導/未登録/登録済みの3状態、お気に入り登録機能)
