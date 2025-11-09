import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../types/videodetail/videocomment/videoblockcomment/FavoriteVideoBlockCommentListResponseType";
import { useFavoriteBlockCommentEndpoint } from "./useFavoriteBlockCommentEndpoint";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailResponseType";
import { useVideoId } from "../../useVideoId";


export function useFavoriteBlockCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: blockCommentData, isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType, YouTubeDataApiCommentDetailResponseType>(
        {
            url: useFavoriteBlockCommentEndpoint(videoId),
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