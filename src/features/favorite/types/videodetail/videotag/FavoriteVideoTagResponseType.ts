import { FavoriteVideoDetailDataType } from "../FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../videomemo/FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "./FavoriteVideoTagType";
import { YouTubeDataApiVideoDetailItemType } from "../YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoTagResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoTagType[],
}