import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";
import { ViewStatusType } from "./ViewStatusType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type ViewStatusResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: ViewStatusType[],
}