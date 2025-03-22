import { VideoListDataType } from "./VideoListDataType";
import { YouTubeDataApiVideoListItemType } from "./YouTubeDataApiVideoListItemType";

// 動画リストapiのレスポンス
export type VideoListResponseType = {
    status: number;
    message: string,
    data: VideoListDataType;
}