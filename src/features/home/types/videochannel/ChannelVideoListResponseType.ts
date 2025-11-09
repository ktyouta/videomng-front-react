import { ChannelVideoListDataType } from "./ChannelVideoListDataType";

// 動画リストapiのレスポンス
export type ChannelVideoListResponseType = {
    status: number;
    message: string,
    data: ChannelVideoListDataType;
}