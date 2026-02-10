import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { useInvalidateQuery } from "../../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { favoriteVideoKeys } from "../../../../api/queryKey";
import { DeleteToFavoriteVideoBlockCommentReqestType } from "../../../../types/videodetail/videocomment/videoblockcomment/DeleteToFavoriteVideoBlockCommentReqestType";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { useVideoId } from "../../useVideoId";


type propsType = {
    commentDetailItem: YouTubeDataApiCommentDetailItemType,
}

export function useFavoriteBlockCommentContent(props: propsType) {

    // 動画ID
    const videoId = useVideoId();
    // 公開コメント再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(favoriteVideoKeys.comment({
        videoId,
        nextPageToken: ``,
    }));
    // 非表示コメント再取得用
    const { invalidate: invalidateBlock } = useInvalidateQuery(favoriteVideoKeys.blockComment(videoId));
    // コメントID
    const commentId = props.commentDetailItem.id;
    // 再表示リクエストエンドポイント
    const endpoint = videoId && commentId ? `${VIDEO_MNG_PATH}${ENV.BLOCK_COMMENT_ID}`.replace(`:videoId`, videoId).replace(`:commentId`, commentId) : ``

    /**
     * 再表示リクエスト
     */
    const postMutation = useMutationWrapper({
        url: endpoint,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`再表示に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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