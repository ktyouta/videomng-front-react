import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";


export function useFavoriteMemoList() {

    // メモ情報
    const [favoriteVideoMemoList, setFavoriteVideoMemoList] = useState<FavoriteVideoMemoType[]>();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // メモ情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoMemoResponseType>(
        {
            url: useFavoriteMemoEndpoint(favoriteVideoId),
            afSuccessFn: (response: FavoriteVideoMemoResponseType) => {
                setFavoriteVideoMemoList(response.data ?? []);
            },
            afErrorFn: (res) => {
                setErrMessage(`メモの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        favoriteVideoMemoList,
        errMessage,
    }
}