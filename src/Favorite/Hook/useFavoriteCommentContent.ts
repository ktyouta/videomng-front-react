import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoCommentListAtom, favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
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
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../Type/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../Type/FavoriteVideoFavoriteCommentType";
import { COMMENT_FAVORITE_STATUS } from "../Const/FavoriteConst";
import { FavoriteVideoIdContext } from "../Component/Favorite";


export function useFavoriteCommentContent() {

    // コメント情報
    const setFavoriteVideoCommentList = useSetAtom(favoriteVideoCommentListAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();

    /**
     * コメントブロックリクエスト
     */
    const postBlockMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.BLOCK_COMMENT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoBlockCommentType>) => {
            setFavoriteVideoCommentList((e) => {

                const commentId = res.data.commentId;

                if (e) {
                    // ブロックコメントをフィルターする
                    e = e.filter((e1: FavoriteVideoCommentThreadItemType) => {

                        const topLevelComment = e1.snippet.topLevelComment;
                        return topLevelComment.id !== commentId;
                    });
                }
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`コメントの非表示に失敗しました。`);
        },
    });


    /**
     * コメントをブロックする
     * @param videoId 
     */
    function blockComment(commentId: string) {

        if (!window.confirm(`コメントを非表示にしますか？`)) {
            return;
        }

        if (!commentId) {
            alert(`ブロックできません。`);
            return;
        }

        if (!favoriteVideoId) {
            alert(`ブロックできません。`);
            return;
        }

        const body: AddToFavoriteVideoBlockCommentReqestType = {
            commentId,
            videoId: favoriteVideoId
        }

        // リクエスト送信
        postBlockMutation.mutate(body);
    }


    return {
        blockComment,
    }
}