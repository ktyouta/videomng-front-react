import { useAtomValue, useSetAtom } from "jotai";
import { favoriteCommentDataAtom, favoriteVideoCommentListAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../Type/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import useSwitch from "../../Common/Hook/useSwitch";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../Type/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../Type/FavoriteVideoFavoriteCommentType";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { YouTubeDataApiCommentDetailItemType } from "../Type/YouTubeDataApiCommentDetailItemType";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { DeleteToFavoriteVideoFavoriteCommentReqestType } from "../Type/DeleteToFavoriteVideoFavoriteCommentReqestType";
import { toast } from "react-toastify";


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteFavoriteCommentContent(props: propsType) {

    // お気に入りコメントリスト
    const setFavoriteCommentData = useSetAtom(favoriteCommentDataAtom);

    /**
     * お気に入りコメント削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_COMMENT}/${props.commentDetailItem.id}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {
            setFavoriteCommentData((e) => {
                const commentId = res.data.commentId;

                if (!e) {
                    return e;
                }

                return {
                    ...e,
                    // コメントをフィルターする
                    items: e.items.filter((e1: YouTubeDataApiCommentDetailItemType) => {
                        return e1.id !== commentId;
                    })
                };
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`削除に失敗しました。`);
        },
    });


    /**
     * お気に入りコメントを削除する
     * @param videoId 
     */
    function deleteFavoriteComment(commentId: string) {

        if (!commentId) {
            toast.error(`お気に入りから外せません。`);
            return;
        }

        const body: DeleteToFavoriteVideoFavoriteCommentReqestType = {
            commentId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    return {
        deleteFavoriteComment,
    }
}