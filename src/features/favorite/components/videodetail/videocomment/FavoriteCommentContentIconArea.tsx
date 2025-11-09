import React from "react";
import { FavoriteCommentFavoriteIconArea } from "./FavoriteCommentFavoriteIconArea";
import { FavoriteCommentBlockIconArea } from "./FavoriteCommentBlockIconArea";
import { COMMENT_FAVORITE_STATUS } from "../../../const/FavoriteConst";
import { useFavoriteCommentContentIconArea } from "../../../hooks/videodetail/videocomment/useFavoriteCommentContentIconArea";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import styled from "styled-components";


const Parent = styled.div`
    display:flex;
    align-items: center;
    width: 38px;
`;

type propsType = {
    commentId: string,
    favoriteStatus: string,
}


export function FavoriteCommentContentIconArea(props: propsType) {

    console.log("FavoriteCommentContentIconArea render");

    const {
        blockComment,
        favoriteComment,
        deleteFavoriteComment,
        favoriteStatus,
    } = useFavoriteCommentContentIconArea({ ...props });

    // お気に入り状態
    const isFavorite = favoriteStatus === COMMENT_FAVORITE_STATUS.FAVORITE;

    return (
        <Parent>
            {/* お気に入り */}
            <FavoriteCommentFavoriteIconArea
                commentId={props.commentId}
                isFavorite={isFavorite}
                onClick={isFavorite ? deleteFavoriteComment : favoriteComment}
            />
            <FlexSpaceDiv />
            {
                favoriteStatus === COMMENT_FAVORITE_STATUS.NONE &&
                // 非表示
                <FavoriteCommentBlockIconArea
                    blockComment={blockComment}
                />
            }
        </Parent>
    );
}