import { HomeVideoCommentThreadReplyType } from "./HomeVideoCommentThreadReplyType";
import { HomeVideoCommentThreadSnippetType } from "./HomeVideoCommentThreadSnippetType";

export type HomeVideoCommentThreadItemType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // コメントスレッドの一意のID
    readonly id: string;
    // コメントスレッドの詳細情報
    readonly snippet: HomeVideoCommentThreadSnippetType;
    // 返信コメントのリスト（返信がある場合のみ存在）
    readonly replies?: HomeVideoCommentThreadReplyType;
}