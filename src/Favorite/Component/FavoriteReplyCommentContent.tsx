import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { format } from "date-fns";
import { useFavoriteMemoContent } from "../Hook/useFavoriteMemoContent";
import React from "react";
import { FavoriteMemoEditInput } from "./FavoriteMemoEditInput";
import { FavoriteMemoEditIconArea } from "./FavoriteMemoEditIconArea";
import { FavoriteMemoDeleteIconArea } from "./FavoriteMemoDeleteIconArea";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteVideoCommentThreadReplySnippetType } from "../Type/FavoriteVideoCommentThreadReplySnippetType";
import { FavoriteCommentBlockIconArea } from "./FavoriteCommentBlockIconArea";
import { useFavoriteReplyCommentContent } from "../Hook/useFavoriteReplyCommentContent";
import { FavoriteVideoCommentThreadReplyCommentType } from "../Type/FavoriteVideoCommentThreadReplyCommentType";
import parse from "html-react-parser";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    margin-bottom: 2%;
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
    commentThreadReply: FavoriteVideoCommentThreadReplyCommentType,
}

export function FavoriteReplyCommentContent(props: propsType) {

    console.log("FavoriteReplyCommentContent render");

    const { blockComment } = useFavoriteReplyCommentContent();

    const commentThreadReply = props.commentThreadReply;
    // コメントID
    const commentId = commentThreadReply.id;
    const commentThreadReplySnippet = commentThreadReply.snippet;
    // コメント本文
    const parentCommentText = parse(commentThreadReplySnippet.textDisplay);
    // 投稿日
    const publishedDate = format(new Date(commentThreadReplySnippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = commentThreadReplySnippet.authorDisplayName;


    return (
        <Parent>
            <AuthorNameDiv>
                {authorDisplayName}
            </AuthorNameDiv>
            <CommentDiv>
                {parentCommentText}
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
                <IconDiv>
                    {/* ブロック */}
                    <FavoriteCommentBlockIconArea
                        blockComment={() => { blockComment(commentId) }}
                    />
                </IconDiv>
            </LowerDiv>
        </Parent>
    );
}