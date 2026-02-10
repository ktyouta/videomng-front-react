import { useState } from "react";
import { getFavoriteVideoTag } from "../../../api/getFavoriteVideoTag";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { useVideoId } from "../useVideoId";


export function useFavoriteTagList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // タグリストを取得
    const { data: favoriteVideoTagList, isLoading } = getFavoriteVideoTag({
        videoId,
        select: (res: FavoriteVideoTagResponseType) => {
            return res.data ?? [];
        },
        onError: (res) => {
            setErrMessage(`タグの取得に失敗しました`);
        }
    });

    return {
        favoriteVideoTagList,
        isLoading,
        errMessage
    }
}