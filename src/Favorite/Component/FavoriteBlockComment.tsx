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
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";
import { FavoriteBlockCommentList } from "./FavoriteBlockCommentList";
import { FavoriteBlockCommentHeader } from "./FavoriteBlockCommentHeader";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
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