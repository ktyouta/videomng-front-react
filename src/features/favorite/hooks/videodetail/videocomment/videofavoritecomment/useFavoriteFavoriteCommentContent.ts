import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { favoriteVideoKeys } from "../../../../api/queryKey";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { useVideoId } from "../../useVideoId";
import { useFavoriteFavoriteCommentEndpoint } from "./useFavoriteFavoriteCommentEndpoint";

type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteFavoriteCommentContent(props: propsType) {

    // 動画ID
    const videoId = useVideoId();
    // 公開コメント再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(favoriteVideoKeys.comment({
        videoId,
        nextPageToken: ``,
    }));
    // お気に入りコメント再取得用
    const { invalidate: invalidataFavorite } = useInvalidateQuery(useFavoriteFavoriteCommentEndpoint(videoId));
    // コメントID
    const commentId = props.commentDetailItem.id;
    // お気に入りコメント削除用エンドポイント
    const favoriteCommentIdEndpoint = videoId && commentId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_COMMENT_ID}`.replace(`:videoId`, videoId).replace(`:commentId`, commentId) : ``;

    /**
     * お気に入りコメント削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: favoriteCommentIdEndpoint,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`削除に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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