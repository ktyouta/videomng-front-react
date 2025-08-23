import { useAtom, useAtomValue } from "jotai";
import { blockCommentDataAtom, favoriteVideoCommentListAtom } from "../../../../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoBlockCommentListResponseType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentListResponseType";
import { YouTubeDataApiCommentDetailResponseType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { FavoriteVideoIdContext } from "../../../../Component/Favorite";
import { useFavoriteBlockCommentEndpoint } from "./useFavoriteBlockCommentEndpoint";


export function useFavoriteBlockCommentList() {

    // ブロックコメントリスト
    const [blockCommentData, setBlockCommentData] = useAtom(blockCommentDataAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoBlockCommentListResponseType>(
        {
            url: useFavoriteBlockCommentEndpoint(favoriteVideoId),
            afSuccessFn: (response: FavoriteVideoBlockCommentListResponseType) => {

                const data = response.data;
                setBlockCommentData(data);
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