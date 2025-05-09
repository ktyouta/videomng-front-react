import { VideoListItemType } from "./VideoListItemType";
import { YouTubeDataApiVideoListItemType } from "./YouTubeDataApiVideoListItemType";

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