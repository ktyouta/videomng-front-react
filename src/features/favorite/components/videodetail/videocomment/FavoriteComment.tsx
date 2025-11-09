import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../videomemo/FavoriteMemoContent";
import BaseTextbox from "../../../../../components/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../videomemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../videomemo/FavoriteMemoHeader";
import { FavoriteMemoList } from "../videomemo/FavoriteMemoList";
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";


export function FavoriteComment() {

    console.log("FavoriteComment render");

    return (
        <React.Fragment>
            {/* コメントヘッダ */}
            <FavoriteCommentHeader />
            {/* コメントリスト */}
            <FavoriteCommentList />
        </React.Fragment>
    );
}