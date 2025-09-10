import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { useFavoriteCommentEndpoint } from "./useFavoriteCommentEndpoint";
import { FavoriteVideoCommentThreadResponseType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadResponseType";
import { FavoriteVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadItemType";
import { useVideoId } from "../useVideoId";


export function useFavoriteCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: favoriteVideoCommentList, isLoading } = useQueryWrapper<FavoriteVideoCommentThreadResponseType, FavoriteVideoCommentThreadItemType[]>(
        {
            url: useFavoriteCommentEndpoint(videoId),
            select: (res: FavoriteVideoCommentThreadResponseType) => {
                return res.data.items;
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        errMessage,
        favoriteVideoCommentList,
    }
}