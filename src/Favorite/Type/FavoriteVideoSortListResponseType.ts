import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";
import { FavoriteVideoSortType } from "./FavoriteVideoSortType";
import { FavoriteVideoTagType } from "./FavoriteVideoTagType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoSortListResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoSortType[],
}