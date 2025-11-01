import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../VideoMemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../VideoMemo/FavoriteMemoHeader";
import { FavoriteTagCreateInput } from "./FavoriteTagCreateInput";
import { FavoriteTagList } from "./FavoriteTagList";
import { FavoriteTagViewHeader } from "./FavoriteTagViewHeader";
import { FavoriteTagGuide } from "./FavoriteTagGuide";


export function FavoriteTagView() {

  console.log("FavoriteTagView render");

  return (
    <React.Fragment>
      {/* 入力欄 */}
      <FavoriteTagViewHeader />
      {/* タグリスト */}
      <FavoriteTagList />
      {/* ガイド */}
      <FavoriteTagGuide />
    </React.Fragment>
  );
}