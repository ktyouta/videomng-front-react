import { FavoriteVideoDetailDataType } from "../VideoDetail/FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteVideoSortType } from "./FavoriteVideoSortType";
import { FavoriteVideoTagType } from "../VideoDetail/VideoTag/FavoriteVideoTagType";
import { YouTubeDataApiVideoDetailItemType } from "../VideoDetail/YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoSortListResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoSortType[],
}