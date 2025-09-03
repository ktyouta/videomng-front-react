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
import { FavoriteVideoIdContext } from "../../../Component/FavoriteMain";


export function useFavoriteTagList() {

    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);

    // タグリストを取得
    const { data: favoriteVideoTagList, isLoading } = useQueryWrapper<FavoriteVideoTagResponseType, FavoriteVideoTagType[]>(
        {
            url: useFavoriteTagEndpoint(favoriteVideoId),
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