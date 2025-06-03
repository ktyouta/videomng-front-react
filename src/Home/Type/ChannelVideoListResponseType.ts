import { ChannelVideoListDataType } from "./ChannelVideoListDataType";
import { VideoListDataType } from "./VideoListDataType";
import { YouTubeDataApiVideoListItemType } from "./YouTubeDataApiVideoListItemType";

// 動画リストapiのレスポンス
export type ChannelVideoListResponseType = {
    status: number;
    message: string,
    data: ChannelVideoListDataType;
}