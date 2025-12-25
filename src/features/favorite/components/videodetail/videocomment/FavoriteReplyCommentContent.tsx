import { format } from "date-fns";
import parse from "html-react-parser";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteVideoCommentThreadReplyCommentType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadReplyCommentType";
import { FavoriteCommentContentIconArea } from "./FavoriteCommentContentIconArea";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    margin-bottom: 2%;
`;

const AuthorNameDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 3px;
`;

const AuthorIconImg = styled.img`
    border-radius: 50%;
    width: 25px;
`;

const CommentDiv = styled.div`
    box-sizing: border-box;
`;

const LowerDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    text-align: left;
    overflow-wrap: break-word;
    margin-top: 7px;
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
    // 高評価数
    const likeCount = commentThreadReplySnippet.likeCount;
    // プロフィールアイコン
    const profileIccon = commentThreadReplySnippet.authorProfileImageUrl;

    return (
        <Parent>
            <AuthorNameDiv>
                <AuthorIconImg src={profileIccon} />
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