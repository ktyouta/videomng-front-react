import styled from "styled-components";
import { format } from "date-fns";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteReplyCommentList } from "./FavoriteReplyCommentList";
import { FavoriteCommentBlockIconArea } from "./FavoriteCommentBlockIconArea";
import { useFavoriteCommentContent } from "../Hook/useFavoriteCommentContent";
import { YouTubeDataApiCommentDetailItemType } from "../Type/YouTubeDataApiCommentDetailItemType";
import { FavoriteCommentRestoreIconArea } from "./FavoriteCommentRestoreIconArea";
import { useFavoriteBlockCommentContent } from "../Hook/useFavoriteBlockCommentContent";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { FavoriteVideoBlockCommentListResponseType } from "../Type/FavoriteVideoBlockCommentListResponseType";
import parse from "html-react-parser";
import { FavoriteFavoriteCommentDeleteIconArea } from "./FavoriteFavoriteCommentDeleteIconArea";
import { useFavoriteFavoriteCommentContent } from "../Hook/useFavoriteFavoriteCommentContent";


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

const MetaDiv = styled.div`
    font-size:13px;
    width:95%;
    display: flex;
    align-items: center;
`;



type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function FavoriteFavoriteCommentContent(props: propsType) {

    console.log("FavoriteFavoriteCommentContent render");

    const { deleteComment } = useFavoriteFavoriteCommentContent({ ...props });

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
                <IconDiv>
                    {/* 削除 */}
                    <FavoriteFavoriteCommentDeleteIconArea
                        deleteComment={() => { deleteComment(commentId) }}
                    />
                </IconDiv>
            </LowerDiv>
        </Parent>
    );
}