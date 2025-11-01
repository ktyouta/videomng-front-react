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
import { useFavoriteTag } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTag";
import { TAG_EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteTagEdit } from "./FavoriteTagEdit";
import { FavoriteTagView } from "./FavoriteTagView";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import Loading from "../../../../Common/Component/Loading";
import { createCtx } from "../../../../Common/Function/createCtx";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 365px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
`;

// 編集画面遷移
export const ChangeEditContext = createCtx<() => void>();
// 閲覧画面遷移
export const ChangeViewContext = createCtx<() => void>();


export function FavoriteTag() {

  console.log("FavoriteTag render");

  const {
    editMode,
    changeEdit,
    changeView, } = useFavoriteTag();

  return (
    <Parent>
      {
        // 閲覧
        editMode === TAG_EDIT_MODE.VIEW &&
        <ChangeEditContext.Provider value={changeEdit}>
          <FavoriteTagView />
        </ChangeEditContext.Provider>
      }
      {
        // 編集
        editMode === TAG_EDIT_MODE.EDIT &&
        <ChangeViewContext.Provider value={changeView}>
          <FavoriteTagEdit />
        </ChangeViewContext.Provider>
      }
    </Parent>
  );
}