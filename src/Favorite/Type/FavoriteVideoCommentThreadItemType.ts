import { FavoriteVideoCommentThreadSnippetType } from "./FavoriteVideoCommentThreadSnippetType";
import { FavoriteVideoCommentThreadReplyType } from "./FavoriteVideoCommentThreadReplyType";

export type FavoriteVideoCommentThreadItemType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントスレッドの一意のID
    readonly id: string;
    // コメントスレッドの詳細情報
    readonly snippet: FavoriteVideoCommentThreadSnippetType;
    // 返信コメントのリスト（返信がある場合のみ存在）
    readonly replies?: FavoriteVideoCommentThreadReplyType;
}