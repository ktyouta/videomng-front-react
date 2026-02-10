import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { useVideoId } from "../useVideoId";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";


export function useFavoriteTagList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // タグリストを取得
    const { data: favoriteVideoTagList, isLoading } = useQueryWrapper<FavoriteVideoTagResponseType, FavoriteVideoTagType[]>(
        {
            url: useFavoriteTagEndpoint(videoId),
            select: (res: FavoriteVideoTagResponseType) => {
                return res.data ?? [];
            },
            afErrorFn: (res) => {
                setErrMessage(`タグの取得に失敗しました`);
            }
        }
    );

    return {
        favoriteVideoTagList,
        isLoading,
        errMessage
    }
}