import { useState } from "react";
import { getBlockComment } from "../../../../api/getBlockComment";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../types/videodetail/videocomment/videoblockcomment/FavoriteVideoBlockCommentListResponseType";
import { useVideoId } from "../../useVideoId";


export function useFavoriteBlockCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // コメント情報を取得
    const { data: blockCommentData, isLoading } = getBlockComment({
        videoId,
        select: (res: FavoriteVideoBlockCommentListResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`非表示コメントの取得に失敗しました。`);
        }
    });

    return {
        isLoading,
        errMessage,
        blockCommentData,
    }
}