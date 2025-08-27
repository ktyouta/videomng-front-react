import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { toast } from "react-toastify";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { FavoriteVideoTagEditListContext, SetFavoriteVideoTagEditListContext } from "../../../Component/VideoDetail/VideoTag/FavoriteVideoTagEditListProvider";



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