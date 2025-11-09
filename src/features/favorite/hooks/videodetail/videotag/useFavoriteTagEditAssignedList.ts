import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { tagType } from "../../../../../components/TagsComponent";
import { toast } from "react-toastify";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagEditListContext, SetFavoriteVideoTagEditListContext } from "../../../components/videodetail/videotag/FavoriteVideoTagEditListProvider";



export function useFavoriteTagEditAssignedList() {

    // タグ編集リスト
    const favoriteVideoTagEditList = FavoriteVideoTagEditListContext.useCtx();
    // タグ編集リスト(setter)
    const setFavoriteVideoTagEditList = SetFavoriteVideoTagEditListContext.useCtx();


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
        deleteTag,
        favoriteVideoTagEditList,
    }
}