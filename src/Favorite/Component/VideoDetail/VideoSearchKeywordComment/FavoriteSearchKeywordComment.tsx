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
import { FavoriteMemoList } from "../VideoMemo/FavoriteMemoList";
import { FavoriteSearchKeywordCommentHeader } from "./FavoriteSearchKeywordCommentHeader";
import { FavoriteSearchKeywordCommentList } from "./FavoriteSearchKeywordCommentList";
import { FavoriteSearchKeywordCommentInput } from "./FavoriteSearchKeywordCommentInput";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  position:relative;
`;



export function FavoriteSearchKeywordComment() {

  console.log("FavoriteSearchKeywordComment render");

  return (
    <Parent>
      {/* コメントリスト */}
      <FavoriteSearchKeywordCommentList />
      {/* 入力欄 */}
      <FavoriteSearchKeywordCommentInput />
    </Parent>
  );
}