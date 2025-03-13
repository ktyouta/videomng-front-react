import { FavoriteVideoTransactionType } from "./FavoriteVideoTransactionType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

// お気に入り動画情報と外部APIの動画情報をマージした型
export type FavoriteVideoListMergedType =
    FavoriteVideoTransactionType & YouTubeDataApiVideoDetailItemType;