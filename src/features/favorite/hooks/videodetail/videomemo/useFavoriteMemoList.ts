import { useState } from "react";
import { getFavoriteVideoMemo } from "../../../api/getFavoriteVideoMemo";
import { FavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoResponseType";
import { useVideoId } from "../useVideoId";


export function useFavoriteMemoList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // メモ情報を取得
    const { data: favoriteVideoMemoList, isLoading } = getFavoriteVideoMemo({
        videoId,
        select: (res: FavoriteVideoMemoResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`メモの取得に失敗しました。`);
        }
    });

    return {
        isLoading,
        favoriteVideoMemoList,
        errMessage,
    }
}