import React from "react";
import { createCtx } from "../../../../../utils/createCtx";
import { TAG_EDIT_MODE } from "../../../const/FavoriteConst";
import { useFavoriteTag } from "../../../hooks/videodetail/videotag/useFavoriteTag";
import { FavoriteTagEdit } from "./FavoriteTagEdit";
import { FavoriteTagView } from "./FavoriteTagView";


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