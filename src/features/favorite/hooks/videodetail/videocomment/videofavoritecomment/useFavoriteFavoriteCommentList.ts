import { useState } from "react";
import { getFavoriteComment } from "../../../../api/getFavoriteComment";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../types/videodetail/videocomment/videoblockcomment/FavoriteVideoBlockCommentListResponseType";
import { useVideoId } from "../../useVideoId";


export function useFavoriteFavoriteCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // コメント情報を取得
    const { data: favoriteCommentData, isLoading } = getFavoriteComment({
        videoId,
        select: (res: FavoriteVideoBlockCommentListResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`お気に入りコメントの取得に失敗しました。`);
        }
    });

    return {
        isLoading,
        errMessage,
        favoriteCommentData,
    }
}