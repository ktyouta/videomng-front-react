import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { useVideoId } from "../useVideoId";


export function useFavoriteMemoList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();


    // メモ情報を取得
    const { data: favoriteVideoMemoList, isLoading } = useQueryWrapper<FavoriteVideoMemoResponseType, FavoriteVideoMemoType[]>(
        {
            url: useFavoriteMemoEndpoint(videoId),
            afErrorFn: (res) => {
                setErrMessage(`メモの取得に失敗しました。`);
            },
            select: (res: FavoriteVideoMemoResponseType) => {
                return res.data;
            }
        }
    );

    return {
        isLoading,
        favoriteVideoMemoList,
        errMessage,
    }
}