# ヘッダー改修 仕様書

対象: `src/features/header` 配下

## 既存挙動（変更前）

- PC版ヘッダー高さ125px / モバイル60px、背景色`#00050d`固定
- PCナビ(`HeaderMenuUlPc`)のhoverは白背景反転(`background:white; color:black;`)
- サイドメニュー項目(`HeaderSideMenuLi`)のhoverはローカル定義の青ハイライト`rgba(37,99,235,0.18)`
- ユーザーメニュー(`HeaderUserMenuList`の`NavDiv`)の開閉は`display:none/block`の即時切り替え（アニメーションなし）
- ユーザーメニュー項目(`HeaderUserMenuContent`)はアイコンなし・テキストのみ、hoverは下線表示
- フォントサイズはコンポーネントごとに個別定義（PCナビ15/19px、ユーザー名・ユーザーメニュー12/15px、サイドメニュー・ヘルプ系モーダル13/16px）
- ヘッダーにサービス名・ロゴ等のブランド要素なし

## 変更後の要件

- [x] ユーザーメニュー(`NavDiv`)の開閉に、サイドメニューと同じ手法（`opacity`+`visibility`+`transform`+`transition`）でアニメーションを付ける
- [x] メニュー項目のhover色を、プロジェクト共通定数`BUTTON_HOVER_BG_COLOR`/`BUTTON_HOVER_ACCENT_COLOR`（`src/consts/ButtonInteractionConst.ts`）に統一する（PCナビ・サイドメニュー・ユーザーメニューの3箇所）
- [x] ヘッダー内のブレークポイント別フォントサイズを`HEADER_FONT_SIZE_SMALL`(13px)/`HEADER_FONT_SIZE_LARGE`(16px)に統一する（ヘッダー機能内に閉じたスコープ。プロジェクト全体のデザイントークン化は対象外）
- [x] ハンバーガーアイコンの右隣に、サービス名「VideoMng」をテキストで表示する
- [x] PC版ヘッダーの余白バランスを改善する。ただし高さ125px自体は`Content.tsx`・各動画詳細画面の戻るアイコン位置等、複数の外部ファイルがオフセット基準として参照しているため変更しない。ヘッダー下端に区切り線を追加し、ナビ項目・ハンバーガーアイコンをわずかに拡大することで対応する
- [x] ユーザーメニュー項目(`HeaderUserMenuContent`)を、サイドメニュー項目(`HeaderSideMenuLi`)と同じ「アイコン+テキスト+hover背景色」パターンに揃える

## 対象外（今回のスコープに含めない）

- プロジェクト全体（96ファイル）のフォントサイズ・ブレークポイントのデザイントークン化
- ヘッダー高さ(125px/60px)自体の変更
