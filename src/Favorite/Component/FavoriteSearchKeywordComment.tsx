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
import { FavoriteMemoList } from "./FavoriteMemoList";
import { FavoriteSearchKeywordCommentHeader } from "./FavoriteSearchKeywordCommentHeader";
import { FavoriteSearchKeywordCommentInput } from "./FavoriteSearchKeywordCommentInput";
import { FavoriteSearchKeywordCommentList } from "./FavoriteSearchKeywordCommentList";


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

export function FavoriteSearchKeywordComment(props: propsType) {

  console.log("FavoriteSearchKeywordComment render");

  return (
    <Parent>
      {/* コメントリスト */}
      <FavoriteSearchKeywordCommentList
        videoId={props.videoId}
      />
      {/* 入力欄 */}
      <FavoriteSearchKeywordCommentInput
        videoId={props.videoId}
      />
    </Parent>
  );
}