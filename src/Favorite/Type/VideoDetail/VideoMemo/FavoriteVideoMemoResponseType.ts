import { FavoriteVideoDetailDataType } from "../FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";
import { YouTubeDataApiVideoDetailItemType } from "../YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoMemoResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoMemoType[],
}