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
import { FavoriteTagEditActions } from "./FavoriteTagEditActions";
import { FavoriteVideoTagEditListProvider } from "./FavoriteVideoTagEditListProvider";
import { FavoriteTagEditExistingList } from "./FavoriteTagEditExistingList";
import { FavoriteTagEditAssignedList } from "./FavoriteTagEditAssignedList";


export function FavoriteTagEdit() {

  console.log("FavoriteTagEdit render");

  return (
    <FavoriteVideoTagEditListProvider>
      {/* タグアクションアイコン */}
      <FavoriteTagEditActions />
      {/* 設定されているタグ */}
      <FavoriteTagEditAssignedList />
      {/* 入力欄 */}
      <FavoriteTagCreateInput />
      {/* 既存タグから設定 */}
      <FavoriteTagEditExistingList />
    </FavoriteVideoTagEditListProvider>
  );
}