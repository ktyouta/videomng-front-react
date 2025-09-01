import { VideoDetailItemType } from "./VideoDetailItemType";

//YouTube Data Api(動画詳細)のレスポンス
export type VideoDetailResponseType = {
    status: number,
    message: string,
    data: {
        readonly kind: string;
        readonly etag: string;
        readonly items: VideoDetailItemType;
    }
}