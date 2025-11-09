import { useState } from "react";
import useSwitch from "../../../../../hooks/useSwitch";
import { COMMENT_FAVORITE_STATUS } from "../../../const/FavoriteConst";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../../../types/videodetail/videocomment/videofavoritecomment/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../../../types/videodetail/videocomment/videofavoritecomment/FavoriteVideoFavoriteCommentType";
import ENV from "../../../../../env.json";
import { errResType, resType } from "../../../../../hooks/useMutationWrapperBase";


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