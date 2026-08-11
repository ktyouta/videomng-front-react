import { format } from "date-fns";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { sanitizeAndParseHtml } from "../../../../../utils/sanitizeAndParseHtml";
import { formatNumberComma } from "../../../../../utils/CommonFunction";
import { HomeVideoCommentThreadReplySnippetType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadReplySnippetType";
import { MEDIA } from "../../../../../consts/MediaConst";
import { HOME_VIDEO_DETAIL_FONT_SIZE } from "../consts/HomeVideoDetailFontSize";


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
    width: 20px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 25px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 25px;
    }

    @media (min-width: ${MEDIA.PC}) {
      width: 25px;
    }
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
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.MOBILE};
    display: inline-block;
    margin-right: 10px;
    word-break: break-word;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }
`;

const LikeCountSpan = styled.span`
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.MOBILE};
    display: flex;
    align-items: center;
    word-break: break-word;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }
`;

const LikeCountAraeDiv = styled.div`
    display: flex;
    align-items: center;
    word-break: break-word;
`;

type propsType = {
    commentThreadReplySnippet: HomeVideoCommentThreadReplySnippetType,
}

export function HomeReplyCommentContent(props: propsType) {

    console.log("HomeReplyCommentContent render");

    const commentThreadReplySnippet = props.commentThreadReplySnippet;
    // コメント本文
    const parentCommentText = sanitizeAndParseHtml(commentThreadReplySnippet.textDisplay);
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
                        {formatNumberComma(likeCount)}
                    </LikeCountSpan>
                </LikeCountAraeDiv>
                <FlexSpaceDiv />
            </LowerDiv>
        </Parent>
    );
}