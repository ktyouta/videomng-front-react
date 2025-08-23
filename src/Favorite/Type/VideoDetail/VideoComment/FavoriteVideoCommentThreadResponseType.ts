import { FavoriteVideoCommentThreadItemType } from "./FavoriteVideoCommentThreadItemType";
import { FavoriteVideoCommentThreadType } from "./FavoriteVideoCommentThreadType";

//YouTube Data Api(動画コメント)のレスポンス
export type FavoriteVideoCommentThreadResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoCommentThreadType,
}