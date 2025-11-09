import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json"
import { useState } from "react";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";
import { DisplayVideoListContext, SetDisplayVideoListContext } from "../../../components/videolist/FavoriteVideoDisplayVideoListProvider";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";


export function useFavoriteVideoArea() {

    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();

    // 動画一覧を取得
    const { data, isLoading, isError, isFetching } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoListResponseDataType) => {
                setDisplayVideoList(res.item ?? []);
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching,
        total: data?.total,
    }
}