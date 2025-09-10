import { useState } from "react";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import { useFavoriteFavoriteCommentEndpoint } from "./useFavoriteFavoriteCommentEndpoint";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { useVideoId } from "../../useVideoId";


export function useFavoriteFavoriteCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: favoriteCommentData, isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType, YouTubeDataApiCommentDetailResponseType>(
        {
            url: useFavoriteFavoriteCommentEndpoint(videoId),
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