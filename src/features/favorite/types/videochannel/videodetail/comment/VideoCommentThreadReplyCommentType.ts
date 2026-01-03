import { VideoCommentThreadReplySnippetType } from "./VideoCommentThreadReplySnippetType";

export type VideoCommentThreadReplyCommentType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントの一意のID
    readonly id: string;
    // 返信コメントの詳細情報
    readonly snippet: VideoCommentThreadReplySnippetType;
}