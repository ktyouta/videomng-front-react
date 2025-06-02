import { VideoListDataType } from "./VideoListDataType";
import { YouTubeDataApiVideoListItemType } from "./YouTubeDataApiVideoListItemType";

// 動画リストapiのレスポンス
export type ChannelVideoListResponseType = {
    status: number;
    message: string,
    data: VideoListDataType;
}