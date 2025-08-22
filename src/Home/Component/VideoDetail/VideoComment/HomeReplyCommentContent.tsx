import styled from "styled-components";
import { format } from "date-fns";
import { HomeVideoCommentThreadReplySnippetType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadReplySnippetType";


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

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;


type propsType = {
    commentThreadReplySnippet: HomeVideoCommentThreadReplySnippetType,
}

export function HomeReplyCommentContent(props: propsType) {

    console.log("HomeReplyCommentContent render");

    const commentThreadReplySnippet = props.commentThreadReplySnippet;
    // コメント本文
    const parentCommentText = commentThreadReplySnippet.textOriginal;
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
            </LowerDiv>
        </Parent>
    );
}