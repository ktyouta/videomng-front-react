import { VideoListItemType } from "./VideoListItemType";

// 動画リストapiレスポンスの動画情報本体の型
export type VideoListDataType = {
    readonly kind: string;
    readonly etag: string;
    readonly nextPageToken?: string;
    readonly regionCode?: string;
    readonly pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    readonly items: VideoListItemType[];
}