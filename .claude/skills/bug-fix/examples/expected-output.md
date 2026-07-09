# Expected Output — Bug Fix

---

## ケース1: フロントエンドのバグ修正（全ステップ）

### 状況
- お気に入り一覧で「削除ボタンを押しても一覧から消えない」バグ

### Step 1 出力（原因調査）

```
## 原因調査結果

### 再現条件
- お気に入り一覧画面で削除ボタンを押すと API は成功するが、一覧の表示が更新されない

### 原因箇所
- ファイル: src/features/favorite/hooks/use-favorite-list.ts:24
- 原因: 削除成功後に react-query の invalidateQueries に渡しているクエリキーが、一覧取得時に使っているキーと一致していない

### 根本原因
- クエリキーが features/favorite/api/query-key.ts の定義を経由せず直書きされており、一覧取得側との整合性が取れていなかった
```

### Step 3〜5 中間確認

```
テスト作成完了。`npm run vitestrun` でテスト失敗を確認しました（期待通り）。
修正を適用し、テストが通過することを確認しました。
```

### Step 7 出力（レビュー）

```
## Frontend Review 結果

チェック完了。問題なし。

## Architecture Review 結果

チェック完了。問題なし。

## Comments Review 結果

チェック完了。問題なし。
```

---

## ケース2: スタイル起因のバグ修正（横展開あり）

### 状況
- ヘッダーのアイコンボタンで、ホバー時の背景色が一部の画面だけ効いていない

### Step 1 出力

```
## 原因調査結果

### 再現条件
- ヘッダーの通知アイコンにマウスを乗せても背景色が変化しない

### 原因箇所
- ファイル: src/features/header/components/header-icon-button.tsx:15
- 原因: 前回のスタイル修正で hover 用の styled-components props が削除されている

### 根本原因
- 共通コンポーネント化する際に hover 状態の props を渡し忘れた
```

### Step 6 出力（横展開）

```
## 水平展開漏れチェック結果

同じコンポーネントを使用している footer 側でも同様の props 渡し忘れを検出。修正済み。
```
