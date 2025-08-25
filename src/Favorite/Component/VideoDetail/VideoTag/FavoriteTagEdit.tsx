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
import { useFavoriteTagEdit } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEdit";


type propsType = {
  changeView: () => void,
}

export function FavoriteTagEdit(props: propsType) {

  console.log("FavoriteTagEdit render");

  const {
    favoriteVideoTagEditList,
    setFavoriteVideoTagEditList } = useFavoriteTagEdit();

  return (
    <React.Fragment>
      {/* 入力欄 */}
      <FavoriteTagCreateInput
        favoriteVideoTagEditList={favoriteVideoTagEditList}
        setFavoriteVideoTagEditList={setFavoriteVideoTagEditList}
      />
      {/* タグリスト */}
      <FavoriteTagEditList
        favoriteVideoTagEditList={favoriteVideoTagEditList}
        setFavoriteVideoTagEditList={setFavoriteVideoTagEditList}
      />
      {/* タグフッター */}
      <FavoriteTagEditFooter
        changeView={props.changeView}
        favoriteVideoTagEditList={favoriteVideoTagEditList}
        setFavoriteVideoTagEditList={setFavoriteVideoTagEditList}
      />
    </React.Fragment>
  );
}