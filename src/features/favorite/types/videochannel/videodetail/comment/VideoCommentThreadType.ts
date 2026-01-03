import { VideoCommentThreadItemType } from "./VideoCommentThreadItemType";

//YouTube Data Api(動画コメント)
export type VideoCommentThreadType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    readonly nextPageToken: string;
    readonly pageInfo: {
        readonly totalResults: number,
        readonly resultsPerPage: number
    };
    // コメント情報
    readonly items: VideoCommentThreadItemType[];
}