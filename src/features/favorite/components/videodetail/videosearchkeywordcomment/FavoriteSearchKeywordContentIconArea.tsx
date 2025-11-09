import React from "react";
import { FavoriteCommentFavoriteIconArea } from "../videocomment/FavoriteCommentFavoriteIconArea";
import { FavoriteCommentBlockIconArea } from "../videocomment/FavoriteCommentBlockIconArea";
import { COMMENT_FAVORITE_STATUS } from "../../../const/FavoriteConst";
import { useFavoriteCommentContentIconArea } from "../../../hooks/videodetail/videocomment/useFavoriteCommentContentIconArea";
import { useFavoriteSearchKeywordContentIconArea } from "../../../hooks/videodetail/videosearchkeywordcomment/useFavoriteSearchKeywordContentIconArea";

type propsType = {
    commentId: string,
    favoriteStatus: string,
}


export function FavoriteSearchKeywordContentIconArea(props: propsType) {

    console.log("FavoriteSearchKeywordContentIconArea render");

    const {
        blockComment,
        favoriteComment,
        deleteFavoriteComment,
        favoriteStatus,
    } = useFavoriteSearchKeywordContentIconArea({ ...props });

    // お気に入り状態
    const isFavorite = favoriteStatus === COMMENT_FAVORITE_STATUS.FAVORITE;

    return (
        <React.Fragment>
            {/* お気に入り */}
            <FavoriteCommentFavoriteIconArea
                commentId={props.commentId}
                isFavorite={isFavorite}
                onClick={isFavorite ? deleteFavoriteComment : favoriteComment}
            />
            {
                favoriteStatus === COMMENT_FAVORITE_STATUS.NONE &&
                // 非表示
                <FavoriteCommentBlockIconArea
                    blockComment={() => { blockComment(props.commentId) }}
                />
            }
        </React.Fragment>
    );
}