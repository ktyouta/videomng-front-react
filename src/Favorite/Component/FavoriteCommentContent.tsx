import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../Hook/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "./FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const MemoDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 8px;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
`;

const IconDiv = styled.div`
    box-sizing: border-box;
    width:8%;
    display:flex;
    align-items: center;
    justify-content: end;
    padding-right: 1%;
    position:relative;
`;

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;


type propsType = {
    favoriteVideoMemo: FavoriteVideoMemoType,
    videoId: string,
}

export function FavoriteCommentContent(props: propsType) {

    console.log("FavoriteCommentContent render");

    const data = props.favoriteVideoMemo;
    const memo = data.videoMemo;
    const memoSeq = data.videoMemoSeq;
    const updateDate = format(new Date(data.updateDate), "yyyy/MM/dd  HH:mm");

    return (
        <Parent>
            <MemoDiv>
                {memo}
            </MemoDiv>
            <LowerDiv>
                <MetaDiv>
                    {updateDate}
                </MetaDiv>
            </LowerDiv>
        </Parent>
    );
}