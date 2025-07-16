import { useAtomValue, useSetAtom } from "jotai";
import { blockCommentDataAtom, favoriteVideoCommentListAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../Type/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import useSwitch from "../../Common/Hook/useSwitch";
import { AddToFavoriteVideoBlockCommentReqestType } from "../Type/AddToFavoriteVideoBlockCommentReqestType";
import { FavoriteVideoBlockCommentType } from "../Type/FavoriteVideoBlockCommentType";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { YouTubeDataApiCommentDetailItemType } from "../Type/YouTubeDataApiCommentDetailItemType";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { FavoriteVideoBlockCommentListResponseType } from "../Type/FavoriteVideoBlockCommentListResponseType";
import { DeleteToFavoriteVideoBlockCommentReqestType } from "../Type/DeleteToFavoriteVideoBlockCommentReqestType";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { useFavoriteBlockCommentIdEndpoint } from "./useFavoriteBlockCommentIdEndpoint";
import { FavoriteVideoIdContext } from "../Component/Favorite";


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteBlockCommentContent(props: propsType) {

    // ブロックコメントリスト
    const setBlockCommentData = useSetAtom(blockCommentDataAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();

    /**
     * コメントブロックリクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteBlockCommentIdEndpoint({
            videoId: favoriteVideoId,
            commentId: props.commentDetailItem.id
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoBlockCommentType>) => {
            setBlockCommentData((e) => {
                const commentId = res.data.commentId;

                if (!e) {
                    return e;
                }

                return {
                    ...e,
                    // 再表示コメントをフィルターする
                    items: e.items.filter((e1: YouTubeDataApiCommentDetailItemType) => {
                        return e1.id !== commentId;
                    })
                };
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`再表示に失敗しました。`);
        },
    });


    /**
     * コメントを再表示する
     * @param videoId 
     */
    function restoreComment(commentId: string) {

        if (!commentId) {
            toast.error(`再表示できません。`);
            return;
        }

        const body: DeleteToFavoriteVideoBlockCommentReqestType = {
            commentId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    return {
        restoreComment,
    }
}