import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { useVideoId } from "../useVideoId";


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
                const errRes = res as errResType;
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