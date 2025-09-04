import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../Type/VideoList/FavoriteVideoListResponseType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json"
import { useState } from "react";
import { FavoriteVideoListMergedType } from "../../Type/VideoList/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "./useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";


export function useFavoriteVideoArea() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画一覧API呼び出し済みフラグ
    const [isCalledListApi, setIsCalledListApi] = useState(false);

    // 動画一覧を取得
    const { data: videoListItem, isLoading } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListMergedType[]>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: () => {
                setIsCalledListApi(true);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setIsCalledListApi(true);
                setErrMessage(`お気に入り動画の取得に失敗しました`);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        errMessage,
        isCalledListApi,
    }
}