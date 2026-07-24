# サイドメニュー レイアウト刷新 仕様書

## 対象
`src/features/header/components/SideMenu/HeaderSideMenu.tsx`
`src/features/header/components/SideMenu/HeaderSideMenuLi.tsx`

## 背景
サイドメニューの背景色（`#1e1e1e`）が、ホーム・お気に入り検索エリアやユーザーメニューで統一されている配色トークン（`#1c1f26`＋枠線`#3a3f4b`＋影）と揃っていなかった。また、`transition: transform 0.3s ease`が定義されているにもかかわらず開閉は`display:none`切替のみで実際にはアニメーションしていなかった。ホーム・お気に入り画面のデザイン刷新に合わせ、既存デザイントークンに揃える形で刷新する。

## 変更前仕様
- パネル背景色: `#1e1e1e`（他画面の統一トークン`#1c1f26`とは異なる独自色）
- 開閉: `display: none` の切替のみ（`transition`定義はあるが機能していない）
- メニュー項目: アイコンなしのテキストのみ、ホバー時の見た目変化なし
- 「ホーム／お気に入り」と「使い方／使用上の注意」の間に区切りなし
- `padding-top: 8%` 等、名前のない数値が直接記述されている

## 変更後仕様
- [x] パネル背景色を`#1c1f26`に統一し、右端に`1px solid #3a3f4b`の枠線と`0 4px 12px rgba(0, 0, 0, 0.6)`の影を追加する
- [x] 開閉を`transform: translateX(0) / translateX(-100%)`＋`visibility`によるスライドアニメーションに変更し、`transition: transform 0.3s ease, visibility 0.3s ease`を実際に機能させる
- [x] オーバーレイの表示・非表示も`opacity`＋`visibility`のtransitionでフェードさせる
- [x] 各メニュー項目（ホーム／お気に入り／使い方を見る／使用上の注意）に`react-icons/io5`のアイコンを追加する
- [x] メニュー項目ホバー時に角丸背景色`rgba(37, 99, 235, 0.18)`を表示するボタン型にする
- [x] モバイル表示時のみ、「ホーム／お気に入り」と「使い方／使用上の注意」の間に`1px solid #3a3f4b`の区切り線を表示する（PC表示では前者のグループ自体が存在しないため区切り線も表示しない）
- [x] `padding-top: 8%`・`padding-left: 12%`・`padding-bottom: 1%`・`gap: 25px`をファイル内のモジュールスコープ定数に切り出す（機能範囲がこの2ファイルに閉じているため、共有の`HeaderConst.ts`には追加しない）
- [x] パネル右側の角（`border-top-right-radius`/`border-bottom-right-radius`）のみ`24px`で丸める。左辺は画面端に接するため直角のまま維持する

## 変更しないこと（既存仕様）
- [ ] サイドメニューの開閉状態管理ロジック（`useHeaderSideMenu.ts`の`isOpenSideMenu`等）
- [ ] メニュー項目の並び・表示条件（`isMobile`・`isLogin`による出し分け）
- [ ] 現在地（開いている画面）のハイライト表示は今回のスコープに含めない
