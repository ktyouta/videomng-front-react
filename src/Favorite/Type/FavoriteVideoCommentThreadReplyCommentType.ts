import { FavoriteVideoCommentThreadReplySnippetType } from "./FavoriteVideoCommentThreadReplySnippetType";

export type FavoriteVideoCommentThreadReplyCommentType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントの一意のID
    readonly id: string;
    // 返信コメントの詳細情報
    readonly snippet: FavoriteVideoCommentThreadReplySnippetType;
}