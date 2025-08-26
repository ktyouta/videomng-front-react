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
import { FavoriteTagEditFooter } from "./FavoriteTagEditFooter";
import { FavoriteTagEditList } from "./FavoriteTagEditList";
import { FavoriteVideoTagEditListProvider } from "./FavoriteVideoTagEditListProvider";



export function FavoriteTagEdit() {

  console.log("FavoriteTagEdit render");

  return (
    <FavoriteVideoTagEditListProvider>
      {/* 入力欄 */}
      <FavoriteTagCreateInput />
      {/* タグリスト */}
      <FavoriteTagEditList />
      {/* タグフッター */}
      <FavoriteTagEditFooter />
    </FavoriteVideoTagEditListProvider>
  );
}