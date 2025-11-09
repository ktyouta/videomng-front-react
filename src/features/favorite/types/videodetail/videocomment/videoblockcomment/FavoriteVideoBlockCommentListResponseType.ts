import { YouTubeDataApiCommentDetailResponseType } from "../YouTubeDataApiCommentDetailResponseType";

//YouTube Data Api(動画ブロックコメント)のレスポンス
export type FavoriteVideoBlockCommentListResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: YouTubeDataApiCommentDetailResponseType,
}