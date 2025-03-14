import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoDetailResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoDetailDataType,
}