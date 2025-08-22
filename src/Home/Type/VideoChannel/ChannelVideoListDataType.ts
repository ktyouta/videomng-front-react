import { ChannelInfoType } from "./ChannelInfoType";
import { VideoListItemType } from "../VideoList/VideoListItemType";
import { YouTubeDataApiVideoListItemType } from "../VideoList/YouTubeDataApiVideoListItemType";

// チャンネル動画リストapiレスポンスの動画情報本体の型
export type ChannelVideoListDataType = {
    readonly kind: string;
    readonly etag: string;
    readonly nextPageToken?: string;
    readonly regionCode?: string;
    readonly pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    readonly channelInfo: ChannelInfoType,
    readonly items: VideoListItemType[];
}