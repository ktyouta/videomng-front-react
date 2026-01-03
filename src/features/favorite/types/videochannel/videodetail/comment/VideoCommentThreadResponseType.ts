import { VideoCommentThreadType } from "./VideoCommentThreadType";

//YouTube Data Api(動画コメント)のレスポンス
export type VideoCommentThreadResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: VideoCommentThreadType,
}