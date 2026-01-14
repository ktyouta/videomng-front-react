import { format } from "date-fns";
import { IoIosThumbsUp } from "react-icons/io";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../../styles/styledcomponent/FlexSpaceDiv";
import { sanitizeAndParseHtml } from "../../../../../../utils/sanitizeAndParseHtml";
import { useFavoriteFavoriteCommentContent } from "../../../../hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentContent";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteFavoriteCommentDeleteIconArea } from "./FavoriteFavoriteCommentDeleteIconArea";


const Parent = styled.div`
    height: auto;
    box-sizing: border-box;
    margin-bottom: 5%;
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
    height: 33px;
    align-items: center;
    padding-right: 3px;
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
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function FavoriteFavoriteCommentContent(props: propsType) {

    console.log("FavoriteFavoriteCommentContent render");

    const { deleteFavoriteComment } = useFavoriteFavoriteCommentContent({ ...props });

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
    // 高評価数
    const likeCount = snippet.likeCount;
    // プロフィールアイコン
    const profileIccon = snippet.authorProfileImageUrl;

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
                {/* 削除 */}
                <FavoriteFavoriteCommentDeleteIconArea
                    deleteComment={() => {
                        deleteFavoriteComment(commentId);
                    }}
                />
            </LowerDiv>
        </Parent>
    );
}