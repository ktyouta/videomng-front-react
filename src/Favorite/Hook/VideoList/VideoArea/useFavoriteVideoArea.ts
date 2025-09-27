import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../../Type/VideoList/FavoriteVideoListResponseType";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json"
import { useState } from "react";
import { FavoriteVideoListMergedType } from "../../../Type/VideoList/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";
import { DisplayVideoListContext, SetDisplayVideoListContext } from "../../../Component/VideoList/FavoriteVideoDisplayVideoListProvider";


export function useFavoriteVideoArea() {

    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用の動画リスト
    const displayVideoList = DisplayVideoListContext.useCtx();

    // 動画一覧を取得
    const { isLoading, isError, isFetching } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListMergedType[]>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoListMergedType[]) => {
                setDisplayVideoList(res ?? []);
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        isLoading,
        isError,
        displayVideoList,
        isFetching
    }
}