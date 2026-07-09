---
name: horizontal-gap-check
description: |
  実装後に、水平展開すべきファイルへの変更漏れがないかチェックする。

  以下のような場合に使用する：
  - 自分（Claude）が実装・コード修正を完了した直後
  - ユーザーが「〇〇の実装が終わった」「〇〇を実装した」と報告したとき

  以下の場合は使用しない：
  - 実装前の洗い出し（→ horizontal-scope を使う）
  - 調査・説明のみの場合
version: 1.0.0
---

# Horizontal Gap Check Skill

## Overview

実装後に「同じパターンを適用すべきだったファイル」と「実際に変更されたファイル」を照合し、
漏れを報告する。

---

## Instructions

### Step 1: 変更済みファイルを把握する

`git diff` または実装内容の説明から、今回変更されたファイルを特定する。

---

### Step 2: 水平展開すべきファイルを特定する

変更パターンをもとに、同じ対応が必要なファイルを洗い出す。
（horizontal-scope と同じ観点で調査する）

#### フロントエンド観点
- 同種のコンポーネント・ページ（`features/<機能名>/components/`）
- 同種の hooks（`use*.ts`）
- ルート定義（`react-router-dom` のルーティング設定）
- ナビゲーション・ヘッダー・フッター・サイドメニュー
- API 呼び出し箇所（`features/<機能名>/api/`、`features/api/`、`lib/apiClient.ts`）
- react-query のクエリキー定義（`queryKey.ts` 等）
- テストファイル（`*.test.ts` / `*.test.tsx`）

#### 共通観点
- 型定義ファイル（`types/`、`schemas/`）
- 定数・設定ファイル（`consts/`、`const/`）
- グローバルストア（`store/` の jotai atom）

---

### Step 3: 照合してギャップを抽出する

「変更すべきファイル」のうち「変更されていないファイル」を漏れとして抽出する。

---

### Step 4: 結果を出力する

examples/expected-output.md の形式で報告する。

---

## Constraints

- 実装は行わない（漏れの報告のみ）
- 変更済みファイルは漏れに含めない
- 「おそらく不要」なファイルは含めない（確信があるものだけ報告する）
