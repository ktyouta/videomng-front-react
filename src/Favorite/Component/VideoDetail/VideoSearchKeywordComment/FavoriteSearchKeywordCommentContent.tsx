import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "../VideoMemo/FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "../VideoMemo/FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "../VideoMemo/FavoriteMemoDeleteIconArea";
import { SearchKeywordCommentType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import { useFavoriteSearchKeywordCommentContent } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useFavoriteSearchKeywordCommentContent";
import { HighlightTextComponent } from "../../../../Common/Component/HighlightTextComponent";
import { FavoriteSearchKeywordContentIconArea } from "./FavoriteSearchKeywordContentIconArea";


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
    flex: 1;
    display: flex;
    align-items: center;
`;

type propsType = {
    searchComment: SearchKeywordCommentType,
    commentId: string,
}

export function FavoriteSearchKeywordCommentContent(props: propsType) {

    console.log("FavoriteSearchKeywordCommentContent render");

    const { searchKeywordCommentKeyword } = useFavoriteSearchKeywordCommentContent();

    const data = props.searchComment;
    const comment = data.textOriginal;
    const authorDisplayName = data.authorDisplayName;
    const publishedDate = format(new Date(data.publishedAt), "yyyy/MM/dd  HH:mm");
    const commentId = data.commentId;
    const favoriteStatus = data.favoriteStatus;

    return (
        <Parent>
            <AuthorNameDiv>
                {authorDisplayName}
            </AuthorNameDiv>
            <CommentDiv>
                <HighlightTextComponent
                    message={comment}
                    keyword={searchKeywordCommentKeyword}
                    id={props.commentId}
                />
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
                {/* アイコンエリア */}
                <FavoriteSearchKeywordContentIconArea
                    commentId={commentId}
                    favoriteStatus={favoriteStatus}
                />
            </LowerDiv>
        </Parent>
    );
}