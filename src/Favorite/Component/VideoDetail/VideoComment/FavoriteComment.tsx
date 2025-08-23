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
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding-left: 19px;
  padding-top: 23px;
`;


export function FavoriteComment() {

    console.log("FavoriteComment render");

    return (
        <Parent>
            {/* コメントヘッダ */}
            <FavoriteCommentHeader />
            {/* コメントリスト */}
            <FavoriteCommentList />
        </Parent>
    );
}