import { format } from "date-fns";
import styled from "styled-components";
import { HighlightTextComponent } from "../../../../../../components/HighlightTextComponent";
import { useSearchKeywordCommentContent } from "../../../../hooks/videochannel/videodetail/searchkeywordcomment/useSearchKeywordCommentContent";
import { SearchKeywordCommentType } from "../../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentType";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { VIDEO_DETAIL_FONT_SIZE } from "../consts/VideoDetailFontSize";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    border-bottom: solid 1px;
    margin-bottom: 5%;
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
`;

const MetaDiv = styled.div`
    font-size: ${VIDEO_DETAIL_FONT_SIZE.CAPTION.MOBILE};
    width:95%;
    display: flex;
    align-items: center;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: ${VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: ${VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }

    @media (min-width: ${MEDIA.PC}) {
      font-size: ${VIDEO_DETAIL_FONT_SIZE.CAPTION.PC};
    }
`;


type propsType = {
    searchComment: SearchKeywordCommentType,
    commentId: string,
}

export function SearchKeywordCommentContent(props: propsType) {

    console.log("SearchKeywordCommentContent render");

    const { searchKeyword } = useSearchKeywordCommentContent();

    const data = props.searchComment;
    const comment = data.textOriginal;
    const authorDisplayName = data.authorDisplayName;
    const publishedDate = format(new Date(data.publishedAt), "yyyy/MM/dd  HH:mm");
    const profileIccon = data.authorProfileImageUrl;

    return (
        <Parent>
            <AuthorNameDiv>
                <AuthorIconImg src={profileIccon} />
                {authorDisplayName}
            </AuthorNameDiv>
            <CommentDiv>
                <HighlightTextComponent
                    message={comment}
                    keyword={searchKeyword}
                    id={props.commentId}
                />
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
            </LowerDiv>
        </Parent>
    );
}