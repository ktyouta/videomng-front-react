import { VideoCommentThreadReplyType } from "./VideoCommentThreadReplyType";
import { VideoCommentThreadSnippetType } from "./VideoCommentThreadSnippetType";

export type VideoCommentThreadItemType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントスレッドの一意のID
    readonly id: string;
    // コメントスレッドの詳細情報
    readonly snippet: VideoCommentThreadSnippetType;
    // 返信コメントのリスト（返信がある場合のみ存在）
    readonly replies?: VideoCommentThreadReplyType;
}