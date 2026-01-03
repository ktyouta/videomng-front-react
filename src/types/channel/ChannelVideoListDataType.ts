import { VideoListItemType } from "../videolist/VideoListItemType";
import { ChannelInfoType } from "./ChannelInfoType";

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