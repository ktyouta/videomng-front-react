---
name: frontend-review
description: |
  フロントエンドのコード変更が完了した直後に、コンポーネント設計の観点でチェックを行う。

  以下のような場合に必ず呼び出す：
  - コンポーネント・ページ・hooks を新規作成・修正したとき
  feature-impl / feature-modify 等を経由しない実装でも、上記の条件を満たす変更を行った場合は必ず実行すること。

  以下の場合は使用しない：
  - 調査・説明・設計相談のみの場合
version: 1.0.0
---

# Frontend Review Skill

## Overview

フロントエンド実装後に、コンポーネント設計の違反パターンをチェックする。

---

## Check Instructions

### フォルダ・ファイル構成
- `features/<機能名>/` 単位でフォルダが切られているか
- コンポーネントは `features/<機能名>/components/`、hooks は `features/<機能名>/hooks/`、API 呼び出しは `features/<機能名>/api/`、型は `features/<機能名>/types/`、バリデーションは `features/<機能名>/schemas/` に配置されているか
- ファイル名は既存の命名規則（コンポーネントは `PascalCase.tsx`、hooks・ユーティリティは `camelCase.ts`）に沿っているか
- `api/` にクエリキー定義（`queryKey.ts`）が存在する場合、新規クエリキーはそこに集約されているか（直書きで重複定義していないか）
- 複数 feature から参照される共通処理は `features/api/` に置かれているか（特定の feature 専用のものを features/api/ に混在させていないか）

### 共通コンポーネントの利用
- ボタン・入力フィールド等、`src/components/` に既存の共通コンポーネントが存在する場合はそれを使用しているか（同じ見た目を feature 側でインラインに再実装していないか）
- 実装前に `src/components/` を確認しているか
- アイコンには `react-icons` を使用しているか（インライン SVG を直書きしていないか）

### コンポーネント設計
- データフェッチ・状態管理・表示ロジックが1つのコンポーネントに過度に混在していないか（分割の余地がないか）
- 子コンポーネントへ props として渡すコールバック関数は `useCallback` でラップされているか
  - アンチパターン: `function handleDelete(id) { ... }` を毎レンダリング再生成して `onDelete` として渡す
  - 正しいパターン: `const handleDelete = useCallback((id) => { ... }, [deps])`
- マジックナンバー・マジック文字列が直接記述されていないか（`consts/` / `const/` の定数に切り出せないか）

### コーディング規約（CLAUDE.md 準拠）
- コンポーネントが `function` 宣言で定義されているか（アロー関数でないか）
- TypeScript strict モードに違反していないか（`any` の使用、暗黙の `any` 等）
- `if` 文で中括弧 `{ }` を省略していないか
- エクスポートされた関数（hooks・ユーティリティ）に JSDoc コメント（`/** 説明 */`、パラメータがあれば `@param`）があるか
  - このプロジェクトの既存コード（例: `src/store/accessTokenStore.ts`）でも JSDoc が使われており、既存スタイルに合わせる
- コメントが「なぜ（WHY）」を説明しているか（詳細は comments-review スキルが担う）

### hooks のレビュー委譲
- `use` で始まるファイル（`use*.ts`, `use*.tsx`）または `hooks/` ディレクトリ配下のファイルが変更に含まれる場合、hooks-reviewer エージェントを呼び出して結果を取得する
  - **コードをプロンプトに直接埋め込まない**（省略・改変が起きるため）
  - 「以下のファイルパスを Read してレビューしてください：[パス一覧]」の形式でファイルパスのみを渡す

---

## Procedure

1. 変更されたフロントエンドファイルを確認する
2. 上記チェック項目に照合する
3. hooks ファイルが含まれる場合、hooks-reviewer エージェントを呼び出す
4. 以下の形式で報告する

---

## Output Format

違反がある場合：

```
## Frontend Review 結果

### 違反あり
- **ファイル**: [ファイルパス:行番号]
- **違反内容**: 具体的な問題
- **修正方針**: 修正の方向性
```

違反がない場合：

```
## Frontend Review 結果

チェック完了。問題なし。
```

hooks ファイルが含まれる場合は上記に続けて hooks-reviewer の結果を追記する：

```
---

[hooks-reviewer エージェントの出力をそのまま追記]
```
