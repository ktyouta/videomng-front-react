import { YouTubeDataApiVideoListItemType } from "../youtube/YouTubeDataApiVideoListItemType";

export type VideoListItemType = YouTubeDataApiVideoListItemType & {
    favoriteFlg: string,
}