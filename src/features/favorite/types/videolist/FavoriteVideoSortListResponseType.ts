import { FavoriteVideoDetailDataType } from "../videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../videodetail/videomemo/FavoriteVideoMemoType";
import { FavoriteVideoSortType } from "./FavoriteVideoSortType";
import { FavoriteVideoTagType } from "../videodetail/videotag/FavoriteVideoTagType";
import { YouTubeDataApiVideoDetailItemType } from "../videodetail/YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoSortListResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoSortType[],
}