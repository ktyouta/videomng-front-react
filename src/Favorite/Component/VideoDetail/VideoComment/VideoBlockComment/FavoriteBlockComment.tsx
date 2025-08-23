import React from "react";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../../VideoMemo/FavoriteMemoContent";
import BaseTextbox from "../../../../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../../VideoMemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../../VideoMemo/FavoriteMemoHeader";
import { FavoriteMemoList } from "../../VideoMemo/FavoriteMemoList";
import { FavoriteCommentHeader } from "../FavoriteCommentHeader";
import { FavoriteCommentList } from "../FavoriteCommentList";
import { FavoriteBlockCommentList } from "./FavoriteBlockCommentList";
import { FavoriteBlockCommentHeader } from "./FavoriteBlockCommentHeader";
import { MEDIA } from "../../../../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

type propsType = {
  close: () => void;
}

export function FavoriteBlockComment(props: propsType) {

  console.log("FavoriteBlockComment render");

  return (
    <Parent>
      {/* ブロックコメントヘッダ */}
      <FavoriteBlockCommentHeader
        close={props.close}
      />
      {/* ブロックコメントリスト */}
      <FavoriteBlockCommentList />
    </Parent>
  );
}