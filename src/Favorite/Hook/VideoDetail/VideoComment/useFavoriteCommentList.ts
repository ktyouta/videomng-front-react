import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoCommentListAtom, favoriteVideoMemoListAtom } from "../../../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { useFavoriteCommentEndpoint } from "./useFavoriteCommentEndpoint";
import { FavoriteVideoCommentThreadResponseType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadResponseType";


export function useFavoriteCommentList() {

    // コメント情報
    const [favoriteVideoCommentList, setFavoriteVideoCommentList] = useAtom(favoriteVideoCommentListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoCommentThreadResponseType>(
        {
            url: useFavoriteCommentEndpoint(favoriteVideoId),
            afSuccessFn: (response: FavoriteVideoCommentThreadResponseType) => {

                const items = response.data.items;
                setFavoriteVideoCommentList(items ?? []);
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