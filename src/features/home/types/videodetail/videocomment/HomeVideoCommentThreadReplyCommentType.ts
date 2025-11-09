import { HomeVideoCommentThreadReplySnippetType } from "./HomeVideoCommentThreadReplySnippetType";

export type HomeVideoCommentThreadReplyCommentType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントの一意のID
    readonly id: string;
    // 返信コメントの詳細情報
    readonly snippet: HomeVideoCommentThreadReplySnippetType;
}