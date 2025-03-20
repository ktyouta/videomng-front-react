import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { useFavoriteMemo } from "../Hook/useFavoriteMemo";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";


const Parent = styled.div`
  color:white;
  position: relative;
  height: 97%;
`;


type propsType = {
    closeModal: () => void,
    videoId: string,
}

export function FavoriteComment(props: propsType) {

    console.log("FavoriteComment render");

    return (
        <Parent>
            {/* ヘッダ */}
            <FavoriteCommentHeader
                closeModal={props.closeModal}
            />
            {/* コメントリスト */}
            <FavoriteCommentList
                videoId={props.videoId}
            />
        </Parent>
    );
}