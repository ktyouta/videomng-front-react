import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteTagCreateInput } from "./FavoriteTagCreateInput";
import { FavoriteTagList } from "./FavoriteTagList";
import { useFavoriteTag } from "../Hook/useFavoriteTag";
import { TAG_EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteTagEdit } from "./FavoriteTagEdit";
import { FavoriteTagView } from "./FavoriteTagView";
import LoadingBase from "../../Common/Component/LoadingBase";
import Loading from "../../Common/Component/Loading";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function FavoriteTag() {

  console.log("FavoriteTag render");

  const {
    editMode,
    changeEdit,
    changeView,
    isLoading, } = useFavoriteTag();

  if (isLoading) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  return (
    <Parent>
      {
        // 閲覧
        editMode === TAG_EDIT_MODE.VIEW &&
        <FavoriteTagView
          changeEdit={changeEdit}
        />
      }
      {
        // 編集
        editMode === TAG_EDIT_MODE.EDIT &&
        <FavoriteTagEdit
          changeView={changeView}
        />
      }

    </Parent>
  );
}