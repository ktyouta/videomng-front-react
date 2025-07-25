import styled from "styled-components";
import { format } from "date-fns";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteReplyCommentList } from "./FavoriteReplyCommentList";
import { FavoriteCommentBlockIconArea } from "./FavoriteCommentBlockIconArea";
import parse from "html-react-parser";
import { FavoriteCommentFavoriteIconArea } from "./FavoriteCommentFavoriteIconArea";
import { COMMENT_FAVORITE_STATUS } from "../Const/FavoriteConst";
import { FavoriteCommentContentIconArea } from "./FavoriteCommentContentIconArea";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    margin-bottom: 5%;
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
    favoriteVideoComment: FavoriteVideoCommentThreadItemType,
}

export function FavoriteCommentContent(props: propsType) {

    console.log("FavoriteCommentContent render");

    const favoriteVideoComment = props.favoriteVideoComment;
    // コメントスレッドの詳細情報
    const snippet = favoriteVideoComment.snippet;
    // お気に入りステータス
    const favoriteStatus = snippet.favoriteStatus;
    // 最上位コメント（親コメント）の詳細情報
    const parentComment = snippet.topLevelComment;
    const parentCommentSnippet = parentComment.snippet;
    // コメントID
    const commentId = parentComment.id;
    // コメント本文
    const parentCommentText = parse(parentCommentSnippet.textDisplay);
    // 投稿日
    const publishedDate = format(new Date(parentCommentSnippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = parentCommentSnippet.authorDisplayName;
    // 返信コメントのリスト
    const replys = favoriteVideoComment.replies;
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
                <IconDiv>
                    {/* アイコンエリア */}
                    <FavoriteCommentContentIconArea
                        commentId={commentId}
                        favoriteStatus={favoriteStatus}
                    />
                </IconDiv>
            </LowerDiv>
            {
                // 返信コメント
                replyCommentList && replyCommentList.length > 0 &&
                <FavoriteReplyCommentList
                    replyCommentList={replyCommentList}
                />
            }
        </Parent>
    );
}