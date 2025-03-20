import { FavoriteVideoCommentThreadReplyCommentType } from "./FavoriteVideoCommentThreadReplyCommentType";
import { FavoriteVideoCommentThreadReplySnippetType } from "./FavoriteVideoCommentThreadReplySnippetType";

export type FavoriteVideoCommentThreadReplyType = {
    readonly comments: FavoriteVideoCommentThreadReplyCommentType[];
};