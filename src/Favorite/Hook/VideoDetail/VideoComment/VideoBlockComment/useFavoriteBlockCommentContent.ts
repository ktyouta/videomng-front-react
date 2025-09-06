import { useAtomValue, useSetAtom } from "jotai";
import useMutationWrapper from "../../../../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoBlockCommentType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/FavoriteVideoBlockCommentType";
import { YouTubeDataApiCommentDetailItemType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailItemType";
import { DeleteToFavoriteVideoBlockCommentReqestType } from "../../../../Type/VideoDetail/VideoComment/VideoBlockComment/DeleteToFavoriteVideoBlockCommentReqestType";
import { toast } from "react-toastify";
import { useFavoriteBlockCommentIdEndpoint } from "./useFavoriteBlockCommentIdEndpoint";
import { useFavoriteCommentEndpoint } from "../useFavoriteCommentEndpoint";
import { useInvalidateQuery } from "../../../../../Common/Hook/useInvalidateQuery";
import { useFavoriteBlockCommentEndpoint } from "./useFavoriteBlockCommentEndpoint";
import { FavoriteVideoIdContext } from "../../../../Component/VideoDetail/FavoriteVideoDetail";


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteBlockCommentContent(props: propsType) {

    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 公開コメント再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(useFavoriteCommentEndpoint(favoriteVideoId));
    // 非表示コメント再取得用
    const { invalidate: invalidateBlock } = useInvalidateQuery(useFavoriteBlockCommentEndpoint(favoriteVideoId));


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

            // 非表示コメント再取得
            invalidateBlock();

            // 公開コメント再取得
            invalidataPublic();
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