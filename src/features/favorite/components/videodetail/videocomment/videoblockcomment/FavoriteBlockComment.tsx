import React from "react";
import { IconComponent } from "../../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../../videomemo/FavoriteMemoContent";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../../videomemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../../videomemo/FavoriteMemoHeader";
import { FavoriteMemoList } from "../../videomemo/FavoriteMemoList";
import { FavoriteCommentHeader } from "../FavoriteCommentHeader";
import { FavoriteCommentList } from "../FavoriteCommentList";
import { FavoriteBlockCommentList } from "./FavoriteBlockCommentList";
import { FavoriteBlockCommentHeader } from "./FavoriteBlockCommentHeader";
import { MEDIA } from "../../../../../../consts/MediaConst";


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