import { format } from "date-fns";
import React from "react";
import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { FAVORITE_VIDEO_DETAIL_FONT_SIZE } from "../consts/FavoriteVideoDetailFontSize";
import { FavoriteMemoContentViewDeleteArea } from "./FavoriteMemoContentViewDeleteArea";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";

const MemoDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
    align-items: center;
    margin-bottom: 6px;
`;

const MetaDiv = styled.div`
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.MOBILE};
    flex: 1;
    display: flex;
    align-items: center;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }
`;

type propsType = {
    data: FavoriteVideoMemoType,
    openEdit: () => void,
}

export function FavoriteMemoContentView(props: propsType) {

    console.log("FavoriteMemoContentView render");

    const memoData = props.data;
    const memo = memoData.videoMemo;
    const updateDate = format(new Date(memoData.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <React.Fragment>
            {/* 閲覧 */}
            <MemoDiv>
                {memo}
            </MemoDiv>
            <LowerDiv>
                <MetaDiv>
                    {updateDate}
                </MetaDiv>
                {/* 編集 */}
                <FavoriteMemoEditIconArea
                    openEdit={props.openEdit}
                />
                {/* 削除 */}
                <FavoriteMemoContentViewDeleteArea
                    data={props.data}
                />
            </LowerDiv>
        </React.Fragment>
    );
}