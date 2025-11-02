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