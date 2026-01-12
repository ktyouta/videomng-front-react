import React from "react";
import { FavoriteTagGuide } from "./FavoriteTagGuide";
import { FavoriteTagList } from "./FavoriteTagList";
import { FavoriteTagViewActions } from "./FavoriteTagViewActions";


export function FavoriteTagView() {

  console.log("FavoriteTagView render");

  return (
    <React.Fragment>
      {/* タグアクションアイコン */}
      <FavoriteTagViewActions />
      {/* タグリスト */}
      <FavoriteTagList />
      {/* ガイド */}
      <FavoriteTagGuide />
    </React.Fragment>
  );
}