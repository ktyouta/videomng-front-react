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


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteBlockCommentContent(props: propsType) {

    // ブロックコメントリスト
    const setBlockCommentData = useSetAtom(blockCommentDataAtom);

    /**
     * コメントブロックリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.BLOCK_COMMENT}/${props.commentDetailItem.id}`,
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
            alert(`再表示に失敗しました。`);
        },
    });


    /**
     * コメントを再表示する
     * @param videoId 
     */
    function restoreComment(commentId: string) {

        if (!window.confirm(`コメント再表示しますか？`)) {
            return;
        }

        if (!commentId) {
            alert(`再表示できませんでした。`);
            return;
        }

        const body: AddToFavoriteVideoBlockCommentReqestType = {
            commentId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    return {
        restoreComment,
    }
}