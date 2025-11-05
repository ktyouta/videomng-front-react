import styled from "styled-components";
import { HomeVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadItemType";
import { format } from "date-fns";
import { HomeReplyCommentList } from "./HomeReplyCommentList";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
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
    homeVideoComment: HomeVideoCommentThreadItemType,
}

export function HomeCommentContent(props: propsType) {

    console.log("HomeCommentContent render");

    const homeVideoComment = props.homeVideoComment;
    // コメントスレッドの詳細情報
    const snippet = homeVideoComment.snippet;
    // 最上位コメント（親コメント）の詳細情報
    const parentComment = snippet.topLevelComment;
    const parentCommentSnippet = parentComment.snippet;
    // コメント本文
    const parentCommentText = parentCommentSnippet.textOriginal;
    // 投稿日
    const publishedDate = format(new Date(parentCommentSnippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = parentCommentSnippet.authorDisplayName;
    // 返信コメントのリスト
    const replys = homeVideoComment.replies;
    // 返信コメントの詳細情報
    const replyCommentList = replys?.comments;

    return (
        <Parent>
            {/* 親コメント */}
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
            </LowerDiv>
            {
                // 返信コメント
                replyCommentList && replyCommentList.length > 0 &&
                <HomeReplyCommentList
                    replyCommentList={replyCommentList}
                />
            }
        </Parent>
    );
}