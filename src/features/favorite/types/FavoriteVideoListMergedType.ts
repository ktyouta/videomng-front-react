import { YouTubeDataApiVideoDetailItemType } from "../../../types/youtube/YouTubeDataApiVideoDetailItemType";
import { FavoriteVideoTransactionType } from "./videolist/FavoriteVideoTransactionType";

// お気に入り動画情報と外部APIの動画情報をマージした型
export type FavoriteVideoListMergedType =
    FavoriteVideoTransactionType & YouTubeDataApiVideoDetailItemType;