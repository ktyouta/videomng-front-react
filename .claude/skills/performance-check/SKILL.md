---
name: performance-check
description: |
  実装完了後に、計算量・並列化の観点でチェックを行う。

  以下のような場合に必ず使用する：
  - 自分（Claude）が feature-impl / feature-modify の実装を完了した直後

  以下の場合は使用しない：
  - 調査・説明・設計相談のみの場合
version: 1.0.0
---

# Performance Check Skill

## Overview

実装後に、計算量の悪化・並列化漏れがないかチェックする。

チェック対象：
- コンポーネント / hooks
- API 呼び出し（axios / react-query）

---

## Check Instructions

### 逐次 await の並列化
- 独立した複数の API 呼び出しが逐次 `await` になっていないか
  - NG: `const a = await apiA(); const b = await apiB();`（A と B が独立している場合）
  - OK: `const [a, b] = await Promise.all([apiA(), apiB()]);`
- 独立した複数の react-query（`useQuery`）を条件分岐で直列に発火させていないか

### レンダリング内の重い計算
- レンダリングのたびに実行される重い計算（`filter` / `map` / `reduce` の組み合わせ等）が `useMemo` なしで書かれていないか
  - NG: コンポーネント内で `const result = items.filter(...).map(...)` を直書き（useMemo なし）
  - OK: `const result = useMemo(() => items.filter(...).map(...), [items])`

### 計算量
- JSX レンダリング内またはカスタムフック内で、ループ内に `find` / `filter` を呼んでいないか（O(n²) 以上になっていないか）
  - NG: `items.map(item => list.find(x => x.id === item.id))`
  - OK: `useMemo` 内で Map に変換して O(1) アクセス

### 不要な再レンダリング
- 子コンポーネントに渡すコールバック・オブジェクトが `useCallback` / `useMemo` なしで毎レンダリング再生成されていないか
- react-query のクエリキーが毎レンダリングで新しい配列・オブジェクトとして生成され、キャッシュが効かなくなっていないか

---

## Procedure

1. 変更されたファイルを確認する
2. 各チェック項目を照合する
3. 以下の形式で報告する

---

## Output Format

問題がある場合：

```
## Performance Check 結果

### 問題あり
- **ファイル**: [ファイルパス:行番号]
- **問題内容**: 具体的な問題（逐次 await / O(n²) / 不要な再レンダリング 等）
- **修正方針**: Promise.all / Map 変換 / useMemo・useCallback 等
```

問題がない場合：

```
## Performance Check 結果

チェック完了。問題なし。
```
