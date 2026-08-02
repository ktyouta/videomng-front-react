# お気に入り動画詳細画面 動画詳細設定・タグのヘッダーアイコンabsolute配置化

## 背景
お気に入り動画詳細画面の「動画詳細設定」「タグ」は、編集・閉じる・更新アイコンを専用のヘッダー行（`HeaderDiv`, height:22px）で表示していた。公開コメント（`FavoriteComment.tsx`）は同種のアイコンをposition:absoluteでコンテンツ右上に重ねる方式であり、ユーザーから実装パターンを揃えたいとの提案があった。

## 要件
- 動画詳細設定（閲覧・編集）のアイコンが、公開コメントと同様にコンテンツ右上へabsolute配置される
- タグ（閲覧・編集）のアイコンが、同様にabsolute配置される
- アイコンの見た目・クリック動作・ホバー時ツールチップの表示内容は変更しない
- メモ・コメントの個別アイテム用アイコン（1件ごとの編集/削除等）は対象外、変更しない
- 配置値: `top: -5px; right: -2px;`（`right`は公開コメント側の`-10px`から変更、ユーザー指示によりこの4箇所のみ`-2px`とする。公開コメント側は変更しない）
- コンテンツ側の`padding-top`は`17px`（公開コメント側と同じ値）
- top/right/padding-topの値は名前付き定数化せず、公開コメント側と同様に直書きのまま維持する（ユーザー判断）

## 対象ファイル
- `FavoriteDetailSettingViewActions.tsx` / `FavoriteDetailSettingEditActions.tsx` / `FavoriteDetailSettingView.tsx` / `FavoriteDetailSettingEdit.tsx`
- `FavoriteTagViewActions.tsx` / `FavoriteTagEditActions.tsx` / `FavoriteTagView.tsx` / `FavoriteTagEdit.tsx` / `FavoriteTagList.tsx` / `FavoriteTagEditAssignedList.tsx`
