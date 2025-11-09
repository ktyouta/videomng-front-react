import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../videomemo/FavoriteMemoContent";
import BaseTextbox from "../../../../../components/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../videomemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../videomemo/FavoriteMemoHeader";
import { FavoriteTagCreateInput } from "./FavoriteTagCreateInput";
import { FavoriteTagList } from "./FavoriteTagList";
import { FavoriteTagViewActions } from "./FavoriteTagViewActions";
import { FavoriteTagGuide } from "./FavoriteTagGuide";


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