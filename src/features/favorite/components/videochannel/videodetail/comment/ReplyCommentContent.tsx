import { format } from "date-fns";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../../styles/styledcomponent/FlexSpaceDiv";
import { VideoCommentThreadReplySnippetType } from "../../../../types/videochannel/videodetail/comment/VideoCommentThreadReplySnippetType";


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
    commentThreadReplySnippet: VideoCommentThreadReplySnippetType,
}

export function ReplyCommentContent(props: propsType) {

    console.log("ReplyCommentContent render");

    const commentThreadReplySnippet = props.commentThreadReplySnippet;
    // コメント本文
    const parentCommentText = commentThreadReplySnippet.textOriginal;
    // 投稿日
    const publishedDate = format(new Date(commentThreadReplySnippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = commentThreadReplySnippet.authorDisplayName;
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
            </LowerDiv>
        </Parent>
    );
}