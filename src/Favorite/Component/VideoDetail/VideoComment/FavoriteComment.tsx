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