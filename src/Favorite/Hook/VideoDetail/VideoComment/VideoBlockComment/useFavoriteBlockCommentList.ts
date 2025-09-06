import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import { useFavoriteBlockCommentEndpoint } from "./useFavoriteBlockCommentEndpoint";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { FavoriteVideoIdContext } from "../../../../Component/VideoDetail/FavoriteVideoDetail";


export function useFavoriteBlockCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // コメント情報を取得
    const { data: blockCommentData, isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType, YouTubeDataApiCommentDetailResponseType>(
        {
            url: useFavoriteBlockCommentEndpoint(favoriteVideoId),
            select: (res: FavoriteVideoBlockCommentListResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                setErrMessage(`非表示コメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        errMessage,
        blockCommentData,
    }
}