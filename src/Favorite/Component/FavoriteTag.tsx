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


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;


type propsType = {
  videoId: string,
}

export function FavoriteTag(props: propsType) {

  console.log("FavoriteTag render");

  const {
    editMode,
    changeEdit,
    changeView,
    errMessage,
    isLoading, } = useFavoriteTag();

  return (
    <Parent>
      {
        // 閲覧
        editMode === TAG_EDIT_MODE.VIEW &&
        <FavoriteTagView
          videoId={props.videoId}
          changeEdit={changeEdit}
        />
      }
      {
        // 編集
        editMode === TAG_EDIT_MODE.EDIT &&
        <FavoriteTagEdit
          videoId={props.videoId}
          changeView={changeView}
        />
      }

    </Parent>
  );
}