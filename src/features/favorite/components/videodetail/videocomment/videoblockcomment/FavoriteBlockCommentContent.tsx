import { format } from "date-fns";
import styled from "styled-components";
import { sanitizeAndParseHtml } from "../../../../../../utils/sanitizeAndParseHtml";
import { useFavoriteBlockCommentContent } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentContent";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteCommentRestoreIconArea } from "./FavoriteCommentRestoreIconArea";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FAVORITE_VIDEO_DETAIL_FONT_SIZE } from "../../consts/FavoriteVideoDetailFontSize";


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
    height: 33px;
    align-items: center;
    padding-right: 3px;
`;

const MetaDiv = styled.div`
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.MOBILE};
    flex: 1;
    display: flex;
    align-items: center;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }
`;

type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function FavoriteBlockCommentContent(props: propsType) {

    console.log("FavoriteBlockCommentContent render");

    const { restoreComment } = useFavoriteBlockCommentContent({ ...props });

    const favoriteVideoComment = props.commentDetailItem;
    // コメントID
    const commentId = favoriteVideoComment.id;
    // コメントスレッドの詳細情報
    const snippet = favoriteVideoComment.snippet;
    // コメント本文
    const parentCommentText = sanitizeAndParseHtml(snippet.textDisplay);
    // 投稿日
    const publishedDate = format(new Date(snippet.publishedAt), "yyyy/MM/dd  HH:mm");
    // 投稿者
    const authorDisplayName = snippet.authorDisplayName;

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
                {/* 再表示 */}
                <FavoriteCommentRestoreIconArea
                    restoreComment={() => { restoreComment(commentId) }}
                />
            </LowerDiv>
        </Parent>
    );
}