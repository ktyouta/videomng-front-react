import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../Hook/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "./FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
`;

const AuthorNameDiv = styled.div`
    box-sizing: border-box;
`;

const CommentDiv = styled.div`
    box-sizing: border-box;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
`;

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;


type propsType = {
    searchComment: SearchKeywordCommentType,
    videoId: string,
}

export function FavoriteSearchKeywordCommentContent(props: propsType) {

    console.log("FavoriteSearchKeywordCommentContent render");

    const data = props.searchComment;
    const comment = data.textOriginal;
    const authorDisplayName = data.authorDisplayName;
    const publishedDate = format(new Date(data.publishedAt), "yyyy/MM/dd  HH:mm");


    return (
        <Parent>
            <AuthorNameDiv>
                {authorDisplayName}
            </AuthorNameDiv>
            <CommentDiv>
                {comment}
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
            </LowerDiv>
        </Parent>
    );
}