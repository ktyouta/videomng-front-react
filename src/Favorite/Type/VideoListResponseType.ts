import { YouTubeDataApiVideoListItemType } from "./YouTubeDataApiVideoListItemType";

// 動画リストapiのレスポンス
export type VideoListResponseType = {
    data: {
        readonly kind: string;
        readonly etag: string;
        readonly nextPageToken?: string;
        readonly regionCode?: string;
        readonly pageInfo: {
            totalResults: number;
            resultsPerPage: number;
        };
        readonly items: YouTubeDataApiVideoListItemType[];
    }
}