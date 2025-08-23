import styled from "styled-components";
import { format } from "date-fns";
import parse from "html-react-parser";
import { FavoriteCommentContentIconArea } from "./FavoriteCommentContentIconArea";
import { FavoriteVideoCommentThreadReplyCommentType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadReplyCommentType";


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
    // お気に入りステータス
    const favoriteStatus = commentThreadReply.favoriteStatus;


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
                    {/* アイコンエリア */}
                    <FavoriteCommentContentIconArea
                        commentId={commentId}
                        favoriteStatus={favoriteStatus}
                    />
                </IconDiv>
            </LowerDiv>
        </Parent>
    );
}