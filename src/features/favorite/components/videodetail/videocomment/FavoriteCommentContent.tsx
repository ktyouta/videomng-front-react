import { format } from "date-fns";
import parse from "html-react-parser";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteVideoCommentThreadItemType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadItemType";
import { FavoriteCommentContentIconArea } from "./FavoriteCommentContentIconArea";
import { FavoriteReplyCommentList } from "./FavoriteReplyCommentList";

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
    align-items: center;
    padding-right: 1%;
    margin-top: 7px;
`;

const PublishedDateSpan = styled.span`
    font-size:13px;
    display: inline-block;
    margin-right: 10px;
    word-break: break-word;
`;

const LikeCountSpan = styled.span`
    font-size:13px;
    display: flex;
    align-items: center;
    word-break: break-word;
`;

const LikeCountAraeDiv = styled.div`
    display: flex;
    align-items: center;
    word-break: break-word;
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
    // 高評価数
    const likeCount = snippet.topLevelComment.snippet.likeCount;

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
                <PublishedDateSpan>
                    {publishedDate}
                </PublishedDateSpan>
                <LikeCountAraeDiv>
                    <IconComponent
                        icon={IoIosThumbsUp}
                    />
                    <LikeCountSpan>
                        {likeCount}
                    </LikeCountSpan>
                </LikeCountAraeDiv>
                <FlexSpaceDiv />
                {/* アイコンエリア */}
                <FavoriteCommentContentIconArea
                    commentId={commentId}
                    favoriteStatus={favoriteStatus}
                />
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