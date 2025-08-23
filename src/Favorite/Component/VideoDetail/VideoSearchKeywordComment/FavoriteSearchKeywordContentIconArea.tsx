import React from "react";
import { FavoriteCommentFavoriteIconArea } from "../VideoComment/FavoriteCommentFavoriteIconArea";
import { FavoriteCommentBlockIconArea } from "../VideoComment/FavoriteCommentBlockIconArea";
import { COMMENT_FAVORITE_STATUS } from "../../../Const/FavoriteConst";
import { useFavoriteCommentContentIconArea } from "../../../Hook/VideoDetail/VideoComment/useFavoriteCommentContentIconArea";
import { useFavoriteSearchKeywordContentIconArea } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useFavoriteSearchKeywordContentIconArea";

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

    return (
        <React.Fragment>
            {/* お気に入り */}
            <FavoriteCommentFavoriteIconArea
                commentId={props.commentId}
                favoriteStatus={favoriteStatus}
                favoriteComment={favoriteComment}
                deleteFavoriteComment={deleteFavoriteComment}
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