import { YouTubeDataApiVideoDetailItemType } from "../youtube/YouTubeDataApiVideoDetailItemType";

// 動画詳細情報の型
export type VideoDetailItemType = YouTubeDataApiVideoDetailItemType & {
    favoriteFlg: string,
}