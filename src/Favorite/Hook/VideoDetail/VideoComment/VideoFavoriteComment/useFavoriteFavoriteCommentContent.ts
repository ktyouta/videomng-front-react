import { useAtomValue, useSetAtom } from "jotai";
import useMutationWrapper from "../../../../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoFavoriteCommentType } from "../../../../Type/VideoDetail/VideoComment/VideoFavoriteComment/FavoriteVideoFavoriteCommentType";
import { YouTubeDataApiCommentDetailItemType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailItemType";
import { toast } from "react-toastify";
import { useFavoriteFavoriteCommentIdEndpoint } from "./useFavoriteFavoriteCommentIdEndpoint";
import { FavoriteVideoIdContext } from "../../../../Component/Favorite";
import { useFavoriteFavoriteCommentEndpoint } from "./useFavoriteFavoriteCommentEndpoint";
import { useInvalidateQuery } from "../../../../../Common/Hook/useInvalidateQuery";
import { useFavoriteCommentEndpoint } from "../useFavoriteCommentEndpoint";


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteFavoriteCommentContent(props: propsType) {

    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 公開コメント再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(useFavoriteCommentEndpoint(favoriteVideoId));
    // お気に入りコメント再取得用
    const { invalidate: invalidataFavorite } = useInvalidateQuery(useFavoriteFavoriteCommentEndpoint(favoriteVideoId));

    /**
     * お気に入りコメント削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteFavoriteCommentIdEndpoint({
            videoId: favoriteVideoId,
            commentId: props.commentDetailItem.id
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoFavoriteCommentType>) => {

            // 公開コメント再取得
            invalidataPublic();

            // お気に入りコメント再取得
            invalidataFavorite();
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
        postMutation.mutate();
    }


    return {
        deleteFavoriteComment,
    }
}