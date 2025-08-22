import { ChannelVideoListDataType } from "./ChannelVideoListDataType";
import { VideoListDataType } from "../VideoList/VideoListDataType";
import { YouTubeDataApiVideoListItemType } from "../VideoList/YouTubeDataApiVideoListItemType";

// 動画リストapiのレスポンス
export type ChannelVideoListResponseType = {
    status: number;
    message: string,
    data: ChannelVideoListDataType;
}