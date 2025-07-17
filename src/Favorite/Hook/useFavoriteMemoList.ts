import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";
import { FavoriteVideoIdContext } from "../Component/Favorite";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";


export function useFavoriteMemoList() {

    // メモ情報
    const [favoriteVideoMemoList, setVideoListItemAtom] = useAtom(favoriteVideoMemoListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // メモ情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoMemoResponseType>(
        {
            url: useFavoriteMemoEndpoint(favoriteVideoId),
            afSuccessFn: (response: FavoriteVideoMemoResponseType) => {
                setVideoListItemAtom(response.data);
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