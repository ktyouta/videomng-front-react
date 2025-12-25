import { format } from "date-fns";
import styled from "styled-components";
import { HighlightTextComponent } from "../../../../../components/HighlightTextComponent";
import { useFavoriteSearchKeywordCommentContent } from "../../../hooks/videodetail/videosearchkeywordcomment/useFavoriteSearchKeywordCommentContent";
import { SearchKeywordCommentType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentType";
import { FavoriteSearchKeywordContentIconArea } from "./FavoriteSearchKeywordContentIconArea";


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
    font-size:13px;
    flex: 1;
    display: flex;
    align-items: center;
`;

type propsType = {
    searchComment: SearchKeywordCommentType,
    commentId: string,
}

export function FavoriteSearchKeywordCommentContent(props: propsType) {

    console.log("FavoriteSearchKeywordCommentContent render");

    const { searchKeywordCommentKeyword } = useFavoriteSearchKeywordCommentContent();

    const data = props.searchComment;
    const comment = data.textOriginal;
    const authorDisplayName = data.authorDisplayName;
    const publishedDate = format(new Date(data.publishedAt), "yyyy/MM/dd  HH:mm");
    const commentId = data.commentId;
    const favoriteStatus = data.favoriteStatus;
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
                    keyword={searchKeywordCommentKeyword}
                    id={props.commentId}
                />
            </CommentDiv>
            <LowerDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
                {/* アイコンエリア */}
                <FavoriteSearchKeywordContentIconArea
                    commentId={commentId}
                    favoriteStatus={favoriteStatus}
                />
            </LowerDiv>
        </Parent>
    );
}