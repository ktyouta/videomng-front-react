import { useAtom, useAtomValue } from "jotai";
import { blockCommentDataAtom, favoriteVideoCommentListAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";
import { FavoriteVideoCommentThreadResponseType } from "../Type/FavoriteVideoCommentThreadResponseType";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteVideoCommentThreadType } from "../Type/FavoriteVideoCommentThreadType";
import { FavoriteVideoBlockCommentListResponseType } from "../Type/FavoriteVideoBlockCommentListResponseType";
import { YouTubeDataApiCommentDetailResponseType } from "../Type/YouTubeDataApiCommentDetailResponseType";
import { FavoriteVideoIdContext } from "../Component/Favorite";


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
            url: `${VIDEO_MNG_PATH}${ENV.BLOCK_COMMENT}/${favoriteVideoId}`,
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