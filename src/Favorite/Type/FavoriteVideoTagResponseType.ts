import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "./FavoriteVideoTagType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoTagResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoTagType[],
}