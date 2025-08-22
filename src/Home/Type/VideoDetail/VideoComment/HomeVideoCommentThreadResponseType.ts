import { HomeVideoCommentThreadType } from "./HomeVideoCommentThreadType";

//YouTube Data Api(動画コメント)のレスポンス
export type HomeVideoCommentThreadResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: HomeVideoCommentThreadType,
}