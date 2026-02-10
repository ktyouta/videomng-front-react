import React from "react";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoList } from "./FavoriteMemoList";


export function FavoriteMemo() {

  console.log("FavoriteMemo render");

  return (
    <React.Fragment>
      {/* メモリスト */}
      <FavoriteMemoList />
      {/* 入力欄 */}
      <FavoriteMemoCreateInput />
    </React.Fragment>
  );
}