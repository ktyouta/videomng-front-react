import { useState } from "react";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import { useFavoriteFavoriteCommentEndpoint } from "./useFavoriteFavoriteCommentEndpoint";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { FavoriteVideoIdContext } from "../../../../Component/VideoDetail/FavoriteVideoDetail";


export function useFavoriteFavoriteCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // コメント情報を取得
    const { data: favoriteCommentData, isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType, YouTubeDataApiCommentDetailResponseType>(
        {
            url: useFavoriteFavoriteCommentEndpoint(favoriteVideoId),
            select: (res: FavoriteVideoBlockCommentListResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                setErrMessage(`お気に入りコメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        errMessage,
        favoriteCommentData,
    }
}