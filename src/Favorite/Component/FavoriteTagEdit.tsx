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
import { FavoriteTagEditFooter } from "./FavoriteTagEditFooter";
import { FavoriteTagEditList } from "./FavoriteTagEditList";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
`;


type propsType = {
  changeView: () => void,
}

export function FavoriteTagEdit(props: propsType) {

  console.log("FavoriteTagEdit render");

  return (
    <Parent>
      {/* 入力欄 */}
      <FavoriteTagCreateInput />
      {/* タグリスト */}
      <FavoriteTagEditList />
      {/* タグフッター */}
      <FavoriteTagEditFooter
        changeView={props.changeView}
      />
    </Parent>
  );
}