import { format } from "date-fns";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { sanitizeAndParseHtml } from "../../../../../utils/sanitizeAndParseHtml";
import { HomeVideoCommentThreadItemType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadItemType";
import { HomeReplyCommentList } from "./HomeReplyCommentList";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
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
    const parentCommentText = sanitizeAndParseHtml(parentCommentSnippet.textOriginal);
    // 投稿日
    const publishedDate = format(new Date(parentCommentSnippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = parentCommentSnippet.authorDisplayName;
    // 返信コメントのリスト
    const replys = homeVideoComment.replies;
    // 返信コメントの詳細情報
    const replyCommentList = replys?.comments;
    // 高評価数
    const likeCount = snippet.topLevelComment.snippet.likeCount;
    // プロフィールアイコン
    const profileIccon = snippet.topLevelComment.snippet.authorProfileImageUrl;

    return (
        <Parent>
            {/* 親コメント */}
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