import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
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