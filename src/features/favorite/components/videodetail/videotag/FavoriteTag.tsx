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
import { useFavoriteTag } from "../../../hooks/videodetail/videotag/useFavoriteTag";
import { TAG_EDIT_MODE } from "../../../const/FavoriteConst";
import { FavoriteTagEdit } from "./FavoriteTagEdit";
import { FavoriteTagView } from "./FavoriteTagView";
import LoadingBase from "../../../../../components/LoadingBase";
import Loading from "../../../../../components/Loading";
import { createCtx } from "../../../../../utils/createCtx";


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
    <React.Fragment>
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
    </React.Fragment>
  );
}