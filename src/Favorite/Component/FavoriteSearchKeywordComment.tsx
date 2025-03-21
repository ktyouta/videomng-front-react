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
  color:white;
  position: relative;
  padding-bottom: 70px;
  height: 87%;
`;


type propsType = {
  closeModal: () => void,
  videoId: string,
}

export function FavoriteSearchKeywordComment(props: propsType) {

  console.log("FavoriteSearchKeywordComment render");

  return (
    <Parent>
      {/* ヘッダ */}
      <FavoriteSearchKeywordCommentHeader
        closeModal={props.closeModal}
      />
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