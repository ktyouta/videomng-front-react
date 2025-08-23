import { useAtom, useAtomValue } from "jotai";
import { favoriteCommentDataAtom, favoriteVideoCommentListAtom } from "../../../../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { FavoriteVideoIdContext } from "../../../../Component/Favorite";
import { useFavoriteFavoriteCommentEndpoint } from "./useFavoriteFavoriteCommentEndpoint";


export function useFavoriteFavoriteCommentList() {

    // お気に入りコメントリスト
    const [favoriteCommentData, setFavoriteCommentData] = useAtom(favoriteCommentDataAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType>(
        {
            url: useFavoriteFavoriteCommentEndpoint(favoriteVideoId),
            afSuccessFn: (response: FavoriteVideoBlockCommentListResponseType) => {

                const data = response.data;
                setFavoriteCommentData(data);
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