import styled from "styled-components";
import { format } from "date-fns";
import { FavoriteCommentBlockIconArea } from "../FavoriteCommentBlockIconArea";
import { YouTubeDataApiCommentDetailItemType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailItemType";
import { useFavoriteBlockCommentContent } from "../../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteBlockCommentContent";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import parse from "html-react-parser";
import { FavoriteFavoriteCommentDeleteIconArea } from "./FavoriteFavoriteCommentDeleteIconArea";
import { useFavoriteFavoriteCommentContent } from "../../../../Hook/VideoDetail/VideoComment/VideoFavoriteComment/useFavoriteFavoriteCommentContent";


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
    font-size:13px;
    flex: 1;
    display: flex;
    align-items: center;
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
    const parentCommentText = parse(snippet.textDisplay);
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