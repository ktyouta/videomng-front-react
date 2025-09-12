import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../../Type/VideoList/FavoriteVideoListResponseType";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json"
import { useState } from "react";
import { FavoriteVideoListMergedType } from "../../../Type/VideoList/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "../useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";


export function useFavoriteVideoArea() {

    // 動画一覧を取得
    const { data: videoListItem, isLoading, isError } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListMergedType[]>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        isError
    }
}