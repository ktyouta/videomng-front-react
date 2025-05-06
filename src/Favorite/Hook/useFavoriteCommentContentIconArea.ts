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
import { FavoriteVideoCommentThreadReplyCommentType } from "../Type/FavoriteVideoCommentThreadReplyCommentType";
import { FavoriteVideoIdContext } from "../Component/Favorite";
import { toast } from "react-toastify";


type propsType = {
    commentId: string,
    favoriteStatus: string,
}


export function useFavoriteCommentContentIconArea(props: propsType) {

    // コメント情報
    const setFavoriteVideoCommentList = useSetAtom(favoriteVideoCommentListAtom);
    // お気に入り状態
    const [favoriteStatus, setFavoriteStatus] = useState(props.favoriteStatus);
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

                        // 親コメントのIDチェック
                        if (topLevelComment.id === commentId) {
                            return false;
                        }

                        // 返信コメントのIDチェック
                        const replyComment = e1.replies?.comments;

                        if (!replyComment) {
                            return true;
                        }

                        const newReplyComments = replyComment.filter((e2: FavoriteVideoCommentThreadReplyCommentType) => {
                            return e2.id !== commentId
                        });

                        e1.replies.comments = newReplyComments;

                        return true;
                    });
                }
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`コメントの非表示に失敗しました。`);
        },
    });


    /**
     * コメントをブロックする
     * @param videoId 
     */
    function blockComment(commentId: string) {

        if (!commentId) {
            toast.error(`非表示にできませんでした。`);
            return;
        }

        const body: AddToFavoriteVideoBlockCommentReqestType = {
            commentId,
            videoId: favoriteVideoId
        }

        // リクエスト送信
        postBlockMutation.mutate(body);
    }


    /**
     * コメントお気に入りリクエスト
     */
    const postFavoriteMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_COMMENT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {
            setFavoriteStatus(COMMENT_FAVORITE_STATUS.FAVORITE);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`お気に入り登録に失敗しました。`);
        },
    });


    /**
     * コメントをお気に入りに登録する
     * @param videoId 
     */
    function favoriteComment(commentId: string) {

        if (!commentId) {
            toast.error(`お気に入りに登録できません。`);
            return;
        }

        const body: AddToFavoriteVideoFavoriteCommentReqestType = {
            commentId,
            videoId: favoriteVideoId
        }

        // リクエスト送信
        postFavoriteMutation.mutate(body);
    }


    /**
     * お気に入りコメント削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_COMMENT}/${props.commentId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {
            setFavoriteStatus(COMMENT_FAVORITE_STATUS.NONE);
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

        const body: AddToFavoriteVideoFavoriteCommentReqestType = {
            commentId,
            videoId: favoriteVideoId,
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        blockComment,
        favoriteComment,
        deleteFavoriteComment,
        favoriteStatus,
    }
}