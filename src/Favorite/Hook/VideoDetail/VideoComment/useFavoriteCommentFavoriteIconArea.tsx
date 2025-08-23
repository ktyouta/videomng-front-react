import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import useSwitch from "../../../../Common/Hook/useSwitch";
import { COMMENT_FAVORITE_STATUS } from "../../../Const/FavoriteConst";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../../../Type/VideoDetail/VideoComment/VideoFavoriteComment/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../../../Type/VideoDetail/VideoComment/VideoFavoriteComment/FavoriteVideoFavoriteCommentType";
import ENV from "../../../../env.json";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";


type propsType = {
    favoriteStatus: string,
}

export function useFavoriteCommentFavoriteIconArea(props: propsType) {

    // お気に入りナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();

    /**
     * コメントお気に入りチェック
     * @returns 
     */
    function isFavorite() {
        return props.favoriteStatus === COMMENT_FAVORITE_STATUS.FAVORITE;
    }

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
        isFavorite,
    }
}