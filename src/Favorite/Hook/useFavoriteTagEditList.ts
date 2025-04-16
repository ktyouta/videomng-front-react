import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoIdAtom, favoriteVideoMemoListAtom, favoriteVideoTagEditListAtom, favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";


export function useFavoriteTagEditList() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useAtom(favoriteVideoTagEditListAtom);


    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        setFavoriteVideoTagEditList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    return {
        favoriteVideoTagEditList,
        deleteTag,
    }
}