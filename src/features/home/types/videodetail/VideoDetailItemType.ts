import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

// 動画詳細情報の型
export type VideoDetailItemType = YouTubeDataApiVideoDetailItemType & {
    favoriteFlg: string,
}