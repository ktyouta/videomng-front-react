import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "./FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { FavoriteMemoContentView } from "./FavoriteMemoContentView";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

type propsType = {
    favoriteVideoMemo: FavoriteVideoMemoType,
}

export function FavoriteMemoContent(props: propsType) {

    console.log("FavoriteMemoContent render");

    const {
        isOpenEdit,
        openEdit,
        closeEdit,
    } = useFavoriteMemoContent();

    const data = props.favoriteVideoMemo;
    const memo = data.videoMemo;
    const memoSeq = data.videoMemoSeq;

    return (
        <Parent>
            {
                isOpenEdit ?
                    // 編集中
                    <FavoriteMemoEditInput
                        videoMemoSeq={memoSeq}
                        closeEdit={closeEdit}
                        initMemo={memo}
                    />
                    :
                    // 閲覧
                    <FavoriteMemoContentView
                        data={props.favoriteVideoMemo}
                        openEdit={openEdit}
                    />
            }
        </Parent>
    );
}