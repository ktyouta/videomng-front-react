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

export function useFavoriteCommentFavoriteIconArea() {

    // お気に入りナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
    }
}