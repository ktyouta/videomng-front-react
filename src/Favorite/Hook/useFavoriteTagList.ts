import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoMemoListAtom, favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";


export function useFavoriteTagList() {

    // タグリスト
    const favoriteVideoTagList = useAtomValue(favoriteVideoTagListAtom);

    return {
        favoriteVideoTagList
    }
}