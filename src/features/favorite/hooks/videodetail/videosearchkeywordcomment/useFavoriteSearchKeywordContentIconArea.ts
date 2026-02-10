import { useState } from "react";
import { toast } from "react-toastify";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import { favoriteVideoKeys } from "../../../api/queryKey";
import { SearchKeywordCommentKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/FavoriteSearchKeywordComment";
import { COMMENT_FAVORITE_STATUS } from "../../../const/FavoriteConst";
import { AddToFavoriteVideoBlockCommentReqestType } from "../../../types/videodetail/videocomment/videoblockcomment/AddToFavoriteVideoBlockCommentReqestType";
import { AddToFavoriteVideoFavoriteCommentReqestType } from "../../../types/videodetail/videocomment/videofavoritecomment/AddToFavoriteVideoFavoriteCommentReqestType";
import { FavoriteVideoFavoriteCommentType } from "../../../types/videodetail/videocomment/videofavoritecomment/FavoriteVideoFavoriteCommentType";
import { favoriteCommentIdEndpoint } from "../../../utils/endpoint";
import { useVideoId } from "../useVideoId";
import { useFavoriteBlockCommentEndpoint } from "../videocomment/videoblockcomment/useFavoriteBlockCommentEndpoint";
import { useFavoriteFavoriteCommentEndpoint } from "../videocomment/videofavoritecomment/useFavoriteFavoriteCommentEndpoint";


type propsType = {
    commentId: string,
    favoriteStatus: string,
}


export function useFavoriteSearchKeywordContentIconArea(props: propsType) {

    // お気に入り状態
    const [favoriteStatus, setFavoriteStatus] = useState(props.favoriteStatus);
    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();
    // コメント再取得用
    const { invalidate } = useInvalidateQuery(favoriteVideoKeys.searchComment({
        videoId,
        keyword: searchKeywordCommentKeyword,
    }));
    // コメントID
    const commentId = props.commentId;

    /**
     * コメントブロックリクエスト
     */
    const postBlockMutation = useMutationWrapper({
        url: useFavoriteBlockCommentEndpoint(videoId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`ブロックに失敗しました。時間をおいて再度お試しください。`);
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
    function blockComment(commentId: string) {

        if (!commentId) {
            toast.error(`非表示にできませんでした。`);
            return;
        }

        const body: AddToFavoriteVideoBlockCommentReqestType = {
            commentId,
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
        }

        // リクエスト送信
        postFavoriteMutation.mutate(body);
    }


    /**
     * お気に入りコメント削除リクエスト
     */
    const delMutation = useMutationWrapper({
        url: favoriteCommentIdEndpoint({
            videoId,
            commentId
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`削除に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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