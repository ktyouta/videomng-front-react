import styled from "styled-components";
import { format } from "date-fns";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteReplyCommentList } from "./FavoriteReplyCommentList";
import { FavoriteCommentBlockIconArea } from "./FavoriteCommentBlockIconArea";
import { useFavoriteCommentContent } from "../Hook/useFavoriteCommentContent";


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
    videoId: string,
}

export function FavoriteCommentContent(props: propsType) {

    console.log("FavoriteCommentContent render");

    const { blockComment } = useFavoriteCommentContent();

    const favoriteVideoComment = props.favoriteVideoComment;
    // コメントスレッドの詳細情報
    const snippet = favoriteVideoComment.snippet;
    // 最上位コメント（親コメント）の詳細情報
    const parentComment = snippet.topLevelComment;
    const parentCommentSnippet = parentComment.snippet;
    // コメントID
    const commentId = parentComment.id;
    // コメント本文
    const parentCommentText = parentCommentSnippet.textOriginal;
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
                    {/* ブロック */}
                    <FavoriteCommentBlockIconArea
                        blockComment={() => { blockComment(commentId) }}
                    />
                </IconDiv>
            </LowerDiv>
            {
                // 返信コメント
                replyCommentList && replyCommentList.length > 0 &&
                <FavoriteReplyCommentList
                    replyCommentList={replyCommentList}
                    videoId={props.videoId}
                />
            }
        </Parent>
    );
}