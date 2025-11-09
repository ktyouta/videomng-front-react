import { useEffect, useState } from "react";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import { AddToFavoriteVideoBlockCommentReqestType } from "../../../types/videodetail/videocomment/videoblockcomment/AddToFavoriteVideoBlockCommentReqestType";
import { FavoriteVideoBlockCommentType } from "../../../types/videodetail/videocomment/videoblockcomment/FavoriteVideoBlockCommentType";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../../../types/videodetail/videocomment/videofavoritecomment/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../../../types/videodetail/videocomment/videofavoritecomment/FavoriteVideoFavoriteCommentType";
import { COMMENT_FAVORITE_STATUS } from "../../../const/FavoriteConst";
import { toast } from "react-toastify";
import { useFavoriteBlockCommentEndpoint } from "./videoblockcomment/useFavoriteBlockCommentEndpoint";
import { useFavoriteFavoriteCommentIdEndpoint } from "./videofavoritecomment/useFavoriteFavoriteCommentIdEndpoint";
import { useFavoriteFavoriteCommentEndpoint } from "./videofavoritecomment/useFavoriteFavoriteCommentEndpoint";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import { useFavoriteCommentEndpoint } from "./useFavoriteCommentEndpoint";
import { useVideoId } from "../useVideoId";


type propsType = {
    commentId: string,
    favoriteStatus: string,
}


export function useFavoriteCommentContentIconArea(props: propsType) {

    // お気に入り状態
    const [favoriteStatus, setFavoriteStatus] = useState<string>(props.favoriteStatus);
    // 動画ID
    const videoId = useVideoId();
    // コメント再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteCommentEndpoint({
        videoId
    }));

    // コメント情報再取得時にアイコン状態を変更する
    useEffect(() => {
        setFavoriteStatus(props.favoriteStatus);
    }, [props.favoriteStatus]);

    /**
     * コメントブロックリクエスト
     */
    const postBlockMutation = useMutationWrapper({
        url: useFavoriteBlockCommentEndpoint(videoId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoBlockCommentType>) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`コメントの非表示に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            // コメント再取得
            invalidate();
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
    function blockComment() {

        if (!props.commentId) {
            toast.error(`非表示にできませんでした。`);
            return;
        }

        const body: AddToFavoriteVideoBlockCommentReqestType = {
            commentId: props.commentId,
            videoId
        }

        // リクエスト送信
        postBlockMutation.mutate(body);
    }


    /**
     * コメントお気に入りリクエスト
     */
    const postFavoriteMutation = useMutationWrapper({
        url: useFavoriteFavoriteCommentEndpoint(videoId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`お気に入り登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            // アイコンを強調表示
            setFavoriteStatus(COMMENT_FAVORITE_STATUS.FAVORITE);

            // コメント再取得
            invalidate();
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
    function favoriteComment() {

        if (!props.commentId) {
            toast.error(`お気に入りに登録できません。`);
            return;
        }

        const body: AddToFavoriteVideoFavoriteCommentReqestType = {
            commentId: props.commentId,
        }

        // リクエスト送信
        postFavoriteMutation.mutate(body);
    }


    /**
     * お気に入りコメント削除リクエスト
     */
    const delMutation = useMutationWrapper({
        url: useFavoriteFavoriteCommentIdEndpoint({
            videoId,
            commentId: props.commentId
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`削除に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            // アイコン強調表示解除
            setFavoriteStatus(COMMENT_FAVORITE_STATUS.NONE);

            // コメント再取得
            invalidate();
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
    function deleteFavoriteComment() {

        if (!props.commentId) {
            toast.error(`お気に入りから外せません。`);
            return;
        }

        // リクエスト送信
        delMutation.mutate();
    }

    return {
        blockComment,
        favoriteComment,
        deleteFavoriteComment,
        favoriteStatus,
    }
}