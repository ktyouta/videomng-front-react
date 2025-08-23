import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";


const Parent = styled.div`
  position:relative;
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;


export function FavoriteMemo() {

  console.log("FavoriteMemo render");

  return (
    <Parent>
      {/* メモリスト */}
      <FavoriteMemoList />
      {/* 入力欄 */}
      <FavoriteMemoCreateInput />
    </Parent>
  );
}