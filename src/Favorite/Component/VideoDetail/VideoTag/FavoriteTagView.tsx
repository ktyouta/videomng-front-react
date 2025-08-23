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


const Parent = styled.div`
  box-sizing:border-box;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;


type propsType = {
  changeEdit: () => void,
}

export function FavoriteTagView(props: propsType) {

  console.log("FavoriteTagView render");

  return (
    <React.Fragment>
      {/* 入力欄 */}
      <FavoriteTagViewHeader
        changeEdit={props.changeEdit}
      />
      {/* タグリスト */}
      <FavoriteTagList />
    </React.Fragment>
  );
}